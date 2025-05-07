import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

export const Footer = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
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
  
  // Use the 1450px breakpoint
  const useSmallFont = windowWidth <= 1450;

  const handleAcceptAll = () => {
    setShowCookieConsent(false);
  };

  const handleAcceptNecessary = () => {
    setShowCookieConsent(false);
  };

  if (!showCookieConsent) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#05058C', // Deep blue color
        color: 'white',
        padding: useSmallFont ? '16px' : '18px',
        paddingLeft: useSmallFont ? '30px' : '40px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography 
          fontSize={useSmallFont ? '22px' : '24px'} 
          sx={{ fontWeight: 'bold'}}
        >
          เว็บไซต์นี้มีการจัดเก็บคุกกี้ (Cookies)
        </Typography>
        <Typography 
          fontSize={useSmallFont ? '16px' : '18px'} 
          sx={{mb:-0.5}}
        >
          เพื่อพัฒนาปรับปรุงการนำเสนอเนื้อหาที่ดีสำหรับผู้ใช้งาน และอำนวยความสะดวกให้ผู้ใช้งานสามารถใช้บริการต่างๆ ภายในเว็บไซต์ได้ง่ายและมีประสิทธิภาพยิ่งขึ้น
        </Typography>
        <Typography 
          fontSize={useSmallFont ? '16px' : '18px'}
        >
          ท่านสามารถศึกษารายละเอียดคุกกี้ได้ที่{' '}
          <Box
            component="span"
            sx={{
              textDecoration: 'underline',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            นโยบายความเป็นส่วนตัวและข้อมูลส่วนบุคคล
          </Box>
          ของบริษัทฯ
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: useSmallFont ? 4 : 5,
          mt: { xs: 2, md: 2 },
          flexDirection: { xs: 'column', sm: 'row' },
          width: { xs: '100%', md: 'auto' },
        }}
      >
        <Button
          variant="outlined"
          onClick={handleAcceptNecessary}
          sx={{
            borderColor: 'white',
            color: 'white',
            borderRadius: 2,
            padding: useSmallFont ? '2px 50px' : '2px 60px',
            fontSize: useSmallFont ? '22px' : '24px',
            '&:hover': {
              borderColor: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          ตั้งค่าคุกกี้
        </Button>
        <Button
          variant="contained"
          onClick={handleAcceptAll}
          sx={{
            backgroundColor: 'white',
            color: '#05058C',
            borderRadius: 2,
            padding: useSmallFont ? '6px 40px' : '8px 50px',
            fontSize: useSmallFont ? '22px' : '24px',
            marginRight: useSmallFont ? '40px' : '50px',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            },
          }}
        >
          ยินยอมทั้งหมด
        </Button>
      </Box>
    </Box>
  );
};