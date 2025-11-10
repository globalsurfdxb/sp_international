import Strength from "./sections/Strength";
import ImageCarousel from "./sections/ImageCarousel";
import Empowerment from "./sections/Empowerment";
import Workplace from "./sections/Workplace";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import Banner from "../../components/common/Banner";
import OurValues from "./sections/OurValues";
import PartOfUs from "./sections/PartOfUs";

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
        <Workplace />
        <OurValues />
        <PartOfUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
