import React, { useState } from 'react';
import './App.css';
import { portfolioData } from './data/portfolioData';

import Preloader from './components/Preloader';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import InteractiveTerminal from './components/InteractiveTerminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { personal, stats, strengths, skills, projects, experience, education, certifications, terminalCommands } = portfolioData;

  return (
    <div className="portfolio-app">
      {/* Preloader Screen with Karamjit Singh & AI boot sequence */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* Dynamic Interactive Particle Background & Ambient Glow */}
      <ParticleBackground />

      {/* Glassmorphic Navigation Bar */}
      <Navbar personal={personal} />

      {/* Main Content Flow */}
      <main className={isLoading ? 'content-hidden' : 'content-visible'}>
        {/* Interactive Hero with Typewriter & Live Stats */}
        <Hero personal={personal} stats={stats} />

        {/* Engineering Philosophy & Core Strengths */}
        <About personal={personal} strengths={strengths} />

        {/* Categorized Skills & Mastery Matrix */}
        <Skills skills={skills} />

        {/* Filterable Software Projects with Architecture Highlights */}
        <Projects projects={projects} />

        {/* Career & Education Timeline */}
        <Experience experience={experience} education={education} certifications={certifications} />

        {/* Interactive Developer Terminal Sandbox */}
        <InteractiveTerminal commands={terminalCommands} personal={personal} />

        {/* Direct Inquiries & Interactive Contact Form */}
        <Contact personal={personal} />
      </main>

      {/* Footer with Monogram & Quick Links */}
      <Footer personal={personal} />
    </div>
  );
}
