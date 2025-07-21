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

const Index = ({ setActiveSection }) => {
  const [showContent, setShowContent] = useState(false);

  // Two refs: DOM refs + component refs
  const sectionDOMRefs = useRef([]);
  const sectionComponentRefs = useRef([]);
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
      const sections = sectionDOMRefs.current;

      // Hide all, show first
      gsap.set(sections, { visibility: "hidden", zIndex: 0, ease: "Power2.easeInOut" });
      gsap.set(sections[0], { visibility: "visible", zIndex: 10, ease: "Power2.easeInOut" });

      // Create fake scroll height
      gsap.set(scrollContainer.current, {
        height: (sections.length + 1) * window.innerHeight,
      });

      // Animate which section to show
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: scrollContainer.current,
         /*  markers: true, */
          start: () => {
            console.log(`${i * window.innerHeight}px`);
            return `${i * window.innerHeight}px top`;
          },
          end: () => `${(i + 1) * window.innerHeight}px top`,
          onEnter: () => {
            gsap.set(sections, { visibility: "hidden", zIndex: 0 });
            gsap.set(section, { visibility: "visible", zIndex: 10 });

            if (sectionComponentRefs.current[i]?.playAnimations) {
              sectionComponentRefs.current[i].playAnimations();
            }
          },
          onEnterBack: () => {
            gsap.set(sections, { visibility: "hidden", zIndex: 0 });
            gsap.set(section, { visibility: "visible", zIndex: 10 });

            if (sectionComponentRefs.current[i]?.playAnimations) {
              sectionComponentRefs.current[i].playAnimations();
            }
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

      {showContent && (
        <>
          <div ref={scrollContainer} className="relative w-full no-scrollbar" />

          <div className="fixed top-0 left-0 w-full h-screen">
            <div
              ref={(el) => (sectionDOMRefs.current[0] = el)}
              className="absolute top-0 left-0 w-full h-full invisible"
            >
              <SectionOne ref={(ref) => (sectionComponentRefs.current[0] = ref)}/>
            </div>

            <div
              ref={(el) => (sectionDOMRefs.current[1] = el)}
              className="absolute top-0 left-0 w-full h-full invisible"
            >
              <SectionTwo
                ref={(ref) => (sectionComponentRefs.current[1] = ref)}
              />
            </div>

            <div
              ref={(el) => (sectionDOMRefs.current[2] = el)}
              className="absolute top-0 left-0 w-full h-full invisible"
            >
              <SectionThree
                ref={(ref) => (sectionComponentRefs.current[2] = ref)}
              />
            </div>

            <div
              ref={(el) => (sectionDOMRefs.current[3] = el)}
              className="absolute top-0 left-0 w-full h-full invisible"
            >
              <SectionFour
                ref={(ref) => (sectionComponentRefs.current[3] = ref)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
