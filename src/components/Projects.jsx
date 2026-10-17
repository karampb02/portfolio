import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Code,
  Zap,
  X
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'AI & Systems', 'Systems & Backend', 'Frontend'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Portfolio Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Software Projects</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of full-stack applications, distributed systems benchmarks, and AI integrations built with modern engineering practices.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Card Header & Category */}
              <div className="project-card-top">
                <span className={`badge ${project.featured ? 'badge-purple' : 'badge-cyan'}`}>
                  {project.category}
                </span>
                {project.featured && (
                  <span className="badge badge-emerald">
                    <Sparkles size={12} />
                    <span>Featured</span>
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Performance Metric Pill */}
              {project.metrics && (
                <div className="project-metric-pill mono">
                  <Zap size={14} className="text-cyan" />
                  <span>{project.metrics}</span>
                </div>
              )}

              {/* Tech Tags */}
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag mono">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Architecture Highlights */}
              <div className="project-highlights">
                {project.highlights.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="highlight-row">
                    <CheckCircle2 size={15} className="highlight-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Actions Footer */}
              <div className="project-footer">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary project-btn"
                  >
                    <GithubIcon size={16} />
                    <span>Source</span>
                  </a>
                )}
                {project.demo && project.demo !== project.github && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary project-btn"
                  >
                    <span>{project.demoLabel || 'Live Preview'}</span>
                    <ExternalLink size={16} />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-outline project-btn-details"
                  title="View deep architecture details"
                >
                  <span>Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <span className="badge badge-purple">{selectedProject.category}</span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                </div>
                <button 
                  className="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                <p className="modal-desc">{selectedProject.description}</p>
                
                {selectedProject.metrics && (
                  <div className="modal-metric mono">
                    <strong>Benchmark Performance:</strong> {selectedProject.metrics}
                  </div>
                )}

                <div className="modal-section-title">Architecture & Engineering Decisions:</div>
                <ul className="modal-highlights-list">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="text-cyan" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="modal-section-title">Tech Stack:</div>
                <div className="project-tags">
                  {selectedProject.tags.map((t, i) => (
                    <span key={i} className="project-tag mono">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                {selectedProject.github && (
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-secondary"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub Repository</span>
                  </a>
                )}
                {selectedProject.demo && selectedProject.demo !== selectedProject.github && (
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-primary"
                  >
                    <span>{selectedProject.demoLabel ? `Open ${selectedProject.demoLabel}` : 'Launch Live Demo'}</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
