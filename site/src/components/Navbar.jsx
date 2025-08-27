// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FontSizeToggle from "./FontSizeToggle";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      setOpen(false);
    } else {
      // Navigate to Home with hash; Home's hook handles the smooth scroll
      e.preventDefault();
      navigate("/#contact");
      setOpen(false);
    }
  };

  return (
    <header className="w-full border-b border-gray-200 shadow-sm sticky top-0 bg-white/90 backdrop-blur-md z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between gap-3">
          {/* Brand / Name */}
          <Link to="/" className="min-w-0" onClick={scrollTop}>
            <span
              className="block font-bold tracking-tight text-gray-900 text-lg sm:text-xl md:text-2xl truncate max-w-[45vw] sm:max-w-[55vw] md:max-w-none"
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
                    className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400/40 rounded"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    onClick={scrollTop}
                    className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400/40 rounded"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resume"
                    onClick={scrollTop}
                    className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400/40 rounded"
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#contact"
                    onClick={handleContactClick}
                    className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400/40 rounded"
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
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400/40 shrink-0"
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
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}
        >
          <div className="py-2 border-t border-gray-200">
            <ul className="flex flex-col gap-1 font-medium text-gray-900">
              <li>
                <Link
                  to="/"
                  onClick={() => { scrollTop(); setOpen(false); }}
                  className="block px-2 py-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => { scrollTop(); setOpen(false); }}
                  className="block px-2 py-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  onClick={() => { scrollTop(); setOpen(false); }}
                  className="block px-2 py-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  onClick={handleContactClick}
                  className="block px-2 py-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
                >
                  Contact
                </Link>
              </li>
              {/* Keep the toggle inside the drawer as well (optional) */}
              <li className="px-2 pt-1">
                <FontSizeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
