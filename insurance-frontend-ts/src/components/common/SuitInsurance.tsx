import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { suitInsuranceService } from '../../api/services/suitInsuranceService';
import { SuitInsurance as SuitInsuranceType } from '../../api/types/suitInsurance';

export const SuitInsurance = () => {
  // State for window width monitoring
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // State for suit insurances data from API
  const [insuranceCategories, setInsuranceCategories] = useState<SuitInsuranceType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
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
  
  // Fetch suit insurance data from API
  useEffect(() => {
    const fetchSuitInsurances = async () => {
      try {
        setLoading(true);
        const data = await suitInsuranceService.getAllSuitInsurances();
        console.log('Fetched suit insurances:', data);
        setInsuranceCategories(data);
        setError(null);
      } catch (err: any) {
        console.error('Failed to fetch suit insurances:', err);
        setError('Failed to load suit insurances');
        
        // Fallback to static data if API fails
        setInsuranceCategories([
          {
            id: '1',
            title: 'นักกีฬา',
            effectiveFrom: '',
            effectiveTo: '',
            status: 'ACTIVE',
            titleTh: 'นักกีฬา',
            titleEn: 'Sports',
            imagePath: 'sports.png'
          },
          {
            id: '2',
            title: 'วัยทำงาน',
            effectiveFrom: '',
            effectiveTo: '',
            status: 'ACTIVE',
            titleTh: 'วัยทำงาน',
            titleEn: 'Work',
            imagePath: 'work.png'
          },
          {
            id: '3',
            title: 'คนรักบ้าน',
            effectiveFrom: '',
            effectiveTo: '',
            status: 'ACTIVE',
            titleTh: 'คนรักบ้าน',
            titleEn: 'Home',
            imagePath: 'home.png'
          },
          {
            id: '4',
            title: 'คนรักครอบครัว',
            effectiveFrom: '',
            effectiveTo: '',
            status: 'ACTIVE',
            titleTh: 'คนรักครอบครัว',
            titleEn: 'Family',
            imagePath: 'family.png'
          },
          {
            id: '5',
            title: 'อยากสุขภาพดี',
            effectiveFrom: '',
            effectiveTo: '',
            status: 'ACTIVE',
            titleTh: 'อยากสุขภาพดี',
            titleEn: 'Health',
            imagePath: 'health.png'
          },
          {
            id: '6',
            title: 'นักเดินทาง',
            effectiveFrom: '',
            effectiveTo: '',
            status: 'ACTIVE',
            titleTh: 'นักเดินทาง',
            titleEn: 'Travel',
            imagePath: 'travel.png'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSuitInsurances();
  }, []);
  
  // Use the same breakpoint as other components (1434px)
  const useSmallFont = windowWidth <= 1450;

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

        {/* Loading state */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress sx={{ color: '#05058C' }} />
          </Box>
        ) : (
          /* Flexbox grid */
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: useSmallFont ? 7 : 8.5,
              justifyContent: 'center'
            }}
          >
            {insuranceCategories.map((category) => (
              <Box
                key={category.id}
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
                      src={`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/attachments/${category.imagePath}`}
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
                      onError={(e) => {
                        console.error(`Error loading image for ${category.title}:`, category.imagePath);
                        // Fallback to static images if API images fail
                        e.currentTarget.src = `/src/assets/img/suitInsurance/${category.titleEn?.toLowerCase() || 'default'}.png`;
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
                    {category.titleTh || category.title}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        )}
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