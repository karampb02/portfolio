import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Mail, 
  Code2, 
  Rocket, 
  Activity, 
  Clock, 
  Download,
  Copy,
  Check
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Hero({ personal, stats }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personal.roleTitles[roleIndex];
    let timeout;

    if (!isDeleting && displayedText !== currentRole) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, 75);
    } else if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText !== '') {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personal.roleTitles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, personal.roleTitles]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const getStatIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={20} className="stat-svg" />;
      case 'Rocket': return <Rocket size={20} className="stat-svg" />;
      case 'Activity': return <Activity size={20} className="stat-svg" />;
      case 'Clock': return <Clock size={20} className="stat-svg" />;
      default: return <Code2 size={20} className="stat-svg" />;
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        
        {/* Top greeting badge */}
        <div className="hero-top-badge animate-float">
          <span className="sparkle-icon">✨</span>
          <span>Crafting High-Impact Web & Systems Engineering</span>
        </div>

        {/* Main headline */}
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">{personal.name}</span>
        </h1>

        {/* Dynamic Typewriter Role */}
        <div className="typewriter-container">
          <span className="typewriter-prefix">I build as a </span>
          <span className="typewriter-text mono">{displayedText}</span>
          <span className="cursor-blink">|</span>
        </div>

        {/* Tagline / Subtitle */}
        <p className="hero-description">
          {personal.tagline}
        </p>

        {/* Call to Action Buttons */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            <span>View Featured Projects</span>
            <ArrowRight size={18} />
          </a>

          <a href="#contact" className="btn btn-secondary">
            <Mail size={18} />
            <span>Let's Connect</span>
          </a>

          <button 
            onClick={handleCopyEmail} 
            className="btn btn-outline copy-email-btn"
            title="Click to copy email"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
          </button>
        </div>

        {/* Social Link Quick Row */}
        <div className="hero-social-row">
          <span className="social-label">Find me on:</span>
          <div className="social-links">
            <a href={personal.github} target="_blank" rel="noreferrer" className="social-circle" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-circle" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="#terminal" className="social-circle" aria-label="Interactive Terminal">
              <Terminal size={18} />
            </a>
          </div>
        </div>

        {/* Interactive Stats Ribbon */}
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <div className="stat-icon-wrapper">
                {getStatIcon(stat.icon)}
              </div>
              <div className="stat-content">
                <div className="stat-value gradient-text-alt">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Code Snippet Showcase Card */}
        <div className="hero-code-wrapper">
          <div className="code-window glass-card">
            <div className="code-header">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="code-filename mono">engineer.config.ts</div>
              <div className="code-status mono">READY</div>
            </div>
            <pre className="code-body mono">
              <code>
                <span className="c-keyword">const</span> <span className="c-var">engineer</span> = &#123;{'\n'}
                {'  '}name: <span className="c-string">"{personal.name}"</span>,{'\n'}
                {'  '}university: <span className="c-string">"GNDU, Amritsar (B.Tech CSE 2025-29)"</span>,{'\n'}
                {'  '}leadership: [<span className="c-string">"GSA Diamond #159"</span>, <span className="c-string">"IBM Ambassador"</span>, <span className="c-string">"GFG Ambassador"</span>],{'\n'}
                {'  '}hackathons: <span className="c-string">"HackOWASP Finalist • PEC Hacks 3.0"</span>,{'\n'}
                {'  '}github: <span className="c-string">"github.com/karampb02"</span>,{'\n'}
                {'  '}linkedin: <span className="c-string">"linkedin.com/in/karampb02"</span>,{'\n'}
                {'  '}mission: <span className="c-highlight">"Empowering campus peers & building high-impact tech"</span>{'\n'}
                &#125;;
              </code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}
