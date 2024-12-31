import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom'; // Use Link for internal navigation

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Company Logo */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Top Construction
        </Typography>

        {/* Navigation Links */}
        <div>
          <Button color="inherit" component={Link} to="/" style={{ marginRight: '15px' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/realisations" style={{ marginRight: '15px' }}>
            Realisations
          </Button>
          <Button color="inherit" href="#rents" style={{ marginRight: '15px' }}>
            Rents
          </Button>
          <Button color="inherit" href="#roofing-quote" style={{ marginRight: '15px' }}>
            Roofing Quote
          </Button>
          <Button color="inherit" href="#contact">
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
