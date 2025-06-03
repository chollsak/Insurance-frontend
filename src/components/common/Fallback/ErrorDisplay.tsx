import type { FallbackProps } from "react-error-boundary";
import { Box, Typography, Button } from "@mui/material";

export default function ({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <Box
            role="alert"
            sx={{
                p: 4,
                border: "1px solid",
                borderColor: "error.main",
                borderRadius: 2,
                backgroundColor: "error.light",
                textAlign: "center",
                maxWidth: 400,
                margin: "auto",
                mt: 4,
            }}>
            <Typography variant="h5" color="error.main" gutterBottom>
                Something went wrong
            </Typography>
            <Typography variant="body1" gutterBottom>
                {error.message}
            </Typography>
            <Button variant="contained" color="error" onClick={resetErrorBoundary}>
                Try again
            </Button>
        </Box>
    );
};

