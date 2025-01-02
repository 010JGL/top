import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import emailjs from 'emailjs-com';

const RoofingQuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    materialType: '',
    length: '',
    width: '',
    roofAngle: '',
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

    // Send form data using EmailJS
    emailjs
      .send(
        'service_r4tluzl',       // Your EmailJS Service ID
        'template_qhhwfr8',      // Your EmailJS Template ID
        formData,                // The form data that will replace the template placeholders
        '-RNM0ph9829LH8Wze'           // Your EmailJS User ID
      )
      .then(
        (response) => {
          alert('Your request has been submitted! We will contact you shortly.');
        },
        (error) => {
          alert('There was an error. Please try again later.');
        }
      );
  };

  return (
    <div>
      <Container style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Ask for a Free Roofing Quote
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '30px' }}>
          We specialize in residential asphalt shingles and tin roofing projects, whether it's a new construction, a roof replacement, or a repair job.
          Our team ensures top-quality work and will provide you with a custom quote tailored to your needs.
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

            {/* Length */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Length of the House (ft)"
                variant="outlined"
                fullWidth
                name="length"
                value={formData.length}
                onChange={handleChange}
                optional
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
                optional
              />
            </Grid>

            {/* Roof Angle */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Roof Angle (degrees)"
                variant="outlined"
                fullWidth
                name="roofAngle"
                value={formData.roofAngle}
                onChange={handleChange}
                optional
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
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
