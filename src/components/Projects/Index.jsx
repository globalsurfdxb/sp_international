import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer"; 
import Banner from "./sections/Banner"; 
import ProjectLists from "./sections/ProjectLists";
const Index = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header> 
      <main>
        <Banner /> 
        <ProjectLists />
    
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Index;