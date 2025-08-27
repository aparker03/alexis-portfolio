// src/App.js

import { Routes, Route } from 'react-router-dom';
import { useFontSize, FontSizeProvider } from './context/FontSizeContext';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Certifications from './pages/Certifications';

// Wrapper component to apply font size globally
function AppLayout() {
  const { fontSize } = useFontSize(); // dynamic font size

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
