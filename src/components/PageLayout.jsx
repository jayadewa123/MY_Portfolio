import React from 'react';
import Navbar from './Navbar';
import MeshBackground from './MeshBackground';

const PageLayout = ({ children }) => {
  return (
    <div className="portfolio-page">
      <MeshBackground />
      <div className="portfolio-content">
        <Navbar />
        <main style={{ marginTop: '100px', minHeight: 'calc(100vh - 200px)' }}>
          {children}
        </main>
        <footer style={{ textAlign: 'center', padding: '20px', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p>© {new Date().getFullYear()} Dilanka Jayadewa. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PageLayout;
