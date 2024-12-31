import React from 'react';
import { Typography, Container } from '@mui/material';

const Realisations = () => {
  return (
    <div>
      <Container>
        <Typography variant="h3" gutterBottom>
          Our Realisations
        </Typography>
        <Typography variant="body1">
          {/* Add your content for Realisations here */}
          Here, you can showcase different projects with a combination of pictures and time-lapse videos.
        </Typography>
      </Container>
    </div>
  );
};

export default Realisations;

