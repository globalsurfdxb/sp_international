"use client";

import React, { useState, useEffect } from "react";
import { moveUp } from "../../../motionVarients";
import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import H2Title from "../../common/H2Title";
const WhyChooseSec = ({data}) => {
  const { heading, image, points } = data;
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


  const imageContainerRefTwo = useRef(null);
  const overlayRefTwo = useRef(null);

  useEffect(() => {
    const container = imageContainerRefTwo.current;
    const overlay = overlayRefTwo.current;

    if (!container || !overlay) return;

    // Set initial state - overlay covers the image
    gsap.set(overlay, { scaleX: 1, transformOrigin: 'right' });

    // Create ScrollTrigger animation with scrub
    gsap.to(overlay, {
      scaleX: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full bg-white text-black pt-text30 pb30">

      <div className="container">
      <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}}>
        <H2Title titleText={heading} titleColor="black" marginClass="mb-4 xl:mb-50px"/>
      </motion.div>
        <div className="grid lg:grid-cols-[0.8fr_1fr] 2xl:grid-cols-[1fr_1fr] 3xl:grid-cols-[916px_auto] xl:items-center gap-8 xl:gap-10 3xl:gap-[108px]">
          {/* Left Side - Image */}
          <div className="flex-shrink-0 relative overflow-hidden" ref={imageContainerRefTwo}>
            <img
              src={image}
              alt="Workplace environment"
              className="object-cover w-auto h-[250px] md:h-[300px] g:w-[540px] lg:h-[460px] xl:w-[760px] xl:h-[540px] 2xl:w-full 2xl:h-[660px] 3xl:w-[916px]   l  "
            />
            {/* Overlay that reveals from right to left */}
            <div
              ref={overlayRefTwo}
              className="xl:absolute inset-0 bg-white"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-start w-full">
            <div className="flex flex-col border-t border-b border-black/20 3xl:max-w-[40ch]">
              {points.map((point, index) => {
                const isActive = getIsActive(index);
                return (
                  <motion.div variants={moveUp(0.2*index)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}}
                    key={index}
                    onMouseEnter={() => !isMobile && setHoverIndex(index)}
                    onMouseLeave={() => !isMobile && setHoverIndex(null)}
                    onClick={() => setActiveIndex(index)}
                    className={`relative text-24 xl:text-29 leading-[1.344827586206897] cursor-pointer border-b border-black/20 last:border-b-0 py-5 xl:py-[31px] ${
                      isActive
                        ? "text-black pl-[30px]"
                        : "text-paragraph font-light"
                    }`}
                  >
                    {/* Blue left border (hover on desktop / click on mobile) */}
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 h-[60%] w-[3px] transition-all duration-300 transition-width ${
                        isActive ? "bg-secondary" : "bg-transparent"
                      }`}
                    ></span>
                    <span className={`${isActive ? "scale-110" : ""}`}>
                      {point}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSec;
