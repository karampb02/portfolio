import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About({ personal }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal-block',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
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

  return (
    <section ref={sectionRef} className="editorial-about-section env-ivory-section" id="about">
      <div className="container">
        
        {/* Section Header */}
        <div className="about-header about-reveal-block">
          <div className="editorial-meta dark-meta">
            <span className="accent-dot" />
            <span>05 &bull; BIOGRAPHY &amp; LEADERSHIP ETHOS</span>
          </div>
          <h2 className="editorial-title dark-title">
            DISCIPLINE, <span className="serif-italic text-orange">CURIOSITY</span> &amp; CRAFT.
          </h2>
        </div>

        {/* Editorial 2-Column Split Composition */}
        <div className="about-split-layout">
          
          {/* Left Column: Big Narrative Quote & Philosophy */}
          <div className="about-narrative-col about-reveal-block">
            <p className="about-lead-quote font-serif">
              "Great engineering does not hide behind jargon or complexity. It makes intricate systems feel effortless, dependable, and dignified to interact with."
            </p>
            
            <div className="about-story-paragraphs">
              <p>
                I am <strong>{personal.name}</strong> &mdash; a Computer Science &amp; Engineering undergraduate at <strong>Guru Nanak Dev University (GNDU)</strong>, Amritsar. My journey is rooted in an unwavering passion for software craftsmanship &mdash; building from first principles in algorithms, security heuristics, and modern web architectures.
              </p>
              <p>
                As a <strong>Google Student Ambassador (GSA Diamond Tier &bull; National Rank #159</strong> across 12,000+ peers in India) and <strong>IBM SkillsBuild Ambassador</strong>, I actively mentor fellow engineering students, champion open developer culture, and bridge generative AI concepts with pragmatic engineering prototypes.
              </p>
            </div>
          </div>

          {/* Right Column: Key Tenets & Verified Facets */}
          <div className="about-facets-col about-reveal-block">
            
            <div className="about-facet-item">
              <div className="facet-index font-mono text-orange">[FACET_01]</div>
              <h4 className="facet-title font-display">ATHLETIC DISCIPLINE</h4>
              <p className="facet-desc">
                Gold Medalist in Field Hockey at GNDU Inter-Departmental Tournaments. Competitive sports instilled deep mental stamina, team coordination under pressure, and strategic grit that directly shapes my engineering execution.
              </p>
            </div>

            <div className="about-facet-item">
              <div className="facet-index font-mono text-orange">[FACET_02]</div>
              <h4 className="facet-title font-display">COMMUNITY &amp; CONTENT LEADERSHIP</h4>
              <p className="facet-desc">
                Contributed to scripting and strategic research that powered a 100,000+ subscriber audience, recognized with the official <strong>YouTube Silver Creator Award</strong>. Core organizer for GNDU Node 2.0 University Hackathons.
              </p>
            </div>

            <div className="about-facet-item">
              <div className="facet-index font-mono text-orange">[FACET_03]</div>
              <h4 className="facet-title font-display">CONTINUOUS INTELLECTUAL CURIOSITY</h4>
              <p className="facet-desc">
                From Model United Nations diplomacy to competitive hackathons (HackOWASP 8.0 finalist), I thrive where analytical problem solving intersects with clear human communication.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
