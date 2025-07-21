'use client';
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const Header = ({ activeSection, setActiveSection }) => {

const length = activeSection.length
console.log(activeSection[length-1])
const nextSection = sections.find((section) => section.id === `section${parseInt(activeSection[length-1])+1}`);

  console.log(activeSection,nextSection)

  const handleScroll = (sectionId) => {

    const index = sections.findIndex((s) => s.id === sectionId);

  
    if (index !== -1) {
      gsap.to(window, {
        scrollTo: {
          y: index * window.innerHeight + 1,
          autoKill: false, // important if using ScrollTrigger-based logic
        },
        duration: 1,
        ease: "power2.inOut",
      });
    }
  };

   const activeIndex = sections.findIndex((s) => s.id === activeSection);

  return (
    <>
      <div className="fixed top-13 right-38 z-50">
        <div className="flex items-center justify-center bg-black rounded-full p-2 w-11 h-11">
          <img src="/assets/images/search.svg" alt="Search" width={18} height={18} />
        </div>
      </div>

      <header className="fixed top-0 left-0 z-50">
        <div className="flex">
          <div className="flex w-[150px]">
            {activeSection !== "section1" && <nav className="flex flex-col justify-center gap-4">
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
                    onClick={() => handleScroll(section.id)}
                    style={{ opacity }}
                    className={`transition-all duration-300 font-[300] hover:font-[700] text-12 
        ${isActive ? `font-[700] activebfr ${baseColor}` : `nonactivebfr ${baseColor}`}
      `}
                  >
                    {section.label}
                  </a>
                );
              })}

            </nav>}
          </div>

          <div className="bg-primary shadow ml-8 my-12 w-[133px] h-[calc(100vh-100px)]">
            <div className="flex flex-col justify-between h-full pt-10 pb-6">
              <div className="flex justify-center items-center">
                <img src="/assets/images/logo.svg" alt="Logo" width={90} height={55} />
              </div>
              <div className="flex justify-center items-center">
                <img src="/assets/images/menu-crbs.svg" alt="Menu" width={31} height={24} />
              </div>
              <div className="flex flex-col gap-3 justify-center items-center border-t border-[#ffffff20] cursor-pointer" onClick={()=>handleScroll(nextSection.id)}>
                <p className="text-white font-[300] text-[13px] leading-[25px] pt-3">SCROLL DOWN</p>
                <img src="/assets/images/arrowcircle.svg" alt="Arrow" width={87} height={87} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
