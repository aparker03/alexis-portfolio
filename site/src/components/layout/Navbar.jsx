// src/components/Navbar.jsx
import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FontSizeToggle from "../ui/FontSizeToggle";

const projectPaths = new Set([
  "/projects",
  "/projects/eeg-nhis",
  "/projects/brfss-depression-index",
  "/projects/strava-wearables",
  "/projects/surgical-scope",
  "/projects/nhanes-depression-risk",
]);

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const currentDestination =
    location.pathname === "/" && location.hash === "#contact"
      ? "contact"
      : location.pathname === "/"
        ? "home"
        : location.pathname === "/resume"
          ? "resume"
          : projectPaths.has(location.pathname)
            ? "projects"
            : null;

  const navLinkClassName = (destination, mobile = false) =>
    [
      mobile ? "block px-2 py-2 rounded hover:bg-gray-50" : "rounded",
      "hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700",
      currentDestination === destination
        ? "text-blue-700 underline decoration-2 underline-offset-4"
        : "",
    ]
      .filter(Boolean)
      .join(" ");

  const currentValue = (destination) =>
    currentDestination === destination
      ? destination === "contact"
        ? "location"
        : "page"
      : undefined;

  const closeMobileMenu = () => {
    if (document.activeElement?.closest?.("#mobile-menu")) {
      menuButtonRef.current?.focus();
    }
    setOpen(false);
  };

  // Smooth scroll to top for tab clicks
  const scrollTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  // Smart Contact click: on Home -> smooth scroll; elsewhere -> navigate to /#contact
  const handleContactClick = (e) => {
    const isOnHome = location.pathname === "/";
    if (isOnHome) {
      e.preventDefault();
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        const heading = el.querySelector("h2, h3, h1");
        (heading || el).setAttribute("tabindex", "-1");
        (heading || el).focus({ preventScroll: true });
      } else {
        // Fallback: update hash so Home hook can catch it if section renders later
        window.location.hash = "#contact";
      }
      closeMobileMenu();
    } else {
      // Navigate to Home with hash; Home's hook handles the smooth scroll
      e.preventDefault();
      closeMobileMenu();
      navigate("/#contact");
    }
  };

  return (
    <header className="w-full border-b border-gray-200 shadow-sm sticky top-0 bg-white/90 backdrop-blur-md z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between gap-3">
          {/* Brand / Name */}
          <Link
            to="/"
            className="min-w-0 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            onClick={scrollTop}
          >
            <span
              className="block font-bold tracking-tight text-gray-900 text-lg sm:text-xl md:text-2xl whitespace-normal break-words leading-tight max-w-[45vw] sm:max-w-[55vw] md:max-w-none"
              title="Alexis Parker"
            >
              Alexis Parker
            </span>
          </Link>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            {/* Always-visible mobile toggle */}
            <div className="md:hidden shrink-0">
              <FontSizeToggle />
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex gap-6 font-medium text-gray-800">
                <li>
                  <Link
                    to="/"
                    onClick={scrollTop}
                    className={navLinkClassName("home")}
                    aria-current={currentValue("home")}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    onClick={scrollTop}
                    className={navLinkClassName("projects")}
                    aria-current={currentValue("projects")}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resume"
                    onClick={scrollTop}
                    className={navLinkClassName("resume")}
                    aria-current={currentValue("resume")}
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#contact"
                    onClick={handleContactClick}
                    className={navLinkClassName("contact")}
                    aria-current={currentValue("contact")}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Desktop toggle */}
              <div className="hidden sm:flex">
                <FontSizeToggle />
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 shrink-0"
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label="Toggle navigation menu"
            >
              {/* hamburger / close icons */}
              <svg
                className={`h-5 w-5 ${open ? "hidden" : "block"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg
                className={`h-5 w-5 ${open ? "block" : "hidden"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          aria-hidden={!open}
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}
        >
          <div className="py-2 border-t border-gray-200">
            <ul className="flex flex-col gap-1 font-medium text-gray-900">
              <li>
                <Link
                  to="/"
                  onClick={() => { scrollTop(); closeMobileMenu(); }}
                  className={navLinkClassName("home", true)}
                  aria-current={currentValue("home")}
                  tabIndex={open ? 0 : -1}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => { scrollTop(); closeMobileMenu(); }}
                  className={navLinkClassName("projects", true)}
                  aria-current={currentValue("projects")}
                  tabIndex={open ? 0 : -1}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  onClick={() => { scrollTop(); closeMobileMenu(); }}
                  className={navLinkClassName("resume", true)}
                  aria-current={currentValue("resume")}
                  tabIndex={open ? 0 : -1}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  onClick={handleContactClick}
                  className={navLinkClassName("contact", true)}
                  aria-current={currentValue("contact")}
                  tabIndex={open ? 0 : -1}
                >
                  Contact
                </Link>
              </li>
              {/* Keep the toggle inside the drawer as well (optional) */}
              <li className="px-2 pt-1">
                <FontSizeToggle selectTabIndex={open ? 0 : -1} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
