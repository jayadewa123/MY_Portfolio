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
        <section id="home" className="landing-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div className="landing-hero container animate-fade-in" style={{ position: 'relative' }}>
            <div className="landing-text-content">
              {/* Elegant Smaller Greeting */}
              <p className="hero-greeting-text">
                Hey There !! <span className="hero-wave">👋</span>
              </p>

              {/* Main Headline: Bold Dynamic Typing Role */}
              <h1 className="hero-role-typing">
                <span className="hero-role-prefix"> </span>
                <span className="hero-title">
                  {currentText}
                  <span className="blinking-cursor">|</span>
                </span>
              </h1>

              {/* Subtext description (Option 1: Full-Stack Web Focused) */}
              <p className="hero-subtext">
                Passionate Full-Stack Developer specializing in building high-performance, responsive web applications and scalable digital solutions. From interactive frontends to robust backend systems, I bring ideas to life with clean, efficient code.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta-group">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '/projects');
                  }}
                  className="btn-hero-primary"
                >
                  <span>Start a Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '/contact');
                  }}
                  className="btn-hero-outline"
                >
                  <span>Contact</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>

              {/* Minimal social links */}
              <div className="hero-social-minimal">
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-mini-link"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="hero-mini-link"
                  aria-label="Email"
                  title="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-mini-link"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Modern Circular Avatar */}
            <div className="landing-image-content hero-visual-container">
              <div className="hero-ambient-sphere"></div>

              <div className="hero-avatar-circle">
                <img
                  src="/portfolio.png"
                  alt={portfolioData.personalInfo.name}
                  className="hero-avatar-circle-img"
                  onError={(e) => {
                    if (e.target.src.includes('portfolio.png')) {
                      e.target.src = '/portpolio.png';
                    } else if (e.target.src.includes('portpolio.png')) {
                      e.target.src = '/Portfolio.png';
                    } else {
                      e.target.onerror = null;
                      e.target.src = '/profile.png';
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Center: Scroll to explore mouse */}
          <div
            className="hero-scroll-indicator"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="hero-mouse-pill">
              <div className="hero-mouse-dot"></div>
            </div>
            <span className="hero-mouse-text">Scroll to explore</span>
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
