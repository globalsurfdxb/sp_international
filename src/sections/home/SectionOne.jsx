'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionOne = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const iconsRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animations
      
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.4,
      });

      gsap.from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.8,
      });

      gsap.from(iconsRef.current, {
        y: 20,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 1.2,
      });

      // Scroll-triggered zoom-out effect
     /*  gsap.to(sectionRef.current, {
        scale: 0.8,
          transformOrigin: "50%, 50%",
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }); */
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-[100dvh] overflow-x-hidden relative scroll-area overflow-hidden">
      <div className="h-full absolute top-0 left-0 w-full bg-amber-50">
        <video ref={videoRef}
          src="../assets/videos/home.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
      </div>

      <div className="relative z-[1] h-full">
        <div className="flex flex-col justify-end h-full">
          <div className="w-[79%] ml-auto text-white">
            <h1
              ref={titleRef}
              className="text-70 font-light max-w-[20ch] leading-[80px]"
            >
              Trusted Legacy of Engineering Excellence
            </h1>
          </div>

          <div className="my-10 w-full border-t border-white/30"></div>

          <div
            ref={subtitleRef}
            className="w-[44%] ml-auto text-white mb-19 flex justify-between items-center mr-38"
          >
            <div className="flex items-center gap-2">
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

            <div className="flex flex-col items-center gap-3" ref={iconsRef}>
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

      <div className="absolute inset-0 bg-[#0000008C] h-[100dvh]"></div>
    </section>
  );
};

export default SectionOne;
