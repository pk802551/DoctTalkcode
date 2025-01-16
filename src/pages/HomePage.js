import React from 'react';
import Header from '../common-page/header';
import HeroSection from '../componets/HeroSection';
import Banner from '../componets/banner';
import Footer from '../common-page/footer';
import About from '../componets/About';
import Blog from '../componets/Blog';
import Services from '../componets/service';

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <HeroSection />
<Services/>
      <Footer />
    </>
  );
};

export default HomePage;
