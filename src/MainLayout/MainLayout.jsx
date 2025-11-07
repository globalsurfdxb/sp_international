import { BrowserRouter, Route, Routes } from "react-router"
import Home from '../Pages/Home/Home'
import V2 from '../Pages/V2/IndexV2'
import Error from "../Pages/Error/Error"
import V3 from "../Pages/V3/IndexV3"
import AboutUs from '../Pages/about-us/Index'
 
const MainLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/version-two" element={<V2/>}/>
        <Route path="/version-three" element={<V3/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
         <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainLayout