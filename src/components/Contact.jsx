import React from 'react';
import { portfolioData } from '../data';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiFacebook, FiInstagram, FiHome } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <h2 className="section-title">Get In Touch</h2>

      <div style={styles.contactWrapper}>
        <p style={styles.text}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div style={styles.linksContainer}>
          <a href={`mailto:${portfolioData.personalInfo.email}`} style={styles.linkCard} className="contact-card">
            <div style={styles.iconBox}><FiMail size={24} /></div>
            <div>
              <h4 style={styles.cardTitle}>Email</h4>
              <p style={styles.cardText}>{portfolioData.personalInfo.email}</p>
            </div>
          </a>

          <a href={`tel:${portfolioData.personalInfo.phone}`} style={styles.linkCard} className="contact-card">
            <div style={styles.iconBox}><FiPhone size={24} /></div>
            <div>
              <h4 style={styles.cardTitle}>Phone</h4>
              <p style={styles.cardText}>{portfolioData.personalInfo.phone}</p>
            </div>
          </a>

          <a href={`tel:${portfolioData.personalInfo.Location}`} style={styles.linkCard} className="contact-card">
            <div style={styles.iconBox}><FiHome size={24} /></div>
            <div>
              <h4 style={styles.cardTitle}>Location</h4>
              <p style={styles.cardText}>Avissawella, SriLanka</p>
            </div>
          </a>

          <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" style={styles.linkCard} className="contact-card">
            <div style={styles.iconBox}><FiLinkedin size={24} /></div>
            <div>
              <h4 style={styles.cardTitle}>LinkedIn</h4>
              <p style={styles.cardText}>Dilanka Jayadewa</p>
            </div>
          </a>

          <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" style={styles.linkCard} className="contact-card">
            <div style={styles.iconBox}><FiGithub size={24} /></div>
            <div>
              <h4 style={styles.cardTitle}>GitHub</h4>
              <p style={styles.cardText}>jayadewa123</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  contactWrapper: {
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  text: {
    color: 'var(--text-secondary)',
    fontSize: '1.1rem',
    marginBottom: '50px',
    fontWeight: '500',
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    textAlign: 'left',
  },
  linkCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px 30px',
    backgroundColor: 'var(--bg-glass)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  },
  iconBox: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    backgroundColor: 'rgba(45, 212, 191, 0.1)',
    color: 'var(--accent)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitle: {
    color: 'var(--text-primary)',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '4px',
  },
  cardText: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
  }
};

export default Contact;
