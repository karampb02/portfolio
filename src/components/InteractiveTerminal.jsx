import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

gsap.registerPlugin(ScrollTrigger);

export default function InteractiveTerminal({ commands, personal }) {
  const [history, setHistory] = useState([
    { type: 'system', text: `Welcome to ${personal.name}'s Interactive Developer Shell v2.4` },
    { type: 'system', text: 'Type "help" to view available commands or click quick suggestions below.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const terminalBoxRef = useRef(null);
  const chipsRef = useRef(null);

  const quickCommands = ['help', 'bio', 'skills', 'projects', 'certifications', 'leadership', 'stats', 'sudo hire', 'clear'];

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

      // Chips animation
      if (chipsRef.current) {
        gsap.fromTo(
          chipsRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: chipsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Terminal Box Animation with subtle 3D tilt & glow reveal
      gsap.fromTo(
        terminalBoxRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: terminalBoxRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const newHistory = [...history, { type: 'input', text: cmdText }];

    if (trimmed === 'sudo hire') {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      newHistory.push({
        type: 'output',
        text: commands['sudo hire'] || '🎉 Offer accepted! Drop me an email at ' + personal.email
      });
    } else if (commands[trimmed]) {
      newHistory.push({
        type: 'output',
        text: commands[trimmed]
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not found: "${cmdText}". Type "help" to view available commands.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section ref={sectionRef} className="terminal-section" id="terminal">
      <div className="container">
        
        {/* Section Header */}
        <div ref={headerRef} className="section-header">
          <div className="section-tag">
            <Terminal size={14} />
            <span>Interactive CLI</span>
          </div>
          <h2 className="section-title">
            Developer <span className="gradient-text">Console Sandbox</span>
          </h2>
          <p className="section-subtitle">
            Explore my profile using a realistic command-line interface. Type commands or click the shortcut chips below.
          </p>
        </div>

        {/* Quick Suggestion Chips */}
        <div ref={chipsRef} className="terminal-quick-chips">
          <span className="chips-label">Quick run:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="quick-chip mono"
            >
              $ {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div ref={terminalBoxRef} className="terminal-box glass-card mono">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="terminal-title">guest@{personal.nickname || 'karam'}-dev:~ (bash)</div>
            <div className="terminal-badge">LIVE</div>
          </div>

          <div className="terminal-body">
            {history.map((line, idx) => (
              <div key={idx} className={`terminal-line line-${line.type}`}>
                {line.type === 'input' && (
                  <span className="prompt-label">guest@{personal.nickname || 'karam'}:~$ </span>
                )}
                <span className="line-text">{line.text}</span>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="terminal-input-bar">
            <span className="prompt-label">guest@{personal.nickname || 'karam'}:~$ </span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'projects', 'sudo hire'..."
              className="terminal-input mono"
              autoComplete="off"
              spellCheck="false"
            />
            <button type="submit" className="terminal-submit-btn" aria-label="Send command">
              <CornerDownLeft size={16} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
