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
import { useHomeData } from "../../hooks";

export default function HomeScreen() {
  const { data: { banners, insurances, promotions, suitInsurances }, isLoading } = useHomeData();
  
  return (
    <Box sx={{ width: '100%', position: "relative" }}>
      <Navbar />
      <Box>
        <Box sx={{ width: '100%', height: '80px', bgcolor: '#3978E9' }} />
        <Banner data={banners} isLoading={isLoading} />
        <SuitInsurance data={suitInsurances} isLoading={isLoading} />
        <Insurance data={insurances} isLoading={isLoading} />
        <Promotion data={promotions} isLoading={isLoading} />
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