import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ComparePage from './pages/ComparePage';
import TimelinePage from './pages/TimelinePage';
import MainNavigation from './MainNavigation'; 
import styling from '/again/src/MainNavigation.Module.css';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/compare-page" element={<ComparePage />} />
        <Route path="/timeline-page" element={<TimelinePage />} />
      </Routes>
    </div>
  );
}

export default App;


