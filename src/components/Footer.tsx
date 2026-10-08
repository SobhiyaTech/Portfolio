import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-top-row">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-badge">{personalInfo.initials}</span>
              <span className="footer-name">{personalInfo.name}</span>
            </a>
            <p className="footer-tagline">
              Computer Science & Engineering Graduate | Developer | Data Analyst
            </p>
          </div>

          <div className="footer-social-links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="social-icon-link"
            >
              <GithubIcon size={20} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="social-icon-link"
            >
              <LinkedinIcon size={20} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="social-icon-link"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-row">
          <p className="copyright-text">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
