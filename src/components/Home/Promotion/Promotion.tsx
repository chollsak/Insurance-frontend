import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../../utils";
import { PromotionListResponse } from "../../../models";

interface IPromotionProps {
  data?: PromotionListResponse;
  isLoading: boolean;
}
export function Promotion({data, isLoading}: IPromotionProps) {
  const promotionResponse = data?.data ?? [];
  const promotions: Promotion[] = promotionResponse.map(p => {
    return {
      id: p.id,
      title: p.titleTh,
      description: p.descriptionTh,
      coverImage: getImageUrl(p.coverImagePath)!,
      validUntil: `วันนี้ - ${new Date(p.effectiveTo).toLocaleDateString("th-TH", {
        day: "numeric",
        month: "long",
        year: "numeric"
      })}`,
      discount: "",
      couponCode: "",
    }
  }) ?? [];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const useSmallFont = windowWidth <= 1450;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true);

  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);

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
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    setShowLeftShadow(scrollLeft > 0);

    setShowRightShadow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handlePrev = (): void => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: -430,
      behavior: "smooth"
    });
  };

  const handleNext = (): void => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: 430,
      behavior: "smooth"
    });
  };

  if (isLoading) {
    return (
      <Box>
        <Box sx={{
          width: "100%",
          py: 2,
          height: { xs: "auto", md: "550px" },
          minHeight: "550px",
          bgcolor: "#E5EBF5",
          mt: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <CircularProgress sx={{ color: "#0f0b75" }} />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ userSelect: "none" }}>
      <Box sx={{
        width: "100%",
        py: 2,
        height: { xs: "auto", md: "550px" },
        minHeight: "550px",
        bgcolor: "#E5EBF5",
        mt: "100px"
      }}>
        <Box sx={{
          height: "100%",
          px: { xs: 2, md: useSmallFont ? 15 : 23 },
          display: "flex",
          flexDirection: "column",
          mt: -1
        }}>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0,
            mt: 1
          }}>
            <Typography
              variant="h4"
              sx={{
                color: "#0f0b75",
                fontWeight: "bold",
                fontSize: useSmallFont ? "30px" : "32px"
              }}
            >
              โปรโมชัน
            </Typography>
            <Typography
              component={Link}
              to="/promotions"
              sx={{
                color: "black",
                fontWeight: "medium",
                fontSize: useSmallFont ? "20px" : "22px",
                cursor: "pointer",
                display: "flex",
                textDecoration: "underline 2px",
                alignItems: "center"
              }}
            >
              โปรโมชันทั้งหมด
            </Typography>
          </Box>

          {/* Desktop view with scrollable container */}
          <Box sx={{
            display: { xs: "none", md: "block" },
            position: "relative",
            flexGrow: 1,
            mt: 2
          }}>
            {/* Left shadow indicator */}
            {showLeftShadow && (
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: "50px",
                  background: "linear-gradient(to right, rgba(229, 235, 245, 0.8), rgba(229, 235, 245, 0))",
                  zIndex: 1,
                  pointerEvents: "none"
                }}
              />
            )}

            {/* Right shadow indicator */}
            {showRightShadow && (
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  height: "100%",
                  width: "50px",
                  background: "linear-gradient(to left, rgba(229, 235, 245, 0.8), rgba(229, 235, 245, 0))",
                  zIndex: 1,
                  pointerEvents: "none"
                }}
              />
            )}

            {/* Navigation buttons */}
            <IconButton
              sx={{
                position: "absolute",
                left: "-40px",
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                "&:hover": {
                  bgcolor: "white"
                },
                zIndex: 2,
                display: showLeftShadow ? "flex" : "none"
              }}
              onClick={handlePrev}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              sx={{
                position: "absolute",
                right: "-40px",
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                "&:hover": {
                  bgcolor: "white"
                },
                zIndex: 2,
                display: showRightShadow ? "flex" : "none"
              }}
              onClick={handleNext}
            >
              <ChevronRightIcon />
            </IconButton>

            {/* Scrollable container */}
            <Box
              ref={scrollContainerRef}
              sx={{
                display: "flex",
                overflowX: "auto",
                overflowY: "hidden",
                height: "100%",
                scrollbarWidth: "none", // Firefox
                "&::-webkit-scrollbar": {
                  display: "none"  // Chrome, Safari, Edge
                },
                msOverflowStyle: "none",  // IE
                cursor: isDragging ? "grabbing" : "grab",
                gap: useSmallFont ? 3 : 4,
                pb: 2, // Add padding at bottom to avoid scrollbar cutoff
              }}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onScroll={handleScroll}
            >
              {promotions.map((promotion) => (
                <Box
                  key={promotion.id}
                  sx={{
                    flex: "0 0 auto",
                    width: useSmallFont ? "400px" : "430px",
                    height: "100%",
                  }}
                >
                  <PromotionCard promotion={promotion} useSmallFont={useSmallFont} bgColor="#a8bbd6" />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Mobile view */}
          <Box sx={{
            display: { xs: "block", md: "none" },
            position: "relative",
            flexGrow: 1,
            mt: 2
          }}>
            <Box sx={{
              display: "flex",
              overflow: "hidden",
              position: "relative",
              borderRadius: "12px",
              height: "600px",
            }}>
              <Box sx={{
                display: "flex",
                transition: "transform 0.5s ease-in-out",
                transform: `translateX(${-mobileCurrentIndex * 100}%)`,
                width: "100%",
                height: "100%",
              }}>
                {promotions.map((promotion) => (
                  <Box
                    key={promotion.id}
                    sx={{
                      minWidth: "100%",
                      px: 1,
                      height: "100%",
                    }}>
                    <PromotionCard promotion={promotion} useSmallFont={useSmallFont} />
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Navigation buttons for mobile */}
            <IconButton
              sx={{
                position: "absolute",
                left: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                "&:hover": {
                  bgcolor: "white"
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
                position: "absolute",
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                "&:hover": {
                  bgcolor: "white"
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
              display: "flex",
              justifyContent: "center",
              mt: 2
            }}>
              {promotions.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: index === mobileCurrentIndex ? "#0f0b75" : "#ccc",
                    mx: 0.5,
                    cursor: "pointer"
                  }}
                  onClick={() => setMobileCurrentIndex(index)}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

interface Promotion {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  validUntil: string;
  discount: string;
  couponCode: string;
}

interface IPromotionCardProps {
  promotion: Promotion;
  useSmallFont: boolean;
  bgColor?: string;
}

function PromotionCard({ promotion, useSmallFont, bgColor }: IPromotionCardProps) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "430px",
        borderRadius: "12px",
        overflow: "hidden",
        bgcolor: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        height: "450px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          bgcolor: bgColor,
          width: "100%",
          position: "relative",
          height: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={promotion.coverImage}
          alt={promotion.title}
          draggable={false}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            userSelect: "none",
          }}
          onError={(e) => {
            console.error("Image failed to load:", promotion.coverImage);
            e.currentTarget.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22430%22%20height%3D%22250%22%20viewBox%3D%220%200%20430%20250%22%3E%3Crect%20fill%3D%22%23a8bbd6%22%20width%3D%22430%22%20height%3D%22250%22%2F%3E%3Ctext%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%2CVerdana%2CSans-serif%22%20font-size%3D%2220%22%20x%3D%22215%22%20y%3D%22125%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EPromotion%20Image%3C%2Ftext%3E%3C%2Fsvg%3E";
          }}
        />
      </Box>

      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          minHeight: "200px",
        }}
      >
        <Typography
          sx={{
            fontSize: useSmallFont ? "24px" : "26px",
            fontWeight: "medium",
            color: "#05058C",
            mb: 1,
            lineHeight: 1.2,
          }}
        >
          {promotion.title}
        </Typography>

        <Typography
          sx={{
            color: "#3E4767",
            mb: "auto",
            fontSize: useSmallFont ? "18px" : "20px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
            lineHeight: 1.3,
          }}
        >
          {promotion.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 0,
            mb: -2,
            pt: 0,
            borderTop: "0px solid #eee",
          }}
        >
          <Typography sx={{ color: "#05058C", fontSize: useSmallFont ? "16px" : "18px" }}>
            {promotion.validUntil}
          </Typography>

          <Button
            endIcon={<ArrowForwardIcon />}
            component={Link}
            to={`/promotions/${promotion.id}`}
            sx={{
              color: "#05058C",
              fontSize: useSmallFont ? "20px" : "22px",
              fontWeight: "medium",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
              },
            }}>
            รายละเอียด
          </Button>
        </Box>
      </Box>
    </Box>
  );
};