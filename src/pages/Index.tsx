
import React from 'react';
import MatrixBackground from '../components/MatrixBackground';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-darker relative overflow-x-hidden">
      <MatrixBackground />
      
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
