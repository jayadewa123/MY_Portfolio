import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data';

const CircularProgress = ({ percentage, text }) => {
  const [offset, setOffset] = useState(0);
  const radius = 35;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = circumference - (percentage / 100) * circumference;
    const timeout = setTimeout(() => {
      setOffset(progressOffset);
    }, 300);
    return () => clearTimeout(timeout);
  }, [percentage, circumference]);

  return (
    <div className="circular-progress">
      <div className="svg-wrapper">
        <svg width="90" height="90">
          <circle 
            cx="45" cy="45" r={radius} 
            fill="transparent" 
            stroke="rgba(255,255,255,0.05)" 
            strokeWidth="8" 
          />
          <circle 
            cx="45" cy="45" r={radius} 
            fill="transparent" 
            stroke="var(--accent)" 
            strokeWidth="8" 
            strokeDasharray={circumference} 
            strokeDashoffset={offset === 0 ? circumference : offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
            transform="rotate(-90 45 45)"
          />
        </svg>
        <div className="progress-value">{percentage}%</div>
      </div>
      <div className="progress-text">{text}</div>
    </div>
  );
};

const About = () => {
  const [techStats, setTechStats] = useState([]);

  useEffect(() => {
    const calculateTechProficiency = () => {
      const techCounts = {};
      let maxCount = 0;
      
      portfolioData.projects.forEach(project => {
        project.technologies.forEach(tech => {
          techCounts[tech] = (techCounts[tech] || 0) + 1;
          if (techCounts[tech] > maxCount) maxCount = techCounts[tech];
        });
      });

      const sortedTech = Object.keys(techCounts).sort((a, b) => techCounts[b] - techCounts[a]);
      const topTech = sortedTech.slice(0, 4);

      // Boost calculation slightly so it looks good on a portfolio
      // E.g., if max used tech is 2, it gets 100%. If a tech is used 1 time, it gets 50% + 20% boost = 70%
      const baseLine = Math.max(maxCount, 2); 

      const calculated = topTech.map(tech => {
        const rawPercent = Math.round((techCounts[tech] / baseLine) * 100);
        // Add a slight boost to base percentage to make it look professional, maxing out at 100
        const displayPercent = Math.min(100, rawPercent > 50 ? rawPercent : rawPercent + 25);
        return { name: tech, percentage: displayPercent };
      });
      
      setTechStats(calculated);
    };

    calculateTechProficiency();
  }, []);

  return (
    <section id="about" className="section container about-section">
      <h2 className="section-title">About Me</h2>
      <p className="about-subtitle">Get to know me better</p>
      
      <div className="about-grid">
        {/* Left Column: Text & Stats */}
        <div className="about-left">
          <h3 className="about-headline">Passionate Developer Creating Digital Solutions</h3>
          
          <div className="about-text">
            <p>
              Hi! I'm Dilanka Jayadewa, an Information Technology (BSc Hons) undergraduate at SLIIT. 
              My passion lies in UI/UX Design and creating user-friendly digital experiences.
            </p>
            <p>
              Alongside design, I have a strong foundation in frontend and backend development 
              (React, Node.js, Spring Boot, MEAN stack). This combination allows me to not only 
              design beautiful interfaces but also understand how to build them effectively.
            </p>
            <p>
              My goal is to continuously learn and contribute to building high-quality software 
              that solves real-world problems.
            </p>
          </div>
        </div>

        {/* Right Column: Dynamic Circular Progress */}
        <div className="about-right">
          <div className="skills-container">
            <h4 className="skills-title">Technical Proficiency</h4>
            <p className="skills-subtitle">Calculated dynamically from my projects</p>
            <div className="circular-grid">
              {techStats.map((tech, index) => (
                <CircularProgress key={index} percentage={tech.percentage} text={tech.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
