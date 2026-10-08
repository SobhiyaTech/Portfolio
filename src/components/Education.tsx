import React from 'react';
import { motion } from 'framer-motion';
import { educationList } from '../data/education';
import type { EducationItem } from '../data/education';
import { GraduationCap, BookOpen, School, Check } from 'lucide-react';
import './Education.css';

export const Education: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap size={22} />,
    BookOpen: <BookOpen size={22} />,
    School: <School size={22} />
  };

  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-label">05 / EDUCATION</span>
          <h2 className="section-title">Academic <span>Background</span></h2>
          <p className="section-subtitle">
            Computer Science and Engineering graduate with a strong foundation in software development, data science, machine learning, and AI.
          </p>
        </div>

        {/* Education Grid */}
        <div className="education-grid">
          {educationList.map((edu: EducationItem, idx: number) => (
            <motion.div
              key={edu.id}
              className={`glass-card edu-card ${idx === 0 ? 'highlight-degree' : ''}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="edu-card-header">
                <div className="edu-icon-badge">
                  {iconMap[edu.iconName] || <GraduationCap size={22} />}
                </div>
                <div className="edu-status-pill">{edu.status}</div>
              </div>

              <div className="edu-title-block">
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-field">{edu.field}</h4>
                <div className="edu-institution-row">
                  <span className="institution-name">{edu.institution}</span>
                  <span className="edu-period">{edu.period}</span>
                </div>
              </div>

              <ul className="edu-highlights">
                {edu.highlights.map((h, hIdx) => (
                  <li key={hIdx}>
                    <Check size={14} className="check-icon" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
