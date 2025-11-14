import React, { useRef, useState } from 'react'
import HeaderTwbackup from '../../components/HeaderTwbackup'
import SlideScrollThreebackup from '../../sections/home/SlideScrollThreebackup'

const IndexV2 = () => {
   const [activeSection, setActiveSection] = useState("section1");
    const [indexToScroll, setIndexToScroll] = useState(0);
    const sectionScrollPositions = useRef({});
  return (
   <>
    <HeaderTwbackup activeSection={activeSection} setActiveSection={setActiveSection} sectionScrollPositions={sectionScrollPositions} setIndexToScroll={setIndexToScroll}/>
    <SlideScrollThreebackup setActiveSection={setActiveSection} activeSection={activeSection} indexToScroll={indexToScroll} setIndexToScroll={setIndexToScroll}/>
    
   </>
  )
}

export default IndexV2