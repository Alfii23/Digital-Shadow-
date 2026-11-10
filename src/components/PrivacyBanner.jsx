import React from 'react';

export const PrivacyBanner = () => {
  return (
    <footer className="banner-wrapper">
      <div className="privacy-banner">
        {/* Lock SVG Icon */}
        <svg
          className="privacy-lock-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>

        {/* Informational Text with Bold Highlights */}
        <div className="privacy-banner-text">
          <strong>Your privacy matters.</strong> All analysis runs <strong>locally on this server</strong>. None of your submitted information is transmitted to third-party services. URLs are analyzed structurally — <strong>no outbound requests are made</strong> to any URL you submit. Only a minimal, anonymized report summary is stored if you enable history.
        </div>
      </div>
    </footer>
  );
};

