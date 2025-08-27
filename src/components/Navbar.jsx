import { Link } from 'react-router-dom';
import FontSizeToggle from './FontSizeToggle'; // 👈 Make sure this exists at src/components/FontSizeToggle.jsx

function Navbar() {
  return (
    <header className="w-full px-6 py-4 border-b border-gray-200 shadow-sm sticky top-0 bg-white z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold tracking-tight">Alexis Parker</Link>

        <div className="flex items-center gap-6">
          <ul className="flex gap-6 font-medium">
            <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link to="/projects" className="hover:text-blue-600 transition">Projects</Link></li>
            <li><Link to="/resume" className="hover:text-blue-600 transition">Resume</Link></li>
            <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>

          {/* Font Size Toggle */}
          <div className="hidden sm:flex">
            <FontSizeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
