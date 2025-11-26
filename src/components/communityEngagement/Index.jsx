 
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import Banner from "../common/Banner"; 
import EmpoweringCommunities from "./sections/EmpoweringCommunities"; 
import FocusArea from "./sections/FocusArea"
const Index = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>
      <main>
        <Banner title="Community Engagement" image="/assets/images/ec/banner.jpg" />
        <EmpoweringCommunities /> 
        <FocusArea />

          
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
