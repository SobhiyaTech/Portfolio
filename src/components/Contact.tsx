import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personalInfo';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, Send, MapPin, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import './Contact.css';

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xdeagbyb';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const submissionTime = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short',
      }).format(new Date());

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          submission_time: submissionTime
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json().catch(() => null);
        setIsSubmitting(false);
        if (data && data.errors && data.errors.length > 0) {
          setSubmitError(
            data.errors.map((err: any) => err.message).join(', ')
          );
        } else {
          setSubmitError(
            'Failed to send message via Formspree. Please check network connection or endpoint configuration.'
          );
        }
      }
    } catch (err: any) {
      console.error('Formspree submit error:', err);
      setIsSubmitting(false);
      setSubmitError(
        'Network error: Failed to send message. Please check your connection and try again.'
      );
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-label">06 / CONTACT</span>
          <h2 className="section-title">Let's Build <span>Something Meaningful</span></h2>
          <p className="section-subtitle">
            Have an idea, project, research collaboration, or career opportunity? I'd love to hear from you.
          </p>
        </div>

        {/* Quick Social / Connect CTA Buttons Row */}
        <div className="contact-cta-row">
          <a
            href="#contact-form"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('name-input')?.focus();
            }}
          >
            <Mail size={18} />
            <span>Get In Touch</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <GithubIcon size={18} />
            <span>View GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <LinkedinIcon size={18} />
            <span>Connect on LinkedIn</span>
          </a>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid" id="contact-form">
          {/* Left Info Card */}
          <motion.div
            className="glass-card contact-info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Contact Details</h3>
            <p className="contact-info-desc">
              Feel free to send a direct message through the form or reach out via social media platforms. I typically respond within 24 hours.
            </p>

            <div className="info-items-list">
              <div className="info-item">
                <div className="info-icon"><Mail size={18} /></div>
                <div>
                  <span className="item-label">Direct Email</span>
                  <span className="item-val">{personalInfo.email}</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><MapPin size={18} /></div>
                <div>
                  <span className="item-label">Location</span>
                  <span className="item-val">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="status-indicator-box">
              <div className="online-dot" />
              <span>Open to Software Development, Data Analyst, Machine Learning, and AI opportunities.</span>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="glass-card contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  className="form-success-state"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="success-icon-wrapper">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3>Message sent successfully!</h3>
                  <p>I'll get back to you soon.</p>
                  <button
                    className="btn-outline btn-sm"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} noValidate className="contact-form">
                  {submitError && (
                    <div className="form-error-banner">
                      <AlertCircle size={18} className="flex-shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="name-input">Your Name *</label>
                      <input
                        id="name-input"
                        type="text"
                        className={`form-control ${errors.name ? 'invalid' : ''}`}
                        placeholder="e.g. Sobhiya"
                        value={formData.name}
                        disabled={isSubmitting}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                          if (submitError) setSubmitError(null);
                        }}
                      />
                      {errors.name && (
                        <span className="field-error">
                          <AlertCircle size={12} /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email-input">Your Email *</label>
                      <input
                        id="email-input"
                        type="email"
                        className={`form-control ${errors.email ? 'invalid' : ''}`}
                        placeholder="e.g. Sobhiya@example.com"
                        value={formData.email}
                        disabled={isSubmitting}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                          if (submitError) setSubmitError(null);
                        }}
                      />
                      {errors.email && (
                        <span className="field-error">
                          <AlertCircle size={12} /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject-input">Subject *</label>
                    <input
                      id="subject-input"
                      type="text"
                      className={`form-control ${errors.subject ? 'invalid' : ''}`}
                      placeholder="e.g. Software Development Opportunity / Project Inquiry"
                      value={formData.subject}
                      disabled={isSubmitting}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                        if (submitError) setSubmitError(null);
                      }}
                    />
                    {errors.subject && (
                      <span className="field-error">
                        <AlertCircle size={12} /> {errors.subject}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message-input">Message *</label>
                    <textarea
                      id="message-input"
                      rows={5}
                      className={`form-control ${errors.message ? 'invalid' : ''}`}
                      placeholder="Write your message details here..."
                      value={formData.message}
                      disabled={isSubmitting}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                        if (submitError) setSubmitError(null);
                      }}
                    />
                    {errors.message && (
                      <span className="field-error">
                        <AlertCircle size={12} /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles size={18} className="spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

