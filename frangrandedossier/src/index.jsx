import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CV from './CV/CV';

function PerlnessRedirect() {
  useEffect(() => {
    window.location.href = '/ThePerlness/game.html';
  }, []);
  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/ThePerlness" element={<PerlnessRedirect />} />
    </Routes>
  </Router>
);