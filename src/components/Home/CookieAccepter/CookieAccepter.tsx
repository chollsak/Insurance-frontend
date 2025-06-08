import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export function CookieAccepter() {
  const { t } = useTranslation();

  const [showCookieConsent, setShowCookieConsent] = useState(true);
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

  const handleAcceptAll = () => {
    setShowCookieConsent(false);
  };

  const handleAcceptNecessary = () => {
    setShowCookieConsent(false);
  };

  if (!showCookieConsent) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#05058C",
        color: "#FFFFFF",
        padding: useSmallFont ? "16px" : "18px",
        paddingLeft: useSmallFont ? "30px" : "40px",
        zIndex: 9999,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        height: "135px"
      }}>
      <Box sx={{ flex: 1 }}>
        <Typography
          fontSize={useSmallFont ? "22px" : "24px"}
          sx={{ fontWeight: "bold" }}>
          {t("common.cookieBanner.title")}
        </Typography>
        <Typography
          fontSize={useSmallFont ? "16px" : "18px"}
          sx={{ mb: -0.5 }}>
          {t("common.cookieBanner.description")}
        </Typography>
        <Typography
          fontSize={useSmallFont ? "16px" : "18px"}
          dangerouslySetInnerHTML={{ __html: t("common.cookieBanner.policyLink") }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: { xs: "100%", md: "auto" },
        }}>
        <Button
          variant="contained"
          onClick={handleAcceptNecessary}
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#05058C",
            borderRadius: 2,
            padding: useSmallFont ? "6px 40px" : "8px 50px",
            fontSize: useSmallFont ? "22px" : "24px",
            marginRight: useSmallFont ? "40px" : "50px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
          }}>
          {t("common.cookieBanner.button.manage")}
        </Button>
        <Button
          variant="contained"
          onClick={handleAcceptAll}
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#05058C",
            borderRadius: 2,
            padding: useSmallFont ? "6px 40px" : "8px 50px",
            fontSize: useSmallFont ? "22px" : "24px",
            marginRight: useSmallFont ? "40px" : "50px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            },
          }}>
          {t("common.cookieBanner.button.accept")}
        </Button>
      </Box>
    </Box>
  );
};