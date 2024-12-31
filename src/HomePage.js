import React from 'react';
import { Container, Typography } from '@mui/material';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      

      {/* Home Page Content */}
      <div className="hero-section">
        <div className="overlay">
          <Container className="hero-container">
            <Typography variant="h3" className="hero-title">
              Welcome to Les Tops du Top Construction
            </Typography>
            <Typography variant="h6" className="hero-subtitle">
              Your trusted partner in construction, roofing, and property rentals.
            </Typography>
          </Container>
        </div>
      </div>

      {/* Add Sections Placeholder */}
      <div className="sections">
        <div id="realisations" className="section">
          <Typography variant="h4" className="section-title">Our Realisations</Typography>
          {/* Content for Realisations */}
        </div>

        <div id="rents" className="section">
          <Typography variant="h4" className="section-title">Available Rentals</Typography>
          {/* Content for Rents */}
        </div>

        <div id="roofing-quote" className="section">
          <Typography variant="h4" className="section-title">Get a Roofing Quote</Typography>
          {/* Content for Roofing Quote */}
        </div>

        <div id="contact" className="section">
          <Typography variant="h4" className="section-title">Contact Us</Typography>
          {/* Content for Contact */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
