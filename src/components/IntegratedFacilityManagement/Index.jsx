import Banner from "../common/Banner";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import VdoSection from "../common/VdoSection";
import ExpertiseSec from "./sections/ExpertiseSec";
import OurApproach from "./sections/OurApproach";
import FeaturedProjectSlider from "../common/FeaturedProjectSlider";
import WhyChooseSec from "./sections/WhyChooseSec";
import { ifmData } from "./data";
const IntegratedFacilityManagement = () => {
  return (
    <>
      <header className="">
        <MainNavbar />
        <img src="./assets/images/shape-right.svg" alt="" className="absolute top-0 right-0 z-[-1]" />
      </header>
      <Banner title="Integrated Facility Management" image="./assets/images/ifm/banner.jpg" />
      <VdoSection data={ifmData.mainSection} />
      <ExpertiseSec data={ifmData.expertiseData} />
      <OurApproach data={ifmData.approachesData}/>
      <FeaturedProjectSlider data={ifmData.featuredProjectsData} />
      <WhyChooseSec data={ifmData.WhyChooseData} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default IntegratedFacilityManagement;