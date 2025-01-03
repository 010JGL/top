import React from 'react';
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Import the language context

const Realisations = () => {
  const { language } = useLanguage(); // Access the current language

  const projects = [
    {
      title: language === 'fr' ? 'Maisons unifamiliales' : 'Single-Family Homes',
      description: language === 'fr' ? 'Maisons unifamiliales modernes et magnifiques.' : 'Beautiful and modern single-family homes.',
      image: '/images/realisations/single-family.jpg',
      link: '/SingleFamilyHome',
    },
    {
      title: language === 'fr' ? 'Unités multiples' : 'Multi Units',
      description: language === 'fr' ? 'Bâtiments fonctionnels et élégants à plusieurs unités.' : 'Stylish and functional multi-unit buildings.',
      image: '/images/realisations/multi-units.jpg',
      link: '/MultiUnits',
    },
    {
      title: language === 'fr' ? 'Rénovation' : 'Renovation',
      description: language === 'fr' ? 'Projets de rénovation spécialisés pour tous besoins.' : 'Expert renovation projects for all needs.',
      image: '/images/realisations/renovation.jpg',
      link: '/Renovation',
    },
    {
      title: language === 'fr' ? 'Toiture' : 'Roofing',
      description: language === 'fr' ? 'Services de toiture de haute qualité.' : 'High-quality roofing services.',
      image: '/images/realisations/roofing.jpg',
      link: '/RoofingJobs',
    },
  ];

  return (
    <div>
      <Container style={{ textAlign: 'center', padding: '20px' }}>
        {/* Title */}
        <Typography variant="h3" gutterBottom>
          {language === 'fr' ? 'Réalisation' : 'Realisations'}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ marginBottom: '20px' }}>
          {language === 'fr' ? 'Choisissez une catégorie de nos nombreux projets réalisés' : 'Choose a category of our many completed projects'}
        </Typography>

        {/* Cards */}
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={8} md={6} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to={project.link} style={{ textDecoration: 'none', width: '100%' }}>
                <Card
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    color: 'white',
                    position: 'relative',
                    borderRadius: '8px',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    boxShadow: '0 4px 8px rgb(0, 0, 0)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  <CardContent
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      width: '100%',
                      textAlign: 'center',
                      padding: '10px',
                    }}
                  >
                    <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Realisations;



