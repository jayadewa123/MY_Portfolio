import React from 'react';
import { portfolioData } from '../data';

const About = () => {
  const { personalInfo } = portfolioData;

  const paragraphs = personalInfo.aboutParagraphs || (
    typeof personalInfo.about === 'string'
      ? personalInfo.about.split('\n\n')
      : [personalInfo.about]
  );

  const services = [
    {
      id: 1,
      offset: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <polyline points="7 9 10 12 7 15"></polyline>
          <line x1="13" y1="15" x2="17" y2="15"></line>
        </svg>
      ),
      title: "Website Design",
      desc: "We can design for you a website and we can upload them."
    },
    {
      id: 2,
      offset: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="2"></rect>
          <rect x="14" y="3" width="7" height="7" rx="2"></rect>
          <rect x="14" y="14" width="7" height="7" rx="2"></rect>
          <rect x="3" y="14" width="7" height="7" rx="2"></rect>
        </svg>
      ),
      title: "Mobile & Desktop App",
      desc: "We can create for you mobile and desktop applications."
    },
    {
      id: 3,
      offset: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="4 9 12 15 20 9"></polyline>
          <path d="M9 19v-6"></path>
          <path d="M15 19v-4"></path>
        </svg>
      ),
      title: "UI & UX Design",
      desc: "We can create for you intuitive mobile and desktop UI/UX."
    },
    {
      id: 4,
      offset: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      title: "Backend & APIs",
      desc: "Robust backend services, scalable REST APIs, and database solutions."
    }
  ];

  return (
    <section id="about" className="section container about-section-wrap">
      <div className="about-layout-container">
        {/* Left: 2x2 Services Cards Grid */}
        <div className="about-services-grid">
          {services.map((card) => (
            <div
              key={card.id}
              className={`about-service-card ${card.offset ? 'offset-card' : ''}`}
            >
              <div className="about-service-icon">
                {card.icon}
              </div>
              <h3 className="about-service-title">{card.title}</h3>
              <p className="about-service-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Right: Detailed About Me Card */}
        <div className="about-card">
          <p className="about-subheading">Who am i?</p>

          <div className="about-description-group">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="about-description">
                {para}
              </p>
            ))}
          </div>

          <div className="about-actions-row">
            <a
              href="/Dilanka_CV.pdf"
              download
              className="about-cv-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </a>

            <div className="about-social-group">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="about-social-btn"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="about-social-btn"
                aria-label="Email"
                title="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="about-social-btn"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
