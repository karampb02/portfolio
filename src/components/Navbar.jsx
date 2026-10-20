import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ personal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['work', 'capabilities', 'approach', 'about', 'recognition', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', name: 'Work', href: '#work' },
    { num: '02', name: 'Capabilities', href: '#capabilities' },
    { num: '03', name: 'Approach', href: '#approach' },
    { num: '04', name: 'About', href: '#about' },
    { num: '05', name: 'Recognition', href: '#recognition' },
    { num: '06', name: 'Contact', href: '#contact' },
  ];

  return (
    <header ref={navRef} className={`atelier-navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container atelier-nav-inner">
        {/* Brand Wordmark */}
        <a href="#" className="atelier-brand" aria-label="Karamjit Singh Home">
          <span className="brand-title font-display">{personal.name}</span>
          <span className="brand-descriptor font-mono">GNDU &bull; GSA DIAMOND #159</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="atelier-desktop-nav" aria-label="Main Navigation">
          <ul className="atelier-nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.num}>
                  <a
                    href={link.href}
                    className={`atelier-nav-link font-mono ${isActive ? 'is-active' : ''}`}
                  >
                    <span className="nav-index text-orange">[{link.num}]</span>
                    <span className="nav-label">{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action & Availability */}
        <div className="atelier-nav-actions">
          <div className="atelier-status-tag font-mono">
            <span className="status-indicator-dot" />
            <span>AVAILABLE</span>
          </div>

          <a href="#contact" className="atelier-cta-btn font-mono">
            <span>INQUIRE</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="atelier-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="atelier-mobile-drawer" role="dialog" aria-modal="true">
          <nav className="atelier-mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.num}
                href={link.href}
                className="atelier-mobile-link font-display"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mobile-index font-mono text-orange">[{link.num}]</span>
                <span>{link.name}</span>
              </a>
            ))}
            <div className="mobile-cta-wrapper">
              <a
                href="#contact"
                className="atelier-btn atelier-btn-orange"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
