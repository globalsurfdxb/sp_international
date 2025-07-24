import React, { useRef } from 'react'


import Header from './components/Header'
import { useState } from 'react'
import SlideScroll from './sections/home/SlideScroll'
import SlideScrollTwo from './sections/home/SlideScrollTwo'

/* import SmoothScroll from "./components/SmoothScroll"; */

const App = () => {
  const [activeSection, setActiveSection] = useState("section1");
  const sectionScrollPositions = useRef({});
  return (
    <main className='no-scrollbar'>
      {/*      <SmoothScroll/> */}

      <Header activeSection={activeSection} setActiveSection={setActiveSection} sectionScrollPositions={sectionScrollPositions} />
    {/*   <Index setActiveSection={setActiveSection} sectionScrollPositions={sectionScrollPositions} /> */}
  {/*   <SlideScroll/> */}
    <SlideScrollTwo setActiveSection={setActiveSection} activeSection={activeSection}/>
    </main>
  )
}

export default App