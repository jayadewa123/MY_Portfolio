import React from 'react';
import { portfolioData } from '../data';
import { FiMonitor, FiDatabase, FiCpu, FiPenTool } from 'react-icons/fi';

const categories = [
  { key: 'frontend', label: 'Frontend',      color: '#61DAFB', icon: <FiMonitor /> },
  { key: 'backend',  label: 'Backend & DB',  color: '#38bdf8', icon: <FiDatabase /> },
  { key: 'tools',    label: 'Tools',         color: '#a78bfa', icon: <FiCpu /> },
  { key: 'design',   label: 'UI/UX Design',  color: '#F24E1E', icon: <FiPenTool /> },
];

const Skills = () => {
  const { skills } = portfolioData;
  const skillMap = {
    frontend: skills.frontend,
    backend:  skills.backend,
    tools:    skills.tools,
    design:   skills.design,
  };

  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Skills &amp; Expertise</h2>
      <p className="about-subtitle" style={{ textAlign: 'center', marginBottom: '60px', marginTop: '-40px' }}>
        Technologies and tools I work with
      </p>

      <div className="skills-grid-layout">
        {categories.map(cat => (
          <div key={cat.key} className="skill-category-block">
            {/* Category Header */}
            <div className="skill-category-header">
              <span className="skill-category-icon" style={{ color: cat.color }}>
                {cat.icon}
              </span>
              <h3 className="skill-category-title">{cat.label}</h3>
            </div>
            
            {/* Divider Line */}
            <div className="skill-category-divider" />
            
            {/* 2-Column Skill Grid Inside Card */}
            <div className="skill-list-grid">
              {skillMap[cat.key].map(skill => (
                <div key={skill.name} className="skill-list-item">
                  <span className="skill-list-bullet" style={{ backgroundColor: cat.color, color: cat.color }} />
                  <span className="skill-list-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
