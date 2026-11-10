import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Statistics } from './components/Statistics';
import { PrivacyBanner } from './components/PrivacyBanner';
import { FloatingActions } from './components/FloatingActions';
import { LoginPage } from './components/LoginPage';
import './index.css';

export default function App() {
  // Show sign-in page first by default
  const [currentPage, setCurrentPage] = useState('login');

  if (currentPage === 'login') {
    return (
      <LoginPage
        onLoginSuccess={() => setCurrentPage('analyzer')}
        onBackToHome={() => setCurrentPage('analyzer')}
      />
    );
  }

  return (
    <div className="app-wrapper">
      <Navbar onSignOut={() => setCurrentPage('login')} />

      <main className="main-content">
        <HeroSection />
        <Statistics />
      </main>

      <PrivacyBanner />
      <FloatingActions />
    </div>
  );
}
