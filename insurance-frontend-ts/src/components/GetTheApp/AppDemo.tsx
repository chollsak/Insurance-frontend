import { Theme } from "@emotion/react";
import { Box, SxProps } from "@mui/material";

interface IAppDemo {
    sx?: SxProps<Theme>;
}

export default function AppDemo({ sx }: IAppDemo) {
    return (
        <Box
            sx={{
                position: "relative",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(183, 210, 255, 1) 100%)",
                overflow: "hidden",
                ...sx
            }}
        >
            <Box
                component="img"
                src="/src/assets/img/get-the-app/cover.png"
                alt="Cover Get the APP"
                sx={{
                    objectFit: "cover",
                    width: "125%",
                    position: "absolute",
                    bottom: 0,
                    left: "-25%"
                }}
            />

            <Box
                component="img"
                src="/src/assets/img/get-the-app/app-proto.png"
                alt="App Prototype"
                sx={{
                    objectFit: "contain",
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-47%, -50%) scale(0.89)",
                    zIndex: 1
                }}
            />
        </Box>
    )
}