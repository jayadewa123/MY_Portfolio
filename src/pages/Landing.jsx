import React from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data';
import Navbar from '../components/Navbar';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <Navbar />

      {/* Main Hero Section */}
      <div className="landing-hero container animate-fade-in">
        <div className="landing-text-content">
          <p className="hello-text">Hello, I'm</p>
          <h1 className="hero-name">{portfolioData.personalInfo.name}</h1>
          <h2 className="hero-title">{portfolioData.personalInfo.title}</h2>
          <p className="hero-description">
            Innovating at the intersection of design and technology to create meaningful solutions.
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
          <div className="hero-image-wrapper">
            {/* We link profile.jpg here. The user must save their image as profile.jpg in public folder */}
            <img 
              src="/profile.jpg" 
              alt={portfolioData.personalInfo.name} 
              className="hero-image"
              onError={(e) => {
                e.target.onerror = null;
                // Fallback realistic placeholder if profile.jpg is missing
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
