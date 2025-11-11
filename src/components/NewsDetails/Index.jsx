import Banner from "./sections/Banner"; 
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer"; 
import MoreDetrails from "./sections/MoreDetrails"; 
import RelatedNews from "./sections/RelatedNews"; 
const Index = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>
      <main>
        <Banner /> 
        <MoreDetrails /> 
        <RelatedNews /> 
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
