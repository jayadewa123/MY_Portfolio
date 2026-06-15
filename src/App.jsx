import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Landing />} />
        <Route path="/experience" element={<Landing />} />
        <Route path="/skills" element={<Landing />} />
        <Route path="/projects" element={<Landing />} />
        <Route path="/contact" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
