import React from 'react';
import { portfolioData } from '../data';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Featured Projects</h2>
      
      <div style={styles.grid}>
        {portfolioData.projects.map(project => (
          <div key={project.id} style={styles.card} className="project-card">
            <div style={styles.imageContainer}>
              <img src={project.image} alt={project.title} style={styles.image} />
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.title}>{project.title}</h3>
              <p style={styles.description}>{project.description}</p>
              
              <div style={styles.techStack}>
                {project.technologies.map((tech, index) => (
                  <span key={index} style={styles.tech}>{tech}</span>
                ))}
              </div>
              
              <div style={styles.links}>
                <a href={project.link} style={styles.iconLink}><FiGithub /> Code</a>
                <a href={project.link} style={styles.iconLink}><FiExternalLink /> Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  card: {
    backgroundColor: 'var(--bg-card)',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
  },
  cardContent: {
    padding: '30px',
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: 'var(--text-primary)',
  },
  description: {
    color: 'var(--text-secondary)',
    marginBottom: '25px',
    fontSize: '0.95rem',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '25px',
  },
  tech: {
    fontSize: '0.8rem',
    color: 'var(--accent)',
    backgroundColor: 'rgba(45, 212, 191, 0.1)',
    padding: '4px 12px',
    borderRadius: '20px',
    fontFamily: 'Outfit, sans-serif',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  iconLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
  }
};

export default Projects;
