
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import { facadeData } from "./data";
import VdoSection from "../common/VdoSection";
import Banner from "../common/Banner";
import ExpertiseSec from "./sections/ExpertiseSec";
import FeaturedProjectSlider from "../common/FeaturedProjectSlider";
import ImgPointsComponent from "../common/ImgPointsComponent";
import LastSection from "./sections/LastSection";
const Facade = () => {
  
  return ( 
    <>
    <header>
      <MainNavbar />
    </header>
    <main>
        <Banner title="Facade" image="./assets/images/facade/banner.jpg" />
        <VdoSection data={facadeData.mainSection} />
        <ExpertiseSec data={facadeData.expertiseData} />
        <ImgPointsComponent data={facadeData.ourStrengthData} bgColor="white" sectionSpacing="pt-text30 pb30" />
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