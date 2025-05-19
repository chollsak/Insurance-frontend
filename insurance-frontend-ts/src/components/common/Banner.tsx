import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { bannerService } from "../../api/services/bannerService";
import { Banner as BannerType } from "../../api/types/banner";

// Fallback banner images in case API fails
const fallbackBannerImages = [
  "/src/assets/img/banner/banner1.png",
  "/src/assets/img/banner/banner2.png",
  "/src/assets/img/banner/banner3.png",
  "/src/assets/img/banner/banner1.png",
  "/src/assets/img/banner/banner2.png",
  "/src/assets/img/banner/banner3.png",
];

// Fallback background image
const fallbackBgImage = "/src/assets/img/banner/bg.png";

export const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = windowWidth <= 1450 ? 300 : 350;
  const gap = windowWidth <= 1450 ? 16 : 24;
  
  // New state for API data - we'll only use the first banner
  const [banner, setBanner] = useState<BannerType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bannerImages, setBannerImages] = useState<string[]>(fallbackBannerImages);
  const [backgroundImage, setBackgroundImage] = useState<string>(fallbackBgImage);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch the first banner from API
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        setLoading(true);
        const data = await bannerService.getAllBanners();
        console.log('Fetched banners:', data);
        
        if (data.length > 0) {
          // Set only the first banner
          const firstBanner = data[0];
          setBanner(firstBanner);
          
          // Set the background image to the banner's cover image
          setBackgroundImage(bannerService.getImageUrl(firstBanner.coverImagePath));
          
          // Create an array with content images for the scrolling section
          const contentImages: string[] = firstBanner.contents.map(content => 
            bannerService.getImageUrl(content.contentImagePath)
          );
          
          if (contentImages.length > 0) {
            setBannerImages(contentImages);
          } else {
            // If no content images, use fallback for scrolling section
            setBannerImages(fallbackBannerImages);
          }
          
        } else {
          console.log('No banners found, using fallback images');
          setBannerImages(fallbackBannerImages);
        }
        
        setError(null);
      } catch (err: any) {
        console.error('Failed to fetch banner:', err);
        setError('Failed to load banner');
        
        // Fallback to static images if API fails
        setBannerImages(fallbackBannerImages);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  // Automatic scrolling effect
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
          backgroundImage: `url(${backgroundImage})`,
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
          // Add error handling for background image
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${fallbackBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            opacity: 0, // Initially hidden
            transition: 'opacity 0.5s ease',
          }
        }}
        // Handle background image error using onError for the entire container
        onError={() => {
          console.error('Error loading background image');
          setBackgroundImage(fallbackBgImage);
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
            {banner?.title || "กรุงเทพประกันภัย"}
          </Typography>
          <Typography sx={{ mb: -1, fontSize: useSmallFont ? '22px' : '24px' }}>
            สินค้าประกันภัยและบริการใหม่
          </Typography>
          <Typography sx={{ mb: 1, fontSize: useSmallFont ? '22px' : '24px' }}>
            รวมทั้งโปรโมชั่นที่คุ้มค่าที่กรุงเทพประกันภัยเตรียมไว้ให้คุณ
          </Typography>
          <Button
            variant="contained"
            component="a"
            href={banner?.coverHyperLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: '#05058C',
              mb: -20,
              '&:hover': { bgcolor: '#001850' },
              borderRadius: '12px',
              padding: useSmallFont ? '8px 35px' : '10px 45px',
              textTransform: 'none',
              fontSize: useSmallFont ? '22px' : '24px',
              textDecoration: 'none',
            }}
          >
            ค้นหาแผนประกันที่ใช่
          </Button>
        </Box>

        {/* Banners */}
        <Box sx={{ width: '70%', position: 'relative', zIndex: 2 }}>
          {loading ? (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: `${cardWidth}px` 
            }}>
              <CircularProgress sx={{ color: 'white' }} />
            </Box>
          ) : (
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
              {bannerImages.map((src, index) => {
                // Get hyperlink based on index
                let href = "#";
                if (banner && banner.contents && index < banner.contents.length) {
                  href = banner.contents[index].contentHyperLink || "#";
                }
                
                return (
                  <Box
                    key={index}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                    }}
                  >
                    <Box
                      component="img"
                      src={src}
                      alt={banner && banner.contents && index < banner.contents.length 
                        ? `Content ${index + 1}` 
                        : `Banner ${index + 1}`}
                      sx={{
                        width: `${cardWidth}px`,
                        height: `${cardWidth}px`,
                        objectFit: 'cover',
                        borderRadius: '12px',
                        flexShrink: 0,
                      }}
                      onError={(e) => {
                        console.error(`Error loading banner image ${index}`);
                        e.currentTarget.src = fallbackBannerImages[index % fallbackBannerImages.length];
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};