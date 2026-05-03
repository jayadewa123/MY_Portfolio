import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="landing-nav" style={{
        position: 'fixed', 
        top: 0, 
        zIndex: 1000, 
        transition: 'all 0.3s ease',
        padding: scrolled ? '15px 5%' : '20px 5%',
        background: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'rgba(15, 23, 42, 0.85)'
    }}>
      <div className="landing-logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        {portfolioData.personalInfo.name}
      </div>
      <ul className="landing-nav-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} style={{ textDecoration: 'none' }}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''} style={{ textDecoration: 'none' }}>About</Link>
        </li>
        <li>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active-link' : ''} style={{ textDecoration: 'none' }}>Skills</Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''} style={{ textDecoration: 'none' }}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''} style={{ textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
