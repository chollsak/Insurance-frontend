import React from 'react';
import { Box } from '@mui/material'
import { Navbar } from '../components/common/Navbar';
import { Banner } from '../components/common/Banner';
import { Footer } from '../components/common/Footer';
import { SuitInsurance } from '../components/common/SuitInsurance';
import { AllInsurance } from '../components/common/AllInsurance';



const Home: React.FC = () => {

  return (
    <Box sx={{ width: '100%' }}>
        <Navbar />
    <Box sx={{mt:'90px'}}>
        <Banner />
        <SuitInsurance/>
    </Box>
        <Box width={'full'} height={3000}>

        </Box>
        <Footer/>
    </Box>
  );
};

export default Home;