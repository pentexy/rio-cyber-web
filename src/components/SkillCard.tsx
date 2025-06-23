
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="skill-card group animate-float"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <Icon 
            size={48} 
            className="text-cyber-green group-hover:text-cyber-blue transition-colors duration-300" 
          />
          <div className="absolute inset-0 bg-cyber-green/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <h3 className="font-orbitron font-bold text-lg text-cyber-green group-hover:text-cyber-blue transition-colors duration-300">
          {title}
        </h3>
        <p className="text-cyber-green/80 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
