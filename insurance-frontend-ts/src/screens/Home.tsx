import React from 'react';
import { Box } from '@mui/material'
import { Navbar } from '../components/common/Navbar';
import { Banner } from '../components/common/Banner';
import { CookieAccepter } from '../components/common/CookieAccepter';
import { SuitInsurance } from '../components/common/SuitInsurance';
import { AllInsurance } from '../components/common/AllInsurance';
import { Promotion } from '../components/common/Promotion';
import { WhyChooseUs } from '../components/common/WhyChooseUs';
import GetTheApp from '../components/common/GetTheApp';
import Contact from '../components/common/Contact';
import Footer from '../components/common/Footer';
import AboutUs from '../components/common/AboutUs';
import ContactUs from '../components/common/ContactUs';

const Home: React.FC = () => {

  return (
    <Box sx={{ width: '100%', position: "relative" }}>
      <Navbar />
      <Box>
        <Box sx={{ width: '100%', height: '80px', bgcolor: '#3978E9' }} />
        <Banner />
        <SuitInsurance />
        <AllInsurance />
        <Promotion />
        <WhyChooseUs />
        <GetTheApp />
        <Contact />
        <AboutUs />
        <Footer />
      </Box>
      <ContactUs />
      <CookieAccepter />
    </Box>
  );
};

export default Home;