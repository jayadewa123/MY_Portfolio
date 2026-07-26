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
          width: '350px',
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          position: 'relative',
        }}>
          <img
            src="/profile.png"
            alt="Dilanka Jayadewa"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 0 20px rgba(45, 212, 191, 0.4))'
            }}
            id="profile-picture"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/300/141414/6366f1?text=DJ";
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
