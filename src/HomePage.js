import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Button,
} from "@mui/material";
import "./HomePage.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HomePage = () => {
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
              Welcome to Les Tops du Top Construction
            </Typography>
            <Typography variant="h6" className="hero-subtitle">
              Your trusted partner in construction, roofing, and property
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
          variant="h4"
          style={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          General Contractor
        </Typography>
        <Box
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "800px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="body1"
            style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
          >
            We are a professional general contracting firm serving the
            Montérégie and Estrie regions, specializing in residential
            construction. Our expertise lies in crafting luxurious single-family
            homes and high-quality multi-unit dwellings, utilizing the latest
            technologies and premium-grade materials to deliver exceptional
            results.
          </Typography>
        </Box>
      </div>
      <div>
        <Box
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "40px 0",
            textAlign: "center",
          }}
        >
          <Container>
            {/* Banner Title */}
            <Typography
              variant="h3"
              style={{ fontWeight: "bold", marginBottom: "15px" }}
            >
              Services
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
              <Link to="/new-construction" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  style={{
                    color: "white",
                    margin: "10px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#FF5733")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  New Construction
                </Typography>
              </Link>

              <Link to="/renovation" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  style={{
                    color: "white",
                    margin: "10px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#FF5733")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  Renovation
                </Typography>
              </Link>

              <Link to="/roofing" style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  style={{
                    color: "white",
                    margin: "10px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#FF5733")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  Roofing
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
              title: "Realisations",
              image: "/images/realisations.jpg",
              link: "/realisations",
            },
            {
              id: "rents",
              title: "Available Rentals",
              image: "/images/rents.jpg",
              link: "/rents",
            },
            {
              id: "roofing-quote",
              title: "Get a Roofing Quote",
              image: "/images/roofing.jpg",
              link: "/roofing",
            },
            {
              id: "contact",
              title: "Contact Us",
              image: "/images/contact.jpg",
              link: "/contact",
            },
          ].map((section) => (
            <Grid item xs={12} sm={6} key={section.id}>
              <Card
                style={{
                  height: "300px",
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
    </div>
  );
};

export default HomePage;
