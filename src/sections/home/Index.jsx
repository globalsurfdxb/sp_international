"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

const Index = ({ setActiveSection }) => {
  const [showContent, setShowContent] = useState(false);

  // Two refs: DOM refs + component refs
  const sectionDOMRefs = useRef([]);
  const sectionComponentRefs = useRef([]);
  const scrollContainer = useRef(null);

  const polygon1Ref = useRef(null);
  const polygon2Ref = useRef(null);

/*   useEffect(() => {
    gsap.fromTo(
      polygon1Ref.current,
      { drawSVG: "0%" },
      { drawSVG: "-100%", duration: 1.5, ease: "power1.inOut" }
    );

    gsap.fromTo(
      polygon2Ref.current,
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 1.5, ease: "power1.inOut" }
    );
  }, []); */

  // Loader animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      polygon1Ref.current,
      { drawSVG: "0%" },
      { drawSVG: "-100%", duration: 1.5, ease: "power1.inOut" }
    )

    .fromTo(
      polygon2Ref.current,
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 1.5, delay: -1.5, ease: "power1.inOut" }
    )

    .to(".ovrlywht", {
      opacity: 0,
      duration: 0.5,
      delay: 0,
      ease: "Power2.easeInOut",
    })
    .fromTo(
      polygon1Ref.current,
      { drawSVG: "-100%" },
      { drawSVG: "0%", duration: .5, ease: "power1.inOut" }
    )
      .fromTo(
      polygon2Ref.current,
      { drawSVG: "100%" },
      { drawSVG: "0%", duration: .5, delay: -.5, ease: "power1.inOut" }
    )
    .to(".loader-im", {
      rotate: 0,
      duration: 1,
      delay: 1.1,
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
          filter: "blur(0px)",
          duration: 0,
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
      const scrollStep = 300;
      const scrollHeight = Math.max(
        (sections.length + 1) * scrollStep,
        window.innerHeight * sections.length
      );

      // Hide all, show first
      gsap.set(sections, { visibility: "hidden", zIndex: 0 });
      gsap.set(sections[0], { visibility: "visible", zIndex: 10 });

      // Create fake scroll height
      gsap.set(scrollContainer.current, {
        height: scrollHeight,
      });

      // Animate which section to show
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: scrollContainer.current,
          /*  markers: true, */
          start: () => {
            console.log(i * scrollStep);
            return `${i * scrollStep}px top`;
          },
          end: () => `${(i + 1) * scrollStep}px top`,
          onEnter: () => {
            gsap.set(sections, { visibility: "hidden", zIndex: 0 });
            gsap.set(section, { visibility: "visible", zIndex: 10 });
            setActiveSection(`section${i + 1}`);

            if (sectionComponentRefs.current[i]?.playAnimations) {
              sectionComponentRefs.current[i].playAnimations();
            }
          },
          onEnterBack: () => {
            gsap.set(sections, { visibility: "hidden", zIndex: 0 });
            gsap.set(section, { visibility: "visible", zIndex: 10 });
            setActiveSection(`section${i + 1}`);

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
      <div className="fixed w-screen h-screen z-[100] mswd pointer-events-none grid content-center load-sec">
       
        <svg
          className="w-[500px] h-[500px] absolute left-0 right-0 z-20"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 151 106.8"
        >
          <defs>
            <style></style>
          </defs>
          <polygon
            ref={polygon1Ref}
            class="st0"
            points="75.6 .5 75.6 20.3 128.1 49 128.5 49.3 129 49.5 129.6 49.8 130.1 50.1 130.7 50.4 131.2 50.7 131.4 50.8 131.6 51 131.8 51.1 132 51.3 132.1 51.4 132.2 51.5 132.4 51.6 132.5 51.8 132.6 51.9 132.7 52.1 132.7 52.2 132.8 52.4 132.9 52.5 132.9 52.7 133 52.9 133 53.1 133 53.3 133.1 53.5 133.1 53.7 133.1 53.9 133.1 54.3 133.1 54.6 133.1 54.9 133.1 55.2 133.1 55.5 133.1 55.8 133.1 56.3 133 56.8 133 57 133 57.1 132.9 57.3 132.9 57.4 132.8 57.6 132.7 57.7 132.6 57.9 132.5 58 132.3 58.1 132.2 58.2 132 58.2 131.8 58.3 131.6 58.3 131.4 58.3 131.1 58.2 130.9 58.2 90.7 40.6 90 40.3 89.3 40 88.6 39.8 87.9 39.6 87.2 39.4 86.6 39.2 86 39.1 85.4 38.9 84.8 38.9 84.3 38.8 83.8 38.8 83.3 38.8 82.8 38.8 82.3 38.8 81.9 38.9 81.5 39.1 81.1 39.2 80.8 39.4 80.4 39.6 80.1 39.9 79.8 40.2 79.5 40.5 79.3 40.9 79.1 41.4 78.9 41.8 78.7 42.3 78.5 42.9 78.4 43.4 78.3 44.1 78.2 44.7 78.2 45.4 78.1 46.2 78.2 80.4 78.2 82.1 78.2 82.5 78.2 82.9 78.2 83.2 78.2 83.5 78.2 83.9 78.3 84.2 78.3 84.5 78.4 84.7 78.5 85 78.5 85.3 78.6 85.5 78.7 85.7 78.8 86 78.9 86.2 79 86.3 79.1 86.5 79.2 86.7 79.4 86.9 79.5 87 79.6 87.2 79.9 87.5 80.1 87.7 80.4 87.9 80.7 88.2 81 88.4 81.3 88.5 95.5 97.4 95.5 64.8 95.5 64.3 95.6 63.7 95.6 63.4 95.6 63.1 95.7 62.8 95.8 62.5 95.8 62.4 95.9 62.3 96 62.1 96 62 96.1 62 96.2 61.9 96.3 61.8 96.5 61.8 96.6 61.7 96.8 61.7 96.9 61.7 97.1 61.7 97.3 61.7 97.5 61.8 97.8 61.8 98 61.9 138.1 77.4 139.1 77.8 140 78.1 140.8 78.3 141.5 78.5 142.2 78.7 142.8 78.8 143.3 78.8 143.8 78.8 144.3 78.8 144.7 78.8 145.1 78.7 145.4 78.7 145.7 78.6 146 78.5 146.3 78.4 146.6 78.2 146.8 78.1 147 78 147.2 77.9 147.4 77.7 147.5 77.6 147.7 77.4 147.9 77.2 148 77.1 148.2 76.9 148.3 76.7 148.5 76.5 148.6 76.2 148.8 76 148.9 75.8 149 75.5 149.1 75.3 149.3 75 149.4 74.8 149.5 74.5 149.6 74.2 149.7 73.9 149.8 73.6 149.8 73.3 149.9 73 150.1 72.3 150.2 71.7 150.2 70.9 150.3 70.2 150.3 69 150.4 67.8 150.4 66.5 150.5 65.2 150.5 63.9 150.5 62.6 150.5 61.3 150.5 60 150.5 58.6 150.5 57.3 150.4 56 150.4 54.7 150.4 53.4 150.4 52.2 150.3 50.9 150.3 49.7 150.3 49.2 150.2 48.6 150.2 48 150.1 47.5 150 47 149.9 46.4 149.8 45.9 149.7 45.4 149.6 45 149.4 44.5 149.3 44 149.1 43.6 148.9 43.1 148.7 42.7 148.5 42.3 148.3 41.9 148.1 41.5 147.8 41.1 147.6 40.8 147.3 40.4 147.1 40.1 146.8 39.8 146.5 39.5 146.2 39.2 145.9 38.9 145.6 38.6 145.3 38.4 145 38.2 144.7 37.9 144.3 37.7 144 37.5 143.6 37.4 140 35.4 136.2 33.3 132.2 31.1 128.1 28.9 123.8 26.6 119.5 24.2 115.1 21.8 110.6 19.4 106.2 17 101.6 14.6 97.2 12.1 92.7 9.7 88.3 7.3 84 5 79.8 2.7 75.6 .5"
          />
          <polygon
            ref={polygon2Ref}
            class="st1"
            points="75.6 .5 11.9 36.5 11.4 36.9 10.9 37.2 10.4 37.6 9.9 37.9 9.4 38.3 8.8 38.7 8.3 39 7.7 39.4 6.9 40 6.1 40.6 5.7 40.9 5.3 41.2 5 41.6 4.6 41.9 4.3 42.2 4 42.6 3.6 42.9 3.4 43.3 3.1 43.7 2.8 44.1 2.6 44.5 2.4 44.9 2.1 45.4 1.9 45.9 1.7 46.4 1.5 46.9 1.4 47.4 1.3 47.9 1.1 48.5 1 49 .9 49.6 .9 50.1 .8 50.7 .8 51.2 .7 51.8 .7 52.3 .7 52.9 .7 53.5 .7 54.5 .7 55.6 .7 56.7 .7 57.8 .7 58.9 .7 60 .7 61.1 .7 62.2 .7 63.3 .7 64.3 .7 65.4 .7 66.4 .7 67.4 .7 68.4 .7 69.4 .7 70.4 .7 71.3 .7 72.1 .7 72.9 .8 73.6 .8 74.3 .9 75 .9 75.3 1 75.6 1.1 75.8 1.1 76.1 1.2 76.4 1.3 76.6 1.3 76.9 1.4 77.1 1.5 77.3 1.6 77.5 1.8 77.7 1.9 77.8 2 78 2.2 78.1 2.3 78.3 2.5 78.4 2.7 78.5 2.9 78.6 3.1 78.7 3.3 78.8 3.6 78.9 3.9 79 4.3 79 4.6 79.1 5.1 79.1 5.5 79.1 5.9 79.1 6.4 79.1 6.9 79.1 7.5 79 8.1 78.9 8.7 78.8 9.3 78.7 9.9 78.5 10.6 78.3 11.3 78.1 53.1 61.7 53.6 61.5 53.9 61.4 54.3 61.3 54.6 61.2 54.7 61.2 54.9 61.2 55 61.2 55.1 61.2 55.3 61.2 55.4 61.3 55.5 61.3 55.6 61.3 55.7 61.4 55.8 61.4 55.8 61.5 55.9 61.6 55.9 61.7 56 61.8 56.1 61.9 56.1 62 56.2 62.2 56.2 62.4 56.2 62.8 56.2 63.1 56.2 66.6 56.2 66.8 56.2 67 56.1 67.2 56.1 67.3 56 67.4 55.9 67.5 55.8 67.7 55.8 67.8 55.6 67.9 55.5 68 55.4 68.1 55.2 68.1 54.9 68.3 54.6 68.4 54.2 68.6 53.8 68.7 53.4 68.9 53 69.1 52.6 69.2 52.2 69.4 51.8 69.5 51.4 69.7 .5 87.8 .5 106.3 65.5 86.3 66.3 85.9 67 85.6 67.7 85.3 68.3 84.9 68.9 84.6 69.4 84.2 69.9 83.8 70.3 83.4 70.7 83 71 82.6 71.4 82.2 71.6 81.8 71.9 81.3 72.1 80.9 72.3 80.4 72.5 80 72.6 79.5 72.7 79.1 72.8 78.7 72.9 78.2 73 77.8 73.1 77.3 73.1 76.9 73.1 76.5 73.2 75.7 73.2 74.9 73.2 74.1 73.3 73.4 73.3 49.1 73.3 47.9 73.3 46.9 73.2 45.9 73 45 72.8 44.2 72.6 43.4 72.3 42.7 72 42.1 71.7 41.6 71.3 41 70.9 40.6 70.5 40.2 70 39.9 69.5 39.6 69 39.4 68.5 39.2 68 39 67.4 38.9 66.9 38.8 66.4 38.8 65.8 38.8 65.3 38.8 64.7 38.8 64.2 38.9 63.7 39 63.2 39.1 62.7 39.2 62.3 39.4 61.8 39.5 61.4 39.6 61 39.8 60.7 39.9 20.1 58.4 19.8 58.4 19.5 58.5 19.3 58.5 19.1 58.6 18.9 58.6 18.7 58.5 18.6 58.5 18.4 58.4 18.3 58.3 18.2 58.2 18.2 58.1 18.1 58 18.1 57.9 18 57.8 18 57.7 18 57.5 18 57.1 18 56.6 18 56.2 18 55.8 18 55.4 18 55 18 54.6 18 54.1 18 53.9 18.1 53.7 18.2 53.5 18.2 53.3 18.4 53.1 18.5 53 18.6 52.8 18.8 52.7 19 52.6 19.2 52.4 19.4 52.3 19.7 52.2 20.1 51.9 20.6 51.6 75.9 20.4 75.6 .5"
          />
        </svg>
        <div className="ovrlywht absolute w-full h-full z-[19] bg-white"></div>
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
              <SectionOne
                ref={(ref) => (sectionComponentRefs.current[0] = ref)}
              />
            </div>

            <div
              ref={(el) => (sectionDOMRefs.current[1] = el)}
              className="absolute top-0 left-0 w-full h-full invisible bg-black"
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
