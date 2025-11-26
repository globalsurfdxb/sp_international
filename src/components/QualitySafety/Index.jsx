import EnsuringSafety from "./sections/EnsuringSafety";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import Banner from "../../components/common/Banner"; 
import CoreValues from "./sections/CoreValues";
import Certifications from "./sections/Certifications";
import SaftySlider from "./sections/SaftySlider";
const Index = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>
      <main>
        <Banner title="Quality & Safety" image="/assets/images/qualitysafety/qbanner.jpg" />
        <CoreValues /> 
        <Certifications />
        <SaftySlider />
        <EnsuringSafety />  
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
