import React from 'react';

export const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Risk Analyzer Rounded Badge */}
      <div className="badge-pill">
        <svg
          className="badge-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span>PRIVACY RISK ANALYZER · LOCAL &amp; PRIVATE</span>
      </div>

      {/* Main Heading with Line Breaks and Gradient on 'digital shadow' */}
      <h1 className="hero-heading">
        How much of your<br className="desktop-break" />{' '}
        <span className="gradient-text">digital shadow</span> is visible?
      </h1>

      {/* Description */}
      <p className="hero-description">
        Discover what personal information you're unintentionally exposing online. Enter the data you publicly share and receive a detailed, explainable privacy risk report — processed entirely on this server, nothing sent to third parties.
      </p>
    </div>
  );
};

