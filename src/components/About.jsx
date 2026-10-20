import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

export default function About({ personal, strengths }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const storyRef = useRef(null);
  const strengthsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Story Card Animation
      gsap.fromTo(
        storyRef.current,
        { opacity: 0, y: 45, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Strengths Cards Stagger Animation
      if (strengthsRef.current) {
        const cards = strengthsRef.current.querySelectorAll('.strength-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: strengthsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} className="about-section" id="about">
      <div className="container">
        
        {/* Section Header */}
        <div ref={headerRef} className="section-header">
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
        <div ref={storyRef} className="about-story-card glass-card">
          <div className="story-content">
            <div className="story-badge">
              <Zap size={16} className="text-ai-cyan" />
              <span>Campus Leadership & Engineering</span>
            </div>
            <h3 className="story-heading">From AI Security & Full-Stack Development to Community Leadership</h3>
            <p className="story-text">
              {personal.bio}
            </p>
            <div className="story-highlights">
              <div className="highlight-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Google Student Ambassador (Diamond #159) & IBM SkillsBuild Ambassador driving campus AI adoption</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>Full-Stack & Security: SafeBox AI (FastAPI/React), TalentAI (Next.js 16), and CarboTracer (Supabase)</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="text-cyan" />
                <span>6+ Hackathons (Devfolio & Unstop): HackOWASP 8.0 Finalist, PEC Hacks 3.0, and Omnikon 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Strengths Grid */}
        <div ref={strengthsRef} className="strengths-grid">
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
