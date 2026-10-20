import React from 'react';
import { ArrowUp } from 'lucide-react';

const currentYear = new Date().getFullYear();

export default function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="container footer-content-wrap">
        
        {/* Left: Monogram and Dynamic Year */}
        <div className="footer-left font-mono">
          <span className="footer-monogram font-display">{personal.name.toUpperCase()}</span>
          <span className="footer-pipe">&bull;</span>
          <span className="footer-copyright">&copy; {currentYear} ALL RIGHTS RESERVED</span>
        </div>

        {/* Center: Curated Direct Links */}
        <div className="footer-social-strip">
          <a href={personal.github} target="_blank" rel="noreferrer" className="footer-link font-mono" aria-label="GitHub">
            GITHUB
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="footer-link font-mono" aria-label="LinkedIn">
            LINKEDIN
          </a>
          <a href={personal.unstop} target="_blank" rel="noreferrer" className="footer-link font-mono" aria-label="Unstop">
            UNSTOP
          </a>
        </div>

        {/* Right: Back to Top */}
        <div className="footer-right">
          <button 
            onClick={scrollToTop} 
            className="footer-top-btn font-mono"
            aria-label="Scroll back to top"
          >
            <span>TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
