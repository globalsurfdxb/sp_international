import Banner from "../common/Banner";
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer"; 
import ExpandingHorizons from "./sections/ExpandingHorizons";
import Horizons from "./sections/Horizons";
import { globalPresenceData } from "./data";
const GlobalPresence = () => {
  return (
    <>
      <header className="">
        <MainNavbar />
        <img src="./assets/images/shape-right.svg" alt="" className="absolute top-0 right-0 z-[-1]" />
      </header>
      <Banner title="Global Presence" image="./assets/images/global-presence/globalbanner.jpg" />
      <ExpandingHorizons data={globalPresenceData.mainSection} />
      <Horizons data={globalPresenceData.Horizons} />
      
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default GlobalPresence;