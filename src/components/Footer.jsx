import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
          Vishwas 
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/vishwas8671"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishwasrajput/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://leetcode.com/u/vishwas8671/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="LeetCode Profile"
          >
            <SiLeetcode className="h-5 w-5" />
          </a>
          <a
            href="mailto:vishwas7906@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="Email Contact"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 font-mono pt-4 border-t border-slate-900 w-full text-center">
          &copy; {currentYear} Vishwas . All rights reserved. 
          <span className="hidden sm:inline"> | Built with React, Tailwind CSS, & Framer Motion</span>
        </div>

      </div>
    </footer>
  );
}
