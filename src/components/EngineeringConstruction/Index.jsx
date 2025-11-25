import Banner from "../common/Banner";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import VdoSection from "../common/VdoSection";
import ExpertiseSec from "./sections/ExpertiseSec";
const EngineeringConstruction = () => {
  return (
    <>
      <header className="">
        <MainNavbar />
        <img src="./assets/images/shape-right.svg" alt="" className="absolute top-0 right-0 z-[-1]" />
      </header>
      <Banner title="Engineering & Construction" image="./assets/images/eng-constructions/banner.jpg" />
      <VdoSection />
      <ExpertiseSec />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default EngineeringConstruction;