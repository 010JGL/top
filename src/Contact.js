import React from 'react';
import { Typography, Container, Grid, Box } from '@mui/material';

const Contact = () => {
  return (
    <div style={{ backgroundColor: 'black', padding: '20px 0', marginTop: '40px' }}>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="space-between">
          {/* Logo (Placeholder for future addition) */}
          <Grid item xs={12} sm={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              style={{
                width: '150px',
                height: '50px',
                backgroundColor: 'gray', // Placeholder for logo
                borderRadius: '10px',
              }}
            >
              {/* Add your logo here later */}
            </Box>
          </Grid>

          {/* Contact Information in one row */}
          <Grid item xs={12} sm={9}>
            <Grid container justifyContent="space-between" alignItems="center">
              {/* Email */}
              <Grid item style={{ textAlign: 'center' }}>
                <Typography variant="body1" style={{ color: 'white' }}>
                  Email: <a href="mailto:GestionTopsDuTop@gmail.com" style={{ color: 'white' }}>GestionTopsDuTop@gmail.com</a>
                </Typography>
              </Grid>

              {/* Location */}
              <Grid item style={{ textAlign: 'center' }}>
                <Typography variant="body1" style={{ color: 'white' }}>
                  Located in: Chambly, QC
                </Typography>
              </Grid>

              {/* Operating Hours */}
              <Grid item style={{ textAlign: 'center' }}>
                <Typography variant="body1" style={{ color: 'white' }}>
                  Operating Hours: Mon-Fri, 7:00 AM - 7:00 PM <br />
                  Sat-Sun, Appointment only
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


