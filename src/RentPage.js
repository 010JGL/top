import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { useLanguage } from './LanguageContext'; // Use the context hook

const RentPage = () => {
  const { language } = useLanguage(); // Access the current language
  
  // Define text based on language selection
  const translations = {
    en: {
      title: "Rent Options",
      description: "Browse available rental options by city and category.",
      cityLabel: "City",
      typeLabel: "Type",
      priceLabel: "Price",
      viewLabel: "View on Facebook Marketplace",
      month: "/ month", // English version for month
    },
    fr: {
      title: "Options de location",
      description: "Parcourez les options de location disponibles par ville et catégorie.",
      cityLabel: "Ville",
      typeLabel: "Type",
      priceLabel: "Prix",
      viewLabel: "Voir sur Facebook Marketplace",
      month: "/ mois", // French version for month
    }
  };

  const currentLang = translations[language] || translations.en;

  const cities = [
    {
      city: "Saint-Jean-Baptiste",
      rentals: [
        {
          type: "4 1/2 Apartment",
          price: "$1550",
          link: "https://www.facebook.com/marketplace/item/1027857215465756?ref=category_feed&referral_code=undefined&referral_story_type=listing&tracking=%7B%22qid%22%3A%22-616421741623744423%22%2C%22mf_story_key%22%3A227908778019190203%7D",
        },
        {
          type: "4 1/2 Apartment",
          price: "$1550",
          link: "https://www.facebook.com/marketplace/item/1027857215465756?ref=category_feed&referral_code=undefined&referral_story_type=listing&tracking=%7B%22qid%22%3A%22-616421741623744423%22%2C%22mf_story_key%22%3A227908778019190203%7D",
        },
      ],
    },
    {
      city: "Sherbrooke",
      rentals: [
        {
          type: "5 1/2 Apartment",
          price: "$1600",
          link: "https://www.facebook.com/marketplace/item4",
        },
        {
          type: "5 1/2 Apartment",
          price: "$1600",
          link: "https://www.facebook.com/marketplace/item5",
        },
        {
          type: "5 1/2 Apartment",
          price: "$1600",
          link: "https://www.facebook.com/marketplace/item5",
        },
      ],
    },
  ];

  return (
    <div>
      <Container style={{ textAlign: "center", padding: "20px" }}>
        {/* Page Title */}
        <Typography variant="h3" gutterBottom>
          {currentLang.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {currentLang.description}
        </Typography>

        {/* Rental Options by City */}
        {cities.map((city, cityIndex) => (
          <div key={cityIndex}>
            <Typography variant="h4" gutterBottom style={{ marginTop: "40px" }}>
              {currentLang.cityLabel}: {city.city}
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {city.rentals.map((rental, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      cursor: "pointer",
                    }}
                  >
                    <CardContent
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        padding: "20px",
                      }}
                    >
                      <Typography variant="h5" style={{ fontWeight: "bold" }}>
                        {currentLang.typeLabel}: {rental.type}
                      </Typography>
                      <Typography variant="body1" style={{ margin: "10px 0" }}>
                        {currentLang.priceLabel}: {rental.price} {currentLang.month}
                      </Typography>
                      <Button
                        variant="contained"
                        href={rental.link}
                        target="_blank"
                        style={{
                          marginTop: "10px",
                          backgroundColor: "black",
                          color: "white",
                        }}
                      >
                        {currentLang.viewLabel}
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


