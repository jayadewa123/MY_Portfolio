import React from 'react';

const About = () => {
  return (
    <section id="about" className="section container about-section">
      <h2 className="section-title">About Me</h2>
      <p className="about-subtitle">Get to know me better</p>

      <div className="about-grid">
        {/* Left Column: Text */}
        <div className="about-left">
          <h3 className="about-headline">Passionate Developer Creating Digital Solutions</h3>

          <div className="about-text">
            <p>
              Hi! I'm Dilanka, a BSc (Hons) Information Technology undergraduate at SLIIT with a passion for full-stack web development. I enjoy transforming ideas into functional, user-friendly applications by combining both frontend and backend technologies.
            </p>
            <p>
              My technical background includes Java, Python, JavaScript, React, and Spring Boot, which I have used to develop web-based solutions and strengthen my understanding of modern software development practices. I also have exposure to UI/UX design with Figma and mobile application development using Android Studio.
            </p>
            <p>
              I am constantly learning and exploring new technologies to improve my skills as a developer. I am particularly interested in building scalable web applications, writing clean and maintainable code, and gaining industry experience through challenging projects and collaborative development environments.
            </p>
          </div>
        </div>

        {/* Right Column: Key Highlights */}
        <div className="about-right">
          <div style={{
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            padding: '40px',
            width: '100%',
            maxWidth: '450px',
          }}>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.6rem', fontWeight: '700', marginBottom: '8px' }}>
              Highlights
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '35px' }}>
              Key achievements & milestones
            </p>

            {[
              { icon: '🚀', label: 'Projects Completed', value: '7+' },
              { icon: '💻', label: 'Technologies Used', value: '27+' },
              { icon: '🎓', label: 'Years of Learning', value: '3+' },
              { icon: '📜', label: 'Certifications', value: '1' },
            ].map((item, idx) => (
              <div key={idx} className="highlight-row" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                padding: '16px 20px',
                borderRadius: '12px',
                marginBottom: idx < 3 ? '12px' : '0',
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.15)',
                transition: 'all 0.3s ease',
              }}>
                <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>{item.label}</p>
                </div>
                <span style={{
                  color: 'var(--accent)',
                  fontSize: '1.6rem',
                  fontWeight: '800',
                  fontFamily: 'Outfit, sans-serif',
                  textShadow: '0 0 15px rgba(56, 189, 248, 0.4)',
                }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .highlight-row:hover {
          background: rgba(56, 189, 248, 0.18) !important;
          border-color: rgba(56, 189, 248, 0.4) !important;
          transform: translateX(6px);
        }
      `}</style>
    </section>
  );
};

export default About;
