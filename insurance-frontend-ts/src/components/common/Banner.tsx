import { Box, Typography, Button } from "@mui/material"
import { useEffect, useState } from "react";

export const Banner = () => {
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
  
  // Use the same breakpoint as Navbar
  const useSmallFont = windowWidth <= 1450;
  
  return (
    <Box>
      <Box 
        width={'full'} 
        height={useSmallFont ? 350 : 393.56} 
        sx={{
          backgroundImage: 'url(/src/assets/img/banner/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: useSmallFont ? '80px' : '130px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(57, 120, 233, 0.4)', // Semi-transparent overlay
            zIndex: 1
          }
        }}
      >
        {/* Text content on the left */}
        <Box 
          sx={{ 
            color: 'white', 
            width: useSmallFont ? '35%' : '30%', 
            zIndex: 2,
            position: 'relative',
            mb: useSmallFont ? 16 : 18
          }}
        >
          <Typography sx={{mb:-1, fontWeight: 'bold', fontSize: useSmallFont ? '36px' : '40px' }}>
            กรุงเทพประกันภัย
          </Typography>
          <Typography sx={{ mb: -1, fontSize: useSmallFont ? '22px' : '24px'}}>
            สินค้าประกันภัยและบริการใหม่
          </Typography>
          <Typography sx={{ mb: 1, fontSize: useSmallFont ? '22px' : '24px'}}>
            รวมทั้งโปรโมชั่นที่คุ้มค่าที่กรุงเทพประกันภัยเตรียมไว้ให้คุณ
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: '#05058C', 
              mb: -20,
              '&:hover': { bgcolor: '#001850' },
              borderRadius: '12px',
              padding: useSmallFont ? '8px 35px' : '10px 45px',
              textTransform: 'none',
              fontSize: useSmallFont ? '22px' : '24px'
            }}
          >
            ค้นหาแผนประกันที่ใช่
          </Button>
        </Box>

        {/* Scrollable images container */}
        <Box sx={{ width: '70%', position: 'relative', zIndex: 2 }}>
          {/* Scrollable images */}
          <Box
            sx={{
              display: 'flex',
              gap: useSmallFont ? 2 : 3,
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollbarWidth: 'thin',
              '&::-webkit-scrollbar': { 
                height: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px'
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '10px',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.5)'
                }
              },
              padding: '10px 5px',
              scrollBehavior: 'smooth',
              cursor: 'grab',
              '&:active': {
                cursor: 'grabbing'
              }
            }}
          >
            {/* Banner 1 */}
            <Box 
              component="img"
              src="/src/assets/img/banner/banner1.png"
              alt="Banner 1"
              sx={{ 
                width: useSmallFont ? '300px' : '350px',
                height: useSmallFont ? '300px' : '350px',
                objectFit: 'cover',
                borderRadius: '12px',
                flexShrink: 0
              }}
            />
            
            {/* Banner 2 */}
            <Box
              component="img"
              src="/src/assets/img/banner/banner2.png"
              alt="Banner 2"
              sx={{ 
                width: useSmallFont ? '300px' : '350px',
                height: useSmallFont ? '300px' : '350px',
                objectFit: 'cover',
                borderRadius: '12px',
                flexShrink: 0
              }}
            />
            
            {/* Banner 3 */}
            <Box
              component="img"
              src="/src/assets/img/banner/banner3.png"
              alt="Banner 3"
              sx={{ 
                width: useSmallFont ? '300px' : '350px',
                height: useSmallFont ? '300px' : '350px',
                objectFit: 'cover',
                borderRadius: '12px',
                flexShrink: 0
              }}
            />
            
            {/* Banner 4 */}
            <Box
              component="img"
              src="/src/assets/img/banner/banner4.png"
              alt="Banner 4"
              sx={{ 
                width: useSmallFont ? '300px' : '350px',
                height: useSmallFont ? '300px' : '350px',
                objectFit: 'cover',
                borderRadius: '12px',
                flexShrink: 0
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}