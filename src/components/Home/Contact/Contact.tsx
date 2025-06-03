import { Box } from "@mui/material";
import { ContactHeader } from "./ContactHeader";
import { ContactCardList } from "./ContactCardList";

export function Contact() {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            padding: "64px 128px",
        }}>
            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "32px"
            }}>
                <ContactHeader />
                <ContactCardList />
            </Box>
        </Box>
    )
}