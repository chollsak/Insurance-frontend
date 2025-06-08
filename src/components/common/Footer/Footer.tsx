import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface IAppServiceProps {
    title: string;
    services: {
        name: string;
        href: string
    }[]
}

const appServices: IAppServiceProps[] = [
    {
        title: "home.footer.product.title",
        services: [
            {
                name: "home.footer.product.travelInsurance",
                href: "#"
            },
            {
                name: "home.footer.product.accidentInsurance",
                href: "#"
            },
            {
                name: "home.footer.product.carInsurance",
                href: "#"
            },
            {
                name: "home.footer.product.homeInsurance",
                href: "#"
            },
            {
                name: "home.footer.product.healthInsurance",
                href: "#"
            },
            {
                name: "home.footer.product.propertyInsurance",
                href: "#"
            },
            {
                name: "home.footer.product.publicLiabilityInsurance",
                href: "#"
            },
            {
                name: "home.footer.product.insuranceForEntrepreneursshipAndBusiness",
                href: "#"
            },
            {
                name: "home.footer.product.engineerInsurance",
                href: "#"
            },
            {
                name: "home.footer.product.marineCargoInsurance",
                href: "#"
            },
            {
                name: "home.footer.product.otherTypesOfInsurance",
                href: "#"
            },
        ]
    },
    {
        title: "home.footer.ourCompany.title",
        services: [
            {
                name: "home.footer.ourCompany.aboutCompany",
                href: "#"
            },
            {
                name: "home.footer.ourCompany.vision",
                href: "#"
            },
            {
                name: "home.footer.ourCompany.executiveBoard",
                href: "#"
            },
            {
                name: "home.footer.ourCompany.organizationalStructure",
                href: "#"
            },
            {
                name: "home.footer.ourCompany.organizationalDevelopmentForSustainability",
                href: "#"
            },
            {
                name: "home.footer.ourCompany.corporateGovernance",
                href: "#"
            },
            {
                name: "home.footer.ourCompany.awardOfHonor",
                href: "#"
            },
            {
                name: "home.footer.ourCompany.corporateSocialResponsibility",
                href: "#"
            },
            {
                name: "home.footer.ourCompany.newsAndActivity",
                href: "#"
            },
            {
                name: "home.footer.ourCompany.advertisingMedia",
                href: "#"
            },
        ]
    },
]

