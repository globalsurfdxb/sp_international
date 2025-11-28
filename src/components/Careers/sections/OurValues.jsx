"use client";

import React, { useEffect, useState } from "react";
import { valuesData } from "../data";
import { moveLeft, moveUp, moveRight } from "../../../motionVarients";
import { motion } from "framer-motion";

const ValuesSection = () => {
  const { title, description, image, rightImage } = valuesData;
  const [leftOffset, setLeftOffset] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const updateOffset = () => {
      const container = document.querySelector(".container");
      const isWide = window.innerWidth >= 1024; // lg breakpoint
      setIsWideScreen(isWide);

      if (container) {
        const rect = container.getBoundingClientRect();
        setLeftOffset(rect.left + 15); // small tweak for visual balance
      }
    };

    // Run on mount + resize
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <section className="bg-primary text-white w-full flex flex-col md:flex-row xl:h-[600px] 2xl:h-[656px] overflow-hidden pt-8 pb-10 md:py-0">
      {/* Wrapper */}
      <div className="flex flex-col md:flex-row w-full " style={{ paddingLeft: isWideScreen ? `${leftOffset}px` : undefined }}>
        {/* Left Section */}
        <div className="relative w-full md:w-1/2 flex flex-col justify-center pb-6 md:py-0 overflow-hidden">
          {/* Background SVG (always fixed bottom-right) */}
          <motion.img variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} src={image} alt="background design" className="absolute bottom-0 right-0 pointer-events-none object-contain md:object-cover opacity-90 w-[220px] sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[425px] h-auto " />
          <div className={`relative z-10 ${!isWideScreen ? "container" : ""}`}>
            <motion.h2 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-60 font-light leading-[1.166666666666667] max-w-[390px] mb-[24px] md:mb-[30px]">
              {title}
            </motion.h2>
            <motion.p variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-19 font-light leading-[1.473684210526316] max-w-[550px]">
              {description}
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <motion.div variants={moveLeft(0.6)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="w-full md:w-1/2 h-[260px] sm:h-[340px] md:h-[420px] lg:h-auto px-[15px] md:px-0">
          <img src={rightImage} alt="people" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
