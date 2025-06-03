// components/Layouts/Footer.tsx
'use client';

import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { AboutInfo } from '../../types/project';

interface FooterProps {
  aboutInfo: AboutInfo;
}

export default function Footer({ aboutInfo }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white relative border-t border-gray-200 dark:border-gray-700">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand/Info Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">
              {aboutInfo?.name || 'Portfolio'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Passionate developer creating innovative solutions and bringing ideas to life through code.
            </p>
            {aboutInfo && (
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href={aboutInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={aboutInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${aboutInfo.email}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              {aboutInfo?.email && (
                <div>
                  <a
                    href={`mailto:${aboutInfo.email}`}
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {aboutInfo.email}
                  </a>
                </div>
              )}
              <div className="text-sm">
                <p>Let's connect and create something amazing together!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              <span>© {currentYear} {aboutInfo?.name || 'Portfolio'}. Made with</span>
              <Heart size={16} className="mx-1 text-red-500" />
              <span>and lots of ☕</span>
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              <span>Built with Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 dark:via-gray-300 to-transparent"></div>
      </div>
    </footer>
  );
}