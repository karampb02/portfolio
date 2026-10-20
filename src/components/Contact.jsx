import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ personal }) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoUri = `mailto:${personal.email}?subject=${encodeURIComponent('Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Hi ${personal.name},\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
    setFormSubmitted(true);
    window.location.href = mailtoUri;
  };

  return (
    <section ref={sectionRef} className="editorial-contact-section" id="contact">
      <div className="container">
        
        {/* Header Tag */}
        <div className="editorial-meta contact-reveal">
          <span className="accent-dot" />
          <span>07 &bull; COLLABORATION &amp; INQUIRY</span>
        </div>

        {/* Oversized Headline */}
        <div className="contact-headline-wrap contact-reveal">
          <h2 className="contact-huge-title font-display">
            HAVE A GOOD <span className="serif-italic text-orange">PROBLEM</span> TO SOLVE?
          </h2>
        </div>

        {/* Split Contact Grid */}
        <div className="contact-editorial-grid">
          
          {/* Left Column: Direct Inquiries & Details */}
          <div className="contact-details-col contact-reveal">
            <p className="contact-intro-paragraph">
              Whether you are an engineering team building mission-critical products, an organization seeking full-stack leadership, or a hackathon collaborator, my direct channels are open.
            </p>

            {/* Direct Email Action Box */}
            <div className="contact-email-card">
              <span className="email-meta-label font-mono text-muted">DIRECT TRANSMISSION:</span>
              <div className="email-action-row">
                <a href={`mailto:${personal.email}`} className="email-link font-display text-ivory">
                  {personal.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="copy-trigger-btn font-mono"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={14} className="text-orange" /> : <Copy size={14} />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* Direct Social Indices */}
            <div className="contact-network-indices font-mono">
              <div className="network-row">
                <span className="net-label text-muted">GITHUB:</span>
                <a href={personal.github} target="_blank" rel="noreferrer" className="net-val">
                  github.com/karampb02 <ArrowUpRight size={13} />
                </a>
              </div>
              <div className="network-row">
                <span className="net-label text-muted">LINKEDIN:</span>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="net-val">
                  linkedin.com/in/karampb02 <ArrowUpRight size={13} />
                </a>
              </div>
              <div className="network-row">
                <span className="net-label text-muted">DEVFOLIO:</span>
                <a href={personal.devfolio} target="_blank" rel="noreferrer" className="net-val">
                  devfolio.co/@karampb02 <ArrowUpRight size={13} />
                </a>
              </div>
              <div className="network-row">
                <span className="net-label text-muted">LOCATION:</span>
                <span className="net-val text-ivory">AMRITSAR, PUNJAB, INDIA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Transmission */}
          <div className="contact-form-col contact-reveal">
            <div className="editorial-form-panel">
              <div className="form-panel-header font-mono">
                <span className="text-orange">[DIRECT_INQUIRY]</span>
                <span className="text-muted">DISPATCH MESSAGE</span>
              </div>

              {formSubmitted ? (
                <div className="form-sent-notification font-mono">
                  <span className="sent-badge text-orange">[STATUS: DISPATCHED]</span>
                  <h4 className="font-display">Email client opened.</h4>
                  <p className="text-muted">
                    Your inquiry has been formulated. You can also reach out directly via <strong>{personal.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="atelier-btn atelier-btn-outline"
                  >
                    SEND ANOTHER NOTE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="atelier-contact-form">
                  <div className="form-field-group">
                    <label htmlFor="c-name" className="field-label font-mono">
                      YOUR NAME / ORGANIZATION:
                    </label>
                    <input
                      type="text"
                      id="c-name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="atelier-input font-display"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="c-email" className="field-label font-mono">
                      CONTACT EMAIL:
                    </label>
                    <input
                      type="email"
                      id="c-email"
                      name="email"
                      required
                      placeholder="jane@organization.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="atelier-input font-display"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="c-message" className="field-label font-mono">
                      PROJECT OBJECTIVE / MESSAGE:
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Brief context on your engineering role, project, or collaboration..."
                      value={formData.message}
                      onChange={handleChange}
                      className="atelier-input atelier-textarea font-body"
                    />
                  </div>

                  <button type="submit" className="atelier-btn atelier-btn-orange submit-btn">
                    <span>DISPATCH MESSAGE</span>
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
