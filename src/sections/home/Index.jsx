'use client';

import React, { useEffect, useRef, useState } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const sectionRefs = useRef([]);
  const scrollContainer = useRef(null);

  // Loader animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".loader-im", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50%, 50%",
    })
      .to(".loader-im", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50%, 50%",
        opacity: 0,
      })
      .to(
        ".mswd",
        {
          opacity: 0,
          scale: 1.1,
          filter: "blur(20px)",
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            setShowContent(true);
          },
        },
        "-=1.2"
      );
  }, []);

  // Scroll-triggered slide logic
  useEffect(() => {
    if (showContent) {
      const sections = sectionRefs.current;

      // Hide all, show first
      gsap.set(sections, { visibility: "hidden", zIndex: 0 });
      gsap.set(sections[0], { visibility: "visible", zIndex: 10 });

      // Create fake scroll height
    //  const totalHeight = sections.length * window.innerHeight;
     gsap.set(scrollContainer.current, {
  height: (sections.length + 1) * window.innerHeight, // add buffer
});

      // Animate which section to show
     sections.forEach((section, i) => {
  console.log(`Setting up ScrollTrigger for section ${i}`, section); // Add this
  ScrollTrigger.create({
    trigger: scrollContainer.current,
    start: () => `${i * window.innerHeight}px top`,
    end: () => `${(i + 1) * window.innerHeight}px top`,
    onEnter: () => {
      console.log(`Entering section ${i}`); // Log this
      gsap.set(sections, { visibility: "hidden", zIndex: 0 });
      gsap.set(section, { visibility: "visible", zIndex: 10 });
    },
    onEnterBack: () => {
      console.log(`Back to section ${i}`); // Log this
      gsap.set(sections, { visibility: "hidden", zIndex: 0 });
      gsap.set(section, { visibility: "visible", zIndex: 10 });
    },
  });
});

    }
  }, [showContent]);

  return (
    <>
      {/* Loader */}
      <div className="fixed w-screen h-screen z-[100] mswd pointer-events-none">
        <img
          src="../assets/images/loader.svg"
          alt=""
          className="w-screen h-full z-10 absolute object-cover loader-im"
          width={1920}
          height={1080}
        />
        <div className="h-full absolute top-0 left-0 w-full bg-amber-50">
          <video
            src="../assets/videos/home.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>

      {/* Main Slides + Scroll Container */}
      {showContent && (
        <>
          {/* Fake Scroll Container */}
          <div ref={scrollContainer} className="relative w-full no-scrollbar" />

          {/* Absolute Sections (slides) */}
          <div className="fixed top-0 left-0 w-full h-screen">
            <div
              ref={(el) => (sectionRefs.current[0] = el)}
              className="absolute top-0 left-0 w-full h-full invisible"
            >
              <SectionOne />
            </div>
            <div
              ref={(el) => (sectionRefs.current[1] = el)}
              className="absolute top-0 left-0 w-full h-full invisible"
            >
              <SectionTwo />
            </div>
            <div
              ref={(el) => (sectionRefs.current[2] = el)}
              className="absolute top-0 left-0 w-full h-full invisible"
            >
              <SectionThree />
            </div>
            <div
              ref={(el) => (sectionRefs.current[3] = el)}
              className="absolute top-0 left-0 w-full h-full invisible"
            >
              <SectionFour />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
