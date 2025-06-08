import { Box } from "@mui/material";
import { ContactCard } from "./ContactCard";
import { useTranslation } from "react-i18next";

export function ContactCardList() {
    const { t } = useTranslation();
    return (
        <Box sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
            justifyItems: "start",
        }}>
            <ContactCard
                iconName="bki-contact-icon.svg"
                title={t("home.contact.contactList.bki.title")}
                description={t("home.contact.contactList.bki.description")}
                phoneNoText={t("home.contact.contactList.bki.tel")}
            />
            <ContactCard
                iconName="fine-contact-icon.svg"
                title={t("home.contact.contactList.fine.title")}
                description={t("home.contact.contactList.fine.description")}
                phoneNoText={t("home.contact.contactList.fine.tel")}
            />
            <ContactCard
                iconName="car-accident-contact-icon.svg"
                title={t("home.contact.contactList.carAccident.title")}
                description={t("home.contact.contactList.carAccident.description")}
                phoneNoText={t("home.contact.contactList.carAccident.tel")}
            />
        </Box>
    )
}