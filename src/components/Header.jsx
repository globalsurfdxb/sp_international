'use client';
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: "section1", label: "SP GROUP" },
  { id: "section2", label: "SPINT" },
  { id: "section3", label: "SERVICES" },
  { id: "section4", label: "PROJECTS" },
  { id: "section5", label: "PEOPLE" },
];

const Header = ({ activeSection, setActiveSection }) => {


  // useEffect(() => {
  //   if (!activeSection) return;

  //   console.log("Scroll container:", document.scrollingElement);
  
  //   const element = document.getElementById(`${activeSection}`);
  //   console.log("Element:", element);
  //   if (element) {
  //     window.scrollTo({
  //       top: element.offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [activeSection]);

const length = activeSection.length
console.log(activeSection[length-1])
const nextSection = sections.find((section) => section.id === `section${parseInt(activeSection[length-1])+1}`);

  console.log(activeSection,nextSection)

  const handleScroll = (sectionId) => {
    const trigger = ScrollTrigger.getAll().find(t =>
      t.trigger?.id === "scroll-container" && t.start.includes(sectionId)
    );
  
    const index = sections.findIndex((s) => s.id === sectionId);
    const scrollY = index * window.innerHeight;

  
    gsap.to(window, {
      scrollTo: scrollY,
      duration: 1,
      ease: "power2.inOut",
    });
  };

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
            <nav className="flex flex-col justify-center gap-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`transition-colors font-[300] ${
                    activeSection === section.id
                      ? "text-white font-[700] activebfr"
                      : "nonactivebfr hover:text-white hover:font-[700]"
                  } ${
                    activeSection === "section3" || activeSection === "section4"
                      ? "!text-black font-[700] activebfr hover:text-[red]"
                      : "text-white"
                  }`}
                onClick={()=>handleScroll(section.id)}
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="bg-primary shadow ml-8 my-12 w-[133px] h-[calc(100vh-100px)]">
            <div className="flex flex-col justify-between h-full pt-10 pb-6">
              <div className="flex justify-center items-center">
                <img src="/assets/images/logo.svg" alt="Logo" width={90} height={55} />
              </div>
              <div className="flex justify-center items-center">
                <img src="/assets/images/menu-crbs.svg" alt="Menu" width={31} height={24} />
              </div>
              <div className="flex flex-col gap-3 justify-center items-center border-t border-[#ffffff20]" onClick={()=>handleScroll(nextSection.id)}>
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
