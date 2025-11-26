import Banner from "../common/Banner";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import VdoSection from "../common/VdoSection";
import ExpertiseSec from "./sections/ExpertiseSec";
// import OurApproach from "./sections/OurApproach";
import FeaturedProjectSlider from "../common/FeaturedProjectSlider";
import WhyChooseSec from "./sections/WhyChooseSec";
import InnovationSustainability from "./sections/InnovationSustainability";
import { mepData } from "./data";
const MEP = () => {
  return (
    <>
      <header className="">
        <MainNavbar />
        <img src="./assets/images/shape-right.svg" alt="" className="absolute top-0 right-0 z-[-1]" />
      </header>
      <Banner title="Mechanical, Electrical & Plumbing (MEP)" image="./assets/images/mep/banner.jpg" />
      <VdoSection data={mepData.mainSection} />
      <ExpertiseSec data={mepData.expertiseData} />
      <WhyChooseSec data={mepData.whyChooseData} />
      <FeaturedProjectSlider data={mepData.featuredProjectsData} />
      <InnovationSustainability />
      {/* <OurApproach data={mepData.approachesData}/> */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MEP;