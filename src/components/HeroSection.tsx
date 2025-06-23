
import React from 'react';
import TypewriterText from './TypewriterText';
import GlitchText from './GlitchText';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-7xl md:text-9xl font-orbitron font-black text-white drop-shadow-2xl relative">
            <div className="absolute inset-0 text-cyber-green animate-pulse-glow blur-sm">
              <GlitchText text="I'm The Rio" />
            </div>
            <div className="relative z-10 text-transparent bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple bg-clip-text animate-gradient-shift">
              <GlitchText text="I'm The Rio" />
            </div>
          </h1>
          <div className="h-16 flex items-center justify-center">
            <TypewriterText 
              text="Developer • Coder • Linux Master • Automation Addict • Cybersecurity Enthusiast"
              delay={1000}
              speed={30}
              className="text-xl md:text-2xl font-space text-cyber-green/90"
            />
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyber-green to-transparent animate-glow" />
        </div>
        
        <p className="text-lg md:text-xl text-cyber-green/70 font-space leading-relaxed max-w-2xl mx-auto">
          Welcome to my digital realm. I craft code, navigate the depths of cybersecurity with passion and precision.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
