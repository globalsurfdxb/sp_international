"use client";

import React, { useEffect, useState } from "react";
import { empowerData } from "../data";

const EmpowerSection = () => {
  const { svgSrc, heading, description, stats } = empowerData;
  const [rightPadding, setRightPadding] = useState(0);

  useEffect(() => {
    const updatePadding = () => {
      // only calculate padding for smaller screens
      if (window.innerWidth < 1280) {
        const container = document.createElement("div");
        container.classList.add("container");
        document.body.appendChild(container);

        const containerRect = container.getBoundingClientRect();
        setRightPadding(window.innerWidth - containerRect.right);

        container.remove();
      } else {
        // reset padding for xl and above
        setRightPadding(0);
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  return (
    <section
      className="w-full bg-primary text-white lg:max-h-[611px] lg:overflow-hidden py-10 lg:py-0"
      style={{
        paddingRight: rightPadding > 0 ? `${rightPadding}px` : undefined,
      }}
    >
      {/* Below XL: custom padding; XL and up: container */}
      <div
        className={
          rightPadding > 0
            ? "flex flex-col xl:flex-row gap-x-[170px]"
            : "container mx-auto flex flex-col xl:flex-row gap-x-[170px]"
        }
      >
        {/* Left SVG */}
        <div className="hidden xl:block pt-[62px] flex-shrink-0">
          <img
            src={svgSrc}
            alt="logo-svg"
            className="2xl:w-[394px] 2xl:h-[549px] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full flex flex-col justify-center">
          <h2 className="text-60 leading-[1.1666666667] font-light mb-[30px] max-w-[20ch]">
            {heading}
          </h2>

          <p className="text-19 text-white font-light leading-[1.4736842105] mb-[62px] max-w-[72ch]">
            {description}
          </p>

          {/* Stats */}
          <div className="relative flex flex-col xl:flex-row w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-start text-left gap-[20px] xl:gap-[54px] min-w-[290px] mb-10 xl:mb-0"
              >
                <h3 className="text-[32px] sm:text-[36px] md:text-[38px] xl:text-[40px] leading-[1] font-light">
                  {stat.value}
                </h3>

                {/* Mobile Divider */}
                <div className="xl:hidden border-b border-white/30 w-full" />

                <p className="text-[16px] sm:text-[17px] md:text-[18px] xl:text-[19px] text-white/70 leading-[1.5]">
                  {stat.label}
                </p>
              </div>
            ))}

            {/* Desktop Full Divider */}
            <div className="hidden xl:block absolute left-0 top-[27px] w-full h-[1px] bg-white/40 my-[20px] sm:my-[24px] xl:my-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
