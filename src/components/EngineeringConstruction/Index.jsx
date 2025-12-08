import Banner from "../common/Banner";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import VdoSection from "../common/VdoSection";
import ExpertiseSec from "./sections/ExpertiseSec";
import OurApproach from "./sections/OurApproach";
import FeaturedProjectSlider from "../common/FeaturedProjectSlider";
import WhyChooseSec from "./sections/WhyChooseSec";
import { engineeringData } from "./data";
const EngineeringConstruction = () => {
  return (
    <>
      <header className="">
        <MainNavbar /> 
      </header>
      <Banner title="Engineering & Construction" image="./assets/images/eng-constructions/banner.jpg" />
      <VdoSection data={engineeringData.mainSection} />
      <ExpertiseSec />
      <OurApproach/>
      <FeaturedProjectSlider data={engineeringData.featuredProjectsData} />
      <WhyChooseSec data={engineeringData.WhyChooseData} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default EngineeringConstruction;