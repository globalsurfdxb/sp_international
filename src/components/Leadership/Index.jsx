import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import Banner from "../Leadership/sections/Banner";
import LeadersBox from "../Leadership/sections/LeadersBox";
import { leaderData } from "../Leadership/data";
import CoreLeardershipTeam from "./sections/CoreLeardershipTeam";
const Leadership = () => {
  return ( 
    <>
    <header>
      <MainNavbar />
    </header>
    <main>
      <Banner />
      <LeadersBox data={leaderData.leadersDetails} />
      <CoreLeardershipTeam data={leaderData.coreLeadershipData}/>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
   );
}
 
export default Leadership;