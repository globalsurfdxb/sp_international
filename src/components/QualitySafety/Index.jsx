 
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer"; 
import Banner from "../../components/common/Banner";  
import CoreValues from "./sections/CoreValues"; 
// import EnsuringSafety from "./sections/EnsuringSafety";
import { EnsuringSafetyData } from "./data";
import Certifications from "./sections/Certifications";
import SaftySlider from "./sections/SaftySlider";
import ImgPointsComponent from "../../components/common/ImgPointsComponent";
const QualitySafety = () => {
  return (
    <>
      <header className="">
        <MainNavbar /> 
      </header>
        <Banner title="Health safety & environmental" image="/assets/images/qualitysafety/qbanner.jpg" />
       <CoreValues /> 
        <Certifications />
        <SaftySlider />
      <ImgPointsComponent data={EnsuringSafetyData} bgColor="[#f5f5f5]" sectionSpacing="pt-text90 pb25" />
        {/* <EnsuringSafety />   */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default QualitySafety;