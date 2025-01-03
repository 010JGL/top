import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
      <Toolbar>
        {/* Company Logo */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Top Construction
        </Typography>

        {/* Navigation Links */}
        <div>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            style={{
              marginRight: '15px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#FF5733')}
            onMouseLeave={(e) => (e.target.style.color = 'white')}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/realisations"
            style={{
              marginRight: '15px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#FF5733')}
            onMouseLeave={(e) => (e.target.style.color = 'white')}
          >
            Realisations
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/roofing"
            style={{
              marginRight: '15px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#FF5733')}
            onMouseLeave={(e) => (e.target.style.color = 'white')}
          >
            Roofing Quote
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/rentPage"
            style={{
              marginRight: '15px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#FF5733')}
            onMouseLeave={(e) => (e.target.style.color = 'white')}
          >
            For Rent
          </Button>
          <Button
            color="inherit"
            onClick={scrollToContact}
            style={{
              marginRight: '15px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#FF5733')}
            onMouseLeave={(e) => (e.target.style.color = 'white')}
          >
            Contact
          </Button>
        </div>

        {/* Language Switcher */}
        <Button color="inherit" onClick={handleLanguageClick}>
          ENG/FR
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleLanguageClose}>
          <MenuItem onClick={handleLanguageClose}>English</MenuItem>
          <MenuItem onClick={handleLanguageClose}>Français</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

