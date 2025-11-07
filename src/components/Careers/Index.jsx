import Strength from "./sections/Strength";
import ImageCarousel from "./sections/ImageCarousel";
import Empowerment from "./sections/Empowerment";
import Workplace from "./sections/Workplace";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import Banner from "../../components/common/Banner";

const Index = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>
      <main>
        <Banner />
        <Strength />
        <ImageCarousel />
        <Empowerment />
        <Workplace />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
