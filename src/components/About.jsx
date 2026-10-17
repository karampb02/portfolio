import React from 'react';
import { 
  Layers, 
  Brain, 
  Database, 
  Cloud, 
  Cpu, 
  GitBranch, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function About({ personal, strengths }) {
  const getStrengthIcon = (name) => {
    switch (name) {
      case 'Layers': return <Layers className="strength-svg" />;
      case 'Brain': return <Brain className="strength-svg" />;
      case 'Database': return <Database className="strength-svg" />;
      case 'Cloud': return <Cloud className="strength-svg" />;
      case 'Cpu': return <Cpu className="strength-svg" />;
      case 'GitBranch': return <GitBranch className="strength-svg" />;
      default: return <Sparkles className="strength-svg" />;
    }
  };

  return (
    <section className="about-section" id="about">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="section-title">
            Passionate About Building <span className="gradient-text">Scalable Solutions</span>
          </h2>
          <p className="section-subtitle">
            Bridging algorithmic precision and intuitive human-centered design to construct software that scales effortlessly.
          </p>
        </div>

        {/* Narrative & Bio Box */}
        <div className="about-story-card glass-card">
          <div className="story-content">
            <div className="story-badge">
              <Zap size={16} className="text-purple" />
              <span>Full-Stack Perspective</span>
            </div>
            <h3 className="story-heading">From algorithmic fundamentals to distributed architectures</h3>
            <p className="story-text">
              {personal.bio}
            </p>
            <div className="story-highlights">
              <div className="highlight-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Obsessed with sub-second response times and memory efficiency</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Comfortable working across the stack: React, Node, SQL/NoSQL & Cloud</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Continuously solving complex graph & dynamic programming problems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Strengths Grid */}
        <div className="strengths-grid">
          {strengths.map((strength, index) => (
            <div key={index} className="strength-card glass-card">
              <div className="strength-icon-container">
                {getStrengthIcon(strength.icon)}
              </div>
              <h4 className="strength-title">{strength.title}</h4>
              <p className="strength-desc">{strength.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
