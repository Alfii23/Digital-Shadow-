import React from 'react';

export const Navbar = ({ onSignOut, onSignIn }) => {
  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Brand Logo & Name */}
        <a href="#" className="brand-logo-group">
          <div className="logo-square">
            {/* White shield icon */}
            <svg
              className="logo-shield-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span className="brand-title">Digital Shadow</span>
        </a>

        {/* Navigation Items */}
        <nav className="nav-links">
          <a href="#analyzer" className="nav-item active">
            Analyzer
          </a>
          <a href="#about" className="nav-item inactive">
            About
          </a>
          {onSignOut ? (
            <button
              type="button"
              onClick={onSignOut}
              className="nav-item inactive"
              style={{ background: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Sign Out
            </button>
          ) : onSignIn ? (
            <button
              type="button"
              onClick={onSignIn}
              className="nav-item inactive"
              style={{ background: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Sign In
            </button>
          ) : (
            <a href="index.html" className="nav-item inactive">
              Sign Out
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};
