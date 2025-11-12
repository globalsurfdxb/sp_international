"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cultureData } from "../data";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CultureSection = () => {
  const { title, description, buttonText, backgroundImage } = cultureData;

  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);
  const clipPathRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const overlay = overlayRef.current;
    const clipPath = clipPathRef.current;

    if (!section || !content || !overlay || !clipPath) return;

    // Set initial states
    gsap.set(content, { opacity: 0, y: 50 });
    gsap.set(overlay, { scaleX: 1, transformOrigin: "left" });
    gsap.set(clipPath, {
      clipPath: "inset(0% 100% 0% 0%)",
    });

    // Create timeline with scrub
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "top 20%",
        scrub: 1,
      }
    });

    // Animate clip path to reveal image with a modern wipe effect
    tl.to(clipPath, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1,
      ease: "power2.inOut"
    })
      // Fade out the overlay
      .to(overlay, {
        scaleX: 0,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.5")
      // Fade in and slide up content
      .to(content, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="container py-8 md:py-17 xl:py-22 2xl:py-30">
      <div
        className="relative w-full h-[420px] xl:h-[490px] overflow-hidden flex items-center"
      >
        {/* Background image with clip path reveal */}
        <div
          ref={clipPathRef}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 7.22%, rgba(0, 0, 0, 0) 74.6%), url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay for additional reveal effect */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"
          style={{ transformOrigin: "left" }}
        />

        {/* Content */}
        <div ref={contentRef} className="relative z-10 text-white px-6 sm:px-10 md:px-14 lg:px-[100px]">
          <h2 className="text-48 lg:text-60 font-light leading-[1.166666666666667] mb-6 xl:mb-[30px] lg:max-w-[500px]">
            {title}
          </h2>
          <p className="text-18 md:text-19 font-light leading-[1.473684210526316] max-w-[660px] mb-[24px] xl:mb-[30px]">
            {description}
          </p>
          {/* Button with centered text over SVG */}
          <button className="relative inline-flex items-center justify-center">
            <img
              src="/assets/images/careers/partofus/btn-svg.svg"
              alt="button"
              className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-auto"
            />
            <span className="absolute text-white font-light uppercase text-12 md:text-14 lg:text-16 leading-[1.75]">
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;