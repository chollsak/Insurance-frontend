import { Box } from "@mui/material";
import AppDemo from "./AppDemo";
import AppDemoContent from "./AppDemoContent";

export function GetTheApp() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row",
                },
                minHeight: "630px",
                height: "100%",
                position: "relative",
                bgcolor: "#ffffff",
            }}>
            <AppDemo sx={{
                flex: {
                    xs: 0,
                    md: 45,
                }
            }} />
            <AppDemoContent sx={{
                flex: {
                    xs: 1,
                    md: 55
                }
            }} />
        </Box >
    );
}
