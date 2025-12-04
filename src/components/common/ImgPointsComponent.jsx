"use client";

import React, { useState, useEffect } from "react";
import { moveUp } from "../../motionVarients";
import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import H2Title from "./H2Title";
const ImgPointsComponent = ({ data, bgColor, sectionSpacing }) => {
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
    <section className={`w-full bg-${bgColor} text-black ${sectionSpacing}`}>
      <div className="container">
        <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }}>
          <H2Title titleText={heading} titleColor="black" marginClass="mb-4 lg:mb-8 2xl:mb-[70px]" />
        </motion.div>
        <div className="grid lg:grid-cols-[0.8fr_1fr] 2xl:grid-cols-[1fr_1fr] 3xl:grid-cols-[916px_auto] xl:items-center gap-8 xl:gap-10 3xl:gap-[108px] transition-all duration-300">
          {/* Left Side - Image */}
          <div className="flex-shrink-0 relative overflow-hidden h-full transition-all duration-300" ref={imageContainerRefTwo}>
            <img src={image} alt="Workplace environment" className="object-cover w-full h-[250px] md:h-full   transition-all duration-300" />
            {/* Overlay that reveals from right to left */}
            <div ref={overlayRefTwo} className="xl:absolute inset-0 bg-white" />
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-start w-full transition-all duration-300">
            <div className="flex flex-col border-t border-b border-black/20 3xl:max-w-[50ch]">
              {points.map((point, index) => {
                const isActive = getIsActive(index);
                return (
                  <motion.div variants={moveUp(0.2 * index)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }}
                    key={index}
                    onMouseEnter={() => !isMobile && setHoverIndex(index)}
                    onMouseLeave={() => !isMobile && setHoverIndex(null)}
                    onClick={() => setActiveIndex(index)}
                    className="border-b border-black/20 last:border-b-0 py-5 xl:pt-[32px] xl:pb-[31px] last:xl:pb-[22px] pr-2"
                  >
                    <div
                      className={`relative text-24 2xl:text-29   leading-[1.34] cursor-pointer select-none transition-all duration-300 ${isActive ? "text-black font-bold" : "text-paragraph font-normal"}`}
                    >
                      {/* Animate-in left border without pushing layout */}
                      <span
                        className={`absolute left-0 top-0 h-full w-[3px] transition-transform duration-300 ${isActive || hoverIndex === index ? "bg-secondary scale-y-100" : "bg-transparent scale-y-0"}`}
                        style={{ transformOrigin: "top" }}
                      ></span>

                      {/* Animate movement visually instead of padding */}
                      <span
                        className={`   inline-block transition-transform duration-300 max-w-[95%] ${isActive || hoverIndex === index
                            ? "translate-x-[20px] xl:translate-x-[43px]"
                            : "translate-x-0"
                          }`}
                      >
                        {point}
                      </span>
                    </div>

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

export default ImgPointsComponent;
