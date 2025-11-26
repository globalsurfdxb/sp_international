 
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer"; 
import ContactDetails from "./sections/ContactDetails";
import RegionalOffices from "./sections/RegionalOffices";
const EngineeringConstruction = () => {
  return (
    <>
      <header className="">
        <MainNavbar />
        <img src="./assets/images/shape-right.svg" alt="" className="absolute top-0 right-0 z-[-1]" />
      </header>
       <ContactDetails />  
        <RegionalOffices />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default EngineeringConstruction;