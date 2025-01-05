import React from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardActionArea } from '@mui/material';
import PropTypes from 'prop-types';
import { useLanguage } from './LanguageContext'; // Import the language context

// GalleryTemplate Component
const GalleryTemplate = ({ title, description, galleryItems }) => {
  if (!Array.isArray(galleryItems) || galleryItems.length === 0) {
    return (
      <Container style={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h5" color="textSecondary">
          No gallery items to display.
        </Typography>
      </Container>
    );
  }

  return (
    <div>
      <Container style={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '20px' }}>
          {description}
        </Typography>

        <Grid container spacing={2}> {/* Reduced spacing here */}
          {galleryItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}> {/* Reduced bottom margin */}
                <CardActionArea>
                  <CardMedia
                    component={item.type === 'video' ? 'video' : 'img'}
                    image={item.image || '/path/to/default.jpg'}
                    src={item.video || null}
                    autoPlay
                    loop
                    muted
                    controls={item.type === 'video'}
                    alt={item.alt || 'Gallery Item'}
                    style={{
                      height: '200px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

// Define PropTypes for GalleryTemplate
GalleryTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  galleryItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['image', 'video']).isRequired,
      image: PropTypes.string,
      video: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
};

// Main Component
const GalleryPage = () => {
  const { language } = useLanguage(); // Get current language

  // Sample Data for the Gallery with language handling
  const galleryData = {
    title: language === 'fr' ? 'Galerie de maisons unifamiliales' : 'Single-Family Home Gallery',
    description: language === 'fr' ? 'Voici quelques-uns de nos projets récents.' : 'These are some of our recent projects.',
    galleryItems: [
      { type: 'image', image: '/images/realisations/houses/jour.jpg', alt: language === 'fr' ? 'Image exemple' : 'Sample Image' },
      { type: 'image', image: '/images/realisations/houses/entree.jpg', alt: language === 'fr' ? 'Image exemple' : 'Sample Image' },
      { type: 'image', image: '/images/realisations/houses/cuisine.jpg', alt: language === 'fr' ? 'Image exemple' : 'Sample Image' },
      { type: 'image', image: '/images/realisations/houses/chambre.jpg', alt: language === 'fr' ? 'Image exemple' : 'Sample Image' },
      { type: 'image', image: '/images/realisations/houses/dos.jpg', alt: language === 'fr' ? 'Image exemple' : 'Sample Image' },
      { type: 'image', image: '/images/realisations/houses/marches.jpg', alt: language === 'fr' ? 'Image exemple' : 'Sample Image' },
      { type: 'image', image: '/images/realisations/houses/salon.jpg', alt: language === 'fr' ? 'Image exemple' : 'Sample Image' },
      { type: 'image', image: '/images/realisations/houses/sdb.jpg', alt: language === 'fr' ? 'Image exemple' : 'Sample Image' },
      { type: 'image', image: '/images/realisations/houses/nuit.jpg', alt: language === 'fr' ? 'Image exemple' : 'Sample Image' },
      { type: 'image', image: '/images/realisations/houses/sdb2.jpg', alt: language === 'fr' ? 'Image exemple' : 'Sample Image' },
      { type: 'image', image: '/images/realisations/houses/cuisine2.jpg', alt: language === 'fr' ? 'Image exemple' : 'Sample Image' },
    ],
  };

  return (
    <div>
      <GalleryTemplate
        title={galleryData.title}
        description={galleryData.description}
        galleryItems={galleryData.galleryItems}
      />
    </div>
  );
};

export default GalleryPage;

