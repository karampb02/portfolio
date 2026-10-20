import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Capabilities() {
  const sectionRef = useRef(null);

  const capabilities = [
    {
      index: '01',
      title: 'PRODUCT ENGINEERING',
      description: 'End-to-end architecture from data persistence to responsive user experiences with type safety and resilient state management.',
      technologies: ['FastAPI (Python)', 'React 19', 'Next.js 16 App Router', 'TypeScript 5', 'PostgreSQL', 'Prisma ORM', 'Supabase'],
      focus: 'High-cohesion modules, resilient schema design, and asynchronous API handling.'
    },
    {
      index: '02',
      title: 'INTERACTIVE EXPERIENCES',
      description: 'Award-grade visual craft, fluid layout compositions, and purposeful motion choreographies that communicate hierarchy without gimmickry.',
      technologies: ['GSAP & ScrollTrigger', 'CSS Design Systems', 'Modern SVG Animations', 'Fluid Fluid Typography (clamp)', 'Micro-Interactions'],
      focus: 'Performance-conscious 60fps animations, accessible focus management, and tactile editorial layouts.'
    },
    {
      index: '03',
      title: 'PLATFORMS & SECURITY INFRASTRUCTURE',
      description: 'Secure deployments, cloud data stores, and heuristic security tools designed to operate reliably under real-world network conditions.',
      technologies: ['Vercel Global Edge', 'Docker Containers', 'Linux & Shell Environments', 'Phishing Heuristics & Analysis', 'Git Workflow'],
      focus: 'Zero-downtime continuous deployment, dual-tier phishing security models, and sub-second edge latency.'
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.capabilities-row',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.capabilities-list',
            start: 'top 80%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="editorial-capabilities-section" id="capabilities">
      <div className="container">
        
        {/* Section Header */}
        <div className="capabilities-header">
          <div className="editorial-meta">
            <span className="accent-dot" />
            <span>03 &bull; TECHNICAL CAPABILITIES & DOMAIN DEPTH</span>
          </div>
          <h2 className="editorial-title">
            TECHNICAL <span className="serif-italic text-orange">INDEX</span> &amp; EXPERTISE.
          </h2>
          <p className="capabilities-sub text-muted">
            Structured competency across system architecture, interactive frontend craft, and security-conscious infrastructure.
          </p>
        </div>

        {/* Visual Editorial Index */}
        <div className="capabilities-list">
          {capabilities.map((cap) => (
            <div key={cap.index} className="capabilities-row">
              <div className="cap-index-col font-mono text-orange">
                [{cap.index}]
              </div>

              <div className="cap-title-col">
                <h3 className="cap-title font-display">{cap.title}</h3>
                <p className="cap-desc">{cap.description}</p>
                <div className="cap-focus font-mono">
                  <span className="text-muted">CORE PHILOSOPHY: </span>
                  <span className="text-ivory">{cap.focus}</span>
                </div>
              </div>

              <div className="cap-stack-col font-mono">
                <div className="stack-header text-muted">STACK &amp; RUNTIMES</div>
                <div className="stack-tags">
                  {cap.technologies.map((t, idx) => (
                    <span key={idx} className="cap-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
