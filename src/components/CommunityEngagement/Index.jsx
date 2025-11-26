 
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";  

import Banner from "../common/Banner"; 
import EmpoweringCommunities from "./sections/EmpoweringCommunities"; 
import FocusArea from "./sections/FocusArea"
import HighlightedProgramsSlider from "./sections/HighlightedProgramsSlider";
import { engineeringData } from "./data";
import EmployeeInvolvementSlider from "./sections/EmployeeInvolvementSlider";
const CommunityEngagement = () => {
  return (
    <>
      <header className="">
        <MainNavbar />
        <img src="./assets/images/shape-right.svg" alt="" className="absolute top-0 right-0 z-[-1]" />
      </header>
         <Banner title="Community Engagement" image="/assets/images/ec/banner.jpg" />
        <EmpoweringCommunities /> 
        <FocusArea />
        <HighlightedProgramsSlider data={engineeringData.featuredProjectsData} />
        <EmployeeInvolvementSlider data={engineeringData.featuredProjectsData} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default CommunityEngagement;