import React, { useRef } from 'react'
import Header from '../../components/Header'
import { useState } from 'react'
import SlideScrollTwo from '../../sections/home/SlideScrollTwo'

const Home = () => {
    const [activeSection, setActiveSection] = useState("section1");
  const [indexToScroll, setIndexToScroll] = useState(0);
  const sectionScrollPositions = useRef({});
  return (
   <>
    <Header activeSection={activeSection} setActiveSection={setActiveSection} sectionScrollPositions={sectionScrollPositions} setIndexToScroll={setIndexToScroll}/>
    {/*   <Index setActiveSection={setActiveSection} sectionScrollPositions={sectionScrollPositions} /> */}
  {/*   <SlideScroll/> */}
    <SlideScrollTwo setActiveSection={setActiveSection} activeSection={activeSection} indexToScroll={indexToScroll} setIndexToScroll={setIndexToScroll}/>
   </>
  )
}

export default Home