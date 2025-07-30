import { BrowserRouter, Route, Routes } from "react-router"
import Home from '../Pages/Home/Home'
import V2 from '../Pages/V2/IndexV2'
 
const MainLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/V2" element={<V2/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainLayout