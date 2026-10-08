import React from 'react';
import { motion } from 'framer-motion';
import { servicesList } from '../data/services';
import type { ServiceItem } from '../data/services';
import { Code, PieChart, Cpu, Sparkles, CheckCircle } from 'lucide-react';
import './Services.css';

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code size={26} />,
    PieChart: <PieChart size={26} />,
    Cpu: <Cpu size={26} />,
    Sparkles: <Sparkles size={26} />
  };

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-label">SOLUTIONS & CAPABILITIES</span>
          <h2 className="section-title">What I <span>Can Do</span></h2>
          <p className="section-subtitle">
            Building modern web applications, data-driven solutions, machine learning models, and AI-powered systems.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="services-grid">
          {servicesList.map((service: ServiceItem, idx: number) => (
            <motion.div
              key={service.id}
              className="glass-card service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <div className="service-top-row">
                <div className="service-icon-box">
                  {iconMap[service.iconName] || <Code size={26} />}
                </div>
                <span className="service-number">{service.number}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-skills-block">
                <span className="skills-block-title">Key Competencies:</span>
                <div className="service-chips-grid">
                  {service.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="service-chip">
                      <CheckCircle size={12} className="chip-ic" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
