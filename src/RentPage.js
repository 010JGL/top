import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const RentPage = () => {
  const cities = [
    {
      city: "Saint-Jean-Baptiste",
      rentals: [
        {
          type: "4 1/2 Apartment",
          price: "$1550/month",
          link: "https://www.facebook.com/marketplace/item/1027857215465756?ref=category_feed&referral_code=undefined&referral_story_type=listing&tracking=%7B%22qid%22%3A%22-616421741623744423%22%2C%22mf_story_key%22%3A%227908778019190203%22%2C%22commerce_rank_obj%22%3A%22%7B%5C%22target_id%5C%22%3A7908778019190203%2C%5C%22target_type%5C%22%3A0%2C%5C%22primary_position%5C%22%3A10%2C%5C%22ranking_signature%5C%22%3A1887888787676298658%2C%5C%22commerce_channel%5C%22%3A504%2C%5C%22value%5C%22%3A4.0e-9%2C%5C%22candidate_retrieval_source_map%5C%22%3A%7B%5C%227908778019190203%5C%22%3A204%7D%7D%22%7D",
        },
        {
          type: "4 1/2 Apartment",
          price: "$1550/month",
          link: "https://www.facebook.com/marketplace/item/1027857215465756?ref=category_feed&referral_code=undefined&referral_story_type=listing&tracking=%7B%22qid%22%3A%22-616421741623744423%22%2C%22mf_story_key%22%3A%227908778019190203%22%2C%22commerce_rank_obj%22%3A%22%7B%5C%22target_id%5C%22%3A7908778019190203%2C%5C%22target_type%5C%22%3A0%2C%5C%22primary_position%5C%22%3A10%2C%5C%22ranking_signature%5C%22%3A1887888787676298658%2C%5C%22commerce_channel%5C%22%3A504%2C%5C%22value%5C%22%3A4.0e-9%2C%5C%22candidate_retrieval_source_map%5C%22%3A%7B%5C%227908778019190203%5C%22%3A204%7D%7D%22%7D",
        },
      ],
    },
    {
      city: "Sherbrooke",
      rentals: [
        {
          type: "5 1/2 Apartment",
          price: "$1600/month",
          link: "https://www.facebook.com/marketplace/item4",
        },
        {
          type: "5 1/2 Apartment",
          price: "$1600/month",
          link: "https://www.facebook.com/marketplace/item5",
        },
        {
          type: "5 1/2 Apartment",
          price: "$1600/month",
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
          Rent Options
        </Typography>
        <Typography variant="body1" gutterBottom>
          Browse available rental options by city and category.
        </Typography>

        {/* Rental Options by City */}
        {cities.map((city, cityIndex) => (
          <div key={cityIndex}>
            <Typography variant="h4" gutterBottom style={{ marginTop: "40px" }}>
              {city.city}
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
                        {rental.type}
                      </Typography>
                      <Typography variant="body1" style={{ margin: "10px 0" }}>
                        {rental.price}
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
                        View on Facebook Marketplace
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
