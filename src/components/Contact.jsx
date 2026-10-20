import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Code2, 
  MapPin, 
  Phone,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon, UnstopIcon } from './Icons';
import confetti from 'canvas-confetti';

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ personal }) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

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

      // Left Column Cards Animation
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.15,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftColRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Right Column Form Animation
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightColRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebration
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 }
    });

    // Also trigger direct mailto link for immediate user action
    const mailtoUri = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Hi ${personal.name},\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
    
    setFormSubmitted(true);
    window.location.href = mailtoUri;
  };

  return (
    <section ref={sectionRef} className="contact-section" id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div ref={headerRef} className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a question, want to collaborate on a full-stack project, or have an open engineering role, my inbox is always open.
          </p>
        </div>

        <div className="contact-layout">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div ref={leftColRef} className="contact-info-col">
            
            {/* Direct Email Card */}
            <div className="email-highlight-card glass-card">
              <div className="email-card-icon">
                <Mail size={24} className="text-ai-cyan" />
              </div>
              <h3 className="email-card-title">Direct Inquiries</h3>
              <p className="email-card-sub">Feel free to copy or send an email directly:</p>
              
              <div className="email-copy-bar mono">
                <span>{personal.email}</span>
                <button 
                  onClick={handleCopyEmail}
                  className="email-copy-btn"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                </button>
              </div>
              {copied && <span className="copy-feedback-text">Copied to clipboard! 🚀</span>}
            </div>

            {/* Location, Phone & Availability Card */}
            <div className="meta-card glass-card">
              <div className="meta-row">
                <MapPin size={18} className="text-cyan" />
                <span><strong>Location:</strong> {personal.location}</span>
              </div>
              {personal.phone && (
                <div className="meta-row">
                  <Phone size={18} className="text-ai-violet" />
                  <span><strong>Direct Line:</strong> <a href={`tel:${personal.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>{personal.phone}</a></span>
                </div>
              )}
              <div className="meta-row">
                <span className="pulse-dot" />
                <span><strong>Status:</strong> {personal.availability}</span>
              </div>
            </div>

            {/* Social Network Cards */}
            <div className="social-grid">
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="social-card glass-card"
              >
                <GithubIcon size={22} />
                <div>
                  <div className="social-name">GitHub</div>
                  <div className="social-handle mono">@karampb02</div>
                </div>
              </a>

              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="social-card glass-card"
              >
                <LinkedinIcon size={22} />
                <div>
                  <div className="social-name">LinkedIn</div>
                  <div className="social-handle mono">in/karampb02</div>
                </div>
              </a>

              <a 
                href={personal.devfolio || 'https://devfolio.co/@karampb02'} 
                target="_blank" 
                rel="noreferrer" 
                className="social-card glass-card"
              >
                <Code2 size={22} className="text-cyan" />
                <div>
                  <div className="social-name">Devfolio</div>
                  <div className="social-handle mono">@karampb02 (6 Hacks)</div>
                </div>
              </a>

              <a 
                href={personal.unstop || 'https://unstop.com/u/karamsan18287'} 
                target="_blank" 
                rel="noreferrer" 
                className="social-card glass-card"
              >
                <UnstopIcon size={22} className="text-cyan" />
                <div>
                  <div className="social-name">Unstop</div>
                  <div className="social-handle mono">@karamsan18287 (Top 41%)</div>
                </div>
              </a>

              <a 
                href={personal.youtube || 'https://youtube.com'} 
                target="_blank" 
                rel="noreferrer" 
                className="social-card glass-card"
              >
                <YoutubeIcon size={22} className="text-pink" />
                <div>
                  <div className="social-name">YouTube</div>
                  <div className="social-handle mono">100k+ Silver Creator</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div ref={rightColRef} className="contact-form-col">
            <div className="form-card glass-card">
              <div className="form-header">
                <MessageSquare size={20} className="text-ai-cyan" />
                <h3>Send a Direct Message</h3>
              </div>

              {formSubmitted ? (
                <div className="form-success-box">
                  <div className="success-icon">🎉</div>
                  <h4>Message Initiated!</h4>
                  <p>Your mail client has been opened with your pre-filled inquiry. You can also email directly at <strong>{personal.email}</strong>.</p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }} 
                    className="btn btn-secondary"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Hackathon Collaboration / Software Engineering Role"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      placeholder={`Hi ${personal.name.split(' ')[0]}, I would love to connect regarding...`}
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <span>Send Message</span>
                    <Send size={16} />
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
