import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Cpu, Sparkles, Zap } from 'lucide-react';

const bootLogs = [
  'INITIALIZING NEURAL CORE...',
  'CONNECTING QUANTUM MESH (GNDU NODE)...',
  'LOADING AGENT PROTOCOLS: GSA DIAMOND #159...',
  'SYNCHRONIZING REPOSITORIES: SAFEBOX AI & TALENTAI...',
  'DECRYPTING PORTFOLIO: KARAMJIT SINGH...',
  'NEURAL INTERFACE READY.'
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const preloaderRef = useRef(null);
  const contentRef = useRef(null);
  const barRef = useRef(null);
  const lettersRef = useRef([]);

  const nameString = 'KARAMJIT SINGH';

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Exit animation
          gsap.to(contentRef.current, {
            scale: 1.05,
            opacity: 0,
            duration: 0.5,
            ease: 'power3.in'
          });

          gsap.to(preloaderRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: 'power4.inOut',
            delay: 0.2,
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }
      });

      // Animate Monogram and HUD elements entrance
      tl.fromTo(
        '.preloader-hud-badge',
        { opacity: 0, y: -20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );

      // Letter reveal for KARAMJIT SINGH
      tl.fromTo(
        lettersRef.current,
        { opacity: 0, y: 40, rotateX: -90, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: 'blur(0px)',
          stagger: 0.04,
          duration: 0.6,
          ease: 'power3.out'
        },
        '-=0.2'
      );

      tl.fromTo(
        '.preloader-sub-tag',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      );

      // Simulated Progress Counter
      const progressObj = { value: 0 };
      tl.to(
        progressObj,
        {
          value: 100,
          duration: 1.8,
          ease: 'power2.inOut',
          onUpdate: () => {
            const current = Math.floor(progressObj.value);
            setProgress(current);
            if (barRef.current) {
              barRef.current.style.width = `${current}%`;
            }
            const logIdx = Math.min(
              Math.floor((current / 100) * bootLogs.length),
              bootLogs.length - 1
            );
            setStatusIndex(logIdx);
          }
        },
        '-=0.3'
      );

      // Hold briefly at 100%
      tl.to({}, { duration: 0.3 });
    }, preloaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  const handleSkip = () => {
    gsap.killTweensOf(preloaderRef.current);
    gsap.to(preloaderRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'power4.inOut',
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });
  };

  return (
    <div ref={preloaderRef} className="preloader-overlay" onClick={handleSkip}>
      {/* Background Neural Grid and Ambient Glows */}
      <div className="preloader-grid" />
      <div className="preloader-glow-orb orb-ai-cyan" />
      <div className="preloader-glow-orb orb-ai-violet" />

      {/* Skip Button */}
      <button 
        className="preloader-skip-btn" 
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        title="Skip intro animation"
      >
        <span>SKIP INTRO</span>
        <span className="mono">↵</span>
      </button>

      {/* Main Preloader Content Box */}
      <div ref={contentRef} className="preloader-content">
        
        {/* Futuristic Radar / Monogram Node */}
        <div className="preloader-node-wrap">
          <div className="preloader-cyber-ring ring-outer" />
          <div className="preloader-cyber-ring ring-inner" />
          <div className="preloader-cyber-core">
            <Cpu size={28} className="preloader-core-icon" />
          </div>
        </div>

        {/* HUD Top Badge */}
        <div className="preloader-hud-badge">
          <span className="ai-dot-pulse" />
          <span className="mono">SYSTEM BOOT SEQUENCE // KARAMJIT_AI.v3</span>
        </div>

        {/* Big Name: KARAMJIT SINGH */}
        <div className="preloader-name-container">
          <h1 className="preloader-name">
            {nameString.split('').map((char, i) => (
              <span
                key={i}
                ref={(el) => (lettersRef.current[i] = el)}
                className={`preloader-char ${char === ' ' ? 'space' : ''}`}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle / Role Tag */}
        <div className="preloader-sub-tag">
          <Sparkles size={14} className="text-ai-cyan" />
          <span>AI & FULL-STACK ENGINEER • GSA DIAMOND #159</span>
          <Zap size={14} className="text-ai-violet" />
        </div>

        {/* Live Boot Diagnostics Log */}
        <div className="preloader-log mono">
          <span className="log-prefix">&gt;</span>
          <span className="log-text">{bootLogs[statusIndex]}</span>
          <span className="cursor-blink">_</span>
        </div>

        {/* Progress Bar Container */}
        <div className="preloader-bar-wrapper">
          <div className="preloader-bar-header mono">
            <span className="bar-status-label">LOADING ASSETS</span>
            <span className="bar-percentage">{progress}%</span>
          </div>
          <div className="preloader-bar-track">
            <div ref={barRef} className="preloader-bar-fill" />
            <div className="preloader-bar-scanner" />
          </div>
        </div>

        {/* Subtle Hint */}
        <div className="preloader-hint mono">
          CLICK ANYWHERE TO ENTER
        </div>

      </div>
    </div>
  );
}
