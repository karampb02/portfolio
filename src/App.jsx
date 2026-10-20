import React, { useState } from 'react';
import './App.css';
import { portfolioData } from './data/portfolioData';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Capabilities from './components/Capabilities';
import EngineeringApproach from './components/EngineeringApproach';
import About from './components/About';
import Recognition from './components/Recognition';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { personal, projects } = portfolioData;

  return (
    <div className="atelier-app-root">
      {/* Tactile Editorial Print Grain */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Cinematic Opening Sequence */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* Minimal Editorial Navigation */}
      <Navbar personal={personal} />

      {/* Editorial Main Flow */}
      <main className={`atelier-main ${isLoading ? 'is-loading' : 'is-ready'}`}>
        {/* [01] Hero: Asymmetrical Typographic Powerhouse */}
        <Hero personal={personal} />

        {/* [02] Selected Works: Alternating Curated Engineering Journal */}
        <Projects projects={projects} />

        {/* [03] Capabilities: Technical Index & Depth */}
        <Capabilities />

        {/* [04] Engineering Approach: Systems Thinking & Schematics */}
        <EngineeringApproach />

        {/* [05] About: Leadership, Athletics & Craft in Warm Ivory */}
        <About personal={personal} />

        {/* [06] Recognition: Clean Typographic Honor Citations */}
        <Recognition />

        {/* [07] Contact: Memorable Editorial Conclusion & Direct Transmission */}
        <Contact personal={personal} />
      </main>

      {/* [08] Quiet Compact Editorial Footer */}
      <Footer personal={personal} />
    </div>
  );
}
