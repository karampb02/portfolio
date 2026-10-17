import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  GitFork, 
  Check, 
  Sparkles 
} from 'lucide-react';

export default function Skills({ skills }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Code2 },
    ...skills.categories.map((cat) => {
      let icon = Code2;
      if (cat.id === 'frontend') icon = Layout;
      if (cat.id === 'backend') icon = Server;
      if (cat.id === 'database') icon = Database;
      if (cat.id === 'corecs') icon = Terminal;
      if (cat.id === 'devops') icon = GitFork;
      return { id: cat.id, name: cat.name, icon };
    })
  ];

  const displayedCategories = activeCategory === 'all' 
    ? skills.categories 
    : skills.categories.filter((cat) => cat.id === activeCategory);

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Technical Mastery</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical stack across frontend frameworks, backend runtimes, database architecture, and computer science foundations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-tabs">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`skill-tab-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={16} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-categories-grid">
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="skill-category-card glass-card">
              <div className="category-header">
                <div className="category-icon-wrap">
                  {cat.id === 'frontend' && <Layout size={20} />}
                  {cat.id === 'backend' && <Server size={20} />}
                  {cat.id === 'database' && <Database size={20} />}
                  {cat.id === 'corecs' && <Terminal size={20} />}
                  {cat.id === 'devops' && <GitFork size={20} />}
                </div>
                <h3 className="category-title">{cat.name}</h3>
              </div>

              <div className="skills-list">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-percentage mono">{item.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
