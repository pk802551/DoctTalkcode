import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
} from '@mui/material';
import {
  School,
  PersonAdd,
  LibraryBooks,
  Task,
  GroupWork,
  LiveHelp,
} from '@mui/icons-material';

import MentorRole from '../common-popup-modal/MentorRole';
import RoleMentee from '../common-popup-modal/RoleMentee';
import WhyChooseUs from '../common-popup-modal/WhyChooseUs ';
import HelpYou from '../common-popup-modal/HelpMentor';
import ResourcesBoost from './ResourceBoost';
import NeetSuccess from '../common-popup-modal/NeetSuccess';
import Header from '../common-page/header';
import Footer from '../common-page/footer';

function Services() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isBoot, setIsBoot] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);
  const [isHelp, setIsHelp] = useState(false);
  const [isNeet, setIsNeet] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleIsOpen = () => setIsOpen(true);
  const handleIsClose = () => setIsOpen(false);
  const handleIsPopOpen = () => setIsPopUp(true);
  const handleIsPopClose = () => setIsPopUp(false);
  const handleIsHelpOpen = () => setIsHelp(true);
  const handleIsHelpClose = () => setIsHelp(false);
  const handleIsBootOpen = () => setIsBoot(true);
  const handleIsBootClose = () => setIsBoot(false);
  const handleIsNeetOpen = () => setIsNeet(true);
  const handleIsNeetClose = () => setIsNeet(false);

  const services = [
    {
      icon: <PersonAdd sx={{ fontSize: 60, color: 'secondary.main' }} />,
      title: 'One-on-One Mentoring',
      description: 'Receive individualized attention from mentors who offer tailored guidance and strategies for success in NEET.',
    },
    {
      icon: <LibraryBooks sx={{ fontSize: 60, color: 'secondary.main' }} />,
      title: 'Our Mentor Role',
      description: 'Mentors provide in-depth subject knowledge, exam strategies, and support for tackling the toughest topics in NEET preparation.',
    },
    {
      icon: <LiveHelp sx={{ fontSize: 60, color: 'secondary.main' }} />,
      title: 'How a Mentor Helps You',
      description: 'Get round-the-clock guidance to clarify doubts, refine your knowledge, and stay motivated throughout your preparation journey.',
    },
    {
      icon: <Task sx={{ fontSize: 60, color: 'secondary.main' }} />,
      title: 'Role of Mentee',
      description: 'As a mentee, you engage actively in your learning by completing tasks on time, participating in discussions, and working on feedback.',
    },
    {
      icon: <GroupWork sx={{ fontSize: 60, color: 'secondary.main' }} />,
      title: 'Boost Your NEET Preparation',
      description: 'Participate in peer study groups to discuss key concepts, solve problems together, and increase motivation and knowledge retention.',
    },
    {
      icon: <School sx={{ fontSize: 60, color: 'secondary.main' }} />,
      title: 'Structured Approach',
      description: 'Follow a systematic and structured study plan, including topic breakdowns, progress tracking, and regular feedback to maximize efficiency.',
    },
  ];

  return (
    <>
      <Header />
      <Container sx={{ py: 10 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
          >
            Why Choose Us?
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            paragraph
            sx={{ maxWidth: '600px', margin: '0 auto', fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Unlock Your Potential with Our Comprehensive NEET Preparation Services
          </Typography>
        </Box>

        {/* Services Section */}
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  borderRadius: 4,
                  p: 2,
                  boxShadow: 3,
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                }}
              >
                <Box mb={2}>{service.icon}</Box>
                <CardContent>
                  <Typography variant="h5" fontWeight="medium" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'primary.main',
                      '&:hover': { backgroundColor: 'primary.dark' },
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (service.title === 'One-on-One Mentoring') {
                        handleOpen();
                      } else if (service.title === 'Our Mentor Role') {
                        handleIsOpen();
                      } else if (service.title === 'Role Mentee') {
                        handleIsPopOpen();
                      } else if (service.title === 'How a Mentor Helps You') {
                        handleIsHelpOpen();
                      } else if (service.title === 'Boost Your NEET Preparation') {
                        handleIsBootOpen();
                      } else {
                        handleIsNeetOpen();
                      }
                    }}
                  >
                    More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Modals */}
        <WhyChooseUs handleClose={handleClose} open={open} />
        <MentorRole handleClose={handleIsClose} open={isOpen} />
        <RoleMentee handleClose={handleIsPopClose} open={isPopUp} />
        <HelpYou handleClose={handleIsHelpClose} open={isHelp} />
        <ResourcesBoost handleClose={handleIsBootClose} open={isBoot} />
        <NeetSuccess handleClose={handleIsNeetClose} open={isNeet} />
      </Container>
      <Footer />
    </>
  );
}

export default Services;
