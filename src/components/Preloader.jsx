import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef(null);
  const counterRef = useRef(null);
  const lineRef = useRef(null);
  const wordmarkRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(preloaderRef.current, {
            yPercent: -100,
            duration: 0.7,
            ease: 'power3.inOut',
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }
      });

      // Subtle entrance of wordmark & counter
      tl.fromTo(
        wordmarkRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );

      // Smooth progress count from 0 to 100
      const counterObj = { val: 0 };
      tl.to(
        counterObj,
        {
          val: 100,
          duration: 1.4,
          ease: 'power2.inOut',
          onUpdate: () => {
            const current = Math.floor(counterObj.val);
            setProgress(current);
            if (lineRef.current) {
              lineRef.current.style.width = `${current}%`;
            }
          }
        },
        '-=0.2'
      );

      // Brief hold
      tl.to({}, { duration: 0.2 });
    }, preloaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  const handleSkip = () => {
    gsap.killTweensOf(preloaderRef.current);
    gsap.to(preloaderRef.current, {
      yPercent: -100,
      duration: 0.4,
      ease: 'power3.inOut',
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });
  };

  return (
    <div ref={preloaderRef} className="editorial-preloader" onClick={handleSkip}>
      <div className="preloader-inner">
        {/* Top Minimal Status */}
        <div className="preloader-top-meta font-mono">
          <span>THE DIGITAL ATELIER</span>
          <span className="preloader-dot" />
          <span>PORTFOLIO // 2026</span>
        </div>

        {/* Center Editorial Wordmark */}
        <div ref={wordmarkRef} className="preloader-wordmark-wrap">
          <div className="preloader-monogram font-serif">K.S</div>
          <h1 className="preloader-name font-display">KARAMJIT SINGH</h1>
          <p className="preloader-subtitle font-mono">
            FULL-STACK ENGINEER &bull; GSA DIAMOND #159
          </p>
        </div>

        {/* Bottom Fine Hairline & Restrained Counter */}
        <div className="preloader-bottom-bar">
          <div className="preloader-track">
            <div ref={lineRef} className="preloader-line" />
          </div>
          <div className="preloader-counter-row font-mono">
            <span className="preloader-status">INITIALIZING ENVIRONMENT</span>
            <span ref={counterRef} className="preloader-number">
              {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : '100'}
            </span>
          </div>
        </div>

        {/* Skip button */}
        <button 
          className="preloader-skip-trigger font-mono"
          onClick={(e) => {
            e.stopPropagation();
            handleSkip();
          }}
        >
          [ SKIP INTRO ↵ ]
        </button>
      </div>
    </div>
  );
}
