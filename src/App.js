import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Realisations from './Realisations'; // Correct import for Realisations
import Navbar from './Navbar'; // Correct import for Navbar
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Include Navbar here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/realisations" element={<Realisations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
