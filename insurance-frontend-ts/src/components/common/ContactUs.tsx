import { Box, Typography } from "@mui/material";

export default function ContactUs() {
    return (
        <Box sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 10
        }}>
            <Box sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "auto",
                marginBottom: "8px",
            }}>
                <Box
                    component="img"
                    src="/src/assets/img/contact/symbol.svg"
                    alt="Symbol Image"
                    sx={{
                        position: "absolute"
                    }}
                />
                <Typography sx={{
                    fontWeight: "400",
                    fontSize: "22px",
                    lineHeight: "100%",
                    position: "relative",
                }}>
                    คุยกับเรา
                </Typography>
            </Box>

            <Box
                component="img"
                src="/src/assets/img/contact/contact.jpg"
                alt="Contact Image"
                draggable={false}
                onClick={() => {
                    console.log("Image clicked!");
                }}
                sx={{
                    width: "80px",
                    height: "80px",
                    clipPath: "circle(50% at 50% 50%)",
                    boxShadow: "2px 0px 3px 0px rgba(85, 85, 85, 0.25)",
                    objectFit: "cover",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, opacity 0.3s ease",
                    '&:hover': {
                        transform: "scale(1.05)",
                        opacity: 0.9,
                    }
                }}
            />
        </Box>
    )
}