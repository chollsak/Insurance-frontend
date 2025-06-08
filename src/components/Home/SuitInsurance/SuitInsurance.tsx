import { useEffect, useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { getImageUrl } from "../../../utils";
import { SuitInsuranceListResponse, SuitInsuranceModel } from "../../../models";
import { useTranslation } from "react-i18next";

const fallBackSuitInsuranceList: SuitInsuranceModel[] = [
  {
    id: "1",
    title: "นักกีฬา",
    effectiveFrom: "2025-06-02T00:00:00",
    effectiveTo: "2025-07-03T00:00:00",
    status: "ACTIVE",
    category: "SUIT_INSURANCE",
    titleTh: "นักกีฬา",
    titleEn: "Sports",
    imagePath: "/src/assets/img/suitInsurance/sports.png"
  },
  {
    id: "2",
    title: "วัยทำงาน",
    effectiveFrom: "2025-06-02T00:00:00",
    effectiveTo: "2025-07-03T00:00:00",
    status: "ACTIVE",
    category: "SUIT_INSURANCE",
    titleTh: "วัยทำงาน",
    titleEn: "Work",
    imagePath: "/src/assets/img/suitInsurance/work.png"
  },
  {
    id: "3",
    title: "คนรักบ้าน",
    effectiveFrom: "2025-06-02T00:00:00",
    effectiveTo: "2025-07-03T00:00:00",
    status: "ACTIVE",
    category: "SUIT_INSURANCE",
    titleTh: "คนรักบ้าน",
    titleEn: "Home",
    imagePath: "/src/assets/img/suitInsurance/home.png"
  },
  {
    id: "4",
    title: "คนรักครอบครัว",
    effectiveFrom: "2025-06-02T00:00:00",
    effectiveTo: "2025-07-03T00:00:00",
    status: "ACTIVE",
    category: "SUIT_INSURANCE",
    titleTh: "คนรักครอบครัว",
    titleEn: "Family",
    imagePath: "/src/assets/img/suitInsurance/family.png"
  },
  {
    id: "5",
    title: "อยากสุขภาพดี",
    effectiveFrom: "2025-06-02T00:00:00",
    effectiveTo: "2025-07-03T00:00:00",
    status: "ACTIVE",
    category: "SUIT_INSURANCE",
    titleTh: "อยากสุขภาพดี",
    titleEn: "Health",
    imagePath: "/src/assets/img/suitInsurance/health.png"
  },
  {
    id: "6",
    title: "นักเดินทาง",
    effectiveFrom: "2025-06-02T00:00:00",
    effectiveTo: "2025-07-03T00:00:00",
    status: "ACTIVE",
    category: "SUIT_INSURANCE",
    titleTh: "นักเดินทาง",
    titleEn: "Travel",
    imagePath: "/src/assets/img/suitInsurance/travel.png"
  }
]

interface ISuitInsuranceProps {
  data?: SuitInsuranceListResponse;
  isLoading: boolean;
}

export function SuitInsurance({ data, isLoading }: ISuitInsuranceProps) {
  const { t, i18n } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isSuitInsurancesExists = data?.data && data?.data?.length > 0;
  const suitInsuranceList = isSuitInsurancesExists ? data?.data! : fallBackSuitInsuranceList;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const useSmallFont = windowWidth <= 1450;

  return (
    <Stack>
      <Box
        sx={{
          width: "100%",
          py: useSmallFont ? 2.5 : 3,
          px: { xs: 2, md: useSmallFont ? 8 : 10 },
          position: "relative",
          zIndex: 1
        }}>
        <Typography
          fontSize={useSmallFont ? 30 : 32}
          sx={{
            color: "#05058C",
            fontWeight: "bold",
            mb: useSmallFont ? 2.5 : 3,
            ml: useSmallFont ? 8 : 10,
            textAlign: "start"
          }}>
          {t("home.suitInsurance.title")}
        </Typography>

        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
            <CircularProgress sx={{ color: "#05058C" }} />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: useSmallFont ? 7 : 8.5,
              ml: useSmallFont ? 8 : 10,
            }}>
            {suitInsuranceList.map((suitInsurance) => (
              <Box
                key={suitInsurance.id}
                sx={{
                  width: {
                    xs: "calc(50% - 12px)",
                    sm: "calc(33.333% - 16px)",
                    md: "calc(16.666% - 20px)"
                  },
                  maxWidth: useSmallFont ? "130px" : "136px"
                }}>
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "transparent"
                  }}>
                  <Box
                    sx={{
                      width: "100%",
                      paddingTop: "100%",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "16px"
                    }}>
                    <Box
                      component="img"
                      src={isSuitInsurancesExists ? getImageUrl(suitInsurance.imagePath)! : suitInsurance.imagePath}
                      alt={suitInsurance.title}
                      draggable={false}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "16px",
                        userSelect: "none",
                      }}
                      onError={(_e) => {
                        console.error(`Error loading image for ${suitInsurance.title}:`, suitInsurance.imagePath);
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: useSmallFont ? "26px" : "28px",
                      mt: 0.5,
                      fontWeight: "thin",
                      color: "#14284B"
                    }}>
                    {i18n.language === "en" ? suitInsurance.titleEn : suitInsurance.titleTh}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <Box
        width={"100%"}
        height={useSmallFont ? 130 : 133}
        bgcolor={"#E6EFFF"}
        sx={{
          marginTop: useSmallFont ? "-145px" : "-150px",
          position: "relative",
          zIndex: 0
        }}
      />
    </Stack>
  );
};