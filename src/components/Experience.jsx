import React, { useState } from 'react';
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

export default function Experience({ experience, education, certifications = [] }) {
  const [tab, setTab] = useState('experience');

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
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
        <div className="timeline-container">
          {tab === 'experience' && (
            <div className="timeline-list">
              {experience.map((item, index) => (
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

                  <ul className="timeline-points">
                    {item.points.map((pt, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="text-cyan" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {tab === 'certifications' && (
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card glass-card">
                  <div className="cert-top">
                    <div className="cert-badge">
                      <ShieldCheck size={18} className="text-cyan" />
                      <span className="mono">{cert.date}</span>
                    </div>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="cert-verify-btn"
                      title="View on LinkedIn / Credly"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>

                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>

                  {cert.credentialId && (
                    <div className="cert-id-tag mono">
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {tab === 'education' && (
            <div className="timeline-list">
              {education.map((item, index) => (
                <div key={index} className="timeline-item glass-card">
                  <div className="timeline-marker">
                    <GraduationCap size={16} />
                  </div>
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{item.degree}</h3>
                      <div className="timeline-company">
                        <Building2 size={15} />
                        <span>{item.institution}</span>
                      </div>
                    </div>
                    <div className="timeline-period badge badge-cyan mono">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {item.grade && (
                    <div className="timeline-grade-box">
                      <Award size={16} className="text-amber" />
                      <span className="mono">{item.grade}</span>
                    </div>
                  )}

                  <div className="coursework-section">
                    <span className="coursework-title">Key Core Subjects:</span>
                    <div className="coursework-tags">
                      {item.coursework.map((c, i) => (
                        <span key={i} className="coursework-tag mono">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
