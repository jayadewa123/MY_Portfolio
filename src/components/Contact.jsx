import React from 'react';
import { portfolioData } from '../data';
import { FiMail, FiPhone, FiHome } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <h2 className="section-title">Get In Touch</h2>

      <div style={styles.contactWrapper}>
        <p style={styles.text}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* Main Box wrapping all cards */}
        <div style={styles.mainContainer}>
          <div style={styles.cardsGrid}>

          {/* Email Card */}
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            style={styles.card}
            className="contact-card"
            target="_self"
            rel="noreferrer"
          >
            <div style={styles.iconBox}>
              <FiMail size={26} />
            </div>
            <div style={styles.cardInfo}>
              <h4 style={styles.cardTitle}>Email</h4>
              <p style={styles.cardText}>{portfolioData.personalInfo.email}</p>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href={`tel:${portfolioData.personalInfo.phone}`}
            style={styles.card}
            className="contact-card"
            target="_self"
            rel="noreferrer"
          >
            <div style={styles.iconBox}>
              <FiPhone size={26} />
            </div>
            <div style={styles.cardInfo}>
              <h4 style={styles.cardTitle}>Phone</h4>
              <p style={styles.cardText}>{portfolioData.personalInfo.phone}</p>
            </div>
          </a>

          {/* Location Card */}
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(
              portfolioData.personalInfo.Location || 'Avissawella, SriLanka'
            )}`}
            target="_blank"
            rel="noreferrer"
            style={styles.card}
            className="contact-card"
          >
            <div style={styles.iconBox}>
              <FiHome size={26} />
            </div>
            <div style={styles.cardInfo}>
              <h4 style={styles.cardTitle}>Location</h4>
              <p style={styles.cardText}>Avissawella, Sri Lanka</p>
            </div>
          </a>

        </div>
        </div>



      </div>

      <style>{`
        .contact-card {
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
        }
        .contact-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent) !important;
          box-shadow: 0 12px 30px rgba(56, 189, 248, 0.2) !important;
        }
        .contact-button {
          transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease !important;
        }
        .contact-button:hover {
          background: var(--accent) !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 25px rgba(56, 189, 248, 0.35) !important;
        }
        }
      `}</style>
    </section>
  );
};

const styles = {
  contactWrapper: {
    maxWidth: '960px',
    margin: '0 auto',
    textAlign: 'center',
  },
  text: {
    color: 'var(--text-secondary)',
    fontSize: '1.1rem',
    fontWeight: '500',
    maxWidth: '600px',
    margin: '0 auto 50px',
    lineHeight: '1.7',
  },

  /* ── Main Container & Stacked Cards ── */
  mainContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '24px',
    padding: '40px',
    margin: '0 auto 40px auto',
    maxWidth: '450px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
  cardsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
    padding: '28px 24px',
    backgroundColor: 'rgba(255,255,255,0.03)',
    backdropFilter: 'blur(12px)',
    borderRadius: '18px',
    border: '1px solid rgba(255,255,255,0.07)',
    textDecoration: 'none',
    boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
    cursor: 'pointer',
  },

  /* ── Icon circle ── */
  iconBox: {
    flexShrink: 0,
    width: '58px',
    height: '58px',
    borderRadius: '50%',
    backgroundColor: 'rgba(56, 189, 248, 0.12)',
    color: 'var(--accent)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ── Text next to icon ── */
  cardInfo: {
    textAlign: 'left',
  },
  cardTitle: {
    color: 'var(--text-primary)',
    fontSize: '1.1rem',
    fontWeight: '700',
    margin: '0 0 4px 0',
  },
  cardText: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    margin: 0,
    wordBreak: 'break-all',
  },

  /* ── Note box ── */
  noteBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '20px 30px',
    backgroundColor: 'rgba(56, 189, 248, 0.04)',
    borderLeft: '4px solid var(--accent)',
    borderRadius: '12px',
    textAlign: 'left',
    maxWidth: '700px',
    margin: '0 auto 36px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  },
  notePin: {
    fontSize: '1.5rem',
    flexShrink: 0,
  },
  noteText: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    margin: 0,
    lineHeight: '1.6',
  },

  /* ── Button ── */
  contactButton: {
    display: 'inline-block',
    padding: '14px 44px',
    background: 'transparent',
    border: '2px solid var(--accent)',
    color: 'var(--accent)',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '600',
    textDecoration: 'none',
    letterSpacing: '0.5px',
    cursor: 'pointer',
  },
};

export default Contact;
