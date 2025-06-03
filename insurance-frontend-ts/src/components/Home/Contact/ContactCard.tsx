import { Box, Typography } from "@mui/material";

interface IContactCard {
    iconName: string;
    title: string;
    description: string;
    phoneNo: string;
}

export function ContactCard({ iconName, title, description, phoneNo }: IContactCard) {
    return <Box sx={{
        display: "flex",
        justifyContent: "center",
        borderRadius: "12px",
        bgcolor: "#ffffff",
        maxWidth: "370px",
        width: "100%",
    }}>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            padding: "16px"
        }}>
            <Box sx={{
                maxWidth: "315px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "16px",
            }}>
                <Box
                    component="img"
                    src={`/src/assets/img/contact/${iconName}`}
                    alt={iconName}
                    draggable={false}
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "48px",
                            md: "64px",
                            lg: "96px",
                        },
                        height: "auto",
                        userSelect: "none",
                        display: "block",
                    }}
                />
                <Typography sx={{
                    color: "#3978E9",
                    fontSize: "30px",
                    fontWeight: "700",
                    lineHeight: "36px",
                }}>
                    {title}
                </Typography>
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                maxWidth: "315px",
                marginTop: "auto",
            }}>
                <Box sx={{
                    color: "#3E4767",
                    fontSize: "22px",
                    fontWeight: "400",
                    lineHeight: "29px"
                }}>
                    {description}
                </Box>
                <Typography sx={{
                    color: "#05058C",
                    fontWeight: "700",
                    fontSize: "40px",
                    lineHeight: "36px"
                }}>
                    โทร. {phoneNo}
                </Typography>
            </Box>
        </Box>
    </Box>
}