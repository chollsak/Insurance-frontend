import { Box, Typography } from "@mui/material";

interface IAppServiceProps {
    title: string;
    services: {
        name: string;
        href: string
    }[]
}
const appServices: IAppServiceProps[] = [
    {
        title: "สินค้าประกันภัย",
        services: [
            {
                name: "ประกันภัยการเดินทาง",
                href: "#"
            },
            {
                name: "ประกันภัยอุบัติเหตุ",
                href: "#"
            },
            {
                name: "ประกันภัยรถยนต์",
                href: "#"
            },
            {
                name: "ประกันภัยสำหรับที่อยู่อาศัยและร้านค้า",
                href: "#"
            },
            {
                name: "ประกันภัยสุขภาพ",
                href: "#"
            },
            {
                name: "ประกันภัยสำหรับทรัพย์สิน",
                href: "#"
            },
            {
                name: "ประกันภัยความรับผิดต่อบุคคลภายนอก",
                href: "#"
            },
            {
                name: "ประกันภัยสำหรับการประกอบการและธุรกิจ",
                href: "#"
            },
            {
                name: "ประกันภัยวิศวกรรม",
                href: "#"
            },
            {
                name: "ประกันภัยทางทะเลและขนส่ง",
                href: "#"
            },
            {
                name: "ประกันภัยประเภทอื่นๆ",
                href: "#"
            },
        ]
    },
    {
        title: "บริษัทของเรา",
        services: [
            {
                name: "เกี่ยวกับบริษัทฯ",
                href: "#"
            },
            {
                name: "วิสัยทัศน์",
                href: "#"
            },
            {
                name: "คณะกรรมการ/คณะผู้บริหาร",
                href: "#"
            },
            {
                name: "โครงสร้างองค์กร",
                href: "#"
            },
            {
                name: "การพัฒนาองค์กรเพื่อความยั่งยืน",
                href: "#"
            },
            {
                name: "การกำกับดูแลกิจการ",
                href: "#"
            },
            {
                name: "รางวัลเกียรติยศ",
                href: "#"
            },
            {
                name: "ความรับผิดชอบต่อสังคมและสิ่งแวดล้อม",
                href: "#"
            },
            {
                name: "ข่าวสารและกิจกรรม",
                href: "#"
            },
            {
                name: "สื่อโฆษณา",
                href: "#"
            },
        ]
    },
]

