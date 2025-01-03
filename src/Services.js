import React from "react";
import { Typography, Container, Box } from "@mui/material";

const Services = () => {
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
            General Contractor
          </Typography>
        </div>
        <Box
          style={{
            border: "1px solid #ccc",
            padding: "20px 40px",
            marginBottom: "40px",
            marginTop: "60px", // Add margin on top to avoid touching the image
            borderRadius: "8px",
            maxWidth: "800px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginLeft: "auto", // Center the box horizontally
            marginRight: "auto", // Center the box horizontally
            display: "flex", // Use flexbox to center content
            flexDirection: "column", // Stack content vertically
            justifyContent: "center", // Center vertically
            height: "100%", // Make the box fill its container height
          }}
        >
          <Typography variant="body1" component="p" >
            We are a fully licensed and insured General Contractor operating in
            the province of Quebec, holding a valid RBQ license. With a commitment
            to excellence, we bring your vision to life, no matter the scope or
            degree of customization required. Whether you're planning to build
            your dream home, a secondary residence, or a rental property, our
            experienced team provides expert guidance every step of the way. We
            also specialize in constructing multi-unit developments, offering
            tailored solutions for investors aiming to grow their portfolios.
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
            backgroundImage: `url('/images/reno.jpg')`, // Background image
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
            Renovation
          </Typography>
        </div>
        <Box
          style={{
            border: "1px solid #ccc",
            padding: "20px 40px",
            marginBottom: "40px",
            marginTop: "60px", // Add margin on top to avoid touching the image
            borderRadius: "8px",
            maxWidth: "800px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginLeft: "auto", // Center the box horizontally
            marginRight: "auto", // Center the box horizontally
            display: "flex", // Use flexbox to center content
            flexDirection: "column", // Stack content vertically
            justifyContent: "center", // Center vertically
            height: "100%", // Make the box fill its container height
          }}
        >
          <Typography
            variant="body1"
            component="p"
          >
            Looking to enhance your home with a renovation or remodel your
            basement following unexpected events? Our experienced renovation
            team is here to assist you. We collaborate with trusted
            subcontractors and specialists across various trades to deliver a
            personalized solution that meets your unique needs, ensuring the
            highest standards of quality throughout the project.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Services;


