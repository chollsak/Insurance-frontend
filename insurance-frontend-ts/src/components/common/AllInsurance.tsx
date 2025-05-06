import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

export const AllInsurance = () => {
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
  
  // Use the specified breakpoint of 1450px
  const useSmallFont = windowWidth <= 1450;
  
  // Insurance type data with cover images and icons
  const insuranceTypes = [
    {
      title: 'ประกันภัยรถยนต์',
      description: 'อุ่นใจในทุกเส้นทาง เพราะมีเราเคียงข้าง 24 ชั่วโมง',
      coverImage: '/src/assets/img/insurance/car-cover.png',
      iconImage: '/src/assets/img/insurance/car-icon.png',
    },
    {
      title: 'ประกันภัยการเดินทาง',
      description: 'สำหรับนักเดินทางทั้งในประเทศและต่างประเทศ สามารถเลือกแพ็คเกจได้ตามที่ต้องการ',
      coverImage: '/src/assets/img/insurance/travel-cover.png',
      iconImage: '/src/assets/img/insurance/travel-icon.png',
    },
    {
      title: 'ประกันภัยอุบัติเหตุ',
      description: 'คุ้มครองทุกวัดและชีวิต ทั้งในเมืองไทย อุ่นใจได้เสมอ',
      coverImage: '/src/assets/img/insurance/accident-cover.png',
      iconImage: '/src/assets/img/insurance/accident-icon.png',
    },
    {
      title: 'ประกันภัยสุขภาพ',
      description: 'สบายใจเมื่อมีประกันภัยสุขภาพ หมดห่วงเรื่องค่ารักษาพยาบาล',
      coverImage: '/src/assets/img/insurance/health-cover.png',
      iconImage: '/src/assets/img/insurance/health-icon.png',
    },
    {
      title: 'ประกันภัยสำหรับทรัพย์สิน',
      description: 'อุ่นใจด้วยความคุ้มครองทรัพย์สินหลากหลายรูปแบบ',
      coverImage: '/src/assets/img/insurance/property-cover.png',
      iconImage: '/src/assets/img/insurance/property-icon.png',
    },
    {
      title: 'ประกันภัยสำหรับที่อยู่ อาศัย ร้านค้า และสถานประกอบการ',
      description: 'สร้างหลักประกันที่มั่นคงสำหรับครอบครัวและธุรกิจด้วยประกันภัยสำหรับที่อยู่อาศัยและร้านค้า',
      coverImage: '/src/assets/img/insurance/home-cover.png',
      iconImage: '/src/assets/img/insurance/home-icon.png',
    },
    {
      title: 'ประกันภัยสำหรับการประกอบการและธุรกิจ',
      description: 'เพิ่มความอุ่นใจด้วยการประกันภัยที่ครอบคลุมทุกความเสี่ยงภัย',
      coverImage: '/src/assets/img/insurance/business-cover.png',
      iconImage: '/src/assets/img/insurance/business-icon.png',
    },
    {
      title: 'ประกันภัยความรับผิดต่อบุคคลภายนอก',
      description: 'ให้ความคุ้มครองความรับผิดต่อบุคคลภายนอกสำหรับธุรกิจหรือผู้ประกอบอาชีพต่างๆ',
      coverImage: '/src/assets/img/insurance/liability-cover.png',
      iconImage: '/src/assets/img/insurance/liability-icon.png',
    },
    {
      title: 'ประกันภัยสำหรับทรัพย์สิน',
      description: 'อุ่นใจด้วยความคุ้มครองทรัพย์สินหลากหลายรูปแบบ',
      coverImage: '/src/assets/img/insurance/engineering-cover.png',
      iconImage: '/src/assets/img/insurance/engineering-icon.png',
    },
    {
      title: 'ประกันภัยสำหรับที่อยู่ อาศัย ร้านค้า และสถานประกอบการ',
      description: 'สร้างหลักประกันที่มั่นคงสำหรับครอบครัวและธุรกิจด้วยประกันภัยสำหรับที่อยู่อาศัยและร้านค้า',
      coverImage: '/src/assets/img/insurance/sea-cover.png',
      iconImage: '/src/assets/img/insurance/sea-icon.png',
    },
    {
      title: 'ประกันภัยสำหรับการประกอบการและธุรกิจ',
      description: 'เพิ่มความอุ่นใจด้วยการประกันภัยที่ครอบคลุมทุกความเสี่ยงภัย',
      coverImage: '/src/assets/img/insurance/drone-cover.png',
      iconImage: '/src/assets/img/insurance/drone-icon.png',
    },
    {
      title: 'ประกันภัยความรับผิดต่อบุคคลภายนอก',
      description: 'ให้ความคุ้มครองความรับผิดต่อบุคคลภายนอกสำหรับธุรกิจหรือผู้ประกอบอาชีพต่างๆ',
      coverImage: '/src/assets/img/insurance/other-cover.png',
      iconImage: '/src/assets/img/insurance/other-icon.png',
    }
  ];

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
            key={index}
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
                  src={insurance.coverImage}
                  alt={insurance.title}
                  sx={{
                    width: useSmallFont ? '260px' : '270px',
                    height: useSmallFont ? '155px' : '160px',
                    objectFit: 'cover'
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
                    src={insurance.iconImage}
                    alt="Icon"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
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
                  {insurance.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: useSmallFont ? '16px' : '18px',
                    color: '#3E4767',
                    lineHeight: 1
                  }}
                >
                  {insurance.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};