import React from 'react';
import { Typography, Container, Grid, Box } from '@mui/material';
import { useLanguage } from './LanguageContext';  // Import the language context

const Contact = () => {
  const { language } = useLanguage();  // Access the current language

  return (
    <div style={{ backgroundColor: 'black', padding: '20px 0', marginTop: '40px' }}>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="space-between">
          {/* Logo (Placeholder for future addition) */}
          <Grid item xs={12} sm={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              style={{
                width: '150px',
                height: '40px', // Reduced height to make space for longer text
                backgroundColor: 'gray', // Placeholder for logo
                borderRadius: '10px',
              }}
            >
              {/* Add your logo here later */}
            </Box>
          </Grid>

          {/* Contact Information on the same line */}
          <Grid item xs={12} sm={9}>
            <Grid container justifyContent="center" alignItems="center" spacing={3}>
              {/* Email */}
              <Grid item>
                <Typography variant="body1" style={{ color: 'white' }}>
                  {language === 'fr' ? 'Courriel:' : 'Email:'}{" "}
                  <a href="mailto:GestionTopsDuTop@gmail.com" style={{ color: 'white' }}>
                    GestionTopsDuTop@gmail.com
                  </a>
                </Typography>
              </Grid>

              {/* Location */}
              <Grid item>
                <Typography variant="body1" style={{ color: 'white' }}>
                  {language === 'fr' ? 'Situé à: Chambly, QC' : 'Located in: Chambly, QC'}
                </Typography>
              </Grid>

              {/* Operating Hours */}
              <Grid item>
                <Typography variant="body1" style={{ color: 'white' }}>
                  {language === 'fr' ? 'Heures d\'ouverture:' : 'Operating Hours:'}{" "} <br />
                  {language === 'fr' ? 'Lundi-Vendredi: 7h00 - 19h00' : 'Mon-Fri, 7:00 AM - 7:00 PM'} <br />
                  {language === 'fr' ? 'Samedi-Dimanche: sur rendez-vous seulement' : 'Sat-Sun, Appointment only'}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;




