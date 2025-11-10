import Banner from "../../components/ProjrectDetails/Banner"; 
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";

const Index = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>
      <main>
        <Banner />
        
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;
