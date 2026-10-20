import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, UnstopIcon } from './Icons';

export default function Hero({ personal }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const bioRef = useRef(null);
  const actionsRef = useRef(null);
  const blueprintRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-kicker',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(
        headlineRef.current?.querySelectorAll('.hero-line'),
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 },
        '-=0.3'
      )
      .fromTo(
        bioRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        actionsRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        blueprintRef.current,
        { opacity: 0, x: 25 },
        { opacity: 1, x: 0, duration: 0.8 },
        '-=0.5'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="editorial-hero" id="hero">
      <div className="container hero-layout-grid">
        
        {/* Left Column: Typographic Powerhouse */}
        <div className="hero-primary-col">
          {/* Editorial Kicker */}
          <div className="hero-kicker editorial-meta">
            <span className="accent-dot" />
            <span>01 &bull; CREATIVE ENGINEERING & ARCHITECTURE</span>
          </div>

          {/* Huge Typographic Headline */}
          <h1 ref={headlineRef} className="hero-headline font-display">
            <span className="hero-line block">ENGINEERED</span>
            <span className="hero-line block">TO FEEL</span>
            <span className="hero-line block serif-italic text-orange">DIFFERENT.</span>
          </h1>

          {/* Editorial Introduction */}
          <div ref={bioRef} className="hero-intro-box">
            <p className="hero-paragraph">
              I am <strong>{personal.name}</strong> — a full-stack engineer, product builder, and Computer Science undergraduate at GNDU Amritsar. National Rank #159 in the Google Student Ambassador program (Diamond Level) and IBM SkillsBuild Ambassador.
            </p>
            <p className="hero-subparagraph text-muted">
              I craft resilient web architecture, AI security heuristics, and high-performance software with rigorous art direction and zero generic compromises.
            </p>
          </div>

          {/* Actions & Social Links */}
          <div ref={actionsRef} className="hero-action-row">
            <a href="#work" className="atelier-btn atelier-btn-orange">
              <span>EXPLORE SELECTED WORK</span>
              <ArrowDown size={15} />
            </a>

            <a href="#contact" className="atelier-btn atelier-btn-outline">
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={15} />
            </a>

            <div className="hero-social-strip">
              <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile">
                <GithubIcon size={18} />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                <LinkedinIcon size={18} />
              </a>
              <a href={personal.unstop} target="_blank" rel="noreferrer" aria-label="Unstop Profile">
                <UnstopIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Blueprint Panel */}
        <div ref={blueprintRef} className="hero-blueprint-col">
          <div className="blueprint-card">
            {/* Blueprint Header */}
            <div className="blueprint-header font-mono">
              <span className="bp-tag text-orange">[SYSTEM_SPEC_2026]</span>
              <span className="bp-status">&bull; OPERATIONAL</span>
            </div>

            {/* Core Schematics Details */}
            <div className="blueprint-body font-mono">
              <div className="bp-row">
                <span className="bp-label">OPERATOR</span>
                <span className="bp-val text-ivory">{personal.name.toUpperCase()}</span>
              </div>
              <div className="bp-row">
                <span className="bp-label">LOCATION</span>
                <span className="bp-val text-ivory">AMRITSAR, PUNJAB (31.63°N, 74.87°E)</span>
              </div>
              <div className="bp-row">
                <span className="bp-label">ACADEMIC</span>
                <span className="bp-val text-ivory">GNDU CSE (2025 - 2029)</span>
              </div>
              <div className="bp-row">
                <span className="bp-label">AMBASSADOR</span>
                <span className="bp-val text-orange">GSA DIAMOND #159 (3,910 PTS)</span>
              </div>
              <div className="bp-row">
                <span className="bp-label">VERIFIED_AI</span>
                <span className="bp-val text-ivory">IBM SKILLSBUILD / CREDLY VERIFIED</span>
              </div>
              <div className="bp-row">
                <span className="bp-label">PRIMARY_STACK</span>
                <span className="bp-val text-ivory">REACT 19 &bull; NEXT.JS 16 &bull; FASTAPI &bull; TYPESCRIPT</span>
              </div>
            </div>

            {/* Visual Technical Diagram */}
            <div className="blueprint-schematic">
              <div className="schematic-header font-mono text-muted">
                <span>// ARCHITECTURAL DATAFLOW</span>
              </div>
              <div className="schematic-flow font-mono">
                <div className="flow-node">
                  <span className="node-box">CLIENT EDGE</span>
                  <span className="flow-arrow">&rarr;</span>
                </div>
                <div className="flow-node">
                  <span className="node-box node-active">FASTAPI / HEURISTICS</span>
                  <span className="flow-arrow">&rarr;</span>
                </div>
                <div className="flow-node">
                  <span className="node-box">SUPABASE / CLOUD</span>
                </div>
              </div>
            </div>

            {/* Blueprint Footer */}
            <div className="blueprint-footer font-mono">
              <span className="text-muted">ATELIER ENGINE v3.4</span>
              <span className="text-orange">ZERO TEMPLATES</span>
            </div>
          </div>
        </div>

      </div>

      {/* Editorial Bottom Ticker Bar */}
      <div className="hero-ticker-bar font-mono">
        <div className="container ticker-container">
          <div className="ticker-item">
            <span className="ticker-key text-muted">CAMPUS STANDING:</span>
            <span className="ticker-val text-ivory">GNDU CSE UNDERGRADUATE</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-key text-muted">NATIONAL MERIT:</span>
            <span className="ticker-val text-orange">#159 GSA DIAMOND TIER</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-key text-muted">HACKATHONS:</span>
            <span className="ticker-val text-ivory">6+ VERIFIED (HACKOWASP FINALIST)</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-key text-muted">ATHLETICS:</span>
            <span className="ticker-val text-ivory">GNDU HOCKEY GOLD MEDALIST</span>
          </div>
        </div>
      </div>
    </section>
  );
}
