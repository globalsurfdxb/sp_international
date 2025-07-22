import React, { useRef } from 'react'

import Index from './sections/home/Index'
import Header from './components/Header'
import { useState } from 'react'

/* import SmoothScroll from "./components/SmoothScroll"; */

const App = () => {
  const [activeSection, setActiveSection] = useState("section1");
  const sectionScrollPositions = useRef({});
  return (
    <main className='no-scrollbar'>
      {/*      <SmoothScroll/> */}

      <Header activeSection={activeSection} setActiveSection={setActiveSection} sectionScrollPositions={sectionScrollPositions} />
      <Index setActiveSection={setActiveSection} sectionScrollPositions={sectionScrollPositions} />
    </main>
  )
}

export default App