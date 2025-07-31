'use client';
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: "section1", label: "" },
  { id: "section2", label: "SP GROUP" },
  { id: "section3", label: "SPINT" },
  { id: "section4", label: "SERVICES" },
  { id: "section5", label: "PROJECTS" },
  { id: "section6", label: "PEOPLE" },
];

const HeaderTw = ({ activeSection, setActiveSection,setIndexToScroll }) => {

const headerRef = useRef(null);
const navItemsRef = useRef([]);
navItemsRef.current = [];

const addToNavRefs = (el) => {
  if (el && !navItemsRef.current.includes(el)) {
    navItemsRef.current.push(el);
  }
};

useGSAP(() => {
  const tl = gsap.timeline();

  // .bxone initial animation
  tl.fromTo(".bxone", {
    height: '0%',
  }, {
    height: '100%',
    duration: 1,
    delay: 3.5,
    ease: "Power3.easeInOut",
  });

  // .bxtwo jump-style animation
  gsap.set(".bxtwo", {
    height: "20%",
    y: "100%",
  });

  tl.to(".bxtwo", {
    y: "-10%",
    duration: 0.5,
    ease: "back.out(1.7)",
  })
  .to(".bxtwo", {
    y: "0%",
    duration: 0.3,
    ease: "power2.out",
  })
  .to(".bxtwo", {
    height: "100%",
    duration: 1,
    ease: "power2.inOut",
  });

  // Continue your timeline
  tl.fromTo(".logsc", {
    opacity: 0,
    y: 10,
  }, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "back.inOut(1)",
  });

  tl.fromTo(".mnsc", {
    opacity: 0,
    scale: 1.1,
  }, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    delay: '-=0.5', // relative overlap
    ease: "power3.easeInOut",
  });

  tl.fromTo(".scrlldwn", {
    opacity: 0,
    y: -10,
  }, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power3.easeInOut",
  });

  tl.fromTo(".arcrcl", {
    rotate: '180deg',
  }, {
    rotate: 0,
    duration: 1,
    ease: "Power3.easeInOut",
  });

}, []);

  

const length = activeSection.length
console.log(activeSection[length-1])
const nextSection = sections.find((section) => section.id === `section${parseInt(activeSection[length-1])+1}`);
const scrollStep = 600;

  const handleScroll = (sectionId) => {
    console.log("clicked")
    console.log(sectionId)
    switch (sectionId) {
      case "section2":
        setIndexToScroll(1);
        break;
      case "section3":
        setIndexToScroll(2);
        break;
      case "section4":
        setIndexToScroll(3);
        break;
    }

    const index = sections.findIndex((s) => s.id === sectionId);

  
    // if (index !== -1) {
    //   console.log(index * scrollStep)
    //   gsap.to(window, {
    //     scrollTo: {
    //       y: (index * scrollStep) + 1,
    //       autoKill: false, // important if using ScrollTrigger-based logic
    //     },
    //     duration: 1,
    //     ease: "power2.inOut",
    //   });
    // }
  };

   const activeIndex = sections.findIndex((s) => s.id === activeSection);

  return (
    <>
   <div className="fixed top-13 right-38 z-50">
        <div className='flex gap-8 items-center'>
          <div className='flex gap-2'>
            <a href="#">
              <div className='flex items-center justify-center z-[1]  cursor-pointer relative  h-[31px] bg-[#00000040] rounded-[15px]'>
                <img src="../assets/images/grbdr.svg" alt="Logo" className="absolute w-full h-full" width={18} height={31} />
                <p className='mb-0 text-white font-[300] text-[16px] px-5'>العربية</p>
              </div>
            </a>
            <a href="#">
              <div className='flex items-center justify-center z-[1]  cursor-pointer relative  h-[31px] bg-[#00000040] rounded-[15px]'>
                <img src="../assets/images/grbdr.svg" alt="Logo" className="absolute w-full h-full" width={18} height={31} />
                <p className='mb-0 text-white font-[300] text-[16px] px-4'>HRMS</p>
              </div>
            </a>
          </div>
          <div className="flex items-center justify-center bg-black rounded-full p-2 w-11 h-11">
            <img src="../assets/images/search.svg" alt="Logo" width={18} height={18} />
          </div>
        </div>
      </div>

      <header className="fixed top-0 left-0 z-50">
        <div className="flex">
          <div className="flex w-[150px] h-screen">
            {activeSection !== "section1" && 
            <nav className="flex flex-col justify-center gap-4 opacity-0">
              {sections.map((section, index) => {
                const activeIndex = sections.findIndex((s) => s.id === activeSection);
                const distance = Math.abs(index - activeIndex);
                const opacity = Math.max(1 - distance * 0.3, 0.1);

                const isActive = activeSection === section.id;
                const isBlackTheme = ["section3", "section4"].includes(activeSection);

                const baseColor = isBlackTheme ? "text-black hover:text-red" : "text-white hover:text-white";

                return (
               <a
  key={section.id}

  href={`#${section.id}`}
  onClick={(e) => {
    e.preventDefault();
    console.log("click is happening")
    handleScroll(section.id)
  }}
  style={{ opacity }}
  className={`transition-all duration-300 font-[300] hover:font-[700] text-12 z-1000
  ${isActive ? `font-[700] activebfr ${baseColor}` : `nonactivebfr ${baseColor}`}`}
>
                    {section.label}
                  </a>
                );
              })}

            </nav>} 
          </div>
            <div className="left-spacing fixed ">
          <div ref={headerRef} className=" shadow ml-0 my-12 w-[125px] 3xl:w-[133px] h-[calc(100vh-100px)] relative">
            <div className="bg-transparent  w-full absolute z-[-2] bxone"></div>
            <div className="bg-primary h-[20%] w-full absolute z-[-1] bottom-0 bxtwo"></div>
            <div className="flex flex-col justify-between h-full pt-10 pb-6 z-10 w-full">
              <div className="flex justify-center items-center">
                <img className="logsc" src="/assets/images/logo.svg" alt="Logo" width={90} height={55} />
              </div>
              <div className="flex justify-center items-center ">
                <img src="/assets/images/menu-crbs.svg" className="mnsc" alt="Menu" width={31} height={24} />
              </div>
              <div className="flex flex-col gap-3 justify-center items-center border-t border-[#ffffff20] cursor-pointer scrlldwn" onClick={()=>handleScroll(nextSection.id)}>
                <p className="text-white font-[300] text-[13px] leading-[25px] pt-3">SCROLL DOWN</p>
                {/* <img src="/assets/images/round-arrow-down-menu.svg" alt="Arrow" width={87} height={87} /> */}
                <div className="flex items-center relative group">
                  <img src="/assets/images/round-circle.svg" alt="Arrow"  width={87} height={87} />
                  <img src="/assets/images/arrow-down.svg" alt="Arrow" className="arcrcl" width={35} height={35} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0
               group-hover:scale-110 transition-transform duration-300 ease-in-out
               animate-[scaleFade_0.8s_ease-out_forwards] [animation-delay:1.5s]" />
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderTw;
