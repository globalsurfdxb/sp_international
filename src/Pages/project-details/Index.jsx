import Banner from "../../components/ProjrectDetails/Banner"; 
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import KeyFacts from "../../components/ProjrectDetails/KeyFacts";
import MoreDetrails from "../../components/ProjrectDetails/MoreDetrails";
import ProjectSlider from "../../components/ProjrectDetails/ProjectSlider";
import InquireToday from "../../components/ProjrectDetails/InquireToday";
import NextProject from "../../components/ProjrectDetails/NextProject";
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
