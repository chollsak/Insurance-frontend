import React from 'react';
import { Box } from '@mui/material'
import { Navbar } from '../components/common/Navbar';
import { Banner } from '../components/common/Banner';
import { Footer } from '../components/common/Footer';
import { SuitInsurance } from '../components/common/SuitInsurance';
import { AllInsurance } from '../components/common/AllInsurance';
import { Promotion } from '../components/common/Promotion';



const Home: React.FC = () => {

  return (
    <Box sx={{ width: '100%' }}>
        <Navbar />
    <Box>
        <Box sx={{width:'100%',height:'80px', bgcolor:'#3978E9'}}/>
        <Banner />
        <SuitInsurance/>
        <AllInsurance/>
        <Promotion />
    </Box>
        <Box width={'full'} height={3000}>

        </Box>
        <Footer/>
    </Box>
  );
};

export default Home;