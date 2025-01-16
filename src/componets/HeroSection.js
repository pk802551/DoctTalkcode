import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  IconButton,
  Button, // Only import Button once here
  Fade,
  Slide,
} from '@mui/material';
import {
  KeyboardArrowDown,
  School,
  Psychology,
  EmojiEvents,
  Timeline,
  GroupAdd,
  TrendingUp,
  Star
} from '@mui/icons-material';

import { styled } from '@mui/material/styles';
import SocialMediaModal from '../common-popup-modal/SocialMedia';

const AnimatedSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #1a237e 0%, #18BC9C 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("/pattern.svg")',
    opacity: 0.1,
    animation: 'float 20s linear infinite',
  },
  '@keyframes float': {
    '0%': { backgroundPosition: '0 0' },
    '100%': { backgroundPosition: '100% 100%' }
  }
}));

const GlassCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '30px',
  padding: theme.spacing(6),
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 100%)',
    zIndex: 1,
  }
}));

const FeatureGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: theme.spacing(4),
  marginTop: theme.spacing(6),
}));

const FeatureItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: 'rgba(255, 255, 255, 0.15)',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    background: 'rgba(255, 255, 255, 0.2)',
  }
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  borderRadius: '30px',
  marginTop: theme.spacing(4),
  background: 'linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)',
  boxShadow: '0 3px 15px 2px rgba(255, 107, 107, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 5px 20px 3px rgba(255, 107, 107, 0.4)',
  }
}));

export default function EnhancedHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const features = [
    {
      icon: <Timeline sx={{ fontSize: 40, color: '#fff' }} />,
      title: 'Personalized Learning Path',
      description: 'Customized study plans tailored to your goals and schedule',
      delay: 100
    },
    {
      icon: <GroupAdd sx={{ fontSize: 40, color: '#fff' }} />,
      title: 'Expert Mentorship',
      description: 'Learn from experienced doctors and top medical professionals',
      delay: 200
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: '#fff' }} />,
      title: 'Proven Results',
      description: '95% success rate in medical school admissions',
      delay: 300
    },
    {
      icon: <Star sx={{ fontSize: 40, color: '#fff' }} />,
      title: 'Premium Resources',
      description: 'Access to exclusive study materials and practice tests',
      delay: 400
    }
  ];

  const stats = [
    { number: '10K+', label: 'Students Enrolled', icon: <School sx={{ fontSize: 30, color: '#fff' }} /> },
    { number: '95%', label: 'Success Rate', icon: <EmojiEvents sx={{ fontSize: 30, color: '#fff' }} /> },
    { number: '100+', label: 'Expert Mentors', icon: <Psychology sx={{ fontSize: 30, color: '#fff' }} /> }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return ( 
    <>

    <AnimatedSection>
      <Container maxWidth="lg">
        <Fade in={isVisible} timeout={1000}>
          <GlassCard elevation={0}>
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  fontWeight: 900,
                  background: 'linear-gradient(45deg, #FFF 30%, #FFD700 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  mb: 3,
                  letterSpacing: '-0.02em'
                }}
              >
                Transform Your Medical Career
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.8rem' },
                  color: 'rgba(255,255,255,0.9)',
                  mb: 4,
                  maxWidth: '900px',
                  margin: '0 auto',
                  lineHeight: 1.6,
                  fontWeight: 300
                }}
              >
                Join the elite medical mentorship program that has guided over 10,000 students
                to success in their medical careers. Experience personalized mentoring,
                cutting-edge resources, and a supportive community.
              </Typography>

              <Box sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                flexWrap: 'wrap',
                mb: 6
              }}>
                {stats.map((stat, index) => (
                  <Slide
                    direction="up"
                    in={isVisible}
                    timeout={500 + (index * 200)}
                    key={index}
                  >
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      background: 'rgba(255,255,255,0.1)',
                      padding: '1rem 2rem',
                      borderRadius: '15px'
                    }}>
                      {stat.icon}
                      <Box>
                        <Typography variant="h4" sx={{ color: '#fff', fontWeight: 'bold' }}>
                          {stat.number}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    </Box>
                  </Slide>
                ))}
              </Box>

              <FeatureGrid>
                {features.map((feature, index) => (
                  <Fade
                    in={isVisible}
                    timeout={1000 + feature.delay}
                    key={index}
                  >
                    <FeatureItem>
                      {feature.icon}
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#fff',
                          mt: 2,
                          mb: 1,
                          fontWeight: 600
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.8)',
                          fontSize: '0.95rem'
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </FeatureItem>
                  </Fade>
                ))}
              </FeatureGrid>
              <AnimatedButton
                variant="contained"
                color="primary"
                size="large"
                onClick={handleOpen}
              >
                <School sx={{ fontSize: 24 }} /> {/* Mentor Icon */}
                Start Chart with Mentor
              </AnimatedButton>
            </Box>
          </GlassCard>
        </Fade>
      </Container>

      <IconButton
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          animation: 'bounce 2s infinite'
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <KeyboardArrowDown sx={{ fontSize: 40 }} />
      </IconButton>
      <SocialMediaModal open={openModal} handleClose={handleClose} />
    </AnimatedSection>

    </>
    
    
  );
}

