import { Box } from "@mui/material";
import ContactCard from "./ContactCard";

export default function ContactCardList() {
    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "32px",
        }}>
            <ContactCard
                iconName="bki-contact-icon.svg"
                title="ติดต่อกรุงเทพประกันภัย"
                description="จันทร์ - ศุกร์ เวลา 08.00 - 17.00 น."
                phoneNo="0 2285 8888"
            />
            <ContactCard
                iconName="fine-contact-icon.svg"
                title="ติดต่อสินไหมทดแทน"
                description="จันทร์ - ศุกร์ เวลา 08.00 - 17.00 น."
                phoneNo="0 2285 8888"
            />
            <ContactCard
                iconName="car-accident-contact-icon.svg"
                title="แจ้งอุบัติเหตุรถยนต์"
                description="สายด่วน 24 ชั่วโมง"
                phoneNo="1620"
            />
        </Box>
    )
}