'use client';
import React, { useEffect, useState } from "react";

const sections = [
  { id: "section1", label: "SP GROUP" },
  { id: "section2", label: "SPINT" },
  { id: "section3", label: "SERVICES" },
  { id: "section4", label: "PROJECTS" },
  { id: "section5", label: "PEOPLE" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                    activeSection === "section3" || activeSection === "section2"
                      ? "!text-black font-[700] activebfr hover:text-[red]"
                      : "text-white"
                  }`}
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
              <div className="flex flex-col gap-3 justify-center items-center border-t border-[#ffffff20]">
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
