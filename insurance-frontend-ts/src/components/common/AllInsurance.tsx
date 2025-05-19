import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { insuranceService } from '../../api/services/insuranceService';
import { Insurance } from '../../api/types/insurance';

export const AllInsurance = () => {
  // State for window width monitoring
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // State for insurances data from API
  const [insuranceTypes, setInsuranceTypes] = useState<Insurance[]>([]);
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
  
  // Use the specified breakpoint of 1450px
  const useSmallFont = windowWidth <= 1450;
  
  // Fetch insurance data from API
  useEffect(() => {
    const fetchInsurances = async () => {
      try {
        setLoading(true);
        const data = await insuranceService.getAllInsurances();
        console.log('Fetched insurances:', data);
        setInsuranceTypes(data);
        setError(null);
      } catch (err: any) {
        console.error('Failed to fetch insurances:', err);
        setError('Failed to load insurances');
        
        // Fallback to static data if API fails
        setInsuranceTypes([
          {
            id: '1',
            title: 'ประกันภัยรถยนต์',
            effectiveFrom: '',
            effectiveTo: '',
            status: 'ACTIVE',
            titleTh: 'ประกันภัยรถยนต์',
            titleEn: 'Car Insurance',
            descriptionTh: 'อุ่นใจในทุกเส้นทาง เพราะมีเราเคียงข้าง 24 ชั่วโมง',
            descriptionEn: 'Feel secure on every route because we are with you 24 hours a day.',
            coverImagePath: '',
            iconImagePath: '',
            createdAt: '',
            updatedAt: '',
            deletedAt: null
          },
          {
            id: '2',
            title: 'ประกันภัยการเดินทาง',
            effectiveFrom: '',
            effectiveTo: '',
            status: 'ACTIVE',
            titleTh: 'ประกันภัยการเดินทาง',
            titleEn: 'Travel Insurance',
            descriptionTh: 'สำหรับนักเดินทางทั้งในประเทศและต่างประเทศ สามารถเลือกแพ็คเกจได้ตามที่ต้องการ',
            descriptionEn: 'For both domestic and international travelers, choose the package that suits your needs.',
            coverImagePath: '',
            iconImagePath: '',
            createdAt: '',
            updatedAt: '',
            deletedAt: null
          },
          {
            id: '3',
            title: 'ประกันภัยอุบัติเหตุ',
            effectiveFrom: '',
            effectiveTo: '',
            status: 'ACTIVE',
            titleTh: 'ประกันภัยอุบัติเหตุ',
            titleEn: 'Accident Insurance',
            descriptionTh: 'คุ้มครองทุกวัดและชีวิต ทั้งในเมืองไทย อุ่นใจได้เสมอ',
            descriptionEn: 'Protection for every day and life in Thailand, always feel secure.',
            coverImagePath: '',
            iconImagePath: '',
            createdAt: '',
            updatedAt: '',
            deletedAt: null
          },
          {
            id: '4',
            title: 'ประกันภัยสุขภาพ',
            effectiveFrom: '',
            effectiveTo: '',
            status: 'ACTIVE',
            titleTh: 'ประกันภัยสุขภาพ',
            titleEn: 'Health Insurance',
            descriptionTh: 'สบายใจเมื่อมีประกันภัยสุขภาพ หมดห่วงเรื่องค่ารักษาพยาบาล',
            descriptionEn: 'Peace of mind with health insurance, worry-free about medical expenses.',
            coverImagePath: '',
            iconImagePath: '',
            createdAt: '',
            updatedAt: '',
            deletedAt: null
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchInsurances();
  }, []);

  // Fallback image mapping
  const getFallbackCoverImage = (type: string): string => {
    const typeMap: Record<string, string> = {
      'Car Insurance': '/src/assets/img/insurance/car-cover.png',
      'Travel Insurance': '/src/assets/img/insurance/travel-cover.png',
      'Accident Insurance': '/src/assets/img/insurance/accident-cover.png',
      'Health Insurance': '/src/assets/img/insurance/health-cover.png',
      'Property Insurance': '/src/assets/img/insurance/property-cover.png',
      'Home Insurance': '/src/assets/img/insurance/home-cover.png',
      'Business Insurance': '/src/assets/img/insurance/business-cover.png',
      'Liability Insurance': '/src/assets/img/insurance/liability-cover.png',
      'Engineering Insurance': '/src/assets/img/insurance/engineering-cover.png',
      'Marine Insurance': '/src/assets/img/insurance/sea-cover.png',
      'Drone Insurance': '/src/assets/img/insurance/drone-cover.png'
    };
    
    return typeMap[type] || '/src/assets/img/insurance/other-cover.png';
  };
  
  const getFallbackIconImage = (type: string): string => {
    const typeMap: Record<string, string> = {
      'Car Insurance': '/src/assets/img/insurance/car-icon.png',
      'Travel Insurance': '/src/assets/img/insurance/travel-icon.png',
      'Accident Insurance': '/src/assets/img/insurance/accident-icon.png',
      'Health Insurance': '/src/assets/img/insurance/health-icon.png',
      'Property Insurance': '/src/assets/img/insurance/property-icon.png',
      'Home Insurance': '/src/assets/img/insurance/home-icon.png',
      'Business Insurance': '/src/assets/img/insurance/business-icon.png',
      'Liability Insurance': '/src/assets/img/insurance/liability-icon.png',
      'Engineering Insurance': '/src/assets/img/insurance/engineering-icon.png',
      'Marine Insurance': '/src/assets/img/insurance/sea-icon.png',
      'Drone Insurance': '/src/assets/img/insurance/drone-icon.png'
    };
    
    return typeMap[type] || '/src/assets/img/insurance/other-icon.png';
  };

  return (
    <Box sx={{ mb:-5}}>
      <Typography 
        fontSize={useSmallFont ? 30 : 32}
        sx={{ 
          color: '#05058C', 
          fontWeight: 'bold', 
          my: useSmallFont ? 2.5 : 3,
          ml: useSmallFont ? 16 : 20,
          textAlign: 'start'
        }}
      >
        ประกันภัยทั้งหมด
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
          <CircularProgress sx={{ color: '#05058C' }} />
        </Box>
      ) : (
        <Box 
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: useSmallFont ? 3 : 4,
            px: { xs: 4, md: useSmallFont ? 16 : 20 }
          }}
        >
          {insuranceTypes.map((insurance, index) => (
            <Box
              key={insurance.id || index}
              sx={{
                width: {
                  xs: '100%',
                  sm: 'calc(50% - 24px)',
                  lg: 'calc(25% - 24px)'
                },
                borderRadius: '12px',
                overflow: 'hidden',
                bgcolor: 'white',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                },
                cursor: 'pointer'
              }}
            >
              {/* Card content container */}
              <Box sx={{ position: 'relative', height: '100%' }}>
                {/* Cover image */}
                <Box
                  sx={{
                    height: useSmallFont ? '250px' : '260px',
                    width: '100%',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src={insurance.coverImagePath 
                      ? insuranceService.getImageUrl(insurance.coverImagePath) 
                      : getFallbackCoverImage(insurance.titleEn)}
                    alt={insurance.title}
                    sx={{
                      width: useSmallFont ? '260px' : '270px',
                      height: useSmallFont ? '155px' : '160px',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      console.error(`Error loading cover image for ${insurance.title}`);
                      e.currentTarget.src = getFallbackCoverImage(insurance.titleEn);
                    }}
                  />
                  
                  {/* Icon overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '115px',
                      right: '15px',
                      width: useSmallFont ? '65px' : '68px',
                      height: useSmallFont ? '65px' : '68px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border:'1px solid #F3F3F5',
                      padding: '8px'
                    }}
                  >
                    <Box
                      component="img"
                      src={insurance.iconImagePath 
                        ? insuranceService.getImageUrl(insurance.iconImagePath) 
                        : getFallbackIconImage(insurance.titleEn)}
                      alt="Icon"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        console.error(`Error loading icon image for ${insurance.title}`);
                        e.currentTarget.src = getFallbackIconImage(insurance.titleEn);
                      }}
                    />
                  </Box>
                </Box>

                {/* Text content */}
                <Box sx={{ p: useSmallFont ? 3.5 : 4, mt: useSmallFont ? -12 : -12.5, mb:0 }}>
                  <Typography
                    sx={{
                      fontSize: useSmallFont ? '20px' : '22px',
                      fontWeight: 'bold',
                      color: 'black',
                      mb: 1.5,
                      lineHeight: 1
                    }}
                  >
                    {insurance.titleTh || insurance.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: useSmallFont ? '16px' : '18px',
                      color: '#3E4767',
                      lineHeight: 1
                    }}
                  >
                    {insurance.descriptionTh || insurance.descriptionEn}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};