import Banner from "./sections/Banner"; 
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import KeyFacts from "./sections/KeyFacts";
import MoreDetrails from "./sections/MoreDetrails";
import ProjectSlider from "./sections/ProjectSlider";
import InquireToday from "./sections/InquireToday";
import NextProject from "./sections/NextProject";
const Index = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>
      <main>
        <Banner />
        <KeyFacts />
        <MoreDetrails />
        <ProjectSlider />
        <InquireToday />
        <NextProject />
        
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
