'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { aboutData } from './data';

const SlideScrollTwo = () => {
  const containerRef = useRef(null);
  const scrollBlock = useRef(false);
  const timeoutRef = useRef(null);

  const section1Ref = useRef(null);
  const titleOneRef = useRef(null);
  const subtitleRef = useRef(null);
  const iconsRef = useRef(null);
  const videoRef = useRef(null);
  const brdrRef = useRef(null);
  const overlayRef = useRef(null);
  const blockRefs = useRef([]);

  const section2Ref = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);
  const leftBgRef = useRef(null);
  const videoBgRef = useRef(null);
  const dsrnRef = useRef(null);
  const dsrnBxRef = useRef(null);
  const brdrsRef = useRef(null);
  const leftSecRef = useRef(null);
  const rightSecRef = useRef(null);
  const title2Ref = useRef(null);
  const ttbxsRef = useRef(null);

  const section3Ref = useRef(null);
  const section3Box = useRef(null);

  const section4Ref = useRef(null);
  const section4Content = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);

  const sections = [section1Ref, section2Ref, section3Ref, section4Ref];
  const menuTitles = ['SP GROUP', 'SPINT', 'SERVICES'];



  const playEntryAnimation = (index) => {
    gsap.set([ttbxsRef.current, rightSecRef.current, leftSecRef.current], { x: 0, opacity: 1 });
    const statItems = statsRef.current.querySelectorAll('div');
    const a1 = gsap.timeline();
    const b1 = gsap.timeline();
    switch (index) {
      case 0:
       a1.set(videoRef.current, { x: "0%"})
       .fromTo(videoRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" })
.fromTo(titleOneRef.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" })
.fromTo(brdrRef.current, { width: "0%", opacity: 1 }, { width: "100%", opacity: 1, duration: 1, ease: "power3.easeInOut" }, "-=1.5")
.fromTo(subtitleRef.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=1")
.fromTo(iconsRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.out" }, "-=2.5");

        break;
      case 1:
      b1
.fromTo(videoBgRef.current, { y: 0, opacity: 0, width: '0%' }, { y: 0, width: '100%', opacity: 1, delay: 0, duration: 1.3, ease: 'power1.in' })
.fromTo(leftBgRef.current, { y: 100, width: '0%' }, { y: 0, width: '100%', duration: 1, delay: 1, ease: 'power3.out' })
.fromTo(title2Ref.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: -0.8, ease: 'power3.out' })
.fromTo(dsrnRef.current, { width: '0%', opacity: 0 }, { width: '100%', opacity: 1, duration: 1, delay: -0.5, ease: 'power3.out' })
.fromTo(descriptionRef.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: -0.5, ease: 'power3.out' })
.fromTo(brdrsRef.current, { x: -50, width: '0%', opacity: 0 }, { x: 0, width: '100%', opacity: 1, duration: 1, delay: -0.5, ease: 'power1.inOut' })
.fromTo(statItems, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: -0.5, ease: 'power3.out', stagger: 0.2 });
        break;
      case 2:
        gsap.fromTo(section3Box.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
        break;
      case 3:
        gsap.fromTo(section4Content.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 });
        break;
    }
  };

  const playExitAnimation = (index, onComplete) => {
   const a2 = gsap.timeline();
   const b2 = gsap.timeline();
    const tl = gsap.timeline({ onComplete });
    switch (index) {
      case 0:
      a2
.to(videoRef.current, { scale: 0.9, duration: 0.8, delay: 0, transformOrigin: "50% 50%", ease: "power1.inOut" }, "+=0.5")
.to(videoRef.current, { x: "-100%", duration: 1.2, ease: "power1.inOut" }, "+=0.5")
.to(titleOneRef.current, { opacity: 0, x: -30, duration: 0.5, ease: "power3.out" }, "-=2")
.to(subtitleRef.current, { opacity: 0, x: -30, duration: 0.5, ease: "power3.out" }, "-=1.8")
.to(iconsRef.current, { opacity: 0, y: -30, duration: 1, ease: "power3.out" }, "-=1.6")
.to(brdrRef.current, { opacity: 0, x: "100%", duration: 1, ease: "power3.out" }, "-=1.8")
.to(overlayRef.current, { opacity: 0, width: "100%", duration: 1, ease: "power3.out" }, "-=0");

        break;
      case 1:
         b2.to(rightSecRef.current, { x: 800, opacity: 0, duration: 1.5, ease: 'power1.in' }, 0)
  .to(leftSecRef.current, { x: -800, opacity: 0, duration: 1.5, ease: 'power1.in' }, 0);
/*   .to(ttbxsRef.current, { x: 800, opacity: 0, duration: 1.5, ease: 'power1.in' }, 0)
 */
        break;
      case 2:
        tl.to(section3Box.current, { y: -100, opacity: 0, duration: 0.6 });
        break;
      case 3:
        tl.to(section4Content.current, { scale: 0.8, opacity: 0, duration: 0.6 });
        break;
    }
  };

  const updateSlides = (newIndex) => {
    const prevIndex = currentIndexRef.current;
    currentIndexRef.current = newIndex;
    setCurrentIndex(newIndex);

    clearTimeout(timeoutRef.current);

    playExitAnimation(prevIndex, () => {
      sections.forEach((section, i) => {
        const el = section.current;

        if (i === newIndex) {
          gsap.set(el, { visibility: 'inherit', zIndex: 1 });

          timeoutRef.current = setTimeout(() => {
            gsap.set(el, { zIndex: 2 });
          }, 2200);

          playEntryAnimation(i);
        } else if (i === prevIndex) {
          timeoutRef.current = setTimeout(() => {
            gsap.set(el, { zIndex: 1 });
          }, 2200);
        } else {
          gsap.set(el, { visibility: 'hidden', zIndex: 0, opacity: 1 });
        }
      });
    });
  };

  const handleScroll = (e) => {
    if (scrollBlock.current) return;

    e.preventDefault();
    scrollBlock.current = true;

    const direction = e.deltaY > 0 ? 1 : -1;
    const newIndex = currentIndexRef.current + direction;

    if (newIndex >= 0 && newIndex < sections.length) {
      updateSlides(newIndex);
    }

    // Wait for exit + entry animations to finish
    setTimeout(() => {
      scrollBlock.current = false;
    }, 2500); // 600ms exit + 2000ms entry delay
  };

  const handleMenuClick = (index) => {
    if (index !== currentIndexRef.current) {
      updateSlides(index);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleScroll, { passive: false });

    // Initialize first slide
    gsap.set(section1Ref.current, { visibility: 'inherit', zIndex: 2, opacity: 1 });
    requestAnimationFrame(() => playEntryAnimation(0));

    return () => {
      container.removeEventListener('wheel', handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-screen overflow-hidden">
      {/* Menu */}
      {currentIndex > 0 && (
        <div className="absolute top-6 left-6 z-50 flex flex-col gap-3">
          {[1, 2, 3].map((i, idx) => {
            let opacity = 'opacity-30';
            if (i === currentIndex) opacity = 'opacity-100';
            else if (Math.abs(i - currentIndex) === 1) opacity = 'opacity-70';

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

      {/* Slide 1 */}
      <div
        ref={section1Ref}
        className="absolute top-0 left-0 w-full h-full bg-transparent"
      >
         <section
          className="h-[100dvh] overflow-x-hidden relative scroll-area overflow-hidden bg-transparent"
        >
          <div className="h-full absolute top-0 left-0 w-full z-0"   ref={videoRef}>
            <div className="h-screen w-full relative overflow-hidden z-10">
              {/* One single video playing in background */}
              <video
              
                src="../assets/videos/home.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover absolute top-0 left-0 right-0 z-[1]"
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
          {<div
            ref={overlayRef}
            className="absolute inset-0 bg-black/35 h-[100dvh]"
          ></div>}
        </section>
       
      </div>

      {/* Slide 2 */}
      <div
        ref={section2Ref}
        className="absolute top-0 left-0 w-full h-full bg-transparent"
        style={{ visibility: 'hidden', zIndex: 0 }}
      >
        <section
                className="h-screen scroll-area relative bg-transparent"
                id="section1"
              >
                {/*    <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-l from-white/10 to-white/80 opacity-[0.1]">
                           <img src={sprintData.mainBgImage} alt="" width={2000} height={1500} className="w-full h-full object-cover" ref={bgImageRef} />
                         </div> */}
                <div className="grid grid-cols-[2fr_5fr] 3xl:grid-cols-[657px_auto] h-full" ref={ttbxsRef}>
                  <div
                    ref={leftSecRef}
                    className="relative py-4 xl:py-[50px] xl:pl-[150px] overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-l from-black/30 from-0% to-black/80 to-100%"></div>
                    <div
                      className="absolute top-0 left-0 w-full z-10 h-full "
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
                    <div className="absolute top-0 left-0 z-[22] w-full h-full bg-gradient-to-r from-black/85 from-0% via-black/65 via-75% to-black/60 to-100% "></div>
                    <div
                      className="absolute top-0 w-full z-10 h-full right-0 opacity-0"
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
                      ref={title2Ref}
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
        style={{ visibility: 'hidden', zIndex: 0 }}
      >
        <h1 ref={section3Box} className="text-5xl">SPINT</h1>
      </div>

      {/* Slide 4 */}
      <div
        ref={section4Ref}
        className="absolute top-0 left-0 w-full h-full bg-[#f5f5f5] text-black flex items-center justify-center"
        style={{ visibility: 'hidden', zIndex: 0 }}
      >
        <h1 ref={section4Content} className="text-5xl">SERVICES</h1>
      </div>
    </div>
  );
};

export default SlideScrollTwo;
