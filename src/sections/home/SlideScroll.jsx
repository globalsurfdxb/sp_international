"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { aboutData } from "./data";
gsap.registerPlugin(ScrollTrigger);

const SlideScroll = () => {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const timeoutRef = useRef(null);
  const scrollTimeout = useRef(null);
  const prevTimeoutRef = useRef(null);

  const titleRef = useRef(null);

  //slide one
  const sectionRef = useRef(null);

  const titleOneRef = useRef(null);
  const subtitleRef = useRef(null);
  const iconsRef = useRef(null);
  const videoRef = useRef(null);
  const brdrRef = useRef(null);
  const overlayRef = useRef(null);
  const blockRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Start with visible blocks
      gsap.set(blockRefs.current, { opacity: 1, delay: 0.5, height: "100%" });

      // Animate each block to fade + shrink
      blockRefs.current.forEach((el, i) => {
        gsap.to(el, {
          opacity: 0,
          height: "0%",
          duration: 1,
          delay: i * 0.3,
          ease: "power3.easeInOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  //slideone

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);

  const sections = [section1Ref, section2Ref, section3Ref, section4Ref];

  const menuTitles = ["SP GROUP", "SPINT", "SERVICES"]; // For slides 2, 3, 4

  const updateSlides = (newIndex) => {
    const prevIndex = currentIndexRef.current;
    currentIndexRef.current = newIndex;
    setCurrentIndex(newIndex);

    clearTimeout(timeoutRef.current);
    clearTimeout(prevTimeoutRef.current); // Ensure only one timeout for previous slide

    if (newIndex === 0) {
      // Always reset when we reach Slide 1 (directly or returning from any slide)
      const a1 = gsap.timeline();

      a1.set(videoRef.current, { x: "0%" })

        .fromTo(
          videoRef.current,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
          }
        )
        .fromTo(
          titleOneRef.current,
          {
            x: 60,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            /* delay: 0.4, */
          }
        )

        .fromTo(
          brdrRef.current,
          {
            width: "0%",
            opacity: 1,
            x: 0,
          },
          {
            width: "100%",
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.easeInOut",
          },
          "-=1.5"
        )

        .fromTo(
          subtitleRef.current,
          {
            x: 60,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            /* delay: 0.8, */
          },
          "-=1"
        )

        .fromTo(
          iconsRef.current,
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          overlayRef.current,
          {
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=2.5"
        );
    }

    // ✅ Animate video when leaving or entering the first slide
    if (prevIndex === 0 && newIndex === 1) {
      const a2 = gsap.timeline();
      a2.to(
        videoRef.current,
        {
          scale: 0.9,
          duration: 1,
          delay: 0.5,
          transformOrigin: "50% 50%",
          ease: "power1.inOut",
        },
        "+=0.5"
      )
        .to(
          videoRef.current,
          {
            x: "-100%",
            duration: 1.5,
            ease: "power1.inOut",
          },
          "+=0.5"
        )
        .to(
          titleOneRef.current,
          {
            opacity: 0,
            x: -30,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=2"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 0,
            x: -30,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=1.8"
        )
        .to(
          iconsRef.current,
          {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: "power3.out",
          },
          "-=1.6"
        )
        .to(
          brdrRef.current,
          {
            opacity: 0,
            x: "100%",
            duration: 1,
            ease: "power3.out",
          },
          "-=1.8"
        )
        .to(
          overlayRef.current,
          {
            opacity: 0,
            width: "100%",
            duration: 1,
            ease: "power3.out",
          },
          "-=0"
        );
    }

  
    // Slide 2 exit animation
if (prevIndex === 1) {
  const t2 = gsap.timeline({
    onComplete: () => {
      setCurrentIndex(newIndex);
    }
  });

  t2.to(rightSecRef.current, {
    opacity: 0,
    x: 400,
    duration: 1,
    ease: "power1.out",
  }).to(leftSecRef.current, {
    opacity: 0,
    x: -400,
    duration: 1,
    ease: "power1.out",
  }, "<");

  return;
}
    sections.forEach((section, i) => {
      const element = section.current;

      if (i === newIndex) {
        // New slide: appear at zIndex 1, promote after 10s
        gsap.set(element, { visibility: "inherit", zIndex: 1 });

        timeoutRef.current = setTimeout(() => {
          gsap.set(element, { zIndex: 2 });
        }, 10000);

        /* gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 0.8 }); */
      } else if (i === prevIndex) {
        // Previous slide starts at zIndex 2 (still visible)
        gsap.set(element, { visibility: "inherit", zIndex: 2 });

        // Demote after 10 seconds to zIndex 1 (still visible)
        prevTimeoutRef.current = setTimeout(() => {
          gsap.set(element, { zIndex: 1 });

          // OPTIONAL: hide or set zIndex: 0 after another 10s
          // setTimeout(() => {
          //   gsap.set(element, { visibility: "hidden", zIndex: 0 });
          // }, 10000);
        }, 10000);
      } else {
        // All other slides: hide
        gsap.set(element, { visibility: "hidden", zIndex: 0, opacity: 1 });
      }
    });
  };

  /* 
  const updateSlides = (newIndex) => {
    const prevIndex = currentIndexRef.current;
    currentIndexRef.current = newIndex;
    setCurrentIndex(newIndex);

    clearTimeout(timeoutRef.current);

    


    sections.forEach((section, i) => {
      const element = section.current;
      if (i === newIndex) {
        gsap.set(element, { visibility: "inherit", zIndex: 2 });
      } else if (i === prevIndex) {
        gsap.set(element, { visibility: "inherit", zIndex: 1 });
        timeoutRef.current = setTimeout(() => {
          gsap.set(element, { visibility: "hidden", zIndex: 0 });
        }, 10000);
      } else {
        gsap.set(element, { visibility: "hidden", zIndex: 0 });
      }
    });
  }; */

  const handleScroll = (e) => {
    e.preventDefault();
    if (scrollTimeout.current) return;

    const delta = e.deltaY;
    const direction = delta > 0 ? 1 : -1;
    const newIndex = currentIndexRef.current + direction;

    if (newIndex < 0 || newIndex > 3) return;

    updateSlides(newIndex);

    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
    }, 800);
  };

  const handleMenuClick = (index) => {
    if (index !== currentIndexRef.current) {
      updateSlides(index);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
    }

    updateSlides(0);

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
      clearTimeout(timeoutRef.current);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  //slide two

  const descriptionRef = useRef(null);
  const statsRef = useRef(null);
  const leftBgRef = useRef(null);
  const videoBgRef = useRef(null);
  const dsrnRef = useRef(null);
  const dsrnBxRef = useRef(null);
  const brdrsRef = useRef(null);
  const leftSecRef = useRef(null);
  const rightSecRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden"
    >
      {/* Menu only visible after first slide */}
      {currentIndex > 0 && (
        <div className="absolute top-6 left-6 z-50 flex flex-col gap-3">
          {[1, 2, 3].map((i, idx) => {
            let opacity = "opacity-30";
            if (i === currentIndex) opacity = "opacity-100";
            else if (Math.abs(i - currentIndex) === 1) opacity = "opacity-70";

            return (
              <button
                key={i}
                onClick={() => handleMenuClick(i)}
                className={`text-white text-sm px-3 py-1 bg-black/40 rounded transition-opacity duration-300 ${opacity}`}
              >
                {menuTitles[idx]}
              </button>
            );
          })}
        </div>
      )}

      {/* Slide 1 - no menu */}
      <div
        ref={section1Ref}
        className="absolute top-0 left-0 w-full h-full "
        style={{ visibility: "hidden", zIndex: 0 }}
      >
        <section
          ref={sectionRef}
          className="h-[100dvh] overflow-x-hidden relative scroll-area overflow-hidden"
        >
          <div className="h-full absolute top-0 left-0 w-full z-0">
            <div className="h-screen w-full relative overflow-hidden z-10">
              {/* One single video playing in background */}
              <video
                ref={videoRef}
                src="../assets/videos/home.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover absolute top-0 left-0 right-0"
              ></video>

              {/* Block 1 */}
              <div
                ref={(el) => (blockRefs.current[0] = el)}
                className="absolute top-0 left w-1/3 h-full  bg-white  mnbxs"
              ></div>
              {/* Block 2 */}
              <div
                ref={(el) => (blockRefs.current[1] = el)}
                className="absolute top-0 left-1/3 w-1/3 h-full  bg-white  mnbxs"
              ></div>
              {/* Block 3 */}
              <div
                ref={(el) => (blockRefs.current[2] = el)}
                className="absolute top-0 left-2/3 w-1/3 h-full  bg-white mnbxs"
              ></div>
            </div>
            {/*   <video
              src="../assets/videos/hero.mp4"
              autoPlay
              loop
              muted
              className="absolute w-[80%] h-full object-cover z-[1] right-0 top-0"
            ></video> */}
          </div>

          <div className="relative z-[1] h-full">
            <div className="flex flex-col justify-end h-full">
              <div className="w-[79%] ml-auto text-white">
                <h1
                  ref={titleOneRef}
                  className="text-70 font-light max-w-[20ch] leading-[80px]"
                >
                  Trusted Legacy of Engineering Excellence
                </h1>
              </div>

              <div
                ref={brdrRef}
                className="my-10 w-full border-t border-white/30"
              ></div>

              <div className="w-[44%] ml-auto text-white mb-19 flex justify-between items-center mr-38">
                <div className="flex items-center gap-2" ref={subtitleRef}>
                  <h2 className="text-32 font-light max-w-[14ch]">
                    Changing Skylines Since 1865
                  </h2>
                  <img
                    src="../assets/images/arrowbl.svg"
                    alt="Logo"
                    width={71}
                    height={71}
                  />
                </div>

                <div
                  className="flex flex-col items-center gap-3"
                  ref={iconsRef}
                >
                  <p className="text-13 uppercase font-light">Stay Connected</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center border border-[#30B6F9] cursor-pointer w-[34px] h-[34px] bg-[#00000030] rounded-full">
                      <img
                        src="../assets/images/ln.svg"
                        alt="LinkedIn"
                        width={15}
                        height={14}
                      />
                    </div>
                    <div className="flex items-center justify-center border border-[#30B6F9] cursor-pointer w-[34px] h-[34px] bg-[#00000030] rounded-full">
                      <img
                        src="../assets/images/fb.svg"
                        alt="Facebook"
                        width={8}
                        height={14}
                      />
                    </div>
                    <div className="flex items-center justify-center border border-[#30B6F9] cursor-pointer w-[34px] h-[34px] bg-[#00000030] rounded-full">
                      <img
                        src="../assets/images/ytube.svg"
                        alt="YouTube"
                        width={16}
                        height={11}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Changed class to ref, and initial opacity to match your current code (.mswd's opacity:0 means this overlay is active) */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black/55 h-[100dvh]"
          ></div>
        </section>
      </div>

      {/* Slide 2 */}
      <div
        ref={section2Ref}
        className="absolute top-0 left-0 w-full h-full "
        style={{ visibility: "hidden", zIndex: 0 }}
      >
        <section
          ref={sectionRef}
          className="h-screen scroll-area relative"
          id="section1"
        >
          {/*    <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-l from-white/10 to-white/80 opacity-[0.1]">
                     <img src={sprintData.mainBgImage} alt="" width={2000} height={1500} className="w-full h-full object-cover" ref={bgImageRef} />
                   </div> */}
          <div className="grid grid-cols-[2fr_5fr] 3xl:grid-cols-[657px_auto] h-full">
            <div
              ref={leftSecRef}
              className="relative py-4 xl:py-[50px] xl:pl-[150px] overflow-hidden"
            >
              <div className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-l from-black/30 from-0% to-black/80 to-100%"></div>
              <div
                className="absolute top-0 left-0 w-full z-10 h-full bg-amber-50"
                ref={leftBgRef}
              >
                <img
                  src={aboutData.leftBgImage}
                  alt=""
                  width={2000}
                  height={1500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              ref={rightSecRef}
              className="relative flex flex-col h-full px-10 xl:px-[90px] pb-20 xl:pb-[93px] pt-20 xl:pt-[50px] overflow-hidden"
            >
              <div className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-r from-black/60 from-0% via-black/60 via-52% to-black/60 to-100%"></div>
              <div
                className="absolute top-0 left-0 w-full z-10 h-full bg-amber-50"
                ref={videoBgRef}
              >
                <video
                  src="../assets/videos/hero.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                ></video>
              </div>

              <div
                className="relative z-40 pt-6 xl:pt-[35px] text-white"
                ref={titleRef}
              >
                <h1 className="text-48 xl:text-60 font-light leading-[1.166666666666667] mb-3 3xl:mb-[25px]">
                  {aboutData.title}
                </h1>
                <h3 className="text-18 xl:text-24 font-light max-w-xl">
                  With a rich legacy of more than{" "}
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    160 years
                  </span>{" "}
                  of delivering iconic projects
                </h3>
              </div>

              <div className="relative z-40 mt-auto ml-auto">
                <div
                  ref={dsrnBxRef}
                  className="p-10 w-fit xl:w-[550px] px-15 py-10 text-white relative"
                >
                  <div
                    ref={dsrnRef}
                    className="bg-primary ovrbx w-full h-full absolute left-0 right-0 bottom-0 z-[-1]"
                  ></div>
                  <p
                    ref={descriptionRef}
                    className="text-16 xl:text-18 font-light leading-[1.5]"
                  >
                    {aboutData.description}
                  </p>
                </div>
              </div>

              <div
                className="relative z-40  pt-6 xl:pt-[30px] flex gap-6 xl:gap-[75px] text-white"
                ref={statsRef}
              >
                <hr
                  ref={brdrsRef}
                  className="border-t border-white/30 absolute top-0 w-full my-0"
                />
                <div>
                  <h3 className="text-24 xl:text-40 font-light leading-[auto] mb-[5px]">
                    160+
                  </h3>
                  <p className="text-16 xl:text-18 font-light leading-[1.555555555555556]">
                    Years of Legacy
                  </p>
                </div>
                <div>
                  <h3 className="text-24 xl:text-40 font-light leading-[auto] mb-[5px]">
                    35000+
                  </h3>
                  <p className="text-16 xl:text-18 font-light leading-[1.555555555555556]">
                    Employees Strength
                  </p>
                </div>
                <div>
                  <h3 className="text-24 xl:text-40 font-light leading-[auto] mb-[5px]">
                    35+
                  </h3>
                  <p className="text-16 xl:text-18 font-light leading-[1.555555555555556]">
                    Countries Globally Reached
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Slide 3 */}
      <div
        ref={section3Ref}
        className="absolute top-0 left-0 w-full h-full bg-[#003366] text-white flex items-center justify-center"
        style={{ visibility: "hidden", zIndex: 0 }}
      >
        <h1 className="text-5xl">SPINT</h1>
      </div>

      {/* Slide 4 */}
      <div
        ref={section4Ref}
        className="absolute top-0 left-0 w-full h-full bg-[#f5f5f5] text-black flex items-center justify-center"
        style={{ visibility: "hidden", zIndex: 0 }}
      >
        <h1 className="text-5xl">SERVICES</h1>
      </div>
    </div>
  );
};

export default SlideScroll;
