import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, ChevronDown, FileText } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import './Hero.css';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Text Column */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Small label */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="badge-pulse" />
            <span className="badge-text">{personalInfo.role}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Hi, I'm <span className="highlight-name">{personalInfo.name}</span>.
            <span className="heading-sub">I build intelligent digital experiences.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a href="#projects" className="btn-primary hero-btn">
              <span>View My Work</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn-secondary hero-btn">
              <span>Let's Connect</span>
            </a>

            <a
              href="/resume/Sobhiya_Resume.pdf"
              download="Sobhiya_Resume.pdf"
              className="resume-text-link"
            >
              <FileText size={16} />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Hero Quick Metrics */}
          <motion.div
            className="hero-pills-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="hero-pill">
              <Sparkles size={14} className="pill-icon" />
              <span>Best Paper Award Winner (ICSIDE'26)</span>
            </div>
            <div className="hero-pill">
              <Terminal size={14} className="pill-icon" />
              <span>Python • React • SQL • Machine Learning</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Personal Photo Column */}
        <motion.div
          className="hero-visual-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-photo-wrapper">
            <img
              src="/images/sobhiya-profile.jpg"
              alt="Sobhiya M - Computer Science and Engineering Graduate"
              className="hero-photo"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
        aria-label="Scroll down to About section"
      >
        <span>Scroll Down</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
};
