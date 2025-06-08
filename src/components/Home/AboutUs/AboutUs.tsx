import { Box, Button, Icon, Typography } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useTranslation } from "react-i18next";

const firstServiceList = [
    "home.aboutUs.service.customizedPolicies",
    "home.aboutUs.service.comprehensiveCoverage",
    "home.aboutUs.service.bestInsuranceAgency",
]

const secondServiceList: string[] = [

    "home.aboutUs.service.competitivePricing",
    "home.aboutUs.service.flexiblePaymentOptions",
    "home.aboutUs.service.socialResponsibility"
]

export function AboutUs() {
    const { t } = useTranslation();
    return (
        <Box sx={{
            bgcolor: "#FFFFFF",
            minHeight: "586px",
            display: "flex",
            gap: "32px",
            paddingBlock: "32px"
        }}>
            <Box sx={{
                marginBlock: {
                    xs: "0",
                    md: "48px",
                },
                marginInline: {
                    xs: "0",
                    md: "128px",
                },
                display: "flex",
                width: "100%",
                gap: "64px",
            }}>
                <Box
                    sx={{
                        position: "relative",
                        maxWidth: "477px",
                        width: "100%",
                        display: {
                            xs: "none",
                            md: "flex",
                        },
                        justifyContent: "center",
                        filter: "drop-shadow(40px 30px 1px #E5EBF5)",
                    }}>
                    <Box
                        component="img"
                        src="/src/assets/img/about-us/about-us.jpg"
                        alt="About Us Image"
                        draggable={false}
                        sx={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            transform: "scaleX(-1)",
                            clipPath: "polygon(100% 0, 0 0, 0 78%, 100% 100%)",
                        }}
                    />
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                    paddingInline: "64px",
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}>
                        <Typography sx={{
                            color: "#0E1941",
                            fontWeight: "700",
                            fontSize: "48px",
                            lineHeight: "62px",
                        }}>
                            {t("home.aboutUs.title")}
                        </Typography>

                        <Box sx={{
                            maxWidth: "562px",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px"
                        }}>
                            <Typography sx={{
                                color: "#3E4767",
                                fontWeight: "400",
                                fontSize: "24px",
                                lineHeight: "29px"
                            }}>
                                {t("home.aboutUs.description")}
                            </Typography>
                            <Box sx={{
                                display: "flex",
                                gap: "64px"
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "16px",
                                }}>
                                    {firstServiceList.map((srv, index) => {
                                        return (
                                            <Box
                                                key={index}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px"
                                                }}>
                                                <Icon sx={{
                                                    color: "#3978E9"
                                                }}>
                                                    <VerifiedUserIcon />
                                                </Icon>
                                                <Typography sx={{
                                                    color: "#3E4767",
                                                    fontWeight: "400",
                                                    fontSize: "20px",
                                                    lineHeight: "29px"
                                                }}>
                                                    {t(srv)}
                                                </Typography>
                                            </Box>
                                        )
                                    })}
                                </Box>

                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "16px",
                                }}>
                                    {secondServiceList.map((srv, index) => {
                                        return (
                                            <Box
                                                key={index}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px"
                                                }}>
                                                <Icon sx={{
                                                    color: "#3978E9"
                                                }}>
                                                    <VerifiedUserIcon />
                                                </Icon>
                                                <Typography sx={{
                                                    color: "#3E4767",
                                                    fontWeight: "400",
                                                    fontSize: "20px",
                                                    lineHeight: "29px"
                                                }}>
                                                    {t(srv)}
                                                </Typography>
                                            </Box>
                                        )
                                    })}

                                </Box>

                            </Box>
                        </Box>
                    </Box>

                    <Button
                        variant="outlined"
                        sx={{
                            width: "fit-content",
                            color: "#05058C",
                            borderColor: "#05058C",
                            paddingInline: "32px",
                            paddingBlock: "12px",
                        }}>
                        <Typography sx={{
                            fontWeight: "500",
                            fontSize: "22px",
                            lineHeight: "100%",
                        }}>
                            {t("home.aboutUs.button.more")}
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
