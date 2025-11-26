 
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";  

import Banner from "../common/Banner"; 
import EmpoweringCommunities from "./sections/EmpoweringCommunities"; 
import FocusArea from "./sections/FocusArea"
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default CommunityEngagement;