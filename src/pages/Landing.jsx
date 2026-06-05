import React from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data';
import Navbar from '../components/Navbar';
import MeshBackground from '../components/MeshBackground';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <MeshBackground />
      <Navbar />

      {/* Main Hero Section */}
      <div className="landing-hero container animate-fade-in">
        <div className="landing-text-content">
          <p className="hello-text">Hello, I'm</p>
          <h1 className="hero-name">{portfolioData.personalInfo.name}</h1>
          <h2 className="hero-title">{portfolioData.personalInfo.title}</h2>
          <p className="hero-description">
            Transforming ideas into functional, user-friendly applications by combining frontend and backend technologies. I specialize in building scalable, robust web solutions that prioritize performance and clean design. Driven by a passion for continuous learning, I strive to deliver impactful software that meets industry standards and exceeds user expectations.
          </p>
          
          <div className="hero-buttons">
            <button onClick={() => navigate('/projects')} className="btn hero-btn-primary">
              View My Work
            </button>
            <button onClick={() => navigate('/contact')} className="btn hero-btn-outline">
              Contact Me
            </button>
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
    </div>
  );
};

export default Landing;
