import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

export const Footer = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

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
        padding: '25px',
        paddingLeft: '50px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography fontSize={'30px'} sx={{ fontWeight: 'bold', mb: 1}}>
          เว็บไซต์นี้มีการจัดเก็บคุกกี้ (Cookies)
        </Typography>
        <Typography fontSize={'25px'} sx={{mb:-1}}>
          เพื่อพัฒนาปรับปรุงการนำเสนอเนื้อหาที่ดีสำหรับผู้ใช้งาน และอำนวยความสะดวกให้ผู้ใช้งานสามารถใช้บริการต่างๆ ภายในเว็บไซต์ได้ง่ายและมีประสิทธิภาพยิ่งขึ้น
        </Typography>
        <Typography fontSize={'25px'}>
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
          gap: 5,
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
            padding: '8px 70px',
            fontSize:'30px',
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
            padding: '8px 50px',
            fontSize:'30px',
            marginRight:'50px',
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