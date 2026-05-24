import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background
      setIsScrolled(window.scrollY > 20);

      // Scroll progress
      const totalScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (totalScroll > 0) {
        setScrollProgress(
          (window.scrollY / totalScroll) * 100
        );
      }

      // Active section tracking
      let currentSection = 'home';

      navItems.forEach((item) => {
        const section = document.getElementById(
          item.href.substring(1)
        );

        if (section) {
          const rect =
            section.getBoundingClientRect();

          if (
            rect.top <= 120 &&
            rect.bottom >= 120
          ) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  // =========================
  // FIXED SCROLL FUNCTION
  // =========================
  const handleClick = (href) => {
    setIsOpen(false);

    const targetElement =
      document.getElementById(
        href.substring(1)
      );

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Scroll Progress */}
      <div
        className="h-[3px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 transition-all duration-75"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => handleClick('#home')}
            className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 hover:scale-105 transition-transform duration-200"
          >
            Vishwas - Portfolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() =>
                  handleClick(item.href)
                }
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection ===
                  item.href.substring(1)
                    ? 'text-cyan-400 bg-cyan-950/30'
                    : 'text-gray-400 hover:text-cyan-400 hover:bg-slate-900/50'
                }`}
              >
                {item.name}
              </button>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">

            <button
              onClick={() =>
                setIsOpen(!isOpen)
              }
              className="p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors duration-200"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-950/95 border-b border-slate-900">

          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() =>
                handleClick(item.href)
              }
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                activeSection ===
                item.href.substring(1)
                  ? 'text-cyan-400 bg-cyan-950/30'
                  : 'text-gray-400 hover:text-cyan-400 hover:bg-slate-900'
              }`}
            >
              {item.name}
            </button>
          ))}

        </div>
      </div>
    </nav>
  );
}