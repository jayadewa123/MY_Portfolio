import React from 'react';
import { portfolioData } from '../data';
import { FiGithub, FiExternalLink, FiBriefcase, FiLayers, FiAward, FiClock } from 'react-icons/fi';

const parseProjectTitle = (rawTitle) => {
  if (rawTitle.includes(' - ')) {
    const parts = rawTitle.split(' - ');
    return {
      title: parts[0].trim(),
      category: parts.slice(1).join(' - ').trim(),
    };
  }
  return {
    title: rawTitle,
    category: 'Software Application',
  };
};

const Projects = () => {
  const { projects } = portfolioData;

  // Stats for the top counter banner (inspired by reference design)
  const stats = [
    { icon: <FiBriefcase />, value: `${projects.length}+`, label: 'Projects Completed' },
    { icon: <FiLayers />, value: '18+', label: 'Tech & Tools Mastered' },
    { icon: <FiAward />, value: '3+', label: 'Years Dev Experience' },
    { icon: <FiClock />, value: '2500+', label: 'Hours of Development' },
  ];

  return (
    <section id="projects" className="section container projects-showcase-section">
      {/* Top Tagline */}
      <div className="projects-badge-wrapper">
        <span className="projects-badge">
          <span className="projects-badge-star">✦</span> FEATURED PORTFOLIO
        </span>
      </div>

      {/* Main Section Heading */}
      <h2 className="projects-main-title">
        Real Projects. <span className="projects-title-highlight">Real Results.</span>
      </h2>
      <p className="projects-main-subtitle">
        A curated showcase of full-stack web platforms, mobile solutions, and enterprise software systems.
      </p>

      {/* Stats Counter Bar (Top Banner) */}
      <div className="projects-stats-bar">
        {stats.map((stat, idx) => (
          <div key={idx} className="projects-stat-card">
            <div className="projects-stat-icon-wrap">
              {stat.icon}
            </div>
            <div className="projects-stat-text-wrap">
              <span className="projects-stat-val">{stat.value}</span>
              <span className="projects-stat-lbl">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 4-Column Responsive Card Grid */}
      <div className="projects-grid-layout">
        {projects.map((project, index) => {
          const { title, category } = parseProjectTitle(project.title);
          const numBadge = String(index + 1).padStart(2, '0');

          // Extract up to 3 concise bullet highlights
          const techList = project.technologies || [];
          const bullets = [
            techList.slice(0, 3).join(', '),
            techList[3] || 'Modern responsive UI architecture',
            techList[4] || 'Clean code & robust performance',
          ];

          return (
            <div key={project.id} className="project-pro-card">
              {/* Image Container with Numbered Corner Badge */}
              <div className="project-pro-img-container">
                <span className="project-pro-num-badge">{numBadge}</span>
                <img
                  src={project.image}
                  alt={title}
                  className="project-pro-img"
                  style={{
                    objectPosition: project.imagePosition || 'top center'
                  }}
                  onError={(e) => {
                    if (e.target.src.endsWith('.jpg')) {
                      e.target.src = e.target.src.replace('.jpg', '.png');
                    } else if (e.target.src.endsWith('.png')) {
                      e.target.src = e.target.src.replace('.png', '.PNG');
                    }
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="project-pro-body">
                <div className="project-pro-header-wrap">
                  <h3 className="project-pro-title" title={title}>{title}</h3>
                  <span className="project-pro-category">{category}</span>
                </div>

                {/* 1-2 Sentence Project Description */}
                <p className="project-pro-desc">
                  {project.description}
                </p>

                {/* Technology & Feature Pills (All visible, no numbers) */}
                <div className="project-pro-tech-tags">
                  {techList.map((tech, tIdx) => (
                    <span key={tIdx} className="project-pro-tag">{tech}</span>
                  ))}
                </div>

                {/* Card Footer: Icons Only (No text buttons) */}
                <div className="project-pro-footer">
                  <span className="project-pro-tech-count">{techList[0]} Stack</span>
                  <div className="project-pro-icon-actions">
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-action-btn github"
                        title="View Source on GitHub"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-action-btn live"
                        title="View Live Demo"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
