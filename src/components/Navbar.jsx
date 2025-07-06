import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-500 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Alpha Tutoring</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-yellow-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-purple-700 px-4 py-4 space-y-4 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-yellow-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
