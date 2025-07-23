'use client';

import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from 'react';
import { aboutData } from './data';
import gsap from 'gsap';
import { sprintData } from "./data.js";

const SectionTwo = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);
  const leftBgRef = useRef(null);
  const videoBgRef = useRef(null);
  const dsrnRef = useRef(null);
  const dsrnBxRef = useRef(null);
  const brdrsRef = useRef(null);
  const leftSecRef = useRef(null);
  const rightSecRef = useRef(null);
  const bgImageRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true }); // smooth in and out

    tl.to(bgImageRef.current, {
      scale: 1.1,
      xPercent: 4,
      yPercent: 2,
      ease: "power1.inOut",
      duration: 20,
    });

    return () => {
      tl.kill();
    };
  }, []);

  const playAnimations = () => {

     const t1 = gsap.timeline();

    t1.fromTo(
      leftBgRef.current,
      { y: 100, width: '0%' },
      {
        y: 0,
        width: '100%',
        duration: 1.2,
        ease: 'power3.out',
      }
    )

    .fromTo(
      videoBgRef.current,
      { y: 0, width: '0%' },
      {
        y: 0,
        width: '100%',
        delay: -1.2,
        duration: 1.4,
        ease: 'power3.out',
      }
    )

    .fromTo(
      titleRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
         delay: -0.8,
        ease: 'power3.out',
      }
    )

    .fromTo(
      dsrnRef.current,
      { width: '0%', opacity: 0 },
      {
        opacity: 1,
        width: '100%',
        duration: 1,
          delay: -0.5,
        ease: 'power3.out',
      }
    )
    .fromTo(
      descriptionRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
          delay: -0.5,
        ease: 'power3.out',
      }
    )
    .fromTo(
      brdrsRef.current,
      { x: -50,width: '0%', opacity: 0 },
      {
        x: 0,
        width: '100%',
        opacity: 1,
        duration: 1,
          delay: -0.5,
       ease: "power1.inOut",
      }
    )

    // Animate stats from left to right with stagger
    const statItems = statsRef.current.querySelectorAll('div');

    t1.fromTo(
      statItems,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
          delay: -0.5,
        ease: 'power3.out',
        stagger: 0.2,
      }
    );

    //scrollbased fadeout
     const fadeOutTL = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top+=200 top", // Slight delay after scroll begins
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });
      fadeOutTL
        .to(titleRef.current, {
          opacity: 0,
          x: -30,
          duration: 1,
           ease: 'power3.out',
        })
     
        .to(
          dsrnBxRef.current,
          {
              x: 100,
            opacity: 0,
            duration: 1,
             delay: -1,
          ease: "power1.out",
          },
          
        )
       
        .to(
          statsRef.current,
          {
            opacity: 0,
           /*  width:' 0%', */
            x: 30,
            duration: 1,
            delay: -1,
            ease: "power1.out",
          },
          
        )
           .to(rightSecRef.current, {
          opacity: 0,
          x: 400,
          duration: 1,
           delay: -1,
          ease: "power1.out",
        })
           .to(leftSecRef.current, {
          opacity: 0,
          x: -400,
          duration: 1,
           delay: -1,
          ease: "power1.out",
        })
  };

  useImperativeHandle(ref, () => ({ playAnimations }));

  return (
    <section ref={sectionRef} className="h-screen scroll-area relative" id="section1">
         <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-l from-white/10 to-white/80 opacity-[0.1]">
              <img src={sprintData.mainBgImage} alt="" width={2000} height={1500} className="w-full h-full object-cover" ref={bgImageRef} />
            </div>
      <div className="grid grid-cols-[2fr_5fr] 3xl:grid-cols-[657px_auto] h-full">
        <div ref={leftSecRef} className="relative py-4 xl:py-[50px] xl:pl-[150px] overflow-hidden">
          <div className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-l from-black/30 from-0% to-black/80 to-100%"></div>
          <div className="absolute top-0 left-0 w-full z-10 h-full bg-amber-50" ref={leftBgRef}>
            <img src={aboutData.leftBgImage} alt="" width={2000} height={1500} className="w-full h-full object-cover" />
          </div>
        </div>

        <div ref={rightSecRef} className="relative flex flex-col h-full px-10 xl:px-[90px] pb-20 xl:pb-[93px] pt-20 xl:pt-[50px] overflow-hidden">
          <div className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-r from-black/60 from-0% via-black/60 via-52% to-black/60 to-100%"></div>
          <div className="absolute top-0 left-0 w-full z-10 h-full bg-amber-50" ref={videoBgRef}>
            <video src="../assets/videos/hero.mp4" autoPlay loop muted className="w-full h-full object-cover"></video>
          </div>

          <div className="relative z-40 pt-6 xl:pt-[35px] text-white" ref={titleRef}>
            <h1 className="text-48 xl:text-60 font-light leading-[1.166666666666667] mb-3 3xl:mb-[25px]">
              {aboutData.title}
            </h1>
            <h3 className="text-18 xl:text-24 font-light max-w-xl">
              With a rich legacy of more than{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                160 years
              </span>{' '}
              of delivering iconic projects
            </h3>
          </div>

          <div className="relative z-40 mt-auto ml-auto" >
            <div ref={dsrnBxRef} className="p-10 w-fit xl:w-[550px] px-15 py-10 text-white relative">
              <div ref={dsrnRef} className='bg-primary ovrbx w-full h-full absolute left-0 right-0 bottom-0 z-[-1]'></div>
              <p ref={descriptionRef} className="text-16 xl:text-18 font-light leading-[1.5]">
                {aboutData.description}
              </p>
            </div>
          </div>

          <div
            className="relative z-40  pt-6 xl:pt-[30px] flex gap-6 xl:gap-[75px] text-white"
            ref={statsRef}
          >
            <hr ref={brdrsRef} className='border-t border-white/30 absolute top-0 w-full my-0' />
            <div>
              <h3 className="text-24 xl:text-40 font-light leading-[auto] mb-[5px]">160+</h3>
              <p className="text-16 xl:text-18 font-light leading-[1.555555555555556]">Years of Legacy</p>
            </div>
            <div>
              <h3 className="text-24 xl:text-40 font-light leading-[auto] mb-[5px]">35000+</h3>
              <p className="text-16 xl:text-18 font-light leading-[1.555555555555556]">Employees Strength</p>
            </div>
            <div>
              <h3 className="text-24 xl:text-40 font-light leading-[auto] mb-[5px]">35+</h3>
              <p className="text-16 xl:text-18 font-light leading-[1.555555555555556]">Countries Globally Reached</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionTwo;