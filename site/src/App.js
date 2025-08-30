// src/App.js

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useFontSize, FontSizeProvider } from './context/FontSizeContext';

import Navbar from "./components/layout/Navbar";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Certifications from './pages/Certifications';

/** 1) Route-based titles (can’t be clobbered by child effects) */
function useRouteTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Alexis Parker · Data Scientist',
      '/projects': 'Projects - Alexis Parker',
      '/resume': 'Resume - Alexis Parker',
      '/certifications': 'Certifications - Alexis Parker',
    };
    const raf = requestAnimationFrame(() => {
      document.title = titles[pathname] || 'Alexis Parker';
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);
}

/** 2) Also disable scroll restoration at runtime (belt + suspenders) */
function useManualScrollRestoration() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = 'manual';
      return () => { window.history.scrollRestoration = prev; };
    }
  }, []);
}

/** 3) Scroll to top (or to #hash) on route change and on hard refresh */
function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollOnce = () => {
      if (hash) {
        const id = hash.startsWith('#') ? hash.slice(1) : hash;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      // Extra safety for engines that ignore window.scrollTo
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Immediately after nav
    scrollOnce();
    // Next frame (beats late effects)
    const raf = requestAnimationFrame(scrollOnce);
    // After images/layout settle
    const t = setTimeout(scrollOnce, 150);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [pathname, hash]);

  // Handle hard refresh / bfcache restores
  useEffect(() => {
    const handlePageShow = () => window.scrollTo(0, 0);
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);
}

// Wrapper component to apply font size globally
function AppLayout() {
  const { fontSize } = useFontSize();
  useRouteTitle();
  useManualScrollRestoration();
  useScrollToTop();

  return (
    <div className={`min-h-screen bg-white text-gray-900 font-sans flex flex-col text-${fontSize}`}>
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certifications" element={<Certifications />} />
          {/* Optional catch-all */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="bg-gray-100 py-8 px-6 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Alexis Parker. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="mailto:aparker0917@gmail.com" className="hover:underline">Email</a>
            <a
              href="https://github.com/aparker03"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alexis-parker-732b9a165"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <FontSizeProvider>
      <AppLayout />
    </FontSizeProvider>
  );
}
