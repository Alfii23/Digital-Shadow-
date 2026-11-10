import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Statistics } from './components/Statistics';
import { PrivacyBanner } from './components/PrivacyBanner';
import { FloatingActions } from './components/FloatingActions';
import { LoginPage } from './components/LoginPage';
import './index.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'login') {
    return <LoginPage onBackToHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="app-wrapper">
      <Navbar onSignIn={() => setCurrentPage('login')} />

      <main className="main-content">
        <HeroSection />
        <Statistics />
      </main>

      <PrivacyBanner />
      <FloatingActions />
    </div>
  );
}
