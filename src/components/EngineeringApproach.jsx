import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export default function EngineeringApproach() {
  const sectionRef = useRef(null);

  const principles = [
    {
      num: '01',
      title: 'ARCHITECTURE BEFORE CODE',
      summary: 'Before writing a single handler, model the data lifecycle, identity trust boundaries, and network failure modes.',
      detail: 'In SafeBox AI, splitting the engine between a lightweight React frontend and an isolated Python/FastAPI heuristic container prevented client-side secret leakage and ensured sub-second response times under load.'
    },
    {
      num: '02',
      title: 'PERFORMANCE IS NON-NEGOTIABLE',
      summary: 'Users feel latency in their nervous system. Engineering must respect human attention spans.',
      detail: 'Eliminated redundant runtime dependencies, utilized Turbopack in Next.js 16, and implemented edge-cached API routes across projects to maintain sub-second First Contentful Paint metrics.'
    },
    {
      num: '03',
      title: 'RESILIENT SECURITY BY DEFAULT',
      summary: 'Security is not a checkbox added after deployment; it is the structural integrity of the application.',
      detail: 'Strict CORS policies, dual-tier phishing analysis heuristics, type-checked runtime payloads with Zod/Pydantic, and verified OAuth tokens protect every exposed interface.'
    },
    {
      num: '04',
      title: 'PRAGMATISM OVER HYPE',
      summary: 'Solve the actual human problem with the simplest, most durable architecture available.',
      detail: 'Whether developing TalentAI for the Google Solution Challenge or CarboTracer for emissions accounting, the guiding question is always: does this empower the end-user with genuine clarity?'
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.approach-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.approach-grid',
            start: 'top 80%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="editorial-approach-section" id="approach">
      <div className="container">
        
        {/* Header */}
        <div className="approach-header">
          <div className="editorial-meta">
            <span className="accent-dot" />
            <span>04 &bull; ENGINEERING METHODOLOGY & MENTAL MODELS</span>
          </div>
          <h2 className="editorial-title">
            HOW I <span className="serif-italic text-orange">THINK</span> &amp; CONSTRUCT.
          </h2>
          <p className="approach-intro-sub text-muted">
            The guiding principles, architectural trade-offs, and disciplined practices behind every system I design.
          </p>
        </div>

        {/* 4 Architectural Principles Grid */}
        <div className="approach-grid">
          {principles.map((item) => (
            <div key={item.num} className="approach-card">
              <div className="approach-card-top font-mono">
                <span className="approach-num text-orange">[{item.num}]</span>
                <span className="approach-status text-muted">PRINCIPLE</span>
              </div>
              <h3 className="approach-title font-display">{item.title}</h3>
              <p className="approach-summary">{item.summary}</p>
              <div className="approach-detail-box font-mono">
                <span className="detail-tag text-muted">REAL-WORLD IMPLEMENTATION:</span>
                <p className="detail-text text-ivory">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Architecture System Map */}
        <div className="system-map-panel">
          <div className="system-map-header font-mono">
            <span className="text-orange">[SYSTEM_MAP]</span>
            <span className="text-muted">SAFEBOX AI &bull; DEPLOYMENT ARCHITECTURE</span>
          </div>

          <div className="system-map-content font-mono">
            <div className="system-map-diagram">
              <div className="sys-block sys-client">
                <span className="sys-label">CLIENT RUNTIME</span>
                <span className="sys-sub">React 19 &bull; Vite Edge</span>
              </div>

              <div className="sys-connector">
                <span className="connector-line" />
                <span className="connector-text">HTTPS / TLS 1.3</span>
              </div>

              <div className="sys-block sys-api">
                <span className="sys-label">SECURITY ENGINE</span>
                <span className="sys-sub">FastAPI &bull; Python Container</span>
              </div>

              <div className="sys-connector">
                <span className="connector-line" />
                <span className="connector-text">Dual Analysis</span>
              </div>

              <div className="sys-block sys-db">
                <span className="sys-label">CLOUD PERSISTENCE</span>
                <span className="sys-sub">Vercel &bull; Supabase Edge</span>
              </div>
            </div>

            <div className="system-map-notes text-muted">
              <span>* Designed for zero-downtime rolling updates, isolated heuristic sandbox execution, and minimal client payload size.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
