import { Box, Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();

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

  const menuFontSize = useSmallFont ? "17px" : "18px";
  const langFontSize = useSmallFont ? "20px" : "22px";
  const navLinkFontSize = useSmallFont ? "19px" : "22px";
  const searchFontSize = useSmallFont ? "22px" : "22px";

  return (
    <Box
      sx={{
        position: "fixed",
        height: "81px",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}>
      <Box
        sx={{
          bgcolor: "#3978E9",
          width: "fit-content",
          height: "30px",
          display: "flex",
          gap: useSmallFont ? "16px" : "18px",
          paddingX: useSmallFont ? "10px" : "20px",
          alignItems: "center",
          position: "absolute",
          top: 0,
          right: 0,
          borderBottomLeftRadius: "20px",
          zIndex: 3,
        }}>
        <Typography sx={{ color: "#FFFFFF", fontSize: menuFontSize, fontWeight: 500, ml: "5px" }}>{t("common.header.secondNavItem.individualClient")}</Typography>
        <Typography sx={{ color: "#FFFFFF", fontSize: menuFontSize, fontWeight: 500 }}>{t("common.header.secondNavItem.investmentInterest")}</Typography>
        <Typography sx={{ color: "#FFFFFF", fontSize: menuFontSize, fontWeight: 500 }}>{t("common.header.secondNavItem.agentBrokerInfo")}</Typography>
        <Typography sx={{ color: "#FFFFFF", fontSize: menuFontSize, fontWeight: 500 }}>{t("common.header.secondNavItem.forAgents")}</Typography>
        <Box
          component="img"
          src="src/assets/img/navbar/icon.png"
          alt="Insurance Icon"
          draggable={false}
          sx={{
            height: useSmallFont ? "18px" : "22px",
            width: useSmallFont ? "18px" : "22px",
            mx: 0,
            userSelect: "none",
          }} />
        <Stack direction="row" spacing="5px" height={"100%"} marginRight={1.5}>
          <Button
            type="button"
            size="small"
            onClick={() => {
              if (i18n.language !== "th") {
                i18n.changeLanguage("th");
              }
            }}
            sx={{
              minWidth: "initial",
              padding: 0,
              borderRadius: "4px",
            }}>
            <Typography
              sx={{
                color: i18n.language === "th" ? "#FFFFFF" : "#FFFFFF99",
                fontSize: langFontSize,
                fontWeight: i18n.language === "th" ? 700 : 300,
              }}
            >
              TH
            </Typography>
          </Button>

          <Typography sx={{ color: "#FFFFFF", fontSize: langFontSize, fontWeight: 300 }}>|</Typography>

          <Button
            type="button"
            size="small"
            onClick={() => {
              if (i18n.language !== "en") {
                i18n.changeLanguage("en");
              }
            }}
            sx={{
              minWidth: "initial",
              padding: 0,
              borderRadius: "4px",
            }}>
            <Typography
              sx={{
                color: i18n.language === "en" ? "#FFFFFF" : "#FFFFFF99",
                fontSize: langFontSize,
                fontWeight: i18n.language === "en" ? 700 : 300,
              }}>
              EN
            </Typography>
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          bgcolor: "#3978E9",
          width: "100%",
          height: "9px",
          position: "absolute",
          borderBottomLeftRadius: "5px",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }} />

      <Box
        sx={{
          bgcolor: "#3978E9",
          width: "100%",
          height: "70px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 0,
        }} />

      <Box
        sx={{
          bgcolor: "#FFFFFF",
          width: "100%",
          height: "81px",
          border: "1px solid #E6E6E6",
          borderBottomLeftRadius: "15px",
          boxShadow: "10px 5px 5px rgba(0, 0, 0, 0.15)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}>
        <Stack
          direction={"row"}
          spacing={useSmallFont ? 8 : 15}
          sx={{ mt: 3, ml: useSmallFont ? 14 : 15 }}>
          <Box
            component={"img"}
            src="src/assets/img/navbar/BKI.png"
            alt="BKI Logo"
            draggable={false}
            sx={{
              width: useSmallFont ? "179px" : "179px",
              height: useSmallFont ? "36px" : "36px",
              userSelect: "none",
            }} />

          <Box sx={{ width: "100%", maxWidth: useSmallFont ? "300px" : "344px" }}>
            <TextField
              fullWidth
              placeholder={t("common.header.placeholder.searchPrompt")}
              variant="outlined"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#666" }} />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: "10px",
                    height: "36px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3978E9",
                      border: "3px solid #3978E9"
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3978E9",
                      border: "3px solid #3978E9"
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3978E9",
                      border: "3px solid #3978E9"
                    },
                    fontSize: searchFontSize,
                    color: "#6b6b6b",
                    backgroundColor: "#FFFFFF",
                    mt: 1.5,
                    ml: useSmallFont ? 3 : 3
                  }
                },
                inputLabel: {
                  shrink: false,
                }
              }}
            />
          </Box>

          <Stack
            direction={"row"}
            sx={{
              gap: useSmallFont ? "20px" : "35px",
            }}>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt: 2, ml: useSmallFont ? 2 : -8 }}>{t("common.header.navItem.home")}</Typography>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt: 2 }}>{t("common.header.navItem.home")}</Typography>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt: 2 }}>{t("common.header.navItem.service")}</Typography>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt: 2 }}>{t("common.header.navItem.about")}</Typography>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt: 2 }}>{t("common.header.navItem.investor")}</Typography>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt: 2 }}>{t("common.header.navItem.contact")}</Typography>
            <Typography sx={{ color: "#05058C", fontSize: navLinkFontSize, fontWeight: 500, mt: 2 }}>{t("common.header.navItem.myBKI")}</Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};