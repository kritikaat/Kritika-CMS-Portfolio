'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-gray-900">Portfolio</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Projects', 'Certifications', 'Blogs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {['About', 'Experience', 'Projects', 'Certifications', 'Blogs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}