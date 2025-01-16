import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Box, Paper, Alert } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend to process SMS and Email
      const response = await axios.post('/api/contact', formData);
      if (response.status === 200) {
        setSubmitted(true);
        setError('');
      }
    } catch (error) {
      setError('There was an error sending your message. Please try again.');
    }
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            {submitted ? (
              <Alert severity="success" sx={{ my: 2 }}>
                Thank you for your message. We'll get back to you soon!
              </Alert>
            ) : (
              <>
                {error && <Alert severity="error" sx={{ my: 2 }}>{error}</Alert>}
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    multiline
                    rows={4}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </form>
              </>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ height: '100%', p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Email sx={{ mr: 2, color: 'primary.main' }} />
                <Typography>support@neetmentor.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Phone sx={{ mr: 2, color: 'primary.main' }} />
                <Typography>+91 1234567890</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
                <Typography>
                  123 Education Street, Learning City,
                  <br />
                  Knowledge State - 100001
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
