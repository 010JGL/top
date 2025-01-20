import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Import the custom hook

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { path: '/', label: language === 'en' ? 'Home' : 'Accueil' },
    { path: '/realisations', label: language === 'en' ? 'Realisations' : 'Réalisations' },
    { path: '/roofing', label: language === 'en' ? 'Roofing Quote' : 'Soumission toiture' },
    { path: '/rentPage', label: language === 'en' ? 'For Rent' : 'À Louer' },
  ];

  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Top Construction
        </Typography>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              color="inherit"
              component={RouterLink}
              to={link.path}
              style={{ marginRight: '15px' }}
            >
              {link.label}
            </Button>
          ))}
          <Button color="inherit" onClick={scrollToContact} style={{ marginRight: '15px' }}>
            {language === 'en' ? 'Contact' : 'Contact'}
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton color="inherit" onClick={toggleMobileMenu}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={mobileOpen} onClose={toggleMobileMenu}>
          <List style={{ width: '250px' }}>
            {navLinks.map((link) => (
              <ListItem
                key={link.path}
                button
                component={RouterLink}
                to={link.path}
                onClick={toggleMobileMenu}
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
            <ListItem button onClick={scrollToContact}>
              <ListItemText primary={language === 'en' ? 'Contact' : 'Contact'} />
            </ListItem>
            <ListItem>
              <Button color="inherit" onClick={handleLanguageClick} fullWidth>
                {language === 'en' ? 'ENG/FR' : 'FR/ENG'}
              </Button>
            </ListItem>
          </List>
        </Drawer>

        {/* Language Switcher Menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleLanguageClose()}>
          <MenuItem onClick={() => handleLanguageClose('en')}>English</MenuItem>
          <MenuItem onClick={() => handleLanguageClose('fr')}>Français</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


