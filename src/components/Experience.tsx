import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import type { ExperienceItem } from '../data/experience';
import { Calendar, ChevronRight, Cpu } from 'lucide-react';
import './Experience.css';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-label">03 / EXPERIENCE</span>
          <h2 className="section-title">Professional <span>Timeline</span></h2>
          <p className="section-subtitle">
            Hands-on software development, data science, and AI & IoT engineering internship experiences.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          <div className="timeline-axis-line" />

          <div className="timeline-items-list">
            {experiences.map((exp: ExperienceItem, idx: number) => {
              return (
                <motion.div
                  key={exp.id}
                  className={`timeline-item ${exp.isCurrent ? 'current' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  {/* Timeline Node Point */}
                  <div className="timeline-node">
                    <div className="node-inner" />
                  </div>

                  {/* Card Container */}
                  <div className="glass-card timeline-card">
                    <div className="card-top-bar">
                      <span className="exp-type-badge">{exp.type}</span>
                      <div className="exp-date-chip">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>

                    {exp.projectTitle && (
                      <div className="exp-project-highlight">
                        <Cpu size={15} />
                        <span>Project: {exp.projectTitle}</span>
                      </div>
                    )}

                    <p className="exp-description">{exp.description}</p>

                    <ul className="exp-bullets">
                      {exp.bulletPoints.map((pt, pIdx) => (
                        <li key={pIdx}>
                          <ChevronRight size={15} className="bullet-arrow" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="exp-tech-chips">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="exp-chip">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
