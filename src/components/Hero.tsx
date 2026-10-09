import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Circular Profile Photo */}
        <motion.div
          className="hero-visual-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-photo-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}images/sobhiya-profile.jpg`}
              alt="Sobhiya M - Computer Science and Engineering Graduate"
              className="hero-photo"
            />
          </div>
        </motion.div>

        {/* Right Hero Text & Actions */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Small role label */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="badge-pulse" />
            <span className="badge-text">
              COMPUTER SCIENCE GRADUATE • DEVELOPER • DATA ANALYST
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Hi, I'm <span className="highlight-name">Sobhiya</span>.
            <span className="heading-sub">I build intelligent digital experiences.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Computer Science and Engineering graduate passionate about building modern web applications, data-driven solutions, machine learning systems, and AI-powered applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a href="#projects" className="btn-primary hero-btn">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}resume/Sobhiya_Resume.pdf`}
              download="Sobhiya_Resume.pdf"
              className="btn-secondary hero-btn"
            >
              <FileText size={18} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


