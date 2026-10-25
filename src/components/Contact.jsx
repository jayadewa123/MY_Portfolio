import React from 'react';
import { portfolioData } from '../data';
import { FiMail, FiMapPin, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const { personalInfo } = portfolioData;
  const whatsappNum = `94${personalInfo.phone.replace(/^0/, '')}`;

  return (
    <section id="contact" className="section container deck-contact-section">
      {/* Section Header */}
      <div className="section-title text-center" style={{ marginBottom: '45px' }}>
        <span className="section-badge">Get In Touch</span>
        <h2 className="title-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, marginTop: '8px' }}>
          Let's Connect & Collaborate
        </h2>
        <p style={{ color: 'var(--text-secondary, #94a3b8)', maxWidth: '640px', margin: '12px auto 0', fontSize: '0.98rem' }}>
          Have a project idea, open role, or just want to discuss software and design? Reach out anytime!
        </p>
      </div>

      {/* Slide Deck Presentation Cards (Matching Reference Image 2) */}
      <div className="deck-presentation-wrapper">
        
        {/* ========================================================
            Slide 7: "Contact Me" Crisp Executive Slide Card
            ======================================================== */}
        <div className="deck-card deck-card-light">
          {/* Bottom Left Geometric Chevron Accent (from Reference) */}
          <div className="deck-corner-wedge light" aria-hidden="true" />
          <div className="deck-corner-stripe" aria-hidden="true" />

          {/* Top Right Decorative Dot Matrix (Vector SVG) */}
          <svg className="deck-dot-svg" width="70" height="55" viewBox="0 0 70 55" fill="none" aria-hidden="true">
            {[0, 1, 2, 3].map((row) =>
              [0, 1, 2, 3, 4].map((col) => (
                <circle key={`${row}-${col}`} cx={col * 14 + 7} cy={row * 14 + 7} r="2.4" fill="#2563eb" />
              ))
            )}
          </svg>

          {/* Classic Serif Title */}
          <h3 className="deck-light-title">Contact Me</h3>

          <div className="deck-light-content-grid">
            {/* Left Column: Direct Contact Info List */}
            <div className="deck-contact-list">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNum}`}
                target="_blank"
                rel="noopener noreferrer"
                className="deck-contact-item"
              >
                <div className="deck-icon-circle whatsapp">
                  <FaWhatsapp />
                </div>
                <div className="deck-contact-meta">
                  <span className="deck-meta-label">WhatsApp</span>
                  <span className="deck-meta-value">+94 {personalInfo.phone.substring(1)}</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="deck-contact-item"
              >
                <div className="deck-icon-circle navy">
                  <FiMail />
                </div>
                <div className="deck-contact-meta">
                  <span className="deck-meta-label">Email</span>
                  <span className="deck-meta-value">{personalInfo.email}</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="deck-contact-item"
              >
                <div className="deck-icon-circle navy">
                  <FiInstagram />
                </div>
                <div className="deck-contact-meta">
                  <span className="deck-meta-label">Instagram</span>
                  <span className="deck-meta-value">@Dilanka_jaya_official</span>
                </div>
              </a>

              {/* Location */}
              <div className="deck-contact-item">
                <div className="deck-icon-circle navy">
                  <FiMapPin />
                </div>
                <div className="deck-contact-meta">
                  <span className="deck-meta-label">Location</span>
                  <span className="deck-meta-value">Avissawella, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Vertical Center Divider */}
            <div className="deck-vertical-divider" />

            {/* Right Column: Creative Tagline & Professional Link (QR Omitted as requested) */}
            <div className="deck-vision-side">
              <div className="deck-vision-text-wrap">
                <p className="deck-vision-lead">
                  Let's build your brand<br />into something
                </p>
                <div className="deck-powerful-wrap">
                  <span className="deck-powerful-script">Powerful!</span>
                  <svg className="deck-brush-underline" viewBox="0 0 140 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 11C40 3 95 3 136 12" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Vector Line-Art Rocket (Matches Reference Sketch, NOT an emoji) */}
              <div className="deck-rocket-wrap">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="deck-vector-rocket"
                >
                  <path d="M44 8C32 10 24 22 22 34L30 42C42 40 54 32 56 20C56 12 52 8 44 8Z" stroke="#0b2246" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="39" cy="25" r="4.5" stroke="#0b2246" strokeWidth="2" fill="none"/>
                  <path d="M22 34L14 38L18 46L26 42" stroke="#0b2246" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30 42L34 50L42 46L38 38" stroke="#0b2246" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 52L16 48" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 56L24 52" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 44L12 40" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Professional Social CTAs (LinkedIn + GitHub) */}
              <div className="deck-right-action">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deck-social-cta linkedin"
                >
                  <FiLinkedin className="deck-li-icon" /> LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deck-social-cta github"
                >
                  <FiGithub className="deck-li-icon" /> GitHub
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            Slide 8: "Thank You!" Deep Midnight Navy Slide Card
            ======================================================== */}
        <div className="deck-card deck-card-dark">
          {/* Bottom Left Geometric Chevron Accent */}
          <div className="deck-corner-wedge dark" aria-hidden="true" />

          <div className="deck-dark-center">
            {/* Elegant Calligraphy Headline */}
            <h3 className="deck-thankyou-script">Thank You!</h3>

            {/* Clean Flat Vector Heart Icon (Not an emoji) */}
            <div className="deck-heart-box">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="#38bdf8"
                xmlns="http://www.w3.org/2000/svg"
                className="deck-vector-heart"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>

            {/* Clean Typography */}
            <p className="deck-thankyou-lead">
              Let's work together and make<br />your brand stand out.
            </p>
            <p className="deck-thankyou-sub">
              I'm <span className="deck-blue-highlight">excited</span> to work with you!
            </p>

            {/* Glowing Accent Baseline */}
            <div className="deck-glow-bar" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
