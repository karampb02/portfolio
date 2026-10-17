import React from 'react';
import { ArrowUp, Code, Heart } from 'lucide-react';

export default function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        
        <div className="footer-left">
          <div className="brand-logo footer-brand">
            <div className="brand-icon">
              <Code size={18} />
            </div>
            <span className="brand-name">{personal.name}</span>
          </div>
          <p className="footer-tagline">
            Google Student Ambassador, AI & Full-Stack Builder, and Computer Science undergraduate at GNDU Amritsar.
          </p>
        </div>

        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#terminal">Terminal</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-right">
          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
          <div className="footer-copy">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
