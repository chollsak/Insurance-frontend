import { Box, CircularProgress } from "@mui/material";

export function LoadingSpinner() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress />
        </Box>
    )
}