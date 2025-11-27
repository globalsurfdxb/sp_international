
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import { facadeData } from "./data";
import VdoSection from "../common/VdoSection";
import Banner from "../common/Banner";
import ExpertiseSec from "./sections/ExpertiseSec";
import DesignExcellence from "./sections/DesignExcellence";
import FeaturedProjectSlider from "./sections/FeaturedProjectSlider";
import LastSection from "./sections/LastSection";
import OurStrengthSec from "./sections/OurStrengthSec";
const Facade = () => {
  
  return ( 
    <>
    <header>
      <MainNavbar />
    </header>
    <main>
        <Banner title="Façade" image="./assets/images/design-studio/banner.jpg" />
        <VdoSection data={facadeData.mainSection} />
        <ExpertiseSec data={facadeData.expertiseData} />
        <OurStrengthSec data={facadeData.ourStrengthData} />
        <FeaturedProjectSlider data={facadeData.featuredProjectsData} />
        <LastSection/>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
   );
}
 
export default Facade;