import Strength from "./sections/Strength";
import ImageCarousel from "./sections/ImageCarousel";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";

const Index = () => {
  return (
    <>
    <header>
      <MainNavbar />
    </header>
    <main>
      <Strength />
      <ImageCarousel />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  );
};

export default Index;
