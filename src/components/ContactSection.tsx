
import React from 'react';
import { Instagram, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bebas font-bold text-cyber-gradient mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-cyber-blue mx-auto animate-glow" />
        </div>
        
        <p className="text-xl text-cyber-green/80 mb-12 font-space">
          Ready to collaborate? Let's connect and build something extraordinary together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://instagram.com/uchiha.rar"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button flex items-center gap-3 group"
          >
            <Instagram size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>@uchiha.rar</span>
          </a>
          
          <a
            href="https://t.me/eternalaura"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button flex items-center gap-3 group border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark"
            style={{ boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)' }}
          >
            <Send size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
            <span>@eternalaura</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
