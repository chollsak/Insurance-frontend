import { Box, SxProps, Theme, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
                    ดาวน์โหลดแอปพลิเคชัน “กรุงเทพประกันภัย”
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
                        พบกับบริการด้านประกันภัยที่สะดวก เข้าถึงง่าย ทุกที่ทุกเวลา
                    </Typography>
                    <Box sx={{
                        fontSize: "22px",
                        lineHeight: "29px"
                    }}>
                        <li>ดูข้อมูลกรมธรรม์ประกันภัย</li>
                        <li>แจ้งเคลมรถยนต์</li>
                        <li>ช่วยเหลือฉุกเฉินบนท้องถนน</li>
                        <li>รายชื่ออู่หรือศูนย์ซ่อมรถยนต์</li>
                        <li>รายชื่อสาขาและจุดบริการของกรุงเทพประกันภัย</li>
                        <li>Live Chat สอบถามข้อมูลต่างๆ กับเจ้าหน้าที่</li>
                        <Typography
                            sx={{
                                color: "#05058C",
                                fontWeight: "700",
                                fontSize: "inherit"
                            }}>
                            #มีโรงพยาบาลในเครือ ที่ครอบคลุมมากที่สุด
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function SearchAppDownload() {
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
                }}
            >
                <SearchIcon />
                <Typography
                    sx={{
                        fontSize: "32px",
                        lineHeight: "40px"
                    }}
                >
                    ค้นหา <span style={{ fontWeight: "900" }}>“กรุงเทพประกันภัย”</span>
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    gap: "32px",
                }}
            >
                <Box
                    component="img"
                    src="/src/assets/img/get-the-app/download-on-app_store.svg"
                    alt="Download on App Store"
                    draggable={false}
                    sx={{
                        userSelect: "none",
                        width: { xs: "120px", sm: "197px" },
                        height: "auto",
                    }}
                />
                <Box
                    component="img"
                    src="/src/assets/img/get-the-app/download-on-play_store.svg"
                    alt="Download on Google Play Store"
                    draggable={false}
                    sx={{
                        userSelect: "none",
                        width: { xs: "120px", sm: "197px" },
                        height: "auto",
                    }}
                />
            </Box>
        </Box>
    )
}