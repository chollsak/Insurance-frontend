import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export function ContactUs() {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                position: "fixed",
                bottom: 20,
                right: 20,
                zIndex: 10,
                userSelect: "none",
            }}>
            <Box
                sx={{
                    position: "relative",
                    width: "24px",
                    height: "24px",

                    "&::before": {
                        content: `"${t("home.contactAdmin.message")}"`,
                        position: "absolute",
                        right: "-50%",
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "#fff",
                        color: "#05058C",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontSize: "22px",
                        lineHeight: "100%",
                        whiteSpace: "nowrap",
                        marginRight: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    },

                    "&::after": {
                        content: '""',
                        position: "absolute",
                        left: "100%",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 0,
                        height: 0,
                        borderTop: "6px solid transparent",
                        borderBottom: "6px solid transparent",
                        borderLeft: "16px solid #fff",
                    },
                }}
            />

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
                    "&:hover": {
                        transform: "scale(1.05)",
                        opacity: 0.9,
                    },
                    userSelect: "none",
                }}
            />
        </Box>
    );
}
