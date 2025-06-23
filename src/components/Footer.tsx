
import React from 'react';
import GlitchText from './GlitchText';

const Footer = () => {
  return (
    <footer className="py-12 px-4 relative border-t border-cyber-green/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <div className="relative">
            <h3 className="text-2xl font-orbitron font-bold text-cyber-green">
              <GlitchText text="THE RIO" />
            </h3>
            <div className="absolute inset-0 bg-cyber-green/10 blur-2xl rounded-full" />
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent animate-glow" />
          </div>
          
          <p className="text-cyber-green/60 font-space text-sm">
            © 2024 The Rio. All rights reserved. | Crafted with passion in the digital realm.
          </p>
          
          <div className="flex justify-center space-x-8 text-xs text-cyber-green/40 font-space">
            <span className="animate-pulse">DEVELOPER</span>
            <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>CODER</span>
            <span className="animate-pulse" style={{ animationDelay: '1s' }}>ARCHITECT</span>
          </div>
        </div>
        
        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple opacity-50 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-green opacity-50 animate-pulse" />
      </div>
    </footer>
  );
};

export default Footer;
