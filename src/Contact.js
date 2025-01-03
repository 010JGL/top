import React from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import { useLanguage } from "./LanguageContext"; // Import the language context

const Contact = () => {
  const { language } = useLanguage(); // Access the current language

  return (
    <section id="contactSection">
      <div
        style={{
          backgroundColor: "black",
          padding: "10px 0", // Reduced padding
          marginTop: "20px", // Reduced margin
        }}
      >
        <Container>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Logo (Smaller box) */}
            <Grid
              item
              xs={12}
              sm={3}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                style={{
                  width: "100px", // Smaller width for the logo
                  height: "30px", // Reduced height for a more compact logo
                  backgroundColor: "gray", // Placeholder for logo
                  borderRadius: "10px",
                }}
              >
                {/* Add your logo here later */}
              </Box>
            </Grid>

            {/* Contact Information (Larger box for text) */}
            <Grid item xs={12} sm={9}>
              <Grid
                container
                spacing={3}
                justifyContent="space-between"
                alignItems="center"
              >
                {/* Email */}
                <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
                  <Typography variant="body2" style={{ color: "white" }}>
                    {language === "fr" ? "Courriel:" : "Email:"}{" "}
                    <a
                      href="mailto:GestionTopsDuTop@gmail.com"
                      style={{ color: "white" }}
                    >
                      GestionTopsDuTop@gmail.com
                    </a>
                  </Typography>
                </Grid>

                {/* Location */}
                <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
                  <Typography variant="body2" style={{ color: "white" }}>
                    {language === "fr" ? "Situé à:" : "Located at:"}
                  </Typography>
                  <Typography variant="body2" style={{ color: "white" }}>
                    Chambly, QC
                  </Typography>
                </Grid>

                {/* Operating Hours */}
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2" style={{ color: "white" }}>
                    {language === "fr"
                      ? "Heures d'ouverture:"
                      : "Operating Hours:"}{" "}
                    <br />
                    {language === "fr"
                      ? "Lundi-Vendredi: 7h00 - 19h00"
                      : "Mon-Fri, 7:00 AM - 7:00 PM"}{" "}
                    <br />
                    {language === "fr"
                      ? "Samedi-Dimanche: sur rendez-vous"
                      : "Sat-Sun, Appointment only"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
