import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer"; 
import ContactDetails from "./sections/ContactDetails";
import RegionalOffices from "./sections/RegionalOffices";
const ContactUs = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>
      <main>
        
        <ContactDetails />  
        <RegionalOffices />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ContactUs;
