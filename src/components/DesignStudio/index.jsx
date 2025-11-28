
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import { designStudioData } from "./data";
import VdoSection from "../common/VdoSection";
import Banner from "../common/Banner";
import ExpertiseSec from "./sections/ExpertiseSec";
import DesignExcellence from "./sections/DesignExcellence";
import FeaturedProjectSlider from "./../common/FeaturedProjectSlider";
import LastSection from "./sections/LastSection";
const DesignStudio = () => {
  
  return ( 
    <>
    <header>
      <MainNavbar />
    </header>
    <main>
        <Banner title="Design Studio" image="./assets/images/design-studio/banner.jpg" />
        <VdoSection data={designStudioData.mainSection} />
        <ExpertiseSec data={designStudioData.expertiseData} />
        <DesignExcellence data={designStudioData.designExcellenceData} />
        <FeaturedProjectSlider data={designStudioData.featuredProjectsData} />
        <LastSection/>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
   );
}
 
export default DesignStudio;