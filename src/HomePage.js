import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, MenuItem, Menu, Container } from '@mui/material';
import { useState } from 'react';
import "./HomePage.css";

const HomePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <AppBar position="static" className="navbar">
        <Toolbar>
          {/* Company Logo */}
          <Typography variant="h6" className="logo">
            Top Construction
          </Typography>

          {/* Navigation Links */}
          <div className="nav-links">
            <Button color="inherit" href="#realisations" className="nav-button">Realisations</Button>
            <Button color="inherit" href="#rents" className="nav-button">Rents</Button>
            <Button color="inherit" href="#roofing-quote" className="nav-button">Roofing Quote</Button>
            <Button color="inherit" href="#contact" className="nav-button">Contact</Button>
          </div>

          {/* Language Switcher */}
          <Button
            color="inherit"
            className="language-switcher"
            onClick={handleLanguageClick}
          >
            ENG/FR
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleLanguageClose}
          >
            <MenuItem onClick={handleLanguageClose}>English</MenuItem>
            <MenuItem onClick={handleLanguageClose}>Français</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Home Page Content */}
      <div className="hero-section">
        <div className="overlay">
          <Container className="hero-container">
            <Typography variant="h3" className="hero-title">
              Welcome to Top Construction
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

