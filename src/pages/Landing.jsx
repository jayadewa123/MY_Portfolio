import React, { useEffect, useState } from 'react';
// import { TypeAnimation } from 'react-type-animation';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MeshBackground from '../components/MeshBackground';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import { portfolioData } from '../data';

const Landing = () => {
  const location = useLocation();

  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const words = ['Aspiring Software Engineer', portfolioData.personalInfo.title];
    const targetWord = words[wordIndex];
    let typingSpeed = isDeleting ? 30 : 80;
    
    if (!isDeleting && currentText === targetWord) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }
    
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setCurrentText(prev => 
        isDeleting ? targetWord.substring(0, prev.length - 1) : targetWord.substring(0, prev.length + 1)
      );
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, wordIndex]);


  useEffect(() => {
    // Smooth scroll to section on initial load if route has a section name
    const path = location.pathname.substring(1);
    const targetId = path === '' ? 'home' : path;
    const el = document.getElementById(targetId);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.pathname]);

  return (
    <div className="portfolio-page">
      <MeshBackground />
      <Navbar />

      <main style={{ minHeight: '100vh' }}>
        {/* Home Section */}
        <section id="home" className="landing-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <div className="landing-hero container animate-fade-in" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '50px', paddingTop: '100px', paddingBottom: '50px' }}>
            <div className="landing-text-content">
              <p className="hello-text">Hello, I'm</p>
              <h1 className="hero-name">{portfolioData.personalInfo.name}</h1>
              <h2 className="hero-title" style={{ display: 'inline-block', minHeight: '1.2em' }}>
                {currentText}
                <span className="blinking-cursor">|</span>
              </h2>
              <p className="hero-description">
                Transforming ideas into functional, user-friendly applications by combining frontend and backend technologies. I specialize in building scalable, robust web solutions that prioritize performance and clean design. Driven by a passion for continuous learning, I strive to deliver impactful software that meets industry standards and exceeds user expectations.
              </p>
              
              <div className="hero-buttons">
                <a href="#projects" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }} className="btn hero-btn-primary">
                  <span>View My Work</span>
                </a>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }} className="btn hero-btn-outline">
                  Contact Me
                </a>

              </div>

              {/* Social Icons */}
              <div className="hero-social-icons">
                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* CV Download Icon */}
                <a
                  href="/Dilanka_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link cv-icon-link"
                  aria-label="Download CV"
                  title="Download CV"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <polyline points="9 15 12 18 15 15"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="landing-image-content">
              <div style={{
                width: '550px',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                position: 'relative',
              }}>
                <img 
                  src="/profile.png" 
                  alt={portfolioData.personalInfo.name} 
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    filter: 'drop-shadow(0 0 20px rgba(45, 212, 191, 0.4))'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300/141414/6366f1?text=DJ";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Experience & Education Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
      <style>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
          margin-left: 2px;
          color: inherit;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Landing;
