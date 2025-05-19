import { Box } from "@mui/material";
import { AppDemo, AppDemoContent } from "../GetTheApp";

export default function GetTheApp() {
    return (
        <Box
            sx={{
                display: "flex",
                height: "630px",
                position: "relative",
                bgcolor: "#ffffff"
            }}
        >
            <AppDemo sx={{ flex: 45 }} />
            <AppDemoContent sx={{ flex: 55 }} />
        </Box >
    );
}
