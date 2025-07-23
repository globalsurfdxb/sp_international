'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { sprintData } from "./data.js";
import gsap from "gsap";
import {  useRef, forwardRef, useImperativeHandle, useEffect } from "react";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const SectionThree = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);
  const swiperRef = useRef(null);
  const bottomTextRef = useRef(null);

  const bgImageRef = useRef(null);
  const bgdivRef = useRef(null);

    const polygon1Ref = useRef(null);
    const polygon2Ref = useRef(null);


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
      leftContentRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1.5,
        duration: 1,
        delay: -0.5,
        ease: "power1.in",
      }
    )
    .fromTo(
      rightImageRef.current,
      { x: 50, width: '0%', opacity: 0 },
      {
        x: 0,
        width: '100%',
        opacity: 1,
        duration: 1,
         delay: -0.8,
       ease: "power1.in",
      }
    )
    .fromTo(
      swiperRef.current,
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
         delay: -0.8,
        ease: "power1.in",
      }
    )
     .fromTo(
      polygon1Ref.current,
      { drawSVG: "0%" },
      { drawSVG: "-100%", duration: 1,  delay: -1,  ease: "power1.inOut" }
    )

    .fromTo(
      polygon2Ref.current,
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 1,  delay: -1.5, ease: "power1.inOut" }
    )
    .fromTo(
      bottomTextRef.current,
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
         delay: -0.8,
       ease: "power1.in",
      }
    );

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
        .to(
      leftContentRef.current,
      {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: -0.5,
        ease: "power1.out",
      }
    )
    .to(bgdivRef.current, {
      opacity: 0,
      ease: "power1.inOut",
       delay: -1.4,
      duration: 1,
    })
         .fromTo(
      swiperRef.current,
      { x: 0, opacity: 1 },
      {
        x: 300,
        opacity: 0,
        duration: 1.5,
         delay: -0.8,
        ease: "power1.in",
      }
    )
    .to(
      rightImageRef.current,
      {
        x: 50,
        opacity: 0,
        duration: 1,
         delay: -0.8,
       ease: "power1.out",
      }
    )
  
    .to(
      bottomTextRef.current,
      {
        x: -50,
        opacity: 0,
        duration: 1,
         delay: -1.2,
       ease: "power1.out",
      }
    );
  
  };

  

  useImperativeHandle(ref, () => ({
    playAnimations,
  }));

  return (
    <section ref={sectionRef} id="section3" className="h-screen overflow-hidden relative scroll-area">
      <div ref={bgdivRef} className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-l from-white/10 to-white/80 opacity-[0.1]">
        <img src={sprintData.mainBgImage} alt="" width={2000} height={1500} className="w-full h-full object-cover" ref={bgImageRef} />
      </div>
      <div className="absolute bottom-0 xl:bottom-10 left-[20%] xl:left-[18%] w-fit h-fit z-40">
        <svg width="503" height="707" viewBox="0 0 503 707" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M502 3L1.00011 506.517L1 707H502V435.467L253.584 684.968V584.013L502 334.349V3Z" stroke="url(#paint0_linear_987_1030)" strokeWidth="2" />
          <defs>
            <linearGradient id="paint0_linear_987_1030" x1="251.5" y1="3" x2="251.5" y2="707" gradientUnits="userSpaceOnUse">
              <stop stopColor="#30B6F9" stopOpacity="0.25" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-[20%] xl:left-[18%] w-full h-fit z-10">
        <svg width="719" height="366" viewBox="0 0 719 366" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line ref={polygon1Ref} opacity="0.2" x1="4.37114e-08" y1="157.5" x2="718" y2="157.5" stroke="black" />
          <line ref={polygon2Ref} opacity="0.2" x1="718.5" y1="366" x2="718.5" y2="-2.18557e-08" stroke="black" />
        </svg>
      </div>
      <div className="grid grid-cols-2 3xl:grid-rows-[548px_auto] h-full relative z-10 ">
        <div ref={leftContentRef} className="pt-20 xl:pt-[130px]">
          <div className="w-fit ml-auto pr-10 3xl:pr-[68px]">
            <h1 className="text-34 xl:text-48 3xl:text-60 leading-[1.083333333333333] font-light max-w-sm 3xl:max-w-md mb-8 xl:mb-[39px] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{sprintData.title}</h1>
            <p className="text-18 xl:text-29 font-light leading-[1.344827586206897] max-w-md">{sprintData.subtitle}</p>
          </div>
        </div>
        <div ref={rightImageRef} className="relative z-50 h-[550px]">
          <img src={sprintData.rightImage} alt="" width={2000} height={1500} className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-end">
          <div ref={swiperRef} className="bg-primary w-full xl:w-[298px] xl:h-[316px] ">
            <Swiper
              className="w-full h-full sprintswiper"
              slidesPerView={1}
              spaceBetween={30}
              pagination={{ clickable: true }}
              loop={true}
              modules={[Pagination, Autoplay]}
              speed={800}
              fadeEffect={true}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
            >
              {sprintData.items.map((item, index) => (
                <SwiperSlide key={index} className="w-full h-full flex flex-col justify-end">
                  <div className="text-white px-5 xl:px-10 py-5 xl:py-8 flex flex-col justify-end h-full">
                    <h1 className="text-24 xl:text-60 font-light leading-[1]">{item.title}</h1>
                    <p className="text-16 xl:text-18 font-light leading-[1.555555555555556]">{item.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div ref={bottomTextRef} className="pt-20 xl:pt-[67px] relative z-50">
          <div className="w-fit pl-10 xl:pl-[265px]">
            <p className="text-16 xl:text-18 font-light leading-[1.5] max-w-md">{sprintData.description}</p>
            <div className="mt-10 xl:mt-15 3xl:mt-20">
              <a href={"/"} className="text-16 leading-[1.75] font-light text-light-gray uppercase flex items-center gap-2 cursor-pointer group"><span>About sprint</span> 
              <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-2 transition-all ease-in-out duration-300">
                <path  d="M17.6328 2.43262L25.0111 9.0134L17.6579 15.5679" stroke="#30B6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path  d="M24.5954 9H1.98047" stroke="#30B6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionThree;