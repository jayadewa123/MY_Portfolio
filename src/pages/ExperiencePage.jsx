import React from 'react';
import Navbar from '../components/Navbar';
import MeshBackground from '../components/MeshBackground';

const certifications = [
  {
    id: 1,
    title: 'MongoDB Atlas Administrator Path',
    issuer: 'MongoDB, Inc.',
    date: 'April 29, 2026',
    description: 'Successfully completed the MongoDB Atlas Administrator Path certification, gaining deep expertise in managing, deploying, and administering MongoDB databases on the Atlas cloud platform.',
    icon: '🍃',
    color: '#00ED64',
    bgColor: 'rgba(0, 237, 100, 0.08)',
    borderColor: 'rgba(0, 237, 100, 0.3)',
  }
];

const education = [
  {
    id: 1,
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    degree: 'BSc (Hons) in Information Technology',
    field: 'Specializing in Information Technology',
    period: '2023 - Present',
    status: 'Undergraduate',
    color: '#9E6752',
  },
  {
    id: 2,
    institution: 'Thalduwa Buddhist College',
    degree: 'G.C.E. Advanced Level',
    field: 'Arts Stream',
    period: 'Completed',
    status: 'Successfully Completed',
    color: '#73766A',
  }
];

const ExperiencePage = () => {
  return (
    <div className="portfolio-page">
      <MeshBackground />
      <Navbar />

      <div className="container section" style={{ paddingTop: '150px' }}>
        <h2 className="section-title">Experience & Education</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '-40px', marginBottom: '80px', fontSize: '1.1rem' }}>
          My academic and professional journey
        </p>

        {/* ===== Education Section ===== */}
        <div style={{ maxWidth: '850px', margin: '0 auto 80px' }}>
          <h3 style={styles.sectionHeading}>
            <span style={styles.sectionLine}></span>
            Education
            <span style={styles.sectionLine}></span>
          </h3>

          <div style={styles.timeline}>
            {education.map((edu, idx) => (
              <div key={edu.id} className="timeline-item-anim" style={styles.timelineItem}>
                {/* Connector dot */}
                <div style={{ ...styles.dot, backgroundColor: edu.color, boxShadow: `0 0 15px ${edu.color}` }}></div>
                {/* Card */}
                <div className="exp-card" style={{ ...styles.card, borderTop: `3px solid ${edu.color}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <h4 style={styles.cardTitle}>{edu.institution}</h4>
                      <h5 style={styles.cardSubtitle}>{edu.degree}</h5>
                      <p style={styles.cardField}>{edu.field}</p>
                    </div>
                    <div style={{ ...styles.badge, backgroundColor: `${edu.color}22`, color: edu.color, border: `1px solid ${edu.color}44` }}>
                      {edu.period}
                    </div>
                  </div>
                  <p style={styles.cardStatus}>
                    <span style={{ color: edu.color }}>●</span> {edu.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Certifications Section ===== */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h3 style={styles.sectionHeading}>
            <span style={styles.sectionLine}></span>
            Certifications
            <span style={styles.sectionLine}></span>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {certifications.map((cert) => (
              <div key={cert.id} className="exp-card" style={{ ...styles.card, borderTop: `3px solid ${cert.color}`, background: cert.bgColor }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  {/* Icon */}
                  <div style={{ fontSize: '2.5rem', lineHeight: 1, minWidth: '50px', textAlign: 'center', paddingTop: '4px' }}>
                    {cert.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                      <div>
                        <h4 style={{ ...styles.cardTitle, color: cert.color }}>{cert.title}</h4>
                        <p style={styles.cardField}>{cert.issuer}</p>
                      </div>
                      <div style={{ ...styles.badge, backgroundColor: `${cert.color}22`, color: cert.color, border: `1px solid ${cert.color}44` }}>
                        {cert.date}
                      </div>
                    </div>
                    <p style={styles.cardStatus}>{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .exp-card {
          background: rgba(45, 67, 100, 0.3);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(158, 103, 82, 0.2);
          padding: 30px 35px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .exp-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(158, 103, 82, 0.2);
        }
        .timeline-item-anim {
          animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

const styles = {
  sectionHeading: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    color: 'var(--text-primary)',
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '40px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  sectionLine: {
    flex: 1,
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(158, 103, 82, 0.5), transparent)',
    display: 'block',
  },
  timeline: {
    position: 'relative',
    paddingLeft: '40px',
    borderLeft: '2px dashed rgba(158, 103, 82, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  timelineItem: {
    position: 'relative',
  },
  dot: {
    position: 'absolute',
    left: '-49px',
    top: '28px',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    border: '3px solid #190019',
  },
  card: {
    borderRadius: '16px',
    padding: '28px 35px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  cardTitle: {
    color: 'var(--text-primary)',
    fontSize: '1.3rem',
    margin: '0 0 6px',
    fontWeight: '700',
  },
  cardSubtitle: {
    color: 'var(--text-secondary)',
    fontSize: '1.05rem',
    margin: '0 0 4px',
    fontWeight: '500',
  },
  cardField: {
    color: '#DFB6B2',
    fontSize: '0.9rem',
    margin: 0,
    opacity: 0.8,
  },
  cardStatus: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    margin: 0,
    lineHeight: '1.6',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  badge: {
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
    whiteSpace: 'nowrap',
  },
};

export default ExperiencePage;
