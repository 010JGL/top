import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Import the custom hook

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { language, switchLanguage } = useLanguage(); // Access language and switchLanguage from context

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = (lang) => {
    if (lang) {
      switchLanguage(lang); // Update the language in context
    }
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
            style={{ marginRight: '15px' }}
          >
            {language === 'en' ? 'Home' : 'Accueil'}
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/realisations"
            style={{ marginRight: '15px' }}
          >
            {language === 'en' ? 'Realisations' : 'Réalisations'}
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/roofing"
            style={{ marginRight: '15px' }}
          >
            {language === 'en' ? 'Roofing Quote' : 'Soumission toiture'}
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/rentPage"
            style={{ marginRight: '15px' }}
          >
            {language === 'en' ? 'For Rent' : 'À Louer'}
          </Button>
          <Button
            color="inherit"
            onClick={scrollToContact}
            style={{ marginRight: '15px' }}
          >
            {language === 'en' ? 'Contact' : 'Contact'}
          </Button>
        </div>

        {/* Language Switcher */}
        <Button color="inherit" onClick={handleLanguageClick}>
          {language === 'en' ? 'ENG/FR' : 'FR/ENG'}
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleLanguageClose()}>
          <MenuItem onClick={() => handleLanguageClose('en')}>English</MenuItem>
          <MenuItem onClick={() => handleLanguageClose('fr')}>Français</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


