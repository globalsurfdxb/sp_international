'use client';

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Use forwardRef to allow parent component to access internal functions/refs
const SectionOne = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const iconsRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null); // Ref for the overlay div

  // Expose a playAnimations function to the parent component
  useImperativeHandle(ref, () => ({
    playAnimations: () => {
      // Replay or ensure initial animations are set when this section becomes active
      // We might not need to re-run from() animations directly here if ScrollTrigger handles them onEnterBack
      // but it's a good place for any intro animations that should happen when the section appears.
      // For this specific case, the ScrollTrigger will handle the "reset" implicitly when scrolling back.
    }
  }));

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

      // Scroll-triggered animations for video and content
      gsap.to(videoRef.current, {
        scale: 1,
        x: '-75%',  
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top', 
          scrub: 1, 
           markers: true,
          
        },
      });
   
// Scroll-based fade-out one by one
const fadeOutTL = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef.current,
    start: 'top+=100 top',   // Slight delay after scroll begins
    end: 'bottom top',
    scrub: true,
    // markers: true,
  },
});
fadeOutTL
  .to(titleRef.current, {
    opacity: 0,
    x: -30,
    duration: 1,
    ease: 'none',
  })
  .to(subtitleRef.current, {
    opacity: 0,
    x: -30,
    duration: 1,
    ease: 'none',
  }, '-=0.6') // slight overlap
  .to(iconsRef.current, {
    opacity: 0,
    y: -30,
    duration: 1,
    ease: 'none',
  }, '-=0.3');


    /*   // Animate the text and icons to fade out
      gsap.to([titleRef.current, subtitleRef.current, iconsRef.current], {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'top -20%', // Start fading out as soon as scrolling begins, finished by 20% down
          scrub: 0.5, // Adjust scrub for how quickly it fades
          // markers: true, // For debugging
        },
      });

      // Animate the overlay opacity as well, making it slightly less opaque as we scroll
      gsap.to(overlayRef.current, {
        opacity: 0.5, // From 0.8 to 0.5, or adjust as desired
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          // markers: true, // For debugging
        }
      }) */

    }, sectionRef); // Scope the GSAP animations to this component

    return () => ctx.revert(); // Clean up GSAP animations on unmount
  }, []);

  return (
    <section ref={sectionRef} className="h-[100dvh] overflow-x-hidden relative scroll-area overflow-hidden">
      <div className="h-full absolute top-0 left-0 w-full bg-amber-50 z-0">
        <video ref={videoRef}
          src="../assets/videos/home.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute z-[2]"
        ></video>
           <video
              src="../assets/videos/hero.mp4"
              autoPlay
              loop
              muted
              className="absolute w-[80%] h-full object-cover z-[1] right-0 top-0"
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

      {/* Changed class to ref, and initial opacity to match your current code (.mswd's opacity:0 means this overlay is active) */}
      <div ref={overlayRef} className="absolute inset-0 bg-[#0000008C] h-[100dvh]"></div>
    </section>
  );
});

export default SectionOne;