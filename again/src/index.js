import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import LandingPage from './pages/LandingPage';
import ComparePage from './pages/ComparePage';
import TimelinePage from './pages/TimelinePage';



ReactDOM.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>,
  document.getElementById('root')
);


