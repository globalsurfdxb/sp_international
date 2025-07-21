import React, { useState } from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionFour from './SectionFour'
import SectionThree from './SectionThree'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Index = () => {

  let [showContent, setShowContent] = useState();
  useGSAP(() => {
  const t1 = gsap.timeline();

  // Animate the loader image first
  t1.to(".loader-im", {
    rotate: 10,
    duration: 2,
    ease: "Power4.easeInOut",
    transformOrigin: "50%, 50%",
  })
  .to(".loader-im", {
    scale: 10,
    duration: 2,
    delay: -1.8,
    ease: "Expo.easeInOut",
    transformOrigin: "50%, 50%",
    opacity: 0,
  })
  // Then smoothly animate out the full loader container
  .to('.mswd', {
      opacity: 0,
      scale: 1.1,
      filter: 'blur(20px)',
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        setShowContent(true); // show the rest of the page
      }
    }, '-=1.2');



    
}, []);




 /*  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.to(".loader-im", {
        rotate: 10,
        duration: 2,
        ease: "Power4.easeInOut",
        transformOrigin: "50%, 50%",
    }).to(".loader-im", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50%, 50%",
      opacity: 0,
      onUpdate:  function() {
        if(this.progress() >= 0.9) {
          document.querySelector(".mswd").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }) */
  return (
    <>
      <div className='fixed w-screen h-screen z-[100] mswd pointer-events-none'>
        <img src="../assets/images/loader.svg" alt='' className='w-screen h-full z-10 absolute object-cover loader-im' width={1920} height={1080} />
          <div className='h-full absolute top-0 left-0  w-full bg-amber-50'>
        <video src="../assets/videos/home.mp4" autoPlay loop muted className='w-full h-full object-cover'></video>
      </div>
      </div>
{showContent && (
  <>
<div> <SectionOne /></div>
 <div>  <SectionTwo /></div>
 <div>  <SectionThree /></div>
 <div>  <SectionFour /></div>
</>
 /*  <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
    <div className="snap-start"><SectionOne /></div>
    <div className="snap-start"><SectionTwo /></div>
    <div className="snap-start"><SectionThree /></div>
    <div className="snap-start"><SectionFour /></div>
  </div> */
)}

   
    </>
  )
}

export default Index