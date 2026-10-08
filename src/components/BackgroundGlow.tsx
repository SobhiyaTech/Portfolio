import React from 'react';
import './BackgroundGlow.css';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="bg-glow-container" aria-hidden="true">
      <div className="bg-grid-pattern" />
      <div className="glow-blob glow-blob-1" />
      <div className="glow-blob glow-blob-2" />
      <div className="glow-blob glow-blob-3" />
      <div className="bg-noise" />
    </div>
  );
};
