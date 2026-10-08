import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { bestPaperAward, certificationsList } from '../data/certifications';
import type { Certification } from '../data/certifications';
import { Trophy, Sparkles, FileCheck } from 'lucide-react';
import './Certifications.css';

export const Certifications: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#34B9DB', '#28B9A2', '#FFBD2E', '#FFFFFF']
    });
  };

  return (
    <section id="certifications" className="section-padding certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-label">HONORS & CREDENTIALS</span>
          <h2 className="section-title">Certifications & <span>Achievements</span></h2>
          <p className="section-subtitle">
            Recognitions, academic conference awards, and verified technical credentials.
          </p>
        </div>

        {/* Featured Best Paper Award Banner */}
        <motion.div
          className="award-hero-card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={triggerConfetti}
          title="Click for celebratory fireworks!"
        >
          <div className="award-hero-glow" />
          <div className="award-content-grid">
            <div className="award-left-icon">
              <div className="trophy-circle">
                <Trophy size={36} />
              </div>
              <span className="award-year-tag">{bestPaperAward.year}</span>
            </div>

            <div className="award-main-info">
              <div className="award-header-badge">
                <Sparkles size={14} />
                <span>{bestPaperAward.badge}</span>
              </div>
              <h3 className="award-title">{bestPaperAward.title}</h3>
              <p className="award-conference">{bestPaperAward.conference}</p>
              
              <div className="award-paper-box">
                <span className="paper-label">Published Research Paper:</span>
                <p className="paper-title">"{bestPaperAward.paperTitle}"</p>
              </div>

              <p className="award-description">{bestPaperAward.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Other Certifications Grid */}
        <div className="certifications-grid">
          {certificationsList.map((cert: Certification, idx: number) => (
            <motion.div
              key={cert.id}
              className="glass-card cert-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="cert-header">
                <div className="cert-icon-wrapper">
                  <FileCheck size={20} />
                </div>
                <span className="cert-category-tag">{cert.category}</span>
              </div>

              <h4 className="cert-title">{cert.title}</h4>

              <div className="cert-footer">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
