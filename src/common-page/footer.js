import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  Divider,
  Snackbar,
  Alert,
  Collapse
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  ArrowUpward,
  Send
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGE_TYPES } from '../utility-files/default-values/DefaultValues';


const Footer = () => {
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const currentYear = new Date().getFullYear();

  // Quick Links with hover descriptions
  const quickLinks = [
    { text: 'Home', description: 'Back to main page' },
    { text: 'About Us', description: 'Learn about our mission' },
    { text: 'Courses', description: 'Explore our programs' },
    { text: 'Success Stories', description: 'See student achievements' },
    { text: 'Contact', description: 'Get in touch with us' }
  ];

  // Social media links with custom colors
  const socialLinks = [
    { Icon: Facebook, color: '#1877f2', link: '#' },
    { Icon: Twitter, color: '#1da1f2', link: '#' },
    { Icon: Instagram, color: '#e4405f', link: '#' },
    { Icon: LinkedIn, color: '#0077b5', link: '#' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
      setShowScrollButton(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      // Simulated API call
      setTimeout(() => {
        setShowNotification(true);
        setEmail('');
      }, 500);
    }
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
        color: 'white',
        pt: 6,
        pb: 3,
        position: 'relative',
        // overflow: 'hidden'

      }}
    >
      {/* Scroll Progress Indicator */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'rgba(255,255,255,0.1)',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #90caf9, #42a5f5)',
            transition: 'width 0.2s ease-out'
          }}
        />
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {/* Logo and About Section */}
          <Box sx={{ flex: '1 1 300px', minWidth: 300 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={IMAGE_TYPES.USER_LOGIN}
                alt="Doct Talk Logo"
                style={{
                  height: '80px', // Adjust height as per your design
                  marginRight: '40px', // Space between logo and text
                  transition: 'opacity 0.1s ease',
              }}
              />
            </motion.div>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              Empowering students to achieve their dreams through quality mentorship
              and guidance in NEET preparation.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              {socialLinks.map(({ Icon, color, link }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    href={link}
                    target="_blank"
                    sx={{
                      color: 'white',
                      '&:hover': {
                        backgroundColor: color,
                        boxShadow: `0 0 15px ${color}40`
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Icon />
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Quick Links Section */}
          <Box sx={{ flex: '1 1 200px' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <List>
              {quickLinks.map(({ text, description }) => (
                <ListItem
                  key={text}
                  component={motion.div}
                  whileHover={{ x: 10 }}
                  sx={{
                    p: 0,
                    mb: 1,
                    cursor: 'pointer'
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <ListItemText
                      primary={text}
                      sx={{
                        '& .MuiTypography-root': {
                          transition: 'color 0.3s ease',
                          '&:hover': { color: '#90caf9' }
                        }
                      }}
                    />
                    <Collapse in={false}>
                      <Typography variant="caption" sx={{ color: '#90caf9' }}>
                        {description}
                      </Typography>
                    </Collapse>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Contact Info Section */}
          <Box sx={{ flex: '1 1 250px' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Contact Info
            </Typography>
            <List>
              {[
                { Icon: LocationOn, text: '123 Education Street, Learning City' },
                { Icon: Phone, text: '+91 8529477906' },
                { Icon: Email, text: 'ss689586@gmail.com' }
              ].map(({ Icon, text }, index) => (
                <ListItem
                  key={index}
                  component={motion.div}
                  whileHover={{ x: 10 }}
                  sx={{ p: 0, mb: 2 }}
                >
                  <Icon sx={{ mr: 1, color: '#90caf9' }} />
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Newsletter Section */}
          <Box sx={{ flex: '1 1 250px' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Subscribe to our newsletter for updates and tips.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubscribe}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }}
            >
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                placeholder="Enter your email"
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#90caf9',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#90caf9',
                    }
                  },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                type="submit"
                component={motion.button}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                endIcon={<Send />}
                sx={{
                  background: 'linear-gradient(45deg, #90caf9 30%, #42a5f5 90%)',
                  boxShadow: '0 3px 5px 2px rgba(33, 150, 243, .3)',
                  transition: 'all 0.3s ease'
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Copyright Section */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography variant="body2">
            &copy; {currentYear} NEET Mentorship. All Rights Reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['Privacy Policy', 'Terms of Service'].map((text) => (
              <Button
                key={text}
                color="inherit"
                size="small"
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  '&:hover': {
                    color: '#90caf9',
                    background: 'rgba(144, 202, 249, 0.08)'
                  }
                }}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            style={{
              position: 'absolute',
              right: 20,
              top: -25,
            }}
          >
            <IconButton
              onClick={scrollToTop}
              sx={{
                backgroundColor: '#90caf9',
                '&:hover': {
                  backgroundColor: '#42a5f5',
                },
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              }}
            >
              <ArrowUpward />
            </IconButton>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification */}
      <Snackbar
        open={showNotification}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity="success"
          sx={{ width: '100%' }}
        >
          Successfully subscribed to newsletter!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Footer;

