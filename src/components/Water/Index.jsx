import Banner from "../common/Banner";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import VdoSection from "../common/VdoSection";
import ExpertiseSec from "./sections/ExpertiseSec"; 
import FeaturedProjectSlider from "../common/FeaturedProjectSlider";
// import WhyChooseSec from "./sections/WhyChooseSec";
import { wtrData } from "./data";
import DivisionExpertise from "./sections/DivisionExpertise";
const Water = () => {
  return (
    <>
      <header className="">
        <MainNavbar />
        <img src="./assets/images/shape-right.svg" alt="" className="absolute top-0 right-0 z-[-1]" />
      </header>
      <Banner title="Water" image="./assets/images/water/wtr-banner.jpg" />
      <VdoSection data={wtrData.mainSection} />
      <ExpertiseSec />
      <DivisionExpertise data={wtrData.DivisionEx} /> 
      <FeaturedProjectSlider data={wtrData.featuredProjectsData} />
      {/* <WhyChooseSec data={wtrData.WhyChooseData} /> */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Water;