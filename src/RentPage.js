import React from 'react';
import { Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';

const RentPage = () => {
  const cities = [
    { city: 'Saint-Jean-Baptiste', rentals: [
      { type: '4 1/2 Apartment', price: '$1550/month', link: 'https://www.facebook.com/marketplace/item1' },
      { type: '4 1/2 Apartment', price: '$1550/month', link: 'https://www.facebook.com/marketplace/item2' },
      
    ] },
    { city: 'Sherbrooke', rentals: [
      { type: '5 1/2 Apartment', price: '$1600/month', link: 'https://www.facebook.com/marketplace/item4' },
      { type: '5 1/2 Apartment', price: '$1600/month', link: 'https://www.facebook.com/marketplace/item5' },
      { type: '5 1/2 Apartment', price: '$1600/month', link: 'https://www.facebook.com/marketplace/item5' },
    ] },
  ];

  return (
    <div>
      <Container style={{ textAlign: 'center', padding: '20px' }}>
        {/* Page Title */}
        <Typography variant="h3" gutterBottom>
          Rent Options
        </Typography>
        <Typography variant="body1" gutterBottom>
          Browse available rental options by city and category.
        </Typography>

        {/* Rental Options by City */}
        {cities.map((city, cityIndex) => (
          <div key={cityIndex}>
            <Typography variant="h4" gutterBottom style={{ marginTop: '40px' }}>
              {city.city}
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {city.rentals.map((rental, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Card
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      cursor: 'pointer',
                    }}
                  >
                    <CardContent
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '20px',
                      }}
                    >
                      <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                        {rental.type}
                      </Typography>
                      <Typography variant="body1" style={{ margin: '10px 0' }}>
                        {rental.price}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        href={rental.link}
                        target="_blank"
                        style={{ marginTop: '10px' }}
                      >
                        View on Facebook Marketplace
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default RentPage;
