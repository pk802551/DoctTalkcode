import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack, PlayArrow } from '@mui/icons-material';
import { keyframes } from '@mui/system';

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Background images array
  const backgrounds = [
    require('../assets/images/banner5.webp'),
    require('../assets/images/banner6.png'),
    require('../assets/images/banner3.webp')
  ];
  // Content for each slide
  const slideContent = [
    {
      title: "Your Path to NEET Success Starts Here!",
      subtitle: "Join thousands of successful students",
      description: "Expert guidance, comprehensive study materials, and personalized mentoring"
    },
    {
      title: "Achieve Your Medical Dreams",
      subtitle: "95% success rate in NEET",
      description: "Interactive learning with experienced faculty members"
    },
    {
      title: "Prepare Smarter, Not Harder",
      subtitle: "Structured learning pathway",
      description: "Regular mock tests and performance analysis"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  // Handle slide navigation
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
  };

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'relative',
        height: '500px',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1
        }
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgrounds[currentSlide]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'all 0.5s ease-in-out',
        }}
      />

      {/* Logo */}
      <Box
        component="img"
        src="/placeholder.svg?height=60&width=60"
        alt="Logo"
        sx={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '60px',
          height: '60px',
          zIndex: 2,
          animation: `${float} 3s ease-in-out infinite`
        }}
      />

      {/* Content Container */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 20px',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Typography 
          variant="h2" 
          sx={{
            fontWeight: 'bold',
            marginBottom: 2,
            animation: `${fadeIn} 1s ease-out`,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          {slideContent[currentSlide].title}
        </Typography>

        <Typography 
          variant="h5" 
          sx={{
            marginBottom: 2,
            animation: `${fadeIn} 1s ease-out 0.3s`,
            animationFillMode: 'both'
          }}
        >
          {slideContent[currentSlide].subtitle}
        </Typography>

        <Typography 
          variant="body1" 
          sx={{
            marginBottom: 4,
            maxWidth: '600px',
            animation: `${fadeIn} 1s ease-out 0.6s`,
            animationFillMode: 'both'
          }}
        >
          {slideContent[currentSlide].description}
        </Typography>

        {/* Call to Action Buttons */}
        <Box 
          sx={{
            display: 'flex',
            gap: 2,
            animation: `${fadeIn} 1s ease-out 0.9s`,
            animationFillMode: 'both'
          }}
        >
          {/* <Button
            variant="contained"
            size="large"
            endIcon={<PlayArrow />}
            sx={{
              backgroundColor: '#18BC9C',
              '&:hover': {
                backgroundColor: '#149A82',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease'
              }
            }}
          >
            Start Free Trial
          </Button> */}
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderColor: '#18BC9C',
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease'
              }
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        onClick={handlePrevSlide}
        sx={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 2,
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)'
          }
        }}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        onClick={handleNextSlide}
        sx={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'white',
          zIndex: 2,
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)'
          }
        }}
      >
        <ArrowForward />
      </IconButton>

      {/* Slide Indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 2
        }}
      >
        {backgrounds.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: currentSlide === index ? '#18BC9C' : 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Banner;

