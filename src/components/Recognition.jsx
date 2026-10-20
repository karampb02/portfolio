import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Recognition() {
  const sectionRef = useRef(null);

  const recognitionsList = [
    {
      year: '2026',
      title: 'Google Student Ambassador (GSA Diamond Tier)',
      issuer: 'Google Campus Programs India',
      detail: 'Ranked #159 nationally across 12,000+ applicants (GID: 4279). Recognized for technical community building and AI tool demonstrations.',
      link: 'https://www.linkedin.com/in/karampb02/'
    },
    {
      year: '2025',
      title: 'HackOWASP 8.0 — National Hackathon Finalist',
      issuer: 'OWASP Student Chapter',
      detail: 'Finalist with Team Liquid after rigorous technical pitching and 36-hour rapid software prototype delivery.',
      link: 'https://devfolio.co/@karampb02'
    },
    {
      year: '2025',
      title: 'IBM SkillsBuild — Generative AI in Action',
      issuer: 'IBM SkillsBuild & CSR Box',
      detail: 'Verified digital credential issued on Credly for demonstrated competence in enterprise generative AI architectures.',
      link: 'https://www.linkedin.com/in/karampb02/'
    },
    {
      year: '2026',
      title: 'Claude 101 Certification',
      issuer: 'Anthropic / Claude Academy',
      detail: 'Official certification demonstrating advanced prompt engineering, reasoning workflows, and LLM safety practices.',
      link: 'https://www.linkedin.com/in/karampb02/'
    },
    {
      year: '2026',
      title: 'Yuva Aapda Mitra Scheme Certification',
      issuer: 'National Disaster Management Authority (NDMA India)',
      detail: 'Completed crisis response leadership and civil protection preparedness training under official government auspices.',
      link: 'https://www.linkedin.com/in/karampb02/'
    },
    {
      year: '2025',
      title: 'YouTube Silver Creator Award (100k+ Milestone)',
      issuer: 'YouTube Creator Awards',
      detail: 'Awarded for editorial scripting and educational video production that surpassed 100,000 global subscribers.',
      link: 'https://www.linkedin.com/in/karampb02/'
    },
    {
      year: '2025',
      title: 'Introduction to IoT Government Certification',
      issuer: 'Telecom Sector Skill Council (TSSC)',
      detail: 'Certified foundational hardware-software integration, telemetry transmission, and connected sensors.',
      link: 'https://www.linkedin.com/in/karampb02/'
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.rec-row',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.recognition-table',
            start: 'top 80%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="editorial-recognition-section" id="recognition">
      <div className="container">
        
        {/* Header */}
        <div className="recognition-header">
          <div className="editorial-meta">
            <span className="accent-dot" />
            <span>06 &bull; VERIFIED HONORS &amp; INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="editorial-title">
            RECOGNITION <span className="serif-italic text-orange">&amp;</span> CITATIONS.
          </h2>
          <p className="recognition-sub text-muted">
            Documented achievements, verified hackathon records, and professional certifications earned through real execution.
          </p>
        </div>

        {/* Clean Typographic Index List */}
        <div className="recognition-table font-mono">
          <div className="rec-table-header text-muted">
            <span className="rec-col-year">YEAR</span>
            <span className="rec-col-title">HONOR / ACCREDITATION</span>
            <span className="rec-col-issuer">ORGANIZATION</span>
            <span className="rec-col-action">LINK</span>
          </div>

          <div className="rec-table-body">
            {recognitionsList.map((rec, i) => (
              <div key={i} className="rec-row">
                <div className="rec-col-year text-orange">{rec.year}</div>
                <div className="rec-col-title">
                  <div className="rec-primary-title font-display text-ivory">{rec.title}</div>
                  <div className="rec-detail text-muted">{rec.detail}</div>
                </div>
                <div className="rec-col-issuer text-muted">{rec.issuer}</div>
                <div className="rec-col-action">
                  {rec.link && (
                    <a
                      href={rec.link}
                      target="_blank"
                      rel="noreferrer"
                      className="rec-link-btn"
                      aria-label={`Verify ${rec.title}`}
                    >
                      <span>VERIFY</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
