import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import "./HomePage.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useLanguage } from "./LanguageContext"; // Import the useLanguage hook
import { languageData } from "./Language"; // Import the language data




const HomePage = () => {

  const { language } = useLanguage(); // Get the current language
  const texts = languageData[language]; // Get the texts for the selected language
  // Image bank
  const imageBank = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
  ];

  // State for the currently displayed image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigating images
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageBank.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageBank.length) % imageBank.length
    );
  };
  
  
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${imageBank[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          position: "relative",
        }}
      >
        <div className="overlay">
          <Container
            className="hero-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: "100%",
            }}
          >
            <Typography variant="h3" className="hero-title">
            {texts.heroTitle}
            </Typography>
            <Typography variant="h6" className="hero-subtitle">
              {texts.heroSubtitle}
              rentals.
            </Typography>
          </Container>
          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <div
              className="arrow-button left-arrow"
              style={{
                position: "absolute",
                top: "50%",
                left: "40px",
                transform: "translateY(-50%)",
                fontSize: "3rem",
                color: "white",
                cursor: "pointer",
                zIndex: 10,
              }}
              onClick={handlePrevious}
            >
              &#8592;
            </div>
            <div
              className="arrow-button right-arrow"
              style={{
                position: "absolute",
                top: "50%",
                right: "40px",
                transform: "translateY(-50%)",
                fontSize: "3rem",
                color: "white",
                cursor: "pointer",
                zIndex: 10,
              }}
              onClick={handleNext}
            >
              &#8594;
            </div>
          </div>
        </div>
      </div>

      {/* General Contractor Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <Typography
          variant="h3"
          style={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          {texts.generalContractorTitle}
        </Typography>
        <Box
          style={{
            border: "1px solid #ccc",
            padding: "20px 40px",
            marginBottom: "40px",
            borderRadius: "8px",
            maxWidth: "800px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="body1"
            style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
          >
            {texts.generalContractorDescription}
          </Typography>
        </Box>
      </div>
      <div>
        <Box
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "20px 0",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <Container>
            {/* Banner Title */}
            <Typography
              variant="h3"
              style={{ fontWeight: "bold", marginBottom: "15px" }}
            >
              {texts.servicesTitle}
            </Typography>

            {/* Service Links as Text */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap", // Allows wrapping if the screen is small
              }}
            >
              <Link to="/services" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  style={{
                    color: "white",
                    margin: "20px", // Increased spacing
                    cursor: "pointer",
                    fontSize: "1.5rem", // Increased font size (50% larger)
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#FF5733")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  {texts.newConstruction}
                </Typography>
              </Link>

              <Link to="/services" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  style={{
                    color: "white",
                    margin: "20px", // Increased spacing
                    cursor: "pointer",
                    fontSize: "1.5rem", // Increased font size (50% larger)
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#FF5733")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  {texts.renovation}
                </Typography>
              </Link>

              <Link to="/roofing" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  style={{
                    color: "white",
                    margin: "20px", // Increased spacing
                    cursor: "pointer",
                    fontSize: "1.5rem", // Increased font size (50% larger)
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#FF5733")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  {texts.roofing}
                </Typography>
              </Link>
            </div>
          </Container>
        </Box>
      </div>

      {/* Interactive Cards for Sections */}
      <Container style={{ padding: "40px 0" }}>
        <Grid container spacing={4}>
          {[
            {
              id: "realisations",
              title: texts.realisations,
              image: "/images/realisations.jpg",
              link: "/realisations",
            },
            {
              id: "rents",
              title: texts.availableRentals,
              image: "/images/rents.jpg",
              link: "/RentPage",
            },
            {
              id: "roofing-quote",
              title: texts.getRoofingQuote,
              image: "/images/roofing.jpg",
              link: "/roofing",
            },
            {
              id: "contact",
              title: texts.contactUs,
              image: "/images/contact.jpg",
              link: "/ContactUs"
              
              
            },
          ].map((section) => (
            <Grid item xs={12} sm={6} key={section.id}>
              <Card
                style={{
                  height: "300px",
                  maxWidth: "580px",
                  position: "relative",
                  border: "1px solid black",
                  transition: "all 0.3s ease", // Smooth transition
                }}
                className="card-hover" // Add this class for hover effect
              >
                <CardActionArea
                  href={`#${section.id}`}
                  style={{ height: "100%" }}
                >
                  <Link to={section.link} style={{ height: "100%" }}>
                    <div
                      style={{
                        backgroundImage: `url(${section.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100%",
                      }}
                    >
                      <CardContent
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          color: "white",
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          textAlign: "center",
                        }}
                      >
                        <Typography variant="h6">{section.title}</Typography>
                      </CardContent>
                    </div>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div style={{ textAlign: "center" }}>
        {/* Title */}
        <Typography
          variant="h3"
          style={{
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center", // Center the title text
          }}
        >
          {texts.partnersTitle}
        </Typography>

        {/* Logos Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px", // Space between logos
            flexWrap: "wrap", // Allows wrapping for small screens
          }}
        >
          {/* Company Logos */}
          <img
            src="/images/logo/logo1.png"
            alt="Partner 1"
            style={{ width: "240px", height: "auto" }}
          />
          <img
            src="/images/logo/logo2.png"
            alt="Partner 2"
            style={{ width: "240px", height: "auto" }}
          />
          <img
            src="/images/logo/logo3.png"
            alt="Partner 3"
            style={{ width: "240px", height: "auto" }}
          />
          <img
            src="/images/logo/logo4.png"
            alt="Partner 4"
            style={{ width: "240px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
