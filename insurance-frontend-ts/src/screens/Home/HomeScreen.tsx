import { Box } from "@mui/material"
import {
  SuitInsurance,
  Insurance,
  Banner,
  Promotion,
  GetTheApp,
  Navbar,
  WhyChooseUs,
  CookieAccepter,
  Contact,
  ContactUs,
  Footer,
  AboutUs
} from "../../components/";

export default function HomeScreen() {
  return (
    <Box sx={{ width: '100%', position: "relative" }}>
      <Navbar />
      <Box>
        <Box sx={{ width: '100%', height: '80px', bgcolor: '#3978E9' }} />
        <Banner />
        <SuitInsurance />
        <Insurance />
        <Promotion />
        <WhyChooseUs />
        <GetTheApp />
        <Contact />
        <AboutUs />
        <Footer />
      </Box>
      <ContactUs />
      <CookieAccepter />
    </Box>
  );
};