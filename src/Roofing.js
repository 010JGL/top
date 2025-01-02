import React, { useState } from "react";
import {
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import emailjs from "emailjs-com";

const RoofingQuotePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    project: "",
    phone: "",
    materialType: "",
    length: "",
    width: "",
    roofAngle: "",
    idealDate: "", // Ideal date for the job as text
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_r4tluzl", // Your EmailJS Service ID
        "template_qhhwfr8", // Your EmailJS Template ID
        formData, // Form data that will replace the template placeholders
        "-RNM0ph9829LH8Wze" // Your EmailJS User ID
      )
      .then(
        () => {
          alert(
            "Your request has been submitted! We will contact you shortly."
          );
        },
        () => {
          alert("There was an error. Please try again later.");
        }
      );
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url('/images/toproof.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "550px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          Ask for a Free Roofing Quote
        </Typography>
      </div>

      <Container style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="body1" style={{ marginBottom: "30px" }}>
          We specialize in residential asphalt shingles and tin roofing
          projects, whether it's a new construction, a roof replacement, or a
          repair job. Our team ensures top-quality work and will provide you
          with a custom quote tailored to your needs.
        </Typography>
        <Typography
          variant="body1"
          style={{ marginBottom: "30px", fontStyle: "italic" }}
        >
          For an urgent repair job, reach us via the Contact page for a quicker
          response.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} justifyContent="center">
            {/* Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Address */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Phone */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Material Type */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Material Type</InputLabel>
                <Select
                  label="Material Type"
                  name="materialType"
                  value={formData.materialType}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="Shingles">Shingles</MenuItem>
                  <MenuItem value="Tin Roof">Tin Roof</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* Project */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Project</InputLabel>
                <Select
                  label="Project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="New Construction">New Construction</MenuItem>
                  <MenuItem value="Roof Replacement">Roof Replacement</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Optional Fields */}
            <Grid item xs={12}>
              <Typography
                variant="body1"
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                This category is optional but will help us calculate a more
                accurate price.
              </Typography>
            </Grid>

            {/* Length */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Length of the House (ft)"
                variant="outlined"
                fullWidth
                name="length"
                value={formData.length}
                onChange={handleChange}
              />
            </Grid>

            {/* Width */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Width of the House (ft)"
                variant="outlined"
                fullWidth
                name="width"
                value={formData.width}
                onChange={handleChange}
              />
            </Grid>
            {/* Roof Angle */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Roof Angle</InputLabel>
                <Select
                  label="Roof Angle"
                  name="roofAngle"
                  value={formData.roofAngle}
                  onChange={handleChange}
                >
                  <MenuItem value="1/12">1/12</MenuItem>
                  <MenuItem value="2/12">2/12</MenuItem>
                  <MenuItem value="3/12">3/12</MenuItem>
                  <MenuItem value="4/12">4/12</MenuItem>
                  <MenuItem value="5/12">5/12</MenuItem>
                  <MenuItem value="6/12">6/12</MenuItem>
                  <MenuItem value="7/12">7/12</MenuItem>
                  <MenuItem value="8/12">8/12</MenuItem>
                  <MenuItem value="9/12">9/12</MenuItem>
                  <MenuItem value="10/12">10/12</MenuItem>
                  <MenuItem value="11/12">11/12</MenuItem>
                  <MenuItem value="12/12">12/12</MenuItem>
                  <MenuItem value="13/12+">13/12+</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* Ideal Date for the Job */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Ideal Date for the Job"
                variant="outlined"
                fullWidth
                name="idealDate"
                value={formData.idealDate}
                onChange={handleChange}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "black", color: "white" }}
                fullWidth
              >
                Submit Request
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default RoofingQuotePage;
