import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';

interface PromoData {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  discount: string;
  couponCode: string;
  validUntil: string;
  image: string;
  bgColor: string;
  giftImage?: string;
  giftText?: string;
}

interface PromotionCardProps {
  promo: PromoData;
  useSmallFont: boolean;
}

export const PromotionCard: React.FC<PromotionCardProps> = ({ promo, useSmallFont }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '430px',
        borderRadius: '12px',
        overflow: 'hidden',
        bgcolor: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        height: '450px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Card image at the top - fixed height */}
      <Box
        sx={{
          bgcolor: promo.bgColor,
          width: '100%',
          position: 'relative',
          height: '250px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {/* Main image */}
        <Box
          component="img"
          src={promo.image}
          alt={promo.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Card content section - can grow if content is long */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          minHeight: '200px',
        }}
      >
        <Typography
          sx={{
            fontSize: useSmallFont ? '24px' : '26px',
            fontWeight: 'medium',
            color: '#05058C',
            mb: 1,
            lineHeight: 1.2,
          }}
        >
          {promo.title}
        </Typography>

        <Typography 
          sx={{ 
            color: '#3E4767', 
            mb: 'auto',
            fontSize: useSmallFont ? '18px' : '20px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            lineHeight: 1.3,
          }}
        >
          {promo.description}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 0,
            mb: -2,
            pt: 0,
            borderTop: '0px solid #eee',
          }}
        >
          <Typography sx={{ color: '#05058C', fontSize: useSmallFont ? '16px' : '18px'}}>
            {promo.validUntil}
          </Typography>

          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: '#05058C',
              fontSize: useSmallFont ? '20px' : '22px',
              fontWeight: 'medium',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              },
            }}
          >
            รายละเอียด
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export const Promotion: React.FC = () => {
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
  
  // Updated breakpoint to 1450px as requested
  const useSmallFont = windowWidth <= 1450;
  
  // Promotion data
  const promotions: PromoData[] = [
    {
      id: 1,
      title: 'เบี้ยประกันภัยเริ่มต้น 135 บาท',
      subTitle: 'เที่ยวสนุก อุ่นใจตลอดทริป ด้วยประกันภัยการเดินทางต่างประเทศ Worldwide',
      description: 'คุ้มครองหลักล้าน ค่ารักษาพยาบาลในต่างประเทศ พร้อมบริการช่วยเหลือฉุกเฉินตลอด 24 ชั่วโมง',
      discount: '18%',
      couponCode: 'CTANY',
      validUntil: 'วันนี้ - 31 มีนาคม 2568',
      image: '/src/assets/img/promotion/promotion1.png',
      bgColor: '#a8bbd6',
    },
    {
      id: 2,
      title: 'New year surpise',
      subTitle: '',
      description: 'เมื่อทำประกันภัยการเดินทางต่างประเทศ (Travel Delight) รับเพิ่มสิทธิพิเศษ 2 ต่อ',
      discount: '',
      couponCode: '',
      validUntil: 'วันนี้ - 31 มีนาคม 2568',
      image: '/src/assets/img/promotion/promotion3.png',
      bgColor: '#a8bbd6',
    },
    {
      id: 3,
      title: 'ดีลพิเศษ คุ้มค่า x2',
      subTitle: 'ดีลพิเศษ 10 วัน คุ้มค่า x2 ประกันภัยเดินทางต่างประเทศ แบบรายปี',
      description: 'เพียงทำประกันภัยการเดินทางต่างประเทศ แบบรายปี ครบธรรมใหม่ ผ่านเว็บไซต์ รับส่วนลดทันที 15% เมื่อใส่โค้ด CTA24',
      discount: '15%',
      couponCode: 'CTA24',
      validUntil: 'วันนี้ - 31 มีนาคม 2568',
      image: '/src/assets/img/promotion/promotion2.png',
      bgColor: '#75c5e4',
    },
    {
      id: 4,
      title: 'ดีลพิเศษ คุ้มค่า x2',
      subTitle: 'ดีลพิเศษ 10 วัน คุ้มค่า x2 ประกันภัยเดินทางต่างประเทศ แบบรายปี',
      description: 'เพียงทำประกันภัยการเดินทางต่างประเทศ รับสิทธิพิเศษเพิ่มเติมสำหรับผู้ถือบัตรเครดิตพาร์ทเนอร์ กรุณาตรวจสอบเงื่อนไขเพิ่มเติมบนเว็บไซต์',
      discount: '15%',
      couponCode: 'CTA24',
      validUntil: 'วันนี้ - 31 มีนาคม 2568',
      image: '/src/assets/img/promotion/promotion1.png',
      bgColor: '#75c5e4',
    },
    {
      id: 5,
      title: 'ดีลพิเศษ คุ้มค่า x2',
      subTitle: 'ดีลพิเศษ 10 วัน คุ้มค่า x2 ประกันภัยเดินทางต่างประเทศ แบบรายปี',
      description: 'เพียงทำประกันภัยการเดินทางต่างประเทศ แบบรายปี ครบธรรมใหม่ ผ่านเว็บไซต์ รับส่วนลดทันที 15% เมื่อใส่โค้ด CTA24',
      discount: '15%',
      couponCode: 'CTA24',
      validUntil: 'วันนี้ - 31 มีนาคม 2568',
      image: '/src/assets/img/promotion/promotion2.png',
      bgColor: '#75c5e4',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showDesktopButtons, setShowDesktopButtons] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  // Adjust cards per view based on screen width
  const cardsPerView = useSmallFont ? 2.8 : 3.1;

  // Check if we need desktop navigation buttons (if there are more cards than can fit)
  useEffect(() => {
    const checkForOverflow = () => {
      const container = containerRef.current;
      if (container) {
        setShowDesktopButtons(promotions.length > cardsPerView);
      }
    };

    checkForOverflow();
    window.addEventListener('resize', checkForOverflow);
    
    return () => {
      window.removeEventListener('resize', checkForOverflow);
    };
  }, [promotions.length, cardsPerView]);

  const handlePrev = (): void => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        // On mobile, loop to the end
        return promotions.length - 1;
      }
      // On desktop, we might want to move by cardsPerView
      return Math.max(0, prevIndex - 1);
    });
  };

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= promotions.length - 1) {
        // On mobile, loop to the beginning
        return 0;
      }
      // On desktop, we might want to move by cardsPerView but still check bounds
      return Math.min(promotions.length - 1, prevIndex + 1);
    });
  };

  return (
    <div>
      <Box sx={{
        width:'100%',
        py: 2,
        height: { xs: 'auto', md: '550px' },
        minHeight: '550px',
        bgcolor:'#E5EBF5',
        mt:'100px'
      }}>
        {/* Content inside the background box */}
        <Box sx={{ 
          height: '100%', 
          px: { xs: 2, md: useSmallFont ? 15 : 23 },
          display: 'flex',
          flexDirection: 'column',
          mt:-1
        }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mb: 0,
            mt: 1
          }}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: '#0f0b75', 
                fontWeight: 'bold',
                fontSize: useSmallFont ? '30px' : '32px'
              }}
            >
              โปรโมชัน
            </Typography>
            <Typography 
              sx={{ 
                color: 'black', 
                fontWeight: 'medium',
                fontSize: useSmallFont ? '20px' : '22px',
                cursor: 'pointer',
                display: 'flex',
                textDecoration:'underline 2px',
                alignItems: 'center'
              }}
            >
              โปรโมชันทั้งหมด
            </Typography>
          </Box>

          {/* Desktop view */}
          <Box sx={{ 
            display: { xs: 'none', md: 'block' },
            position: 'relative',
            flexGrow: 1
          }}>
            {/* Navigation buttons for desktop */}
            {showDesktopButtons && (
              <>
                <IconButton
                  sx={{
                    position: 'absolute',
                    left: useSmallFont ? '-40px' : '-60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    '&:hover': {
                      bgcolor: 'white'
                    },
                    zIndex: 2,
                    display: currentIndex > 0 ? 'flex' : 'none'
                  }}
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeftIcon />
                </IconButton>
                
                <IconButton
                  sx={{
                    position: 'absolute',
                    right: useSmallFont ? '-50px' : '-70px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    '&:hover': {
                      bgcolor: 'white'
                    },
                    zIndex: 2,
                    display: currentIndex < promotions.length - cardsPerView ? 'flex' : 'none'
                  }}
                  onClick={handleNext}
                  disabled={currentIndex >= promotions.length - cardsPerView}
                >
                  <ChevronRightIcon />
                </IconButton>
              </>
            )}

            {/* Desktop cards container */}
            <Box 
              ref={containerRef}
              sx={{ 
                display: 'flex',
                gap: useSmallFont ? 2 : 3,
                overflow: 'hidden',
                position: 'relative',
                height: '100%',
                mt: 2
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: useSmallFont ? 3 : 4,
                  transition: 'transform 0.5s ease',
                  transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                  height: '100%',
                }}
              >
                {promotions.map((promo) => (
                  <Box 
                    key={promo.id} 
                    sx={{ 
                      flex: `0 0 calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 12 / cardsPerView}px)`,
                      height: '100%',
                    }}
                  >
                    <PromotionCard promo={promo} useSmallFont={useSmallFont} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Mobile view */}
          <Box sx={{ 
            display: { xs: 'block', md: 'none' }, 
            position: 'relative',
            flexGrow: 1,
            mt: 2
          }}>
            <Box sx={{ 
              display: 'flex', 
              overflow: 'hidden', 
              position: 'relative',
              borderRadius: '12px',
              height: '600px',
            }}>
              <Box sx={{ 
                display: 'flex', 
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(-${currentIndex * 100}%)`,
                width: '100%',
                height: '100%',
              }}>
                {promotions.map((promo) => (
                  <Box 
                    key={promo.id}
                    sx={{ 
                      minWidth: '100%', 
                      px: 1,
                      height: '100%',
                    }}
                  >
                    <PromotionCard promo={promo} useSmallFont={useSmallFont} />
                  </Box>
                ))}
              </Box>
            </Box>
            
            {/* Navigation buttons for mobile */}
            <IconButton
              sx={{
                position: 'absolute',
                left: '5px',
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                '&:hover': {
                  bgcolor: 'white'
                },
                zIndex: 2
              }}
              onClick={handlePrev}
            >
              <ChevronLeftIcon />
            </IconButton>
            
            <IconButton
              sx={{
                position: 'absolute',
                right: '5px',
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                '&:hover': {
                  bgcolor: 'white'
                },
                zIndex: 2
              }}
              onClick={handleNext}
            >
              <ChevronRightIcon />
            </IconButton>
            
            {/* Indicators for mobile */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mt: 2 
            }}>
              {promotions.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: index === currentIndex ? '#0f0b75' : '#ccc',
                    mx: 0.5,
                    cursor: 'pointer'
                  }}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};