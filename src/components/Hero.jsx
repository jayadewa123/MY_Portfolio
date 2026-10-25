import React from 'react';
import { portfolioData } from '../data';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="section container" style={styles.hero}>
      <div className="animate-fade-in" style={styles.content}>
        <h2 style={styles.greeting}>Hello, My Name Is</h2>
        <h1 style={styles.name}>{portfolioData.personalInfo.name}</h1>
        <h3 style={styles.title}>{portfolioData.personalInfo.title}</h3>
        <p style={styles.description}>
          I craft beautiful, user-friendly digital experiences that bridge the gap between design and functionality.
        </p>

        <div style={styles.btnGroup}>
          <a href="#projects" className="btn btn-primary">
            View My Work <FiArrowRight />
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me <FiArrowRight />
          </a>
        </div>
      </div>

      <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {/* Profile Image with CSS enhancements */}
        <div style={{
          width: '320px',
          height: '320px',
          maxWidth: '85vw',
          maxHeight: '85vw',
          borderRadius: '50%',
          padding: '5px',
          background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.8), rgba(99, 102, 241, 0.5))',
          boxShadow: '0 0 35px rgba(45, 212, 191, 0.35)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
          margin: '0 auto',
        }}>
          <img
            src="/portfolio.png"
            alt="Dilanka Jayadewa"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 12%',
              borderRadius: '50%',
              display: 'block',
            }}
            id="profile-picture"
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
    </section>
  );
};

const styles = {
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '100vh',
    gap: '50px',
    flexWrap: 'wrap-reverse',
  },
  content: {
    flex: '1',
    minWidth: '300px',
  },
  greeting: {
    color: 'var(--accent)',
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  name: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    whiteSpace: 'nowrap',
    lineHeight: '1.1',
    marginBottom: '10px',
    background: 'linear-gradient(to right, #fff, #a1a1aa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  title: {
    fontSize: '2rem',
    color: 'var(--text-secondary)',
    marginBottom: '20px',
    fontWeight: '400',
  },
  description: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    marginBottom: '40px',
    maxWidth: '500px',
  },
  btnGroup: {
    display: 'flex',
    gap: '20px',
  }
};

export default Hero;
