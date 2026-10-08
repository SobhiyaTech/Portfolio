import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import type { SkillCategory } from '../data/skills';
import { Code2, Layout, BarChart3, Brain, Database, Wrench, Sparkles } from 'lucide-react';
import './Skills.css';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 size={20} />,
    Layout: <Layout size={20} />,
    BarChart3: <BarChart3 size={20} />,
    Brain: <Brain size={20} />,
    Database: <Database size={20} />,
    Wrench: <Wrench size={20} />
  };

  const categoriesFilter = [
    { key: 'all', label: 'All Disciplines' },
    ...skillCategories.map(c => ({ key: c.categoryKey, label: c.title.split(' ')[0] }))
  ];

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.categoryKey === activeCategory);

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        {/* Section Title Header */}
        <div className="section-header-block">
          <span className="section-label">02 / SKILLS</span>
          <h2 className="section-title">Technical Expertise & <span>Toolchain</span></h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, frameworks, data science libraries, and AI technologies I leverage to solve complex engineering problems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="skills-filter-row">
          {categoriesFilter.map(cat => (
            <button
              key={cat.key}
              className={`filter-chip ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          className="skills-cards-grid"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredCategories.map((cat: SkillCategory) => (
            <motion.div
              key={cat.categoryKey}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass-card skill-category-card"
            >
              <div className="category-header">
                <div className="category-icon-box">
                  {iconMap[cat.iconName] || <Sparkles size={20} />}
                </div>
                <div>
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-desc">{cat.description}</p>
                </div>
              </div>

              <div className="skills-badges-list">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className={`skill-badge ${skill.featured ? 'featured' : ''}`}>
                    <span className="skill-name">{skill.name}</span>
                    {skill.featured && <span className="featured-dot" title="Core Specialty" />}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
