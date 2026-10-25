import React, { useState } from 'react';
import { portfolioData } from '../data';
import {
  FiCode,
  FiDatabase,
  FiPenTool,
  FiBarChart2,
  FiTerminal,
  FiCpu,
} from 'react-icons/fi';

const categories = [
  {
    key: 'frontend',
    label: 'Frontend Development',
    tab: 'Frontend',
    baseScore: 77,
    color: '#38bdf8',
    gradient: 'linear-gradient(90deg, #38bdf8, #818cf8)',
    icon: <FiCode />,
  },
  {
    key: 'backend',
    label: 'Backend & Databases',
    tab: 'Backend',
    baseScore: 68,
    color: '#ec4899',
    gradient: 'linear-gradient(90deg, #ec4899, #f43f5e)',
    icon: <FiDatabase />,
  },
  {
    key: 'design',
    label: 'UI / UX Design',
    tab: 'Design',
    baseScore: 74,
    color: '#f97316',
    gradient: 'linear-gradient(90deg, #f97316, #fbbf24)',
    icon: <FiPenTool />,
  },
  {
    key: 'dataAnalytics',
    label: 'Data & Analytics',
    tab: 'Data & Analytics',
    baseScore: 70,
    color: '#f59e0b',
    gradient: 'linear-gradient(90deg, #f59e0b, #10b981)',
    icon: <FiBarChart2 />,
  },
  {
    key: 'languages',
    label: 'Programming Languages',
    tab: 'Languages',
    baseScore: 76,
    color: '#818cf8',
    gradient: 'linear-gradient(90deg, #818cf8, #c084fc)',
    icon: <FiTerminal />,
  },
  {
    key: 'tools',
    label: 'Tools & DevOps',
    tab: 'Tools',
    baseScore: 68,
    color: '#10b981',
    gradient: 'linear-gradient(90deg, #10b981, #06b6d4)',
    icon: <FiCpu />,
  },
];

// Helper to dynamically calculate proficiency percentage based on added tools
const calculateDynamicPercentage = (skillsList, baseScore = 75) => {
  if (!skillsList || skillsList.length === 0) return 60;

  // If individual skills define custom levels, compute average
  const skillsWithLevel = skillsList.filter(s => typeof s.level === 'number');
  if (skillsWithLevel.length > 0) {
    const sum = skillsWithLevel.reduce((acc, s) => acc + s.level, 0);
    return Math.round(sum / skillsWithLevel.length);
  }

  // Dynamic formula: Base score + 3% per tool added, capped between 65% and 97%
  const dynamicVal = baseScore + (skillsList.length * 3);
  return Math.min(97, Math.max(65, dynamicVal));
};

const Skills = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? categories
    : categories.filter(cat => cat.key === activeTab);

  return (
    <section id="skills" className="section container skills-interactive-section">
      {/* Top Pill Badge */}
      <div className="skills-badge-wrapper">
        <span className="skills-badge">
          <span className="skills-badge-star">✦</span> MY EXPERTISE
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="skills-main-title">
        Skills That Drive My <span className="skills-title-highlight">Work</span>
      </h2>

      {/* Subtitle */}
      <p className="skills-main-subtitle">
        A blend of design, full-stack development, and data analytics to build modern digital experiences.
      </p>

      {/* Interactive Filter Tabs */}
      <div className="skills-filter-tabs">
        <button
          className={`skills-tab-pill ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Skills
        </button>
        {categories.map(cat => (
          <button
            key={cat.key}
            className={`skills-tab-pill ${activeTab === cat.key ? 'active' : ''}`}
            onClick={() => setActiveTab(cat.key)}
          >
            {cat.tab}
          </button>
        ))}
      </div>

      {/* 6-Card Interactive Grid */}
      <div className="skills-card-grid">
        {filteredCategories.map(cat => {
          const list = skills[cat.key] || [];
          const dynamicPercentage = calculateDynamicPercentage(list, cat.baseScore);

          return (
            <div
              key={cat.key}
              className="skills-pro-card"
              style={{ '--cat-color': cat.color }}
            >
              {/* Card Header: Icon, Title & Dynamic Percentage */}
              <div className="skills-pro-card-header">
                <div className="skills-pro-icon-box" style={{ color: cat.color }}>
                  {cat.icon}
                </div>
                <div className="skills-pro-title-wrap">
                  <h3 className="skills-pro-card-title">{cat.label}</h3>
                </div>
                <div className="skills-pro-percentage" style={{ color: cat.color }}>
                  {dynamicPercentage}%
                </div>
              </div>

              {/* Dynamic Progress Bar */}
              <div className="skills-pro-progress-track">
                <div
                  className="skills-pro-progress-fill"
                  style={{
                    width: `${dynamicPercentage}%`,
                    background: cat.gradient,
                    boxShadow: `0 0 12px ${cat.color}66`
                  }}
                />
              </div>

              {/* 2-Column Skills List */}
              <div className="skills-pro-list-grid">
                {list.map(skill => (
                  <div key={skill.name} className="skills-pro-item">
                    <span
                      className="skills-pro-bullet"
                      style={{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                    />
                    <span className="skills-pro-name" title={skill.name}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtle Floating Corner Watermark (Clean static with no rotation) */}
              <div
                className="skills-pro-watermark"
                style={{ color: cat.color }}
                aria-hidden="true"
              >
                {cat.icon}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
