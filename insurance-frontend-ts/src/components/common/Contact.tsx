import { Box } from "@mui/material";
import { ContactHeader, ContactCardList } from "../Contact";

export default function Contact() {
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
                flexWrap: "wrap",
                gap: "32px"
            }}>
                <ContactHeader />
                <ContactCardList />
            </Box>
        </Box>
    )
}