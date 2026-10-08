import React from 'react';
import { motion } from 'framer-motion';
import { Counter } from './Counter';
import { personalInfo } from '../data/personalInfo';
import { Award, FolderGit2, Briefcase, Brain, CheckCircle2 } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  const highlightedSkills = [
    'Computer Science & Engineering',
    'Python',
    'SQL',
    'React',
    'JavaScript',
    'Data Analysis',
    'Machine Learning',
    'AI'
  ];

  const statsList = [
    {
      value: personalInfo.stats.projectsCount,
      suffix: personalInfo.stats.projectsSuffix,
      label: personalInfo.stats.projectsLabel,
      icon: FolderGit2,
      glowColor: 'cyan'
    },
    {
      value: personalInfo.stats.internshipsCount,
      suffix: personalInfo.stats.internshipsSuffix,
      label: personalInfo.stats.internshipsLabel,
      icon: Briefcase,
      glowColor: 'teal'
    },
    {
      value: personalInfo.stats.aiMlCount,
      suffix: personalInfo.stats.aiMlSuffix,
      label: personalInfo.stats.aiMlLabel,
      icon: Brain,
      glowColor: 'blue'
    },
    {
      value: personalInfo.stats.awardsCount,
      suffix: personalInfo.stats.awardsSuffix,
      label: personalInfo.stats.awardsLabel,
      icon: Award,
      glowColor: 'gold'
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-label">01 / ABOUT</span>
          <h2 className="section-title">Driven by Curiosity, <span>Engineered for Impact</span></h2>
        </div>

        <div className="about-grid">
          {/* Left Column: Bio & Core Disciplines */}
          <motion.div
            className="about-bio-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card about-intro-card">
              <h3>Professional Profile</h3>
              <p className="about-paragraph">{personalInfo.aboutIntro}</p>

              <div className="key-focus-block">
                <h4>Core Focus Areas & Technologies</h4>
                <div className="focus-tags-grid">
                  {highlightedSkills.map((skill, idx) => (
                    <div key={idx} className="focus-tag-chip">
                      <CheckCircle2 size={14} className="chip-check" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Statistics Grid Cards */}
          <motion.div
            className="about-stats-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="stats-cards-grid">
              {statsList.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} className={`glass-card stat-card glow-${stat.glowColor}`}>
                    <div className="stat-card-header">
                      <div className="stat-icon-wrapper">
                        <IconComponent size={22} />
                      </div>
                      {stat.glowColor === 'gold' && (
                        <span className="award-badge-mini">ICSIDE'26</span>
                      )}
                    </div>
                    <div className="stat-number">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
