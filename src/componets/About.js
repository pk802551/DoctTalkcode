import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Avatar,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
} from '@mui/material';
import {
  ExpandMore,
  Gavel,
  Visibility,
  WorkspacePremium,
  Star,
} from '@mui/icons-material';

// Styled Components
const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  position: 'relative',
}));

const GradientText = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  background: 'linear-gradient(45deg, #1a237e 30%, #18BC9C 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(4),
}));

const FlexContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  justifyContent: 'center',
}));

const CardContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '15px',
  background: 'linear-gradient(145deg, #ffffff 0%, #f4f4f4 100%)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  },
}));

const AboutPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(false);

  // FAQ Data
  const faqs = [
    {
      question: 'What is NEET Counselling, and why is it important?',
      answer:
        'NEET Counselling is the process of seat allocation in medical colleges based on your NEET rank. It is important to secure the best college that fits your preferences and qualifications.',
    },
    {
      question: 'How can Medical Mentor assist me in the NEET counselling process?',
      answer:
        'Medical Mentor offers expert guidance, mock counselling, and real-time updates to help you navigate the NEET counselling process effectively.',
    },
    {
      question: 'Who are the counselling experts at Medical Mentor?',
      answer:
        'Our counselling experts are experienced professionals, including doctors and academicians, who are well-versed in the NEET admission process.',
    },
    {
      question: 'Can Medical Mentor help with both NEET UG and NEET PG counselling?',
      answer:
        'Yes, Medical Mentor provides comprehensive counselling services for both NEET UG and NEET PG aspirants.',
    },
    {
      question: 'How do I get started with Medical Mentor?',
      answer:
        'Getting started is easy! Sign up on our platform, and our experts will guide you through every step of the process.',
    },
  ];

  // Mentor Data
  const mentors = [
    {
      name: 'Dr. Ramesh Kumar',
      title: 'Senior Mentor - NEET UG',
      description: 'With over 15 years of experience in guiding NEET aspirants, Dr. Kumar specializes in personalized counselling and study strategies.',
      avatar: 'https://i.pravatar.cc/100?img=8',
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Head of NEET PG Counselling',
      description: 'Dr. Sharma has mentored 500+ students to secure top PG medical colleges and is known for her expert counselling sessions.',
      avatar: 'https://i.pravatar.cc/100?img=5',
    },
    {
      name: 'Dr. Anil Verma',
      title: 'NEET Strategy Consultant',
      description: 'Dr. Verma provides strategic guidance to students, helping them create and stick to an effective study plan.',
      avatar: 'https://i.pravatar.cc/100?img=10',
    },
  ];

  // Success Stories Data
  const successStories = [
    {
      name: 'Anjali Gupta',
      story: 'Anjali secured a top rank in NEET UG 2023 and got admitted to AIIMS Delhi. She credits her success to the expert mentorship at Medical Mentor.',
      avatar: 'https://i.pravatar.cc/100?img=11',
    },
    {
      name: 'Rahul Sharma',
      story: 'Rahul aced NEET PG 2023 and got into his dream specialization. He highlights the mock counselling sessions as a game-changer.',
      avatar: 'https://i.pravatar.cc/100?img=12',
    },
  ];

  // Mission Data
  const missionData = {
    mission: {
      title: "Our Mission",
      description: "To revolutionize medical education guidance by providing personalized, expert-led mentorship that empowers aspiring medical professionals to achieve their dreams.",
      points: [
        "Empower students with expert guidance",
        "Provide transparent and accurate counseling",
        "Create a supportive learning community",
      ]
    },
    vision: {
      title: "Our Vision",
      description: "To become the most trusted name in medical education counseling, helping shape the future of healthcare education through innovative mentorship solutions.",
      points: [
        "Transform medical education guidance",
        "Build future medical leaders",
        "Foster excellence in healthcare",
      ]
    }
  };

  const valuesData = [
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in our guidance, ensuring that every student receives honest and reliable counseling for their medical education journey.",
      icon: <Gavel sx={{ fontSize: 40, color: '#1a237e' }} />,
    },
    {
      title: "Transparency",
      description: "Our processes and counseling methods are completely transparent, providing students with clear, accurate information to make informed decisions about their future.",
      icon: <Visibility sx={{ fontSize: 40, color: '#1a237e' }} />,
    },
    {
      title: "Professionalism",
      description: "We maintain the highest level of professional conduct, delivering expert guidance with dedication, respect, and commitment to excellence.",
      icon: <WorkspacePremium sx={{ fontSize: 40, color: '#1a237e' }} />,
    },
  ];

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ 
      py: 8, 
      background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)',
      minHeight: '100vh' 
    }}>
      <Container maxWidth="lg">
        {/* Hero Section with Animation */}
        <Section sx={{ 
          textAlign: 'center',
          animation: 'fadeIn 1s ease-in',
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}>
          <GradientText variant="h2">
            About Us
          </GradientText>
          <Typography variant="h6" sx={{ color: '#616161', maxWidth: '800px', margin: '0 auto' }}>
            Learn more about our mission, our expert mentors, and how we can help you achieve your dreams.
          </Typography>
        </Section>

        {/* Core Values Section */}
        <Section>
          <GradientText variant="h3" align="center">
            Our Core Values
          </GradientText>
          <FlexContainer>
            {valuesData.map((value, index) => (
              <CardContainer key={index} sx={{ flex: '1 1 300px', maxWidth: '350px' }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <Box sx={{
                    mb: 3,
                    p: 2,
                    borderRadius: '50%',
                    background: 'rgba(26, 35, 126, 0.1)',
                  }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, color: '#1a237e', fontWeight: 'bold' }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#616161', lineHeight: 1.7 }}>
                    {value.description}
                  </Typography>
                </Box>
              </CardContainer>
            ))}
          </FlexContainer>
        </Section>

        {/* Mission and Vision Section */}
        <Section>
          <FlexContainer>
            {Object.values(missionData).map((data, index) => (
              <CardContainer key={index} sx={{ flex: '1 1 400px', maxWidth: '500px' }}>
                <GradientText variant="h4">
                  {data.title}
                </GradientText>
                <Typography variant="body1" sx={{ mb: 3, color: '#616161' }}>
                  {data.description}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {data.points.map((point, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Star sx={{ color: '#18BC9C', fontSize: 20 }} />
                      <Typography variant="body1" sx={{ color: '#424242' }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContainer>
            ))}
          </FlexContainer>
        </Section>

        {/* Mentors Section with CSS Grid */}
        <Section>
          <GradientText variant="h3" align="center">
            Meet Our Best Mentors
          </GradientText>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 4,
          }}>
            {mentors.map((mentor, index) => (
              <CardContainer key={index}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <Avatar
                    src={mentor.avatar}
                    alt={mentor.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mb: 2,
                      border: '4px solid #1a237e',
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1a237e' }}>
                    {mentor.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#18BC9C', mb: 2 }}>
                    {mentor.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#616161' }}>
                    {mentor.description}
                  </Typography>
                </Box>
              </CardContainer>
            ))}
          </Box>
        </Section>

        {/* Success Stories Section */}
        <Section>
          <GradientText variant="h3" align="center">
            Success Stories
          </GradientText>
          <FlexContainer>
            {successStories.map((story, index) => (
              <CardContainer key={index} sx={{ flex: '1 1 400px', maxWidth: '500px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Avatar
                    src={story.avatar}
                    alt={story.name}
                    sx={{ width: 100, height: 100, border: '3px solid #18BC9C' }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1a237e', mb: 1 }}>
                      {story.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#616161', lineHeight: 1.6 }}>
                      {story.story}
                    </Typography>
                  </Box>
                </Box>
              </CardContainer>
            ))}
          </FlexContainer>
        </Section>

        {/* FAQ Section */}
        <Section>
          <GradientText variant="h3" align="center">
            Frequently Asked Questions
          </GradientText>
          <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <Accordion 
                key={index} 
                sx={{ 
                  mb: 2, 
                  borderRadius: '10px',
                  '&:before': { display: 'none' },
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
              >
                <AccordionSummary 
                  expandIcon={<ExpandMore />}
                  sx={{ 
                    background: 'linear-gradient(145deg, #ffffff 0%, #f4f4f4 100%)',
                    borderRadius: '10px',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: '600', color: '#1a237e' }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" sx={{ color: '#616161' }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Section>
      </Container>
    </Box>
  );
};

export default AboutPage;

