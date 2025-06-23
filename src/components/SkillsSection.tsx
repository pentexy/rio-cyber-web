
import React from 'react';
import SkillCard from './SkillCard';
import { 
  Code, 
  Bot, 
  Terminal, 
  Shield, 
  Cpu, 
  Database, 
  Layers, 
  Zap 
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Python",
      description: "Advanced Python development for automation, scripting, and application building."
    },
    {
      icon: Bot,
      title: "Telethon",
      description: "Expert in Telegram bot development using Telethon library for complex automation."
    },
    {
      icon: Database,
      title: "API Work",
      description: "RESTful and GraphQL API design, integration, and optimization."
    },
    {
      icon: Bot,
      title: "AI Bot Dev",
      description: "Creating intelligent bots with machine learning and natural language processing."
    },
    {
      icon: Terminal,
      title: "Shell Scripting",
      description: "Bash, Zsh, and PowerShell automation for system administration and DevOps."
    },
    {
      icon: Shield,
      title: "Reverse Engineering",
      description: "Binary analysis, malware research, and security vulnerability assessment."
    },
    {
      icon: Layers,
      title: "Full-stack Development",
      description: "End-to-end application development with modern frameworks and technologies."
    },
    {
      icon: Zap,
      title: "Linux Master",
      description: "System administration, kernel optimization, and advanced Linux configurations."
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-audiowide font-bold text-cyber-gradient mb-4">
            SKILLS & EXPERTISE
          </h2>
          <div className="w-24 h-1 bg-cyber-green mx-auto animate-glow" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
