import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  Award,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience({ experience = [], education = [], certifications = [] }) {
  const [tab, setTab] = useState('experience');
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Timeline items animation on tab change or mount
  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      const items = timelineRef.current.querySelectorAll('.timeline-item, .cert-card, .edu-card');
      gsap.fromTo(
        items,
        { opacity: 0, y: 35, x: -20 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          stagger: 0.12,
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, timelineRef);

    return () => ctx.revert();
  }, [tab]);

  return (
    <section ref={sectionRef} className="experience-section" id="experience">
      <div className="container">
        
        {/* Section Header */}
        <div ref={headerRef} className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Journey & Background</span>
          </div>
          <h2 className="section-title">
            Experience, Honors & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            A chronological overview of my campus ambassadorships, verified industry credentials, competitive hackathons, and academic qualifications.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="timeline-tabs">
          <button
            onClick={() => setTab('experience')}
            className={`timeline-tab-btn ${tab === 'experience' ? 'active' : ''}`}
          >
            <Briefcase size={18} />
            <span>Leadership & Experience</span>
          </button>
          <button
            onClick={() => setTab('certifications')}
            className={`timeline-tab-btn ${tab === 'certifications' ? 'active' : ''}`}
          >
            <ShieldCheck size={18} />
            <span>Certifications & Honors</span>
          </button>
          <button
            onClick={() => setTab('education')}
            className={`timeline-tab-btn ${tab === 'education' ? 'active' : ''}`}
          >
            <GraduationCap size={18} />
            <span>Education & Degrees</span>
          </button>
        </div>

        {/* Timeline Content */}
        <div ref={timelineRef} className="timeline-container">
          {tab === 'experience' && (
            <div className="timeline-list">
              {experience.map((item, index) => {
                const bulletList = item.points || item.highlights || [];
                return (
                  <div key={index} className="timeline-item glass-card">
                    <div className="timeline-marker">
                      <Briefcase size={16} />
                    </div>
                    <div className="timeline-header">
                      <div>
                        <h3 className="timeline-role">{item.role}</h3>
                        <div className="timeline-company">
                          <Building2 size={15} />
                          <span>{item.company}</span>
                          <span className="timeline-type-pill">{item.type}</span>
                        </div>
                      </div>
                      <div className="timeline-period badge badge-purple mono">
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <p className="timeline-desc">{item.description}</p>

                    {bulletList.length > 0 && (
                      <div className="timeline-bullets">
                        {bulletList.map((bullet, idx) => (
                          <div key={idx} className="timeline-bullet-item">
                            <CheckCircle2 size={15} className="bullet-icon" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {tab === 'certifications' && (
            <div className="certs-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card glass-card">
                  <div className="cert-top">
                    <div className="cert-badge-icon">
                      <Award size={22} className="text-ai-cyan" />
                    </div>
                    <span className="badge badge-purple mono">{cert.date}</span>
                  </div>
                  <h3 className="cert-name">{cert.title || cert.name}</h3>
                  <div className="cert-issuer mono">{cert.issuer}</div>
                  {cert.credentialId && (
                    <div className="cert-id-tag mono">Credential ID: {cert.credentialId}</div>
                  )}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="cert-link"
                      style={{ marginTop: '14px' }}
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {tab === 'education' && (
            <div className="edu-grid">
              {education.map((edu, index) => (
                <div key={index} className="edu-card glass-card">
                  <div className="edu-header">
                    <div className="edu-icon-wrap">
                      <GraduationCap size={24} className="text-ai-violet" />
                    </div>
                    <div className="edu-period badge badge-cyan mono">{edu.period}</div>
                  </div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-institution">{edu.institution}</div>
                  {edu.grade && (
                    <div className="edu-score mono">Standing / Grade: <strong>{edu.grade}</strong></div>
                  )}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="coursework-section" style={{ marginTop: '16px' }}>
                      <span className="coursework-title">Key Core Subjects:</span>
                      <div className="coursework-tags">
                        {edu.coursework.map((c, i) => (
                          <span key={i} className="coursework-tag mono">{c}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
