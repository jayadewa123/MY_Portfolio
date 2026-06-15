import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Update scrolled state for navbar styling
      setScrolled(window.scrollY > 50);

      // 2. Scroll spy: Find which section is currently in view
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (activeSection !== section) {
              setActiveSection(section);
              // Update URL path without pushing history state
              const newPath = section === 'home' ? '/' : `/${section}`;
              if (window.location.pathname !== newPath) {
                window.history.replaceState(null, '', newPath);
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to sync URL on page refresh
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Update history path
      const newPath = sectionId === 'home' ? '/' : `/${sectionId}`;
      window.history.pushState(null, '', newPath);
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="landing-nav" style={{
        position: 'fixed', 
        top: 0, 
        zIndex: 1000, 
        transition: 'all 0.3s ease',
        padding: scrolled ? '15px 5%' : '20px 5%',
        background: scrolled ? 'rgba(6, 11, 36, 0.95)' : 'rgba(6, 11, 36, 0.8)'
    }}>
      <div className="landing-logo" style={{ cursor: 'pointer' }} onClick={(e) => handleLinkClick(e, 'home')}>
        {portfolioData.personalInfo.name}
      </div>
      <ul className="landing-nav-links">
        {sections.map((sec) => (
          <li key={sec}>
            <a 
              href={`#${sec}`} 
              onClick={(e) => handleLinkClick(e, sec)}
              className={activeSection === sec ? 'active-link' : ''} 
              style={{ textDecoration: 'none', textTransform: 'capitalize' }}
            >
              {sec}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
