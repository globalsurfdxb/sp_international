import React, { useRef, useState } from 'react'
import HeaderTw from '../../components/HeaderTw'
import SlideScrollFour from '../../sections/home/SlideScrollFour';

const IndexV3 = () => {
   const [activeSection, setActiveSection] = useState("section1");
    const [indexToScroll, setIndexToScroll] = useState(0);
    const sectionScrollPositions = useRef({});
  return (
   <>
    <HeaderTw activeSection={activeSection} setActiveSection={setActiveSection} sectionScrollPositions={sectionScrollPositions} setIndexToScroll={setIndexToScroll}/>
    <SlideScrollFour setActiveSection={setActiveSection} activeSection={activeSection} indexToScroll={indexToScroll} setIndexToScroll={setIndexToScroll}/>
   </>
  )
}

export default IndexV3