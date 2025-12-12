import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../Pages/Home/Home";
import V2 from "../Pages/V2/IndexV2";
import V2backup from "../Pages/V2-backup/IndexV2";
import Error from "../Pages/Error/Error";
import V3 from "../Pages/V3/IndexV3";
import Careers from "../Pages/Careers/Careers";
import AboutUs from "../Pages/about-us/Index";
import PressReleases from "../Pages/press-releases/Index";
import ProjectDetails from "../Pages/project-details/Index";
import Projects from "../Pages/projects/Index";
import NewsDetails from "../Pages/news-details/Index";
import QualitySafety from "../Pages/hse/Index"
import EngineeringConstruction from "../Pages/engineering-construction/Index";
import MEP from "../Pages/mep/Index";
import DesignStudio from "../Pages/design-studio/Index";
import InteriorDesign from "../Pages/interior-design/Index";
import Gallery from "../Pages/gallery/Index";   
import ContactUs from "../Pages/contact-us/Index"
import Quality from "../Pages/safety/Index"  
import CommunityEngagement from "../Pages/community-engagement/Index"
import GlobalPresence from "../Pages/global-presence/Index"
import Water from "../Pages/water/Index"
import Facade from "../Pages/facade/Index";
import IntegratedFacilityManagement from "../Pages/integrated-facility-management/Index";
import Leadership from "../Pages/leadership/Index";
import Sustainability from "../Pages/sustainability/Index";
// import Hse from "../Pages/Hse/Index";
const MainLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<V2 />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/version-two" element={<V2 />} />
        <Route path="/version-two-backup" element={<V2backup />} />
        <Route path="/version-three" element={<V3 />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/press-releases" element={<PressReleases />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news-details" element={<NewsDetails />} />
        <Route path="/engineering-construction" element={<EngineeringConstruction />} />
        <Route path="/design-studio" element={<DesignStudio />} />
        <Route path="/interior-design" element={<InteriorDesign />} />
        <Route path="/safety" element={<Quality />} />  
        <Route path="/facade" element={<Facade />} />
        <Route path="/integrated-facility-management" element={<IntegratedFacilityManagement />} />
        <Route path="/contact-us" element={<ContactUs />} />   
        <Route path="/hse" element={<QualitySafety />} />  
        {/* <Route path="/hse" element={<Hse />} />   */}
        <Route path="/community-engagement" element={<CommunityEngagement />} />  
        <Route path="/global-presence" element={<GlobalPresence />} />  
        <Route path="/water" element={<Water />} />  
        <Route path="/mep" element={<MEP />} />
        <Route path="/gallery" element={<Gallery />} />    
        <Route path="/leadership" element={<Leadership />} />    
        <Route path="/sustainability" element={<Sustainability />} />    
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
 
export default MainLayout;
 
 