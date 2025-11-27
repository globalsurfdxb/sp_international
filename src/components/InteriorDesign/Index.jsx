import Banner from "../common/Banner";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import VdoSection from "../common/VdoSection";
import SecondSection from "./sections/SecondSection";
import ExpertiseSec from "./sections/ExpertiseSec";
import FeaturedProjectSlider from "../common/FeaturedProjectSlider";
import WhyChooseSec from "./sections/WhyChooseSec";
import { interiorData } from "./data";
import SectorsSec from "./sections/SectorsSec";
const InteriorDesign = () => {
  return (
    <>
      <header>
        <MainNavbar />
        <img src="./assets/images/shape-right.svg" alt="" className="absolute top-0 right-0 z-[-1]" />
      </header>
      <Banner title="Interior Design" image="./assets/images/interior-design/banner.jpg" />
      <VdoSection data={interiorData.mainSection} />
      <SecondSection data={interiorData.secondSectionData}/>
      <ExpertiseSec data={interiorData.expertiseData}/>
      <SectorsSec data={interiorData.sectorsData}/>
      <FeaturedProjectSlider data={interiorData.featuredProjectsData} />
      <WhyChooseSec data={interiorData.WhyChooseData} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default InteriorDesign;