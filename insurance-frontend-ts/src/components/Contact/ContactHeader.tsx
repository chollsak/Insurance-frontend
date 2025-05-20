import { Box, Typography } from "@mui/material";
export default function ContactHeader() {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Box sx={{
                display: "flex",
                gap: "16px"
            }}>
                <Typography sx={{
                    color: "#05058C",
                    fontWeight: "700",
                    fontSize: "32px",
                    lineHeight: "44px",
                    letterSpacing: "-2%"
                }}>
                    ช่องทางการติดต่อ
                </Typography>
                <Typography sx={{
                    color: "#3978E9",
                    border: "2px solid #3978E9",
                }} />
                <Typography sx={{
                    fontWeight: "400",
                    fontSize: "26px",
                    lineHeight: "36px",
                    textDecoration: "underline",
                    textDecorationStyle: "solid",
                    color: "#6B6B6B"
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
                />
                <Box
                    component="img"
                    src="/src/assets/img/contact/line-icon.svg"
                    alt="Line Icon"
                />
                <Box
                    component="img"
                    src="/src/assets/img/contact/x-icon.svg"
                    alt="X Icon"
                />
                <Box
                    component="img"
                    src="/src/assets/img/contact/youtube-icon.svg"
                    alt="Youtube Icon"
                />
            </Box>

        </Box>
    )
}