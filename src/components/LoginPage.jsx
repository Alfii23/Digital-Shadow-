import React, { useState } from 'react';

export const LoginPage = ({ onBackToHome }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert(`Welcome back! Successfully authenticated to local Digital Shadow instance as: ${email}`);
      if (onBackToHome) onBackToHome();
    }, 900);
  };

  return (
    <div className="app-wrapper">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#" onClick={(e) => { e.preventDefault(); if (onBackToHome) onBackToHome(); }} className="brand-logo-group">
            <div className="logo-square">
              <svg className="logo-shield-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="brand-title">Digital Shadow</span>
          </a>

          <nav className="nav-links">
            <button
              type="button"
              onClick={onBackToHome}
              className="nav-item home-link"
              style={{ background: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to Home</span>
            </button>
          </nav>
        </div>
      </header>

      {/* AUTH CARD */}
      <main className="auth-main">
        {/* Security Badge */}
        <div className="badge-pill">
          <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span>SECURE ACCESS · LOCAL AUTHENTICATION</span>
        </div>

        <div className="auth-card">
          <div className="auth-header">
            <h1 className="auth-title">
              Sign in to <span className="gradient-text">Digital Shadow</span>
            </h1>
            <p className="auth-subtitle">
              Enter your credentials to access your local privacy risk dashboard.
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="form-group">
              <label className="form-label" htmlFor="email-input">
                Work Email or Username
              </label>
              <div className="input-wrapper">
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <input
                  id="email-input"
                  type="email"
                  className="form-input"
                  placeholder="analyst@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <div className="form-label">
                <label htmlFor="password-input">Password</label>
                <a
                  href="#forgot"
                  className="forgot-link"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Password reset link sent to your configured local administrator.');
                  }}
                >
                  Forgot password?
                </a>
              </div>
              <div className="input-wrapper">
                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input
                  id="password-input"
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="form-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span>Remember this session</span>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </>
              )}
            </button>

            {/* Divider */}
            <div className="auth-divider">or authenticate with</div>

            {/* Passkey */}
            <button
              type="button"
              className="btn-secondary-auth"
              onClick={() => alert('Initiating FIDO2 / Passkey challenge locally...')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2l-2 2m-1-1l-3 3m5 5l-8.5 8.5a2.121 2.121 0 0 1-3 0l-1-1a2.121 2.121 0 0 1 0-3L17 5"></path>
                <circle cx="7.5" cy="16.5" r="1.5"></circle>
              </svg>
              <span>Passkey / Hardware Security Key</span>
            </button>
          </form>

          <div className="auth-footer">
            <span>Need an analyzer account?</span>
            <a
              href="#request"
              onClick={(e) => {
                e.preventDefault();
                alert('Access requests are approved by your local workspace administrator.');
              }}
            >
              Request Access
            </a>
          </div>
        </div>
      </main>

      {/* PRIVACY FOOTER */}
      <footer className="banner-wrapper">
        <div className="privacy-banner">
          <svg className="privacy-lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <div className="privacy-banner-text">
            <strong>Zero-Knowledge Authentication.</strong> All authentication tokens and keys remain encrypted locally. No credentials or hashes are transmitted externally.
          </div>
        </div>
      </footer>
    </div>
  );
};

