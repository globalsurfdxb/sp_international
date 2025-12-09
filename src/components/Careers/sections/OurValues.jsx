"use client";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useState, useRef } from "react";
import { valuesData } from "../data";
import { moveLeft, moveUp, moveRight } from "../../../motionVarients";
import { motion, useScroll, useTransform,  } from "framer-motion";
import H2Title from "../../../components/common/H2Title";

const ValuesSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // < 768
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // 768 - 1023
  const imageOffset = isMobile ? [-30, 30] : isTablet ? [-80, 80] : [-150, 150];
  const shapeOffset = isMobile ? [-50, 50] : isTablet ? [-100, 100] : [-200, 200];
  const { title, description, image, rightImage } = valuesData;
  const [leftOffset, setLeftOffset] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(false);

  const sectionRef = useRef(null);
    const imageContainerRefTwo = useRef(null);
  
    // Parallax for main image container
    const { scrollYProgress: imageProgress } = useScroll({
      target: imageContainerRefTwo,
      offset: ["start end", "end start"]
    });
    const imageY = useTransform(imageProgress, [0, 1], imageOffset);
  
    // Parallax for shape
    const { scrollYProgress: shapeProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    });
    const shapeY = useTransform(shapeProgress, [0, 1], shapeOffset);

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
    <section className="bg-primary text-white w-full flex flex-col md:flex-row xl:h-[600px] 2xl:h-[656px] overflow-hidden pt-8 pb-10 md:py-0" ref={sectionRef}>
      {/* Wrapper */}
      <div className="flex flex-col md:flex-row w-full " style={{ paddingLeft: isWideScreen ? `${leftOffset}px` : undefined }}>
        {/* Left Section */}
        <div className="relative w-full md:w-1/2 flex flex-col justify-center pb-6 md:py-0 overflow-hidden">
          {/* Background SVG (always fixed bottom-right) */}
          <motion.img style={{ y: shapeY }} variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} src={image} alt="background design" className="absolute bottom-0 right-0 pointer-events-none object-contain md:object-cover opacity-90 w-[220px] sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[425px] h-auto " />
          <div className={`relative z-10 ${!isWideScreen ? "container" : ""}`}>
            {/* <motion.h2 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-60 font-light leading-[1.166666666666667] max-w-[390px] mb-[24px] md:mb-[30px]">
              {title}
            </motion.h2> */}
            <H2Title titleText={title} marginClass={"mb-[24px] md:mb-[30px]"}/>
            <motion.p variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-19 font-light leading-[1.473684210526316] max-w-[550px]">
              {description}
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <motion.div variants={moveLeft(0.6)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="w-full md:w-1/2 h-[260px] sm:h-[340px] md:h-[420px] lg:h-[90dvh] px-[15px] md:px-0 relative overflow-hidden" ref={imageContainerRefTwo}>
          <motion.img style={{y:imageY}} src={rightImage} alt="people" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
