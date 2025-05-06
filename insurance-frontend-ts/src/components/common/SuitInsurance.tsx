import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export const SuitInsurance = () => {
  // State for window width monitoring
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Check window width on component mount and when window resize events occur
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Initial check
    handleResize();
    
    // Listen for resize events
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Use the same breakpoint as other components (1434px)
  const useSmallFont = windowWidth <= 1450;
  
  // Insurance category data
  const insuranceCategories = [
    {
      title: 'นักกีฬา',
      image: '/src/assets/img/suitInsurance/sports.png',
    },
    {
      title: 'วัยทำงาน',
      image: '/src/assets/img/suitInsurance/work.png',
    },
    {
      title: 'คนรักบ้าน',
      image: '/src/assets/img/suitInsurance/home.png',
    },
    {
      title: 'คนรักครอบครัว',
      image: '/src/assets/img/suitInsurance/family.png',
    },
    {
      title: 'อยากสุขภาพดี',
      image: '/src/assets/img/suitInsurance/health.png',
    },
    {
      title: 'นักเดินทาง',
      image: '/src/assets/img/suitInsurance/travel.png',
    }
  ];

  return (
    <>
      {/* Main content with light blue gradient background */}
      <Box 
        sx={{ 
          width: '100%', 
          py: useSmallFont ? 2.5 : 3,
          px: { xs: 2, md: useSmallFont ? 8 : 10 },
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography 
          fontSize={useSmallFont ? 30 : 32}
          sx={{ 
            color: '#05058C', 
            fontWeight: 'bold', 
            mb: useSmallFont ? 2.5 : 3,
            ml: useSmallFont ? 8 : 10,
            textAlign: 'start'
          }}
        >
          ประกันภัยที่เหมาะกับคุณ
        </Typography>

        {/* Flexbox grid */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: useSmallFont ? 7 : 8.5,
            justifyContent: 'center'
          }}
        >
          {insuranceCategories.map((category, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: 'calc(50% - 12px)',
                  sm: 'calc(33.333% - 16px)',
                  md: 'calc(16.666% - 20px)'
                },
                maxWidth: useSmallFont ? '130px' : '136px'
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'transparent'
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    paddingTop: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '16px'
                  }}
                >
                  <Box
                    component="img"
                    src={category.image}
                    alt={category.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '16px',
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    textAlign: 'center',
                    fontSize: useSmallFont ? '26px' : '28px',
                    mt: 0.5,
                    fontWeight: 'thin',
                    color: '#14284B'
                  }}
                >
                  {category.title}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
      
      {/* Blue background box - exactly as you specified */}
      <Box 
        width={'100%'} 
        height={useSmallFont ? 130 : 133} 
        bgcolor={'#E6EFFF'} 
        sx={{
          marginTop: useSmallFont ? '-145px' : '-150px',  // Pull it up to overlap with content
          position: 'relative',
          zIndex: 0            // Lower z-index to appear behind content
        }}
      />
    </>
  );
};