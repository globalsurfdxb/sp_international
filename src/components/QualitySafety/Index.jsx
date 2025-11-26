 
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer"; 
import Banner from "../../components/common/Banner";  
import CoreValues from "./sections/CoreValues"; 
import EnsuringSafety from "./sections/EnsuringSafety";

import Certifications from "./sections/Certifications";
import SaftySlider from "./sections/SaftySlider";
const QualitySafety = () => {
  return (
    <>
      <header className="">
        <MainNavbar />
        <img src="./assets/images/shape-right.svg" alt="" className="absolute top-0 right-0 z-[-1]" />
      </header>
        <Banner title="Quality & Safety" image="/assets/images/qualitysafety/qbanner.jpg" />
       <CoreValues /> 
        <Certifications />
        <SaftySlider />
        <EnsuringSafety />  
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default QualitySafety;