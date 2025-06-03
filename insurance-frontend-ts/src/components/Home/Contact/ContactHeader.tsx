import { Box, Typography } from "@mui/material";
export function ContactHeader() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                md: "row",
            },
            justifyContent: "space-between",
            alignItems: {
                xs: "flex-start",
                md: "center",
            },
            gap: "16px",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "row",
                },
                alignItems: "center",
                gap: "16px"
            }}>
                <Typography sx={{
                    color: "#05058C",
                    fontWeight: "700",
                    fontSize: "32px",
                    lineHeight: "44px",
                    letterSpacing: "-2%",
                    textAlign: "center",
                }}>
                    ช่องทางการติดต่อ
                </Typography>
                <Typography sx={{
                    color: "#3978E9",
                    border: "2px solid #3978E9",
                    display: {
                        xs: "block",
                        sm: "block",
                    },
                    borderLeft: {
                        xs: "none",
                        sm: "2px solid #3978E9",
                    },
                    borderTop: {
                        xs: "2px solid #3978E9",
                        sm: "none",
                    },
                    width: {
                        xs: "60px",
                        sm: "0",
                    },
                    height: {
                        xs: "0",
                        sm: "auto",
                    },
                    alignSelf: {
                        xs: "center",
                        sm: "stretch",
                    },
                }} />
                <Typography sx={{
                    fontWeight: "400",
                    fontSize: "26px",
                    lineHeight: "36px",
                    textDecoration: "underline",
                    textDecorationStyle: "solid",
                    color: "#6B6B6B",
                    display: {
                        xs: "block",
                        md: "block",
                    },
                }}>
                    สอบถามข้อมูลเพิ่มเติม / สมัครรับข่าวสาร
                </Typography>
            </Box>

            <Box sx={{
                display: "flex",
                gap: "16px"
            }}>
                <Box
                    component="img"
                    src="/src/assets/img/contact/facebook-icon.svg"
                    alt="Facebook Icon"
                    draggable={false}
                    sx={{
                        userSelect: "none",
                        width: {
                            xs: "48px",
                            md: "60px",
                        },
                        height: "auto",
                    }}
                />
                <Box
                    component="img"
                    src="/src/assets/img/contact/line-icon.svg"
                    alt="Line Icon"
                    draggable={false}
                    sx={{
                        userSelect: "none",
                        width: {
                            xs: "48px",
                            md: "60px",
                        },
                        height: "auto",
                    }}
                />
                <Box
                    component="img"
                    src="/src/assets/img/contact/x-icon.svg"
                    alt="X Icon"
                    draggable={false}
                    sx={{
                        userSelect: "none",
                        width: {
                            xs: "48px",
                            md: "60px",
                        },
                        height: "auto",
                    }}
                />
                <Box
                    component="img"
                    src="/src/assets/img/contact/youtube-icon.svg"
                    alt="Youtube Icon"
                    draggable={false}
                    sx={{
                        userSelect: "none",
                        width: {
                            xs: "48px",
                            md: "60px",
                        },
                        height: "auto",
                    }}
                />
            </Box>
        </Box>
    )
}