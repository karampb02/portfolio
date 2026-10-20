import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ projects }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        '.work-section-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.work-section-header',
            start: 'top 85%'
          }
        }
      );

      // Editorial project items reveal
      const items = gsap.utils.toArray('.editorial-project-row');
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="editorial-work-section" id="work">
      <div className="container">
        
        {/* Section Header */}
        <div className="work-section-header">
          <div className="editorial-meta">
            <span className="accent-dot" />
            <span>02 &bull; SELECTED WORKS // 2024 &mdash; 2026</span>
          </div>
          <h2 className="editorial-title">
            CURATED <span className="serif-italic text-orange">ENGINEERING</span> JOURNAL.
          </h2>
          <p className="work-intro-sub text-muted">
            Deliberate architectural choices, measured outcomes, and real deployed applications. Built with modern runtimes and verified production integrity.
          </p>
        </div>

        {/* Alternating Editorial Project Compositions */}
        <div className="editorial-projects-list">
          {projects.map((project, index) => {
            const indexStr = index < 9 ? `0${index + 1}` : `${index + 1}`;
            const isIvoryEnv = index % 2 === 1;

            return (
              <article 
                key={project.id} 
                className={`editorial-project-row ${isIvoryEnv ? 'env-ivory' : 'env-black'}`}
              >
                <div className="project-grid-inner">
                  
                  {/* Left Column: Number & Metadata */}
                  <div className="project-meta-col">
                    <span className="project-huge-num font-display text-orange">{indexStr}</span>
                    <div className="project-badge-tag font-mono">
                      <span>{project.category.toUpperCase()}</span>
                    </div>
                    {project.metrics && (
                      <div className="project-metric-callout font-mono">
                        <span className="metric-icon">&bull;</span>
                        <span>{project.metrics}</span>
                      </div>
                    )}
                  </div>

                  {/* Middle Column: Narrative, Problem & Architecture */}
                  <div className="project-content-col">
                    <h3 className="project-main-title font-display">
                      {project.title}
                    </h3>
                    
                    <p className="project-problem-text">
                      {project.description}
                    </p>

                    {/* Architecture & Decisions */}
                    <div className="project-decisions-box">
                      <span className="decisions-label font-mono">
                        ENGINEERING DECISIONS & HIGHLIGHTS:
                      </span>
                      <ul className="decisions-list">
                        {project.highlights.map((h, i) => (
                          <li key={i}>
                            <span className="bullet-dash text-orange">&mdash;</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="project-tech-pills font-mono">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tech-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="project-actions-row">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="atelier-btn atelier-btn-orange"
                        >
                          <span>{project.demoLabel || 'LIVE PREVIEW'}</span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="atelier-btn atelier-btn-outline"
                        >
                          <GithubIcon size={16} />
                          <span>SOURCE CODE</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
