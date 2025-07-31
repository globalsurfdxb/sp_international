import React, { useRef } from 'react'


import Header from './components/Header'
import { useState,useEffect } from 'react'
import SlideScroll from './sections/home/SlideScroll'
import SlideScrollTwo from './sections/home/SlideScrollTwo'

/* import SmoothScroll from "./components/SmoothScroll"; */

const App = () => {
  const [activeSection, setActiveSection] = useState("section1");
  const [indexToScroll, setIndexToScroll] = useState(0);
  const sectionScrollPositions = useRef({});

  useEffect(() => {
    console.log(indexToScroll)
  }, [setIndexToScroll])

  return (
    <main className='no-scrollbar hidden 2xl:block'>
      {/*      <SmoothScroll/> */}

      <Header activeSection={activeSection} setActiveSection={setActiveSection} sectionScrollPositions={sectionScrollPositions} indexToScroll={indexToScroll} setIndexToScroll={setIndexToScroll}/>
    {/*   <Index setActiveSection={setActiveSection} sectionScrollPositions={sectionScrollPositions} /> */}
  {/*   <SlideScroll/> */}
    <SlideScrollTwo setActiveSection={setActiveSection} activeSection={activeSection} indexToScroll={indexToScroll} setIndexToScroll={setIndexToScroll}/>
    </main>
  )
}

export default App