import Banner from "../common/Banner";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import VdoSection from "../common/VdoSection";
import ExpertiseSec from "./sections/ExpertiseSec"; 
// import WhyChooseSec from "./sections/WhyChooseSec";
import { sustainabilityData } from "./data";
import OngoingInitiatives from "./sections/OngoingInitiatives";
import Certifications from "./sections/Certifications";
import CounterSection from "./sections/CounterSection";
import RoadMap from "./sections/RoadMap";
const Sustainability = () => {
  return (
    <>
      <header className="">
        <MainNavbar /> 
      </header>
      <Banner title="Sustainability" image="./assets/images/sustainability/banner.jpg" />
      <VdoSection data={sustainabilityData.mainSection} />
      <ExpertiseSec />
      <OngoingInitiatives data={sustainabilityData.OngoingInvData} /> 
      <Certifications data={sustainabilityData.certificationsData} />
      <CounterSection data={sustainabilityData.counterData} />
      <RoadMap data={sustainabilityData.roadMapData} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Sustainability;