export default function Footer() {
    return (
        <Box sx={{
            bgcolor: "#3273E1",
            maxWidth: "1440px",
            width: "100%",
            minHeight: "570px",
            position: "relative",
            overflow: "hidden",
            backgroundImage: "url('/src/assets/img/footer/footer-overlay.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
        }}>
            {/* position relative */}
            <Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "column",
                            lg: "row"
                        },
                        gap: "96px",
                    }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "48px",
                        paddingTop: "42px",
                        marginLeft: "-64px",
                        zIndex: 1,
                    }}>
                        <Box
                            component="img"
                            src="/src/assets/img/footer/bki-white-logo.svg"
                            alt="BKI Logo"
                        />
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            paddingLeft: "8px",

                        }}>
                            <Box sx={{
                                display: "flex",
                                gap: "16px",
                            }}>
                                <Box
                                    component="img"
                                    src="/src/assets/img/footer/facebook-icon.svg"
                                    alt="Facebook Icon"
                                />
                                <Box
                                    component="img"
                                    src="/src/assets/img/footer/x-icon.svg"
                                    alt="X Icon"
                                />
                            </Box>
                            <Box sx={{
                                display: "flex",
                                gap: "16px"
                            }}>
                                <Box
                                    component="img"
                                    src="/src/assets/img/footer/line-icon.svg"
                                    alt="Line Icon"
                                />
                                <Box
                                    component="img"
                                    src="/src/assets/img/footer/youtube-icon.svg"
                                    alt="Youtube Icon"
                                />
                            </Box>

                        </Box>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "row",
                            md: "column",
                            lg: "column",
                        },
                        gap: "20px"
                    }}>
                        <Box sx={{
                            display: "flex",
                            gap: "32px",
                            paddingTop: "32px"
                        }}>
                            {appServices.map((appServices, index) => {
                                return <AppServiceCard key={index} {...appServices} />
                            })}

                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px"
                            }}>
                                <Typography
                                    onClick={() => { }}
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "24px",
                                        lineHeight: "24px",
                                        letterSpacing: "-2%",
                                        color: "#ffffff",
                                    }}>
                                    MY ACCOUNT
                                </Typography>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                    <Typography
                                        onClick={() => { }}
                                        sx={{
                                            fontWeight: "400",
                                            fontSize: "22px",
                                            lineHeight: "30px",
                                            color: "#ffffff",
                                            '&:hover': {
                                                cursor: "pointer"
                                            }
                                        }}>
                                        ประกันภัยออนไลน์ของคุณ
                                    </Typography>
                                    <Typography
                                        onClick={() => { }}
                                        sx={{
                                            fontWeight: "400",
                                            fontSize: "22px",
                                            lineHeight: "30px",
                                            color: "#ffffff",
                                            '&:hover': {
                                                cursor: "pointer"
                                            }
                                        }}>
                                        ประกันภัยที่สนใจ
                                    </Typography>
                                    <Typography
                                        onClick={() => { }}
                                        sx={{
                                            fontWeight: "400",
                                            fontSize: "22px",
                                            lineHeight: "30px",
                                            color: "#ffffff",
                                            '&:hover': {
                                                cursor: "pointer"
                                            }
                                        }}>
                                        บัญชีผู้ใช้
                                    </Typography>
                                    <Typography
                                        onClick={() => { }}
                                        sx={{
                                            fontWeight: "400",
                                            fontSize: "22px",
                                            lineHeight: "30px",
                                            color: "#ffffff",
                                            '&:hover': {
                                                cursor: "pointer"
                                            }
                                        }}>
                                        ออกจากระบบ
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{
                            marginLeft: "-200px"
                        }}>
                            <svg width="845" height="2" viewBox="0 0 845 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="0.616699" x2="845" y2="0.616699" stroke="white" />
                            </svg>
                        </Box>

                    </Box>
                </Box>

            </Box>

            {/* position absolute */}
            <Box
                component="img"
                src="/src/assets/img/footer/cover.svg"
                alt="Footer Cover Image"
                sx={{
                    position: "absolute",
                    objectFit: "contain",
                    bottom: 0,
                    left: 0,
                }}
            />
            <Box
                component="img"
                src="/src/assets/img/footer/cloud-1.svg"
                alt="Cloud Image"
                sx={{
                    position: "absolute",
                    objectFit: "contain",
                    top: "54px",
                    left: 0
                }}
            />
            <Box
                component="img"
                src="/src/assets/img/footer/cloud-2.svg"
                alt="Cloud Image"
                sx={{
                    position: "absolute",
                    objectFit: "contain",
                    top: "105px",
                    right: "6%",
                }}
            />

            <Box
                component="img"
                src="/src/assets/img/footer/cloud-3.svg"
                alt="Cloud Image"
                sx={{
                    position: "absolute",
                    objectFit: "contain",
                    top: "240px",
                    right: "0%"
                }}
            />

            <Box
                component="img"
                src="/src/assets/img/footer/airplane.svg"
                alt="Cloud Image"
                sx={{
                    position: "absolute",
                    objectFit: "contain",
                    bottom: "34%",
                    right: "14%"
                }}
            />

            <Box
                component="img"
                src="/src/assets/img/footer/cloud-2.svg"
                alt="Cloud Image"
                sx={{
                    position: "absolute",
                    objectFit: "contain",
                    top: "364px",
                    left: "1230px",
                }}
            />

        </Box>
    )
}

function AppServiceCard({ title, services }: IAppServiceProps) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        }}>
            <Typography sx={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "24px",
                letterSpacing: "-2%",
                color: "#ffffff",
            }}>
                {title}
            </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
            }}>
                {services.map((service, index) => {
                    return (
                        <Box
                            key={index}
                            component="a"
                            href={service.href}
                            sx={{
                                textDecoration: "none"
                            }}>
                            <Typography sx={{
                                fontWeight: "400",
                                fontSize: "22px",
                                lineHeight: "30px",
                                color: "#ffffff",
                            }}>
                                {service.name}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}