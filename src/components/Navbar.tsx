import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const rect = sectionEl.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.substring(1);

    // Defer scroll invocation slightly so the mobile menu drawer state closure
    // and layout settle before computing target element top position.
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition > 0 ? offsetPosition : 0,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="logo-badge">{personalInfo.initials}</span>
          <span className="logo-text">{personalInfo.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="nav-indicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Right CTA */}
        <div className="navbar-actions desktop-actions">
          <a
            href="#contact"
            className="btn-primary navbar-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mobile-menu-inner">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mobile-drawer-cta">
                <a
                  href="#contact"
                  className="btn-primary w-full"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}resume/Sobhiya_Resume.pdf`}
                  download="Sobhiya_Resume.pdf"
                  className="btn-secondary w-full"
                  style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

