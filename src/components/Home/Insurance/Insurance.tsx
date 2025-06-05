import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { getImageUrl } from "../../../utils";
import { InsuranceListResponse, InsuranceModel } from "../../../models";

const fallBackInsurances: InsuranceModel[] = [
  {
    id: "1",
    title: "ประกันภัยรถยนต์",
    effectiveFrom: "2025-06-02T00:00:00",
    effectiveTo: "2025-07-03T00:00:00",
    status: "ACTIVE",
    category: "INSURANCE",
    titleTh: "ประกันภัยรถยนต์",
    titleEn: "Car Insurance",
    descriptionTh: "อุ่นใจในทุกเส้นทาง เพราะมีเราเคียงข้าง 24 ชั่วโมง",
    descriptionEn: "Feel secure on every route because we are with you 24 hours a day.",
    coverImagePath: "/src/assets/img/insurance/car-cover.png",
    iconImagePath: "/src/assets/img/insurance/car-icon.png",
    createdAt: "2025-06-02T00:00:00",
    updatedAt: "2025-06-02T00:00:00",
    deletedAt: null
  },
  {
    id: "2",
    title: "ประกันภัยการเดินทาง",
    effectiveFrom: "2025-06-02T00:00:00",
    effectiveTo: "2025-07-03T00:00:00",
    status: "ACTIVE",
    category: "INSURANCE",
    titleTh: "ประกันภัยการเดินทาง",
    titleEn: "Travel Insurance",
    descriptionTh: "สำหรับนักเดินทางทั้งในประเทศและต่างประเทศ สามารถเลือกแพ็คเกจได้ตามที่ต้องการ",
    descriptionEn: "For both domestic and international travelers, choose the package that suits your needs.",
    coverImagePath: "/src/assets/img/insurance/travel-cover.png",
    iconImagePath: "/src/assets/img/insurance/travel-icon.png",
    createdAt: "2025-06-02T00:00:00",
    updatedAt: "2025-06-02T00:00:00",
    deletedAt: null
  },
  {
    id: "3",
    title: "ประกันภัยอุบัติเหตุ",
    effectiveFrom: "2025-06-02T00:00:00",
    effectiveTo: "2025-07-03T00:00:00",
    status: "ACTIVE",
    category: "INSURANCE",
    titleTh: "ประกันภัยอุบัติเหตุ",
    titleEn: "Accident Insurance",
    descriptionTh: "คุ้มครองทุกวัดและชีวิต ทั้งในเมืองไทย อุ่นใจได้เสมอ",
    descriptionEn: "Protection for every day and life in Thailand, always feel secure.",
    coverImagePath: "/src/assets/img/insurance/accident-cover.png",
    iconImagePath: "/src/assets/img/insurance/accident-icon.png",
    createdAt: "2025-06-02T00:00:00",
    updatedAt: "2025-06-02T00:00:00",
    deletedAt: null
  },
  {
    id: "4",
    title: "ประกันภัยสุขภาพ",
    effectiveFrom: "2025-06-02T00:00:00",
    effectiveTo: "2025-07-03T00:00:00",
    status: "ACTIVE",
    category: "INSURANCE",
    titleTh: "ประกันภัยสุขภาพ",
    titleEn: "Health Insurance",
    descriptionTh: "สบายใจเมื่อมีประกันภัยสุขภาพ หมดห่วงเรื่องค่ารักษาพยาบาล",
    descriptionEn: "Peace of mind with health insurance, worry-free about medical expenses.",
    coverImagePath: "/src/assets/img/insurance/health-cover.png",
    iconImagePath: "/src/assets/img/insurance/health-icon.png",
    createdAt: "2025-06-02T00:00:00",
    updatedAt: "2025-06-02T00:00:00",
    deletedAt: null
  }
]

interface IInsuranceProps {
  data?: InsuranceListResponse;
  isLoading: boolean;
}

export function Insurance({ data, isLoading }: IInsuranceProps) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isInsuranceExists = data?.data && data?.data?.length > 0;
  const insuranceList = isInsuranceExists ? data?.data! : fallBackInsurances;

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
    <Box sx={{ mb: -5 }}>
      <Typography
        fontSize={useSmallFont ? 30 : 32}
        sx={{
          color: "#05058C",
          fontWeight: "bold",
          my: useSmallFont ? 2.5 : 3,
          ml: useSmallFont ? 16 : 20,
          textAlign: "start"
        }}>
        ประกันภัยทั้งหมด
      </Typography>

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", my: 10 }}>
          <CircularProgress sx={{ color: "#05058C" }} />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: useSmallFont ? 3 : 4,
            px: { xs: 4, md: useSmallFont ? 16 : 20 }
          }}>
          {insuranceList.map((insurance, index) => (
            <Box
              key={insurance.id || index}
              sx={{
                width: {
                  xs: "100%",
                  sm: "calc(50% - 24px)",
                  lg: "calc(25% - 24px)"
                },
                borderRadius: "12px",
                overflow: "hidden",
                bgcolor: "white",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                },
                cursor: "pointer"
              }}>
              <Box sx={{ position: "relative", height: "100%" }}>
                <Box
                  sx={{
                    height: useSmallFont ? "250px" : "260px",
                    width: "100%",
                    position: "relative",
                  }}>
                  <Box
                    component="img"
                    src={true ? getImageUrl(insurance.coverImagePath)! : "test"}
                    alt={insurance.title}
                    draggable={false}
                    sx={{
                      width: useSmallFont ? "280px" : "500px",
                      height: useSmallFont ? "155px" : "160px",
                      objectFit: "cover",
                      userSelect: "none",
                    }}
                    onError={(_e) => {
                      console.error(`Error loading cover image for ${insurance.title}`);
                    }} />

                  <Box
                    sx={{
                      position: "absolute",
                      top: "115px",
                      right: "15px",
                      width: useSmallFont ? "65px" : "68px",
                      height: useSmallFont ? "65px" : "68px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #F3F3F5",
                      padding: "8px"
                    }}>
                    <Box
                      component="img"
                      src={true ? getImageUrl(insurance.iconImagePath)! : "test"}
                      alt="Icon"
                      draggable={false}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        userSelect: "none",
                      }}
                      onError={(_e) => {
                        console.error(`Error loading icon image for ${insurance.title}`);
                      }} />
                  </Box>
                </Box>

                <Box sx={{ p: useSmallFont ? 3.5 : 4, mt: useSmallFont ? -12 : -12.5, mb: 0 }}>
                  <Typography
                    sx={{
                      fontSize: useSmallFont ? "20px" : "22px",
                      fontWeight: "bold",
                      color: "black",
                      mb: 1.5,
                      lineHeight: 1
                    }}>
                    {insurance.titleTh || insurance.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: useSmallFont ? "16px" : "18px",
                      color: "#3E4767",
                      lineHeight: 1
                    }}>
                    {insurance.descriptionTh || insurance.descriptionEn}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};