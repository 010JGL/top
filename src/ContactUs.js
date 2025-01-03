import React, { useContext } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useLanguage } from './LanguageContext'; // Import useLanguage hook

const ContactUs = () => {
  const { language } = useLanguage(); // Get the current language using the hook
  
  const texts = {
    en: {
      title: "Contact Us Today",
      body1: `We are happy to help you realize your projects. Get in touch with us, and we can schedule an appointment to discuss your needs.`,
      body2: `We specialize in providing top-quality materials for construction, ensuring that your dream projects are built with the best resources.`,

      body3: `Although we are mainly operating in the Monteregie and Estrie regions, we are open to expanding our services to other areas for new construction projects.`,

      body4: `Whether you're planning a residential or commercial build, we're here to guide you through the process and make your vision a reality.`,
    },
    fr: {
      title: "Contactez-nous aujourd'hui",
      body1: `Nous sommes heureux de vous aider à réaliser vos projets. Contactez-nous et nous pourrons planifier un rendez-vous pour discuter de vos besoins.`,
      
      body2: `Nous nous spécialisons dans la fourniture de matériaux de construction de haute qualité, garantissant que vos projets de rêve soient réalisés avec les meilleures ressources.`,

      body3: `Bien que nous opérions principalement dans les régions de la Montérégie et de l'Estrie, nous sommes ouverts à étendre nos services à d'autres régions pour de nouveaux projets de construction.`,

      body4: `Que vous planifiez une construction résidentielle ou commerciale, nous sommes là pour vous guider tout au long du processus et faire de votre vision une réalité.`,
    }
  };

  return (
    <Container maxWidth="md" style={{ padding: '40px 0', textAlign: 'center' }}>
      <Box style={{ backgroundColor: '#f4f4f4', padding: '30px', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#2c3e50' }}>
          {texts[language].title}
        </Typography>
        <Typography variant="body1" style={{ color: '#7f8c8d', lineHeight: '1.6', fontSize: '1.2rem' }}>
          {texts[language].body1}
        </Typography>
        <br></br>
        <Typography variant="body1" style={{ color: '#7f8c8d', lineHeight: '1.6', fontSize: '1.2rem' }}>
          {texts[language].body2}
        </Typography>
        <br></br>
        <Typography variant="body1" style={{ color: '#7f8c8d', lineHeight: '1.6', fontSize: '1.2rem' }}>
          {texts[language].body3}
        </Typography>
        <br></br>
        <Typography variant="body1" style={{ color: '#7f8c8d', lineHeight: '1.6', fontSize: '1.2rem' }}>
          {texts[language].body4}
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactUs;
