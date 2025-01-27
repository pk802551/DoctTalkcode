import React from 'react';
import Header from '../common-page/header';
import HeroSection from '../componets/HeroSection';
import Banner from '../componets/banner';
import Footer from '../common-page/footer';
import About from '../componets/About';
import Blog from '../componets/Blog';
import Services from '../componets/service';
import MentorsSection from '../componets/mentorSection';
import CourseSection from '../componets/course-section';
import MindfulnessSection from '../componets/mindfullness';
import TeamSection from '../componets/team';

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <HeroSection />
      <MentorsSection/>
      {/* <Services /> */}
      <CourseSection/>
      <MindfulnessSection/>
      <TeamSection/>
      <Footer />
    </>
  );
};

export default HomePage;
