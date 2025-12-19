import Strength from "./sections/Strength";
import ImageCarousel from "./sections/ImageCarousel";
import Empowerment from "./sections/Empowerment";
import Workplace from "./sections/Workplace";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import Banner from "../../components/common/Banner";
import OurValues from "./sections/OurValues";
import PartOfUs from "./sections/PartOfUs";
import JourneySlider from "./sections/JourneySlider";
// import ImgPointsComponent from "../common/ImgPointsComponent";
import { interiorData } from "./data";
import ImageAcc from "./sections/ImageAcc";
const Index = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>
      <main>
        <Banner title="careers" image="/assets/images/careers/banner.jpg" />
        <Strength />
        <ImageCarousel />
        <Empowerment />
        {/* <ImgPointsComponent data={workplaceData} bgColor="bg-white" sectionSpacing="pt-text30 pb30"/> */}
        <ImageAcc data={interiorData.WhyChooseData}  />
        {/* <Workplace /> */}
        <OurValues />
        <JourneySlider />
        <PartOfUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
