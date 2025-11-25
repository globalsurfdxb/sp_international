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
import EngineeringConstruction from "../Pages/engineering-construction/Index";
import Gallery from "../Pages/gallery/Index";
import QualitySafety from "../Pages/quality-safety/Index";
import Contact from "../Pages/contact/Index";
import CommunityEngagement from "../Pages/community-engagement/Index";
const MainLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quality-and-safety" element={<QualitySafety />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/community-engagement" element={<CommunityEngagement />} /> 
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainLayout;
