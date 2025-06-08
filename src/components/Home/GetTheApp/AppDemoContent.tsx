import { Box, SxProps, Theme, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

interface IAppDemoContent {
    sx?: SxProps<Theme>;
}
export default function AppDemoContent({ sx }: IAppDemoContent) {
    return (
        <Box
            sx={{
                position: "relative",
                paddingLeft: "48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                gap: "32px",
                ...sx
            }}>
            <AppDemoOverLayBackground />
            <AppDemoDescription />
            <SearchAppDownload />
        </Box>
    )
}

function AppDemoOverLayBackground() {
    return (
        <Box
            component="img"
            src="/src/assets/img/get-the-app/cube-overlay.svg"
            alt="cube-overlay"
            draggable={false}
            sx={{
                position: "absolute",
                right: "0",
                top: "0",
                width: "541px",
                height: "auto",
                objectFit: "contain",
                userSelect: "none",
                pointerEvents: "none",
            }} />
    )
}

function AppDemoDescription() {
    const { t } = useTranslation();
    return (
        <Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "16px"
            }}>
                <Typography
                    sx={{
                        color: "#05058C",
                        fontSize: "45px",
                        fontWeight: "900",
                        lineHeight: "54px",
                    }}>
                    {t("home.getTheApp.title")}
                </Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <Typography
                        sx={{
                            color: "#05058C",
                            fontSize: "32px",
                            lineHeight: "40px",
                        }}>
                        {t("home.getTheApp.description")}
                    </Typography>
                    <Box sx={{
                        fontSize: "22px",
                        lineHeight: "29px"
                    }}>
                        <li>{t("home.getTheApp.service.viewPolicy")}</li>
                        <li>{t("home.getTheApp.service.submitClaim")}</li>
                        <li>{t("home.getTheApp.service.roadsideAssistance")}</li>
                        <li>{t("home.getTheApp.service.repairCenters")}</li>
                        <li>{t("home.getTheApp.service.branchesAndServicePoints")}</li>
                        <li>{t("home.getTheApp.service.liveChat")}</li>
                        <Typography
                            sx={{
                                color: "#05058C",
                                fontWeight: "700",
                                fontSize: "inherit"
                            }}>
                            {t("home.getTheApp.service.networkHospitals")}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function SearchAppDownload() {
    const { t } = useTranslation();
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px"
        }}>
            <Box
                sx={{
                    border: "1px solid rgba(0, 0, 0, 1)",
                    borderRadius: "8px",
                    width: "fit-content",
                    padding: "4px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "#05058C"
                }}>
                <SearchIcon />
                <Typography
                    dangerouslySetInnerHTML={{ __html: t("home.getTheApp.promptSearch") }}
                    sx={{
                        fontSize: "32px",
                        lineHeight: "40px"
                    }} />
                {/* ค้นหา <span style={{ fontWeight: "900" }}>“กรุงเทพประกันภัย”</span> */}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    gap: "32px",
                }}>
                <Box
                    component="img"
                    src="/src/assets/img/get-the-app/download-on-app_store.svg"
                    alt="Download on App Store"
                    draggable={false}
                    sx={{
                        userSelect: "none",
                        width: { xs: "120px", sm: "197px" },
                        height: "auto",
                    }} />
                <Box
                    component="img"
                    src="/src/assets/img/get-the-app/download-on-play_store.svg"
                    alt="Download on Google Play Store"
                    draggable={false}
                    sx={{
                        userSelect: "none",
                        width: { xs: "120px", sm: "197px" },
                        height: "auto",
                    }} />
            </Box>
        </Box>
    )
}