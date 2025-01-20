import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { useLanguage } from './LanguageContext'; // Import the language context

const Services = () => {
  const { language } = useLanguage(); // Access the current language

  // Define translations for the text
  const translations = {
    en: {
      generalContractor: "General Contractor",
      generalContractorDescription: `We are a fully licensed and insured General Contractor operating in
        the province of Quebec, holding a valid RBQ license. With a commitment
        to excellence, we bring your vision to life, no matter the scope or
        degree of customization required. Whether you're planning to build
        your dream home, a secondary residence, or a rental property, our
        experienced team provides expert guidance every step of the way. We
        also specialize in constructing multi-unit developments, offering
        tailored solutions for investors aiming to grow their portfolios.`,
      renovation: "Renovation",
      renovationDescription: `Looking to enhance your home with a renovation or remodel your
        basement following unexpected events? Our experienced renovation
        team is here to assist you. We collaborate with trusted
        subcontractors and specialists across various trades to deliver a
        personalized solution that meets your unique needs, ensuring the
        highest standards of quality throughout the project.`,
    },
    fr: {
      generalContractor: "Entrepreneur Général",
      generalContractorDescription: `Nous sommes un entrepreneur général entièrement licencié et assuré opérant
        dans la province de Québec, détenteur d'une licence RBQ valide. Avec un engagement
        à l'excellence, nous donnons vie à votre vision, peu importe l'étendue ou
        le degré de personnalisation requis. Que vous planifiez de construire
        votre maison de rêve, une résidence secondaire ou une propriété locative, notre
        équipe expérimentée fournit des conseils d'experts à chaque étape. Nous
        nous spécialisons également dans la construction de développements multi-unités, offrant
        des solutions adaptées pour les investisseurs souhaitant développer leur portefeuille.`,
      renovation: "Rénovation",
      renovationDescription: `Vous cherchez à améliorer votre maison avec une rénovation ou à réaménager votre
        sous-sol après des événements imprévus ? Notre équipe de rénovation expérimentée est là pour vous aider. Nous collaborons avec des
        sous-traitants et des spécialistes de confiance dans divers métiers pour offrir une
        solution personnalisée qui répond à vos besoins uniques, en garantissant les
        normes de qualité les plus élevées tout au long du projet.`,
    },
  };

  const currentLang = translations[language] || translations.en;

  return (
    <Container maxWidth="xl" style={{ padding: 0, margin: 0 }}>
      {/* General Contractor Section */}
      <Box
        my={5}
        textAlign="center"
        position="relative"
        style={{ marginTop: 0, padding: 0 }}
      >
        <div
          style={{
            backgroundImage: `url('/images/plan.jpg')`, // Background image
            backgroundSize: "cover", // Ensure the image covers the entire div
            backgroundPosition: "center", // Center the image
            height: "500px", // Set the height of the section
            display: "flex", // Use flexbox for centering
            alignItems: "center", // Vertically center the text
            justifyContent: "center", // Horizontally center the text
            color: "white", // Set text color to white for contrast
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Add a text shadow for better readability
          }}
        >
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", color: "white" }}
          >
            {currentLang.generalContractor}
          </Typography>
        </div>
        <Box
          style={{
            border: "1px solid #ccc",
            padding: "20px 40px",
            marginBottom: "40px",
            marginTop: "60px",
            borderRadius: "8px",
            maxWidth: "800px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography variant="body1" component="p">
            {currentLang.generalContractorDescription}
          </Typography>
        </Box>
      </Box>

      {/* Renovation Section */}
      <Box
        my={5}
        textAlign="center"
        position="relative"
        style={{ marginTop: 0, padding: 0 }}
      >
        <div
          style={{
            backgroundImage: `url('/images/reno.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", color: "white" }}
          >
            {currentLang.renovation}
          </Typography>
        </div>
        <Box
          style={{
            border: "1px solid #ccc",
            padding: "20px 40px",
            marginBottom: "40px",
            marginTop: "60px",
            borderRadius: "8px",
            maxWidth: "800px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography variant="body1" component="p">
            {currentLang.renovationDescription}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Services;



