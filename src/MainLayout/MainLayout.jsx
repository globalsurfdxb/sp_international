import { BrowserRouter, Route, Routes } from "react-router"
import Home from '../Pages/Home/Home'
import V2 from '../Pages/V2/IndexV2'
import Error from "../Pages/Error/Error"
 
const MainLayout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/version-two" element={<V2/>}/>
         <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainLayout