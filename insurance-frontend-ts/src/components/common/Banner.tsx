import { Box, Typography, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const bannerImages = [
  "/src/assets/img/banner/banner1.png",
  "/src/assets/img/banner/banner2.png",
  "/src/assets/img/banner/banner3.png",
  "/src/assets/img/banner/banner1.png",
  "/src/assets/img/banner/banner2.png",
  "/src/assets/img/banner/banner3.png",
];

export const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = windowWidth <= 1450 ? 300 : 350;
  const gap = windowWidth <= 1450 ? 16 : 24;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const scrollContainer = scrollRef.current;
      if (scrollContainer) {
        const scrollAmount = cardWidth + gap;
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        // If we're near the end, scroll back to start
        if (scrollContainer.scrollLeft + scrollAmount >= maxScrollLeft) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [cardWidth, gap]);

  const useSmallFont = windowWidth <= 1450;

  return (
    <Box>
      <Box
        width="100%"
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
            backgroundColor: 'rgba(57, 120, 233, 0.4)',
            zIndex: 1,
          },
        }}
      >
        {/* Text */}
        <Box
          sx={{
            color: 'white',
            width: useSmallFont ? '35%' : '30%',
            zIndex: 2,
            position: 'relative',
            mb: useSmallFont ? 16 : 18,
          }}
        >
          <Typography sx={{ mb: -1, fontWeight: 'bold', fontSize: useSmallFont ? '36px' : '40px' }}>
            กรุงเทพประกันภัย
          </Typography>
          <Typography sx={{ mb: -1, fontSize: useSmallFont ? '22px' : '24px' }}>
            สินค้าประกันภัยและบริการใหม่
          </Typography>
          <Typography sx={{ mb: 1, fontSize: useSmallFont ? '22px' : '24px' }}>
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
              fontSize: useSmallFont ? '22px' : '24px',
            }}
          >
            ค้นหาแผนประกันที่ใช่
          </Button>
        </Box>

        {/* Banners */}
        <Box sx={{ width: '70%', position: 'relative', zIndex: 2 }}>
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              gap: `${gap}px`,
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollbarWidth: 'thin',
              '&::-webkit-scrollbar': { height: '6px' },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '10px',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.5)',
                },
              },
              padding: '10px 5px',
              scrollBehavior: 'smooth',
              cursor: 'grab',
              '&:active': {
                cursor: 'grabbing',
              },
            }}
          >
            {bannerImages.map((src, index) => (
              <Box
                key={index}
                component="img"
                src={src}
                alt={`Banner ${index + 1}`}
                sx={{
                  width: `${cardWidth}px`,
                  height: `${cardWidth}px`,
                  objectFit: 'cover',
                  borderRadius: '12px',
                  flexShrink: 0,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
