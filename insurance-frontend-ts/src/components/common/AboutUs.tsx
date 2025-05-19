import { Box, Button, Icon, Typography } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const firstServiceList = [
    "Customized policies",
    "Comprehensive coverage",
    "Best Insurance Agency",
]

const secondServiceList: string[] = [

    "Competitive pricing",
    "Flexible payment options",
    "Social responsibility"
]

export default function AboutUs() {
    return (
        <Box sx={{
            bgcolor: "#FFFFFF",
            minHeight: "586px",
            display: "flex",
            gap: "32px",
            paddingBlock: "32px"
        }}>
            <Box sx={{
                marginBlock: "48px",
                marginInline: "128px",
                display: "flex",
                width: "100%",
                gap: "64px"
            }}>
                <Box
                    sx={{
                        position: "relative",
                        maxWidth: "477px",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        filter: "drop-shadow(40px 30px 1px #E5EBF5)",
                    }}>
                    <Box
                        component="img"
                        src="/src/assets/img/about-us/about-us.jpg"
                        alt="About Us Image"
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
                            สินค้าประกันภัยและบริการใหม่ รวมถึงโปรโมชัน คุ้มค่า ที่กรุงเทพประกันภัยเตรียมไว้ให้คุณ
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
                                we are committed to providing our customers with high-quality insurance products and exceptional customer service. Since our founding in 1985, we have worked hard to establish ourselves as a trusted insurance industry.
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
                                                    {srv}
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
                                                    {srv}
                                                </Typography>
                                            </Box>
                                        )
                                    })}

                                </Box>

                            </Box>
                        </Box>
                    </Box>

                    {/* More about us */}
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
                            More About Us
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
