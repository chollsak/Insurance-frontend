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

  // Use for manual scrolling
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true);
  
  // State for mobile view
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);

  // Handle manual scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Check scroll position to show/hide shadows
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    
    // Show left shadow if scrolled right
    setShowLeftShadow(scrollLeft > 0);
    
    // Show right shadow if not at the end
    setShowRightShadow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // For button navigation
  const handlePrev = (): void => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: -430, // Width of a card
      behavior: 'smooth'
    });
  };

  const handleNext = (): void => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: 430, // Width of a card
      behavior: 'smooth'
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

          {/* Desktop view with scrollable container */}
          <Box sx={{ 
            display: { xs: 'none', md: 'block' },
            position: 'relative',
            flexGrow: 1,
            mt: 2
          }}>
            {/* Left shadow indicator */}
            {showLeftShadow && (
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: '50px',
                  background: 'linear-gradient(to right, rgba(229, 235, 245, 0.8), rgba(229, 235, 245, 0))',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
              />
            )}
            
            {/* Right shadow indicator */}
            {showRightShadow && (
              <Box
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  height: '100%',
                  width: '50px',
                  background: 'linear-gradient(to left, rgba(229, 235, 245, 0.8), rgba(229, 235, 245, 0))',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
              />
            )}
            
            {/* Navigation buttons */}
            <IconButton
              sx={{
                position: 'absolute',
                left: '-40px',
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                '&:hover': {
                  bgcolor: 'white'
                },
                zIndex: 2,
                display: showLeftShadow ? 'flex' : 'none'
              }}
              onClick={handlePrev}
            >
              <ChevronLeftIcon />
            </IconButton>
            
            <IconButton
              sx={{
                position: 'absolute',
                right: '-40px',
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                '&:hover': {
                  bgcolor: 'white'
                },
                zIndex: 2,
                display: showRightShadow ? 'flex' : 'none'
              }}
              onClick={handleNext}
            >
              <ChevronRightIcon />
            </IconButton>

            {/* Scrollable container */}
            <Box 
              ref={scrollContainerRef}
              sx={{ 
                display: 'flex',
                overflowX: 'auto',
                overflowY: 'hidden',
                height: '100%',
                scrollbarWidth: 'none', // Firefox
                '&::-webkit-scrollbar': {
                  display: 'none'  // Chrome, Safari, Edge
                },
                msOverflowStyle: 'none',  // IE
                cursor: isDragging ? 'grabbing' : 'grab',
                gap: useSmallFont ? 3 : 4,
                pb: 2, // Add padding at bottom to avoid scrollbar cutoff
              }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onScroll={handleScroll}
            >
              {promotions.map((promo) => (
                <Box 
                  key={promo.id} 
                  sx={{ 
                    flex: '0 0 auto',
                    width: useSmallFont ? '400px' : '430px',
                    height: '100%',
                  }}
                >
                  <PromotionCard promo={promo} useSmallFont={useSmallFont} />
                </Box>
              ))}
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
                transform: `translateX(${-mobileCurrentIndex * 100}%)`,
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
              onClick={() => {
                const newIndex = mobileCurrentIndex === 0 ? promotions.length - 1 : mobileCurrentIndex - 1;
                setMobileCurrentIndex(newIndex);
              }}
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
              onClick={() => {
                const newIndex = mobileCurrentIndex >= promotions.length - 1 ? 0 : mobileCurrentIndex + 1;
                setMobileCurrentIndex(newIndex);
              }}
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
                    bgcolor: index === mobileCurrentIndex ? '#0f0b75' : '#ccc',
                    mx: 0.5,
                    cursor: 'pointer'
                  }}
                  onClick={() => setMobileCurrentIndex(index)}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};