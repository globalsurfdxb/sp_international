 
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer"; 
import ContactDetails from "./sections/ContactDetails";
import RegionalOffices from "./sections/RegionalOffices";
const ContactUs = () => {
  return (
    <>
      <header className="">
        <MainNavbar />
              </header>
       <ContactDetails />  
        <RegionalOffices />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ContactUs;