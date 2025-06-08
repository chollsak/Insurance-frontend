import { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { BannerListResponse, BannerModel } from "../../../models";
import { getImageUrl } from "../../../utils";
import { useTranslation } from "react-i18next";

const fallBackBanner: BannerModel = {
  id: "00000000-1111-2222-3333-444444444444",
  title: "กรุงเทพประกันภัย",
  status: "ACTIVE",
  category: "BANNER",
  effectiveFrom: "2025-06-02T00:00:00",
  effectiveTo: "2025-07-03T00:00:00",
  coverImagePath: "/src/assets/img/banner/bg.png",
  coverHyperLink: "https://www.bangkokinsurance.com/index",
  contents: [
    {
      id: "e9f280ed-3b77-4dd3-998e-95092cbe399a",
      contentImagePath: "/src/assets/img/banner/banner1.png",
      contentHyperLink: "https://www.bangkokinsurance.com/index",
    },
    {
      id: "e9f280ed-3b77-4dd3-998e-95092cbe399b",
      contentImagePath: "/src/assets/img/banner/banner2.png",
      contentHyperLink: "https://www.bangkokinsurance.com/index",
    },
    {
      id: "e9f280ed-3b77-4dd3-998e-95092cbe399c",
      contentImagePath: "/src/assets/img/banner/banner3.png",
      contentHyperLink: "https://www.bangkokinsurance.com/index",
    },
    {
      id: "e9f280ed-3b77-4dd3-998e-95092cbe399d",
      contentImagePath: "/src/assets/img/banner/banner4.png",
      contentHyperLink: "https://www.bangkokinsurance.com/index",
    },
  ]
}

interface IBannerProps {
  data?: BannerListResponse;
  isLoading: boolean;
}

export function Banner({ data, isLoading }: IBannerProps) {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = windowWidth <= 1450 ? 300 : 350;
  const gap = windowWidth <= 1450 ? 16 : 24;

  const isBannerExists = data && data?.data && data?.data?.length > 0;
  const banner = isBannerExists ? data.data?.[data.data?.length - 1]! : fallBackBanner;
  const bannerImages = banner.contents.map(b => isBannerExists ? getImageUrl(b.contentImagePath)! : b.contentImagePath);
  const backgroundImage = isBannerExists ? getImageUrl(banner.coverImagePath)! : banner.coverImagePath;

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
    <Box sx={{ userSelect: "none" }}>
      <Box
        width="100%"
        height={useSmallFont ? 350 : 393.56}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingLeft: useSmallFont ? "80px" : "130px",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(57, 120, 233, 0.4)",
            zIndex: 1,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            opacity: 0,
            transition: "opacity 0.5s ease",
          }
        }}
        onError={() => {
          console.error("Error loading background image");
        }}>
        <Box
          sx={{
            color: "#FFFFFF",
            width: useSmallFont ? "35%" : "30%",
            zIndex: 2,
            position: "relative",
            mb: useSmallFont ? 16 : 18,
          }}>
          <Typography sx={{ mb: -1, fontWeight: "bold", fontSize: useSmallFont ? "36px" : "40px" }}>
            {t("home.banner.title")}
          </Typography>
          <Typography sx={{ mb: -1, fontSize: useSmallFont ? "22px" : "24px" }}>
            {t("home.banner.description1")}
          </Typography>
          <Typography sx={{ mb: 1, fontSize: useSmallFont ? "22px" : "24px" }}>
            {t("home.banner.description2")}
          </Typography>
          <Button
            variant="contained"
            component="a"
            href={banner?.coverHyperLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: "#05058C",
              mb: -20,
              "&:hover": { bgcolor: "#001850" },
              borderRadius: "12px",
              padding: useSmallFont ? "8px 35px" : "10px 45px",
              textTransform: "none",
              fontSize: useSmallFont ? "22px" : "24px",
              textDecoration: "none",
            }}>
            {t("home.banner.button")}
          </Button>
        </Box>

        <Box sx={{ width: "70%", position: "relative", zIndex: 2 }}>
          {isLoading ? (
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: `${cardWidth}px`
            }}>
              <CircularProgress sx={{ color: "#FFFFFF" }} />
            </Box>
          ) : (
            <Box
              ref={scrollRef}
              sx={{
                display: "flex",
                gap: `${gap}px`,
                overflowX: "auto",
                overflowY: "hidden",
                scrollbarWidth: "thin",
                "&::-webkit-scrollbar": { height: "6px" },
                "&::-webkit-scrollbar-track": {
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.5)",
                  },
                },
                padding: "10px 5px",
                scrollBehavior: "smooth",
                cursor: "grab",
                "&:active": {
                  cursor: "grabbing",
                },
              }}>
              {bannerImages.map((src, index) => {
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
                      display: "block",
                      textDecoration: "none",
                    }}>
                    <Box
                      component="img"
                      src={src}
                      alt={banner && banner.contents && index < banner.contents.length
                        ? `Content ${index + 1}`
                        : `Banner ${index + 1}`}
                      draggable={false}
                      sx={{
                        width: `${cardWidth}px`,
                        height: `${cardWidth}px`,
                        objectFit: "cover",
                        borderRadius: "12px",
                        flexShrink: 0,
                        userSelect: "none",
                      }}
                      onError={(_e) => {
                        console.error(`Error loading banner image ${index}`);
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