export function Footer() {
    const { t } = useTranslation();
    return (
        <Box sx={{
            bgcolor: "#3273E1",
            width: "100%",
            minHeight: "570px",
            position: "relative",
            overflow: "hidden",
            backgroundImage: {
                sm: "url('/src/assets/img/footer/footer-overlay.svg')"
            },
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            userSelect: "none",
        }}>
            <Box sx={{
                paddingBlock: {
                    xs: "16px",
                    lg: "0",
                }
            }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            lg: "row"
                        },
                        gap: {
                            lg: "96px"
                        },
                    }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: {
                            xs: "16px",
                            lg: "48px",
                        },
                        paddingTop: "42px",
                        marginLeft: {
                            lg: "-64px",
                        },
                        zIndex: 1,
                    }}>
                        <Box
                            component="img"
                            src="/src/assets/img/footer/bki-white-logo.svg"
                            alt="BKI Logo"
                            draggable={false}
                            sx={{
                                userSelect: "none",
                                width: {
                                    xs: "244px",
                                    sm: "244px",
                                    md: "244px",
                                },
                                height: "auto",
                            }} />
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "repeat(4, 1fr)",
                                    lg: "repeat(2, 1fr)",
                                },
                                gap: "16px",
                                paddingLeft: "8px",
                                placeItems: "center",
                                maxWidth: "160px",
                                width: "100%",
                            }}>
                            <Box
                                component="img"
                                src="/src/assets/img/footer/facebook-icon.svg"
                                alt="Facebook Icon"
                                draggable={false}
                                sx={{
                                    userSelect: "none",
                                    width: {
                                        xs: "56px",
                                        lg: "70px",
                                    },
                                    height: "auto",
                                }} />
                            <Box
                                component="img"
                                src="/src/assets/img/footer/x-icon.svg"
                                alt="X Icon"
                                draggable={false}
                                sx={{
                                    userSelect: "none",
                                    width: {
                                        xs: "56px",
                                        lg: "70px",
                                    },
                                    height: "auto",
                                }} />
                            <Box
                                component="img"
                                src="/src/assets/img/footer/line-icon.svg"
                                alt="Line Icon"
                                draggable={false}
                                sx={{
                                    userSelect: "none",
                                    width: {
                                        xs: "56px",
                                        lg: "70px",
                                    },
                                    height: "auto",
                                }} />
                            <Box
                                component="img"
                                src="/src/assets/img/footer/youtube-icon.svg"
                                alt="Youtube Icon"
                                draggable={false}
                                sx={{
                                    userSelect: "none",
                                    width: {
                                        xs: "56px",
                                        lg: "70px",
                                    },
                                    height: "auto",
                                }} />
                        </Box>

                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "row",
                            md: "column",
                            lg: "column",
                        },
                        gap: "20px",
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "32px",
                            paddingTop: "32px",
                            marginX: "100px",
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
                                    {t("home.footer.myAccount.title")}
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
                                        {t("home.footer.myAccount.yourOnlineInsurance")}
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
                                        {t("home.footer.myAccount.preferredInsurance")}
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
                                        {t("home.footer.myAccount.account")}
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
                                        {t("home.footer.myAccount.signOut")}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: {
                                xs: "none",
                                lg: "block",
                            },
                            marginLeft: "-200px"
                        }}>
                            <svg width="845" height="2" viewBox="0 0 845 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="0.616699" x2="845" y2="0.616699" stroke="white" />
                            </svg>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                component="img"
                src="/src/assets/img/footer/cover.svg"
                alt="Footer Cover Image"
                draggable={false}
                sx={{
                    position: "absolute",
                    objectFit: "contain",
                    bottom: 0,
                    left: 0,
                    userSelect: "none",
                    display: {
                        xs: "none",
                        lg: "block",
                    }
                }}
            />
            <Box
                component="img"
                src="/src/assets/img/footer/cloud-1.svg"
                alt="Cloud Image"
                draggable={false}
                sx={{
                    position: "absolute",
                    objectFit: "contain",
                    top: "54px",
                    left: 0,
                    userSelect: "none",
                    display: {
                        xs: "none",
                        lg: "block"
                    },
                }}
            />
            <Box
                component="img"
                src="/src/assets/img/footer/cloud-2.svg"
                alt="Cloud Image"
                draggable={false}
                sx={{
                    position: "absolute",
                    objectFit: "contain",
                    top: "105px",
                    right: "6%",
                    userSelect: "none",
                    display: {
                        xs: "none",
                        lg: "block"
                    },
                }}
            />

            <Box
                component="img"
                src="/src/assets/img/footer/cloud-3.svg"
                alt="Cloud Image"
                draggable={false}
                sx={{
                    position: "absolute",
                    objectFit: "contain",
                    top: "240px",
                    right: "0%",
                    userSelect: "none",
                    display: {
                        xs: "none",
                        lg: "block"
                    },
                }}
            />

            <Box
                component="img"
                src="/src/assets/img/footer/airplane.svg"
                alt="Cloud Image"
                draggable={false}
                sx={{
                    position: "absolute",
                    objectFit: "contain",
                    bottom: "34%",
                    right: "14%",
                    display: {
                        xs: "none",
                        lg: "block",
                    },
                    userSelect: "none",
                }}
            />

            <Box
                component="img"
                src="/src/assets/img/footer/cloud-2.svg"
                alt="Cloud Image"
                draggable={false}
                sx={{
                    position: "absolute",
                    objectFit: "contain",
                    top: "364px",
                    left: "1230px",
                    userSelect: "none",
                }}
            />
        </Box>
    )
}

function AppServiceCard({ title, services }: IAppServiceProps) {
    const { t } = useTranslation();
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
                {t(title)}
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
                                {t(service.name)}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}