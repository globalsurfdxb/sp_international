"use client";

import React, { useState, useEffect } from "react";
import { workplaceData } from "../data";

const WorkplaceSection = () => {
  const { heading, image, points } = workplaceData;
  const [activeIndex, setActiveIndex] = useState(null); // selected item
  const [hoverIndex, setHoverIndex] = useState(null); // hovered item
  const [isMobile, setIsMobile] = useState(false);

  // detect screen size to determine mobile vs desktop behavior
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1023px)").matches); // below xl breakpoint
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // logic to determine active state
  const getIsActive = (index) =>
    isMobile
      ? activeIndex === index // on mobile: only clicked item
      : hoverIndex === index || (hoverIndex === null && activeIndex === index); // on desktop: hover or clicked

  return (
    <section className="w-full bg-white text-black py-8 md:py-17 xl:py-22 2xl:py-30">
      <h1 className="text-60 container font-light mb-[50px] leading-[1.166666666666667]">
        {heading}
      </h1>

      <div className="container">
        <div className="flex flex-col xl:flex-row items-center gap-10 2xl:gap-[108px]">
          {/* Left Side - Image */}
          <div className="flex-shrink-0">
            <img
              src={image}
              alt="Workplace environment"
              className="object-cover 2xl:w-[916px] 2xl:h-[660px] xl:w-[760px] xl:h-[540px] lg:w-[640px] lg:h-[460px] md:w-[540px] md:h-[380px] w-full h-auto"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-start">
            <div className="flex flex-col border-t border-b border-black/20 lg:max-w-[40ch]">
              {points.map((point, index) => {
                const isActive = getIsActive(index);
                return (
                  <div
                    key={index}
                    onMouseEnter={() => !isMobile && setHoverIndex(index)}
                    onMouseLeave={() => !isMobile && setHoverIndex(null)}
                    onClick={() => setActiveIndex(index)}
                    className={`relative  text-24 lg:text-29 leading-[1.344827586206897] cursor-pointer transition-all duration-300 border-b border-black/20 last:border-b-0 py-[31px] ${
                      isActive
                        ? "text-black font-bold pl-[30px]"
                        : "text-paragraph font-light"
                    }`}
                  >
                    {/* Blue left border (hover on desktop / click on mobile) */}
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[3px] transition-all duration-300 ${
                        isActive ? "bg-secondary" : "bg-transparent"
                      }`}
                    ></span>
                    {point}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkplaceSection;
