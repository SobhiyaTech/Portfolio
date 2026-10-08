import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { GithubIcon } from './SocialIcons';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import './Projects.css';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI & RAG', 'Deep Learning', 'Machine Learning', 'Web Development'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-label">04 / PROJECTS</span>
          <h2 className="section-title">Featured <span>Work & Innovation</span></h2>
          <p className="section-subtitle">
            A showcase of software systems, deep learning models, RAG pipelines, and web applications built for real-world impact.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`project-filter-chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Showcase */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project: Project, idx: number) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card project-card ${project.featured ? 'featured-card' : ''}`}
              >
                {/* Project Image Banner */}
                <div className="project-image-wrapper">
                  <img
                    src={project.image.startsWith('/') ? `${import.meta.env.BASE_URL}${project.image.slice(1)}` : project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="image-overlay" />
                  <span className="project-number-tag">{project.number}</span>
                  {project.id === 'acad-assist-rag' && (
                    <div className="best-paper-ribbon">
                      <Sparkles size={13} />
                      <span>Best Paper Award</span>
                    </div>
                  )}

                  <div className="image-hover-actions">
                    <button
                      className="btn-primary btn-sm view-details-btn"
                      onClick={() => onSelectProject(project)}
                    >
                      <Eye size={16} /> View Details
                    </button>
                  </div>
                </div>

                {/* Project Info Body */}
                <div className="project-content-body">
                  <div className="project-meta-top">
                    <span className="project-category-badge">{project.category}</span>
                  </div>

                  <h3 className="project-title-text">{project.title}</h3>
                  <p className="project-description-text">{project.description}</p>

                  {/* Tech Tags */}
                  <div className="project-tech-bar">
                    {project.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="tech-tag more">+{project.technologies.length - 5}</span>
                    )}
                  </div>

                  {/* Project Buttons Row */}
                  <div className="project-actions-row">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link"
                    >
                      <GithubIcon size={15} />
                      <span>GitHub</span>
                      <ArrowRight size={14} className="link-arrow" />
                    </a>

                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link demo-link"
                    >
                      <span>Live Demo</span>
                      <ArrowRight size={14} className="link-arrow" />
                    </a>

                    <button
                      className="btn-outline btn-sm quick-view-btn"
                      onClick={() => onSelectProject(project)}
                    >
                      <span>Explore</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
