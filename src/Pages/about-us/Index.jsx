import Banner from "../../components/common/Banner";
import About from "../../components/AboutUS/About";
import VisionMission from "../../components/AboutUS/VisionMission";
import OurValues from "../../components/AboutUS/OurValues";
import Trusted from "../../components/AboutUS/Trusted";
import Legacy from "../../components/AboutUS/Legacy";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";

const Index = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>
      <main>
        <Banner title="about us" image="/assets/images/about-us/about-banner.jpg" />
        <About />
        <VisionMission />
        <OurValues />
        <Legacy />
        <Trusted />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
