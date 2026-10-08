import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Check, Terminal, Play, Sparkles, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../data/projects';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation'>('overview');
  const [simInput, setSimInput] = useState('');
  const [simResult, setSimResult] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  if (!project) return null;

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimResult(null);

    setTimeout(() => {
      setIsSimulating(false);
      if (project.id === 'acad-assist-rag') {
        const queryText = simInput || 'Explain Fourier Transform applications in DSP';
        setSimResult(`[FAISS Similarity 0.982 - Query: "${queryText}"] Context fetched from EE304_DigitalSignalProcessing.pdf (Chunk #42)\n\nResponse: Fourier Transform decomposes a time-domain signal into its frequency components. In DSP, it enables spectral analysis, filtering noise via FIR/IIR filters, and OFDM modulation in 5G networks.`);
      } else if (project.id === 'skin-disease-classification') {
        setSimResult(`[EfficientNet-B4 Inference Output]\n- Melanocytic Nevus: 94.8% confidence (BENIGN)\n- Actinic Keratosis: 3.2%\n- Basal Cell Carcinoma: 2.0%\n\nGrad-CAM Heatmap: High focal intensity detected in central 224x224 ROI region. Recommendation: Routine monitoring.`);
      } else if (project.id === 'medical-insurance-cost-prediction') {
        setSimResult(`[Linear Regression Prediction Engine]\nInputs: Age: 24 | BMI: 22.4 | Smoker: No | Children: 0 | Region: Southwest\n\nEstimated Annual Premium: $3,420.50 (95% CI: $3,180 - $3,650)\nSmoker status weight coefficient contribution: -$0.00.`);
      } else if (project.id === 'weather-forecasting-application') {
        const city = simInput || 'Coimbatore';
        setSimResult(`[OpenWeather API Stream - ${city}]\n- Temp: 28.5°C (Feels like 30.2°C)\n- Humidity: 64%\n- Wind: 12 km/h ENE\n- Forecast: Scattered clouds with light evening breeze.`);
      } else {
        setSimResult(`[E-Commerce Shopping Engine]\n- Simulated Cart total: $499.00 (3 items)\n- LocalStorage state synchronized\n- Checkout gateway validation: SUCCESS (Test mode).`);
      }
    }, 900);
  };

  return (
    <AnimatePresence>
      <div className="project-modal-backdrop" onClick={onClose}>
        <motion.div
          className="project-modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header Banner */}
          <div className="project-modal-hero">
            <img src={project.image.startsWith('/') ? `${import.meta.env.BASE_URL}${project.image.slice(1)}` : project.image} alt={project.title} className="modal-hero-img" />
            <div className="hero-overlay" />
            <button className="modal-close-btn" onClick={onClose} aria-label="Close project modal">
              <X size={20} />
            </button>
            <div className="hero-badge-container">
              <span className="modal-project-number">{project.number}</span>
              <span className="modal-category-tag">{project.category}</span>
            </div>
          </div>

          {/* Modal Header & Navigation */}
          <div className="project-modal-body">
            <div className="modal-title-row">
              <div>
                <h2>{project.title}</h2>
                <p className="modal-subtitle">{project.subtitle}</p>
              </div>
              <div className="modal-cta-buttons">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary btn-sm"
                >
                  <GithubIcon size={16} /> GitHub
                </a>
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-sm"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>

            {/* Sub-tabs */}
            <div className="modal-tabs">
              <button
                className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <Layers size={16} /> System Overview
              </button>
              <button
                className={`tab-btn ${activeTab === 'simulation' ? 'active' : ''}`}
                onClick={() => setActiveTab('simulation')}
              >
                <Terminal size={16} /> Live Sandbox Simulation
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tab-content">
                <div className="overview-grid">
                  <div className="main-narrative">
                    <h4>Architectural Description</h4>
                    <p>{project.fullDescription}</p>

                    <h4>Key Engineering Highlights</h4>
                    <ul className="highlights-list">
                      {project.highlights.map((h, i) => (
                        <li key={i}>
                          <Check size={16} className="highlight-icon" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sidebar-details">
                    {project.metrics && (
                      <div className="metrics-box">
                        <h5><Cpu size={16} /> System Metrics</h5>
                        <div className="metrics-grid">
                          {project.metrics.map((m, idx) => (
                            <div key={idx} className="metric-card">
                              <span className="metric-value">{m.value}</span>
                              <span className="metric-label">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="tech-stack-box">
                      <h5>Technologies & Tools</h5>
                      <div className="tech-tags">
                        {project.technologies.map((t, idx) => (
                          <span key={idx} className="tech-badge">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Interactive Simulator */}
            {activeTab === 'simulation' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tab-content">
                <div className="simulator-container">
                  <div className="sim-header">
                    <Terminal size={18} className="terminal-icon" />
                    <span>Interactive Execution Environment — {project.title}</span>
                  </div>
                  <div className="sim-input-row">
                    <input
                      type="text"
                      className="sim-input"
                      placeholder={
                        project.id === 'acad-assist-rag'
                          ? 'Enter academic question (e.g. Fourier Transform in DSP)...'
                          : project.id === 'weather-forecasting-application'
                          ? 'Enter city name (e.g. Coimbatore, Chennai, London)...'
                          : 'Press Run Model to simulate dataset inference...'
                      }
                      value={simInput}
                      onChange={(e) => setSimInput(e.target.value)}
                    />
                    <button
                      className="btn-primary btn-sm"
                      onClick={handleRunSimulation}
                      disabled={isSimulating}
                    >
                      {isSimulating ? <Sparkles size={16} className="spin" /> : <Play size={16} />}
                      {isSimulating ? 'Processing...' : 'Run Demo'}
                    </button>
                  </div>

                  <div className="sim-output-box">
                    <pre className="sim-output">
                      {isSimulating
                        ? 'Executing model pipeline... [0%... 45%... 100%]'
                        : simResult || 'Click "Run Demo" to view live model execution logs and telemetry.'}
                    </pre>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
