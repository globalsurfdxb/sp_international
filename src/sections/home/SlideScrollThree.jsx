"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

import { aboutData } from "./data.js";
import { sprintData } from "./data.js";

const SlideScrollThree = ({
  setActiveSection,
  indexToScroll,
  setIndexToScroll,
}) => {
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
  const splftimng = useRef(null);
  const sptitle = useRef(null);
  const spdscrpt = useRef(null);
  const spbtn = useRef(null);
  const spStats = useRef(null);
  const sprgtbg = useRef(null);
  const splftbg = useRef(null);
  const sprghtBx = useRef(null);
  const sprIcnim = useRef(null);
  const spBrdOne = useRef(null);

/*   const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);
  const swiperRef = useRef(null);
  const bottomTextRef = useRef(null); */

  const bgdivRef = useRef(null);

/*   const polygon1Ref = useRef(null);
  const polygon2Ref = useRef(null);
  const polygon3Ref = useRef(null); */
  const polygon4Ref = useRef(null);
  const polygon5Ref = useRef(null);

  const section4Ref = useRef(null);
  /*  const section4Content = useRef(null); */
  const srvttlRef = useRef(null);
  const srvsImgRef = useRef(null);
  const textItemsRef = useRef([]);
  const countRef = useRef([]);
  const brdonRef = useRef([]);
  const brdtwsRef = useRef([]);
  const srvBgimg = useRef([]);
  const srvsVct = useRef([]);
  const srvsCntb = useRef([]);
  const srvsArrw = useRef([]);
  const srvsRghtBx = useRef([]);
  const srvLftBx = useRef([]);

  /*     const [activeIndex, setActiveIndex] = useState(0); */
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentIndexRef = useRef(0);

  const sections = [section1Ref, section2Ref, section3Ref, section4Ref];

  useEffect(() => {
    const a3 = gsap.timeline();
    a3.fromTo(
      polygon4Ref.current,
      { drawSVG: "0%" },
      { drawSVG: "-100%", duration: 1.5, ease: "power1.inOut" }
    )

      .fromTo(
        polygon5Ref.current,
        { drawSVG: "0%" },
        { drawSVG: "100%", duration: 1.5, delay: -1.5, ease: "power1.inOut" }
      )

      .to(".ovrlywht", {
        /*  opacity: 0, */
        y: "-100%",
        duration: 2,
        delay: -1,
        ease: "Power2.easeInOut",
      })
      .fromTo(
        polygon4Ref.current,
        { drawSVG: "-100%" },
        { drawSVG: "0%", duration: 0.5, ease: "power1.inOut" }
      )
      .fromTo(
        polygon5Ref.current,
        { drawSVG: "100%" },
        { drawSVG: "0%", duration: 0.5, delay: -0.5, ease: "power1.inOut" }
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
        },
        "-=1.2"
      );
  }, []);

  const playEntryAnimation = (index) => {
    gsap.set([ttbxsRef.current, rightSecRef.current, leftSecRef.current], {
      x: 0,
      opacity: 1,
    });

    const spStatsItems = spStats.current.querySelectorAll("div");
    const statItems = statsRef.current.querySelectorAll("div");
    const a1 = gsap.timeline();
    const b1 = gsap.timeline();
    const c1 = gsap.timeline();
    const d1 = gsap.timeline();

    switch (index) {
      case 0:
        a1.set(videoRef.current, { x: "0%" })
          .set(brdrRef.current, { x: "0%", width: "0%" })
          .set(blockRefs.current, { opacity: 1, delay: 0.5, height: "100%" })
          .fromTo(
            videoRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
          )
          .fromTo(
            titleOneRef.current,
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
          )
          .fromTo(
            brdrRef.current,
            { width: "0%", opacity: 1 },
            {
              width: "100%",
              opacity: 1,
              duration: 1,
              ease: "power3.easeInOut",
            },
            "-=1.5"
          )
          .fromTo(
            subtitleRef.current,
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=1"
          )
          .fromTo(
            iconsRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.5"
          )
          .fromTo(
            overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: "power3.out" },
            "-=4"
          );

        break;
      case 1:
        b1.fromTo(
          videoBgRef.current,
          { y: 0, opacity: 0, width: "0%" },
          {
            y: 0,
            width: "100%",
            opacity: 1,
            delay: 0,
            duration: 1.3,
            ease: "power1.in",
          }
        )
          .fromTo(
            leftBgRef.current,
            { y: 0, width: "0%", opacity: 0 },
            {
              y: 0,
              width: "100%",
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            },
            "+=0.5"
          )
          .fromTo(
            title2Ref.current,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: -0.8, ease: "power3.out" }
          )
          .fromTo(
            dsrnRef.current,
            { width: "0%", opacity: 0 },
            {
              width: "100%",
              opacity: 1,
              duration: 1,
              delay: -0.5,
              ease: "power3.out",
            }
          )
          .fromTo(
            descriptionRef.current,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: -0.5, ease: "power3.out" }
          )
          .fromTo(
            brdrsRef.current,
            { x: -50, width: "0%", opacity: 0 },
            {
              x: 0,
              width: "100%",
              opacity: 1,
              duration: 1,
              delay: -0.5,
              ease: "power1.inOut",
            }
          )
          .fromTo(
            statItems,
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              delay: -0.5,
              ease: "power3.out",
              stagger: 0.2,
            }
          );
        break;
      case 2:
        c1.set(splftimng.current, { opacity: 0, width: '0%', x: 0 })
         .set(sptitle.current, { opacity: 0 })
         .set(spdscrpt.current, { opacity: 0 })
         .set(spbtn.current, { opacity: 0 })
         .set(sprghtBx.current, { opacity: 0, x: 0})
         .set(sprIcnim.current, { opacity: 0, x: 0})
         .set(spBrdOne.current, { opacity: 0, x: 0})


         /*  .set(bgdivRef.current, { opacity: 0, x: 0 })
          .set(leftContentRef.current, { opacity: 0 })
          .set(bottomTextRef.current, { opacity: 0, x: 0 })
          .set(polygon1Ref.current, { drawSVG: "0%" })
          .set(polygon2Ref.current, { drawSVG: "0%" })
          .set(polygon3Ref.current, { drawSVG: "0%", opacity: 1 })
          .set(leftContentRef.current, { opacity: 0 }) */

          .fromTo(
            splftimng.current,
            { x: -50, opacity: 0, width: '0%' },
            { x: 0, opacity: 1, width: '100%', duration: 1, delay: 0, ease: "power1.out" }
          )
          .fromTo(
            sprghtBx.current,
            { x: 50, opacity: 0, },
            { x: 0, opacity: 1, duration: 0.8, delay: 0, ease: "power1.out" },'-=0.5'
          )
          .fromTo(
            splftbg.current,
            { x: -50, opacity: 0, width: '0%' },
            { x: 0, opacity: 1, width: '100%', duration: 0.8, delay: -0.5, ease: "power1.out" }, '-=0'
          )
          .fromTo(
            sptitle.current,
            { x: -50, opacity: 0, },
            { x: 0, opacity: 1,  duration: 0.8, delay: 0, ease: "power1.out" }, '-=0.3'
          )
          .fromTo(
            spdscrpt.current,
            { x: -50, opacity: 0, },
            { x: 0, opacity: 1,  duration: 0.8, delay: 0, ease: "power1.out" }, '-=0.3'
          )
          .fromTo(
            spbtn.current,
            { x: -50, opacity: 0, },
            { x: 0, opacity: 1,  duration: 0.8, delay: 0, ease: "power1.out" }, '-=0.3'
          )
        
          .fromTo(
            sprIcnim.current,
            { x: 50, opacity: 0, },
            { x: 0, opacity: 1,  duration: 0.8, delay: 0, ease: "power1.out" }, '-=1.5'
          )
            .fromTo(
            spBrdOne.current,
            { x: -100, opacity: 0,  },
            { x: 0, opacity: 0.2,  duration: 0.8, delay: 0, ease: "power1.out" }, '-=0.3'
          )
        .fromTo(
            spStatsItems,
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              delay: -0.5,
              ease: "power3.out",
              stagger: 0.2,
            }, '-=0.6'
          )

          /* 
          .fromTo(
            leftContentRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1.5, duration: 0.8, delay: 0, ease: "power1.in" }
          )
          .fromTo(
            rightImageRef.current,
            { x: 50, width: "0%", opacity: 0 },
            {
              x: 0,
              width: "100%",
              opacity: 1,
              duration: 1,
              delay: 0,
              ease: "power1.in",
            }
          )
          .fromTo(
            swiperRef.current,
            { x: 300, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: "power1.inOut" },
            "-=1"
          )
          .fromTo(
            polygon1Ref.current,
            { drawSVG: "0%" },
            { drawSVG: "-100%", duration: 1, delay: -1, ease: "power1.inOut" }
          )
          .fromTo(
            polygon2Ref.current,
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 1, delay: -1.5, ease: "power1.inOut" }
          )
          .fromTo(
            polygon3Ref.current,
            { drawSVG: "0%" },
            {
              drawSVG: "100%",
              duration: 3,
              delay: -2,
              ease: "power1.inOut",
              repeat: 0,
              yoyo: true,
            }
          )
          .fromTo(
            bottomTextRef.current,
            { x: 30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, delay: 0, ease: "power1.in" },
            "-=1.5"
          )
          .fromTo(
            bgdivRef.current,
            { x: 0, opacity: 0, scale: 1 },
            { x: 0, opacity: 0.06, scale: 1.1, duration: 5, ease: "power1.in" },
            "-=3.5"
          ) */;

        break;
      case 3:
        d1.set(bgdivRef.current, { opacity: 0, x: 0 })
          .set(srvttlRef.current, { opacity: 0 })
          .set(srvsImgRef.current, { opacity: 0, width: "0%" })
          .set(countRef.current, { opacity: 0 })
          .set(textItemsRef.current, { opacity: 0, y: 0 })
          .set(brdonRef.current, { opacity: 0 })
          .set(brdtwsRef.current, { opacity: 0, height: "0%" })
          .set(srvBgimg.current, { opacity: 0})
          .set(srvsVct.current, { opacity: 0})
          .set(srvsCntb.current, { opacity: 0})
          .set(srvsArrw.current, { opacity: 0})
          .set(srvsRghtBx.current, { opacity: 0, x: 0})
          .set(srvLftBx.current, { opacity: 0, x: 0})

          .fromTo(
            srvBgimg.current,
            {  opacity: 0 },
            { opacity: 1, duration: 1.5,  ease: "power3.out", transformOrigin: "50% 50%",  }
          )
          .fromTo(
            srvLftBx.current,
            {  opacity: 0 },
            { opacity: 1, duration: 0.5,  ease: "power3.out",  },'-=0.5'
          )
          .fromTo(
            srvttlRef.current,
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, delay: 0, ease: "power3.out" }, '-=0.5'
          )
        
       
          .fromTo(
            brdonRef.current,
            { x: -30, opacity: 0 },
            {
              x: 0,

              opacity: 0.1,
              duration: 1.2,
              ease: "power3.out",
            },
            "-=0.5"
          )
           .fromTo(
            textItemsRef.current,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.8,
              ease: "power3.out",
            },"-=1"
          )
            .fromTo(
            srvsRghtBx.current,
            { x: 30, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.5,  ease: "power3.out" },"-=1.5"
          )
          .fromTo(
            srvsImgRef.current,
            { x: 0, width: "0%", opacity: 0 },
            {
              x: 0,
              width: "100%",
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            },
            "-=1.5"
          )
          .fromTo(
            srvsVct.current,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.inOut",
            }, "-=0.5"
          )
          .fromTo(
            srvsCntb.current,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power3.inOut",
            }, "-=1"
          )
          .fromTo(
            srvsArrw.current,
            { y: -30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.inOut",
            }, "-=0.5"
          )
          

         ;
        break;
    }
  };

  const playExitAnimation = (index, onComplete) => {
    const a2 = gsap.timeline();
    const b2 = gsap.timeline();
    const c2 = gsap.timeline();
    const d2 = gsap.timeline();
    const t1 = gsap.timeline({ onComplete });
    switch (index) {
      case 0:
        a2.to(
          videoRef.current,
          {
            scale: 0.9,
            duration: 0.6,
            delay: 0,
            transformOrigin: "50% 50%",
            ease: "power1.inOut",
          },
          "+=0.5"
        )
          .to(
            videoRef.current,
            { x: "-100%", duration: 1, ease: "power1.inOut" },
            "+=0.5"
          )
          .to(
            titleOneRef.current,
            { opacity: 0, x: -30, duration: 0.5, ease: "power3.out" },
            "-=2.1"
          )
          .to(
            subtitleRef.current,
            { opacity: 0, x: -30, duration: 0.5, ease: "power3.out" },
            "-=1.9"
          )
          .to(
            iconsRef.current,
            { opacity: 0, y: -30, duration: 1, ease: "power3.out" },
            "-=1.7"
          )
          .to(
            brdrRef.current,
            { opacity: 0, x: "100%", duration: 1, ease: "power3.out" },
            "-=1.9"
          )
          .to(
            overlayRef.current,
            { opacity: 0, width: "100%", duration: 1, ease: "power3.out" },
            "-=0.1"
          );

        break;
      case 1:
        b2.to(
          rightSecRef.current,
          { x: 800, opacity: 0, duration: 1.1, ease: "power1.inOut" },
          0
        ).to(
          leftSecRef.current,
          { x: -800, opacity: 0, duration: 1.1, ease: "power1.inOut" },
          0
        );
        /*   .to(ttbxsRef.current, { x: 800, opacity: 0, duration: 1.5, ease: 'power1.in' }, 0)
         */
        break;
      case 2:
        c2.to(
          sprghtBx.current,
          { x: 800, opacity: 0, duration: 1.2, ease: "power1.inOut" },
          0
        ).to(
          splftimng.current,
          { x: -800, opacity: 0, duration: 1.2, ease: "power1.inOut" },
          0
        );
        
        
        
      /*   .to(leftContentRef.current, {
          x: -50,
          opacity: 0,
          duration: 1,
          delay: -0.5,
          ease: "power1.out",
        })
          .to(rightImageRef.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            delay: -1,
            ease: "power1.out",
          })
          .fromTo(
            swiperRef.current,
            { x: 0, opacity: 1 },
            {
              x: 300,
              opacity: 0,
              duration: 1.5,
              delay: -1.5,
              ease: "power1.in",
            }
          )
          .to(
            bgdivRef.current,
            { scale: 1.5, opacity: 0, ease: "power1.inOut", duration: 2 },
            "-=1.2"
          )
          .fromTo(
            bottomTextRef.current,
            { x: 0, opacity: 1 },
            {
              x: 30,
              opacity: 0,
              duration: 0.5,
              delay: -0.8,
              ease: "power1.in",
            },
            "-=1"
          )
          .fromTo(
            polygon1Ref.current,
            { drawSVG: "-100%" },
            { drawSVG: "0%", duration: 1, ease: "power1.inOut" },
            "-=1.8"
          )
          .fromTo(
            polygon2Ref.current,
            { drawSVG: "-100%" },
            { drawSVG: "0%", duration: 1, ease: "power1.inOut" },
            "-=1.8"
          )
          .fromTo(
            polygon3Ref.current,
            { drawSVG: "-100%" },
            { drawSVG: "0%", duration: 0.5, ease: "power1.inOut", opacity: 0 },
            "-=2.5"
          ); */
        /*   gsap.fromTo(
            bgImageRef.current,
            { x: 0, opacity: 1 },
            { x: 0, opacity: 0, scale: 1.2, duration: 1, delay: 0, ease: "power1.in" }, '-=1.5'
          ) */

        break;
      case 3:
        d2.to(
          srvLftBx.current,
          { x: -100, opacity: 0, duration: 1, ease: "power1.in" },
          0
        ).to(
          srvsRghtBx.current,
          { x: 800, opacity: 0, duration: 1, ease: "power1.in" },
          0
        )
         .fromTo(
          srvBgimg.current,
          {  opacity: 1 },
          {  opacity: 0, duration: 1, ease: "power3.out" }, '-=0.8'
        );
        /* .fromTo(
          srvttlRef.current,
          { x: 0, opacity: 1 },
          { x: 50, opacity: 0, duration: 1, ease: "power3.out" }
        )
       
         
          .fromTo(
            brdtwsRef.current,
            { y: -50, height: "100%", opacity: 0 },
            {
              y: 0,
              height: "0%",
              opacity: 1,
              duration: 1,
              delay: -1,
              ease: "power1.in",
            },
            "-=0.5"
          )
          .fromTo(
            srvsImgRef.current,
            { x: 0, width: "100%", opacity: 1 },
            {
              x: 50,
              width: "0%",
              opacity: 0,
              duration: 1,
              delay: -1,
              ease: "power1.in",
            },
            "-=0.5"
          )
          .fromTo(
            countRef.current,
            { x: 0, width: "100%", opacity: 1 },
            {
              x: 50,
              width: "0%",
              opacity: 0,
              duration: 0.5,
              delay: 0,
              ease: "power1.in",
            },
            "-=1"
          );
        t1.fromTo(
          textItemsRef.current,
          { y: 0, opacity: 1 },
          {
            y: 40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        ); */
        break;
    }
  };

  const updateSlides = (newIndex) => {
    const prevIndex = currentIndexRef.current;
    currentIndexRef.current = newIndex;
    setCurrentIndex(newIndex);
    setIndexToScroll(newIndex);

    switch (newIndex) {
      case 0:
        setActiveSection("section1");
        break;
      case 1:
        setActiveSection("section2");
        break;
      case 2:
        setActiveSection("section3");
        break;
      case 3:
        setActiveSection("section4");
        break;
      default:
        break;
    }

    clearTimeout(timeoutRef.current);

    playExitAnimation(prevIndex, () => {
      sections.forEach((section, i) => {
        const el = section.current;

        if (i === newIndex) {
          gsap.set(el, { visibility: "inherit", zIndex: 1 });

          timeoutRef.current = setTimeout(() => {
            gsap.set(el, { zIndex: 2 });
          }, 2200);

          playEntryAnimation(i);
        } else if (i === prevIndex) {
          timeoutRef.current = setTimeout(() => {
            gsap.set(el, { zIndex: 1 });
          }, 2200);
        } else {
          gsap.set(el, { visibility: "hidden", zIndex: 0, opacity: 1 });
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
    updateSlides(index);
  };

  useEffect(() => {
    if(currentIndex !== indexToScroll){
      updateSlides(indexToScroll);
    }
  }, [indexToScroll]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleScroll, { passive: false });

    // Initialize first slide
    gsap.set(section1Ref.current, {
      visibility: "inherit",
      zIndex: 2,
      opacity: 1,
    });
    requestAnimationFrame(() => playEntryAnimation(0));

    return () => {
      container.removeEventListener("wheel", handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const content = [
    {
      image: "/assets/images/services/engineering-construction.jpg",
      title: "Engineering & Construction",
      description: "Delivering complex infrastructure and building projects with precision, safety, and quality at the core. We bring engineering excellence to life across industries and geographies.",
    },
    {
      image: "/assets/images/services/servicemain.jpg",
      title: "Design Studio",
      description: "Our design studio blends creativity with functionality to craft innovative, human-centric spaces. From concept to detail, we create solutions that inspire and endure.",
    },
    {
      image: "/assets/images/services/mep.jpg",
      title: "MEP",
      description: "We provide fully integrated MEP services that ensure efficiency, sustainability, and performance in every built environment. Tailored solutions backed by technical expertise.",
    },
    {
      image: "/assets/images/services/interior-fit-out.jpg",
      title: "Interior Fit-out",
      description: "Transforming interiors into purposeful and aesthetically refined spaces. We manage complete fit-out solutions with attention to detail and commitment to quality delivery.",
    },
    {
      image: "/assets/images/services/Facade.jpg",
      title: "Façade",
      description: "Specializing in advanced façade systems that merge architecture and engineering. We design and execute high-performance, energy-efficient, and visually striking exteriors.",
    },
    {
      image: "/assets/images/services/Facility-Management.jpg",
      title: "Facilities Management",
      description: "Comprehensive facility management services focused on operational efficiency, asset longevity, and user satisfaction. We ensure smooth day-to-day operations with proactive care.",
    },
    {
      image: "/assets/images/services/Water.jpg",
      title: "Water",
      description: "Sustainable water infrastructure solutions that address urban and industrial needs. Our expertise spans treatment, distribution, and management systems with a focus on resilience.",
    },
  ];

  const [activeService, setActiveService] = useState({
    image: content[0].image,
    title: content[0].title,
    description: content[0].description,
    index: 0,
  });

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden"
    >
      <div className="fixed w-screen h-screen z-[500] mswd pointer-events-none grid content-center load-sec2">
        <svg className="h-full w-full absolute left-0 right-0 z-20 object-cover loader-im scale-[1.2]" id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1920 1080">

  <defs>
    <style>
   
    </style>
  </defs>
  <path class="st21" d="M0,0v1080h1920V0H0ZM1220.2,572.1v9.1c-.1,0-.2,4.4-.2,4.4l-.2,4.3-.2,4.3-.2,4.1-.2,2.6-.3,2.5-.4,2.4-.5,2.2-.3,1.1-.3,1.1-.3,1-.3,1.1-.3,1-.4,1-.4.9-.4.9-.4.9-.4.9-.4.8-.5.7-.5.8-.5.7-.5.7-.6.7-.5.6-.6.6-.5.6-.6.5-.6.5-.7.4-.6.4-.7.4-1,.4-1,.4-1.1.3-1.1.3-1.2.3-1.3.2-1.5.2h-3.2c0,0-1.9-.3-1.9-.3l-2-.3-2.4-.5-2.5-.8-2.8-.8-3.1-1-3.4-1.2-139.2-53.9-.9-.3-.8-.3-.7-.2h-.7c0,0-.7-.1-.7-.1h-.5c0,0-.6.1-.6.1l-.5.2-.4.2-.4.3-.3.3-.3.3-.3.3-.3.4-.2.4-.2.5-.3.9-.2,1-.2,1.1v1.1c0,0-.2,2.1-.2,2.1v1.8s0,112.8,0,112.8l-49.3-30.6-1.1-.6-1-.7-1-.7-1.1-.8-.9-.9-.9-1-.4-.5-.4-.6-.4-.6-.4-.6-.4-.6-.4-.6-.3-.7-.3-.8-.3-.8-.3-.9-.2-.9-.3-1-.2-1-.2-1-.2-1v-1.2c-.1,0-.2-1.2-.2-1.2v-1.2c0,0-.1-1.3-.1-1.3v-125.8c0,0,0-2.6,0-2.6l.2-2.5.3-2.4.3-2.2.5-2,.5-1.9.6-1.7.7-1.6.8-1.5.9-1.3.9-1.2,1-1,1.1-.9,1.2-.8,1.2-.7,1.3-.6,1.5-.4,1.4-.3,1.6-.2h1.7c0-.1,1.7-.1,1.7-.1h1.8c0,.1,1.9.3,1.9.3l1.9.3,2,.4,2.2.5,2.2.6,2.3.7,2.4.7,2.5.9,2.5,1,2.6,1,139.3,61,.9.3.9.2h.7c0,0,.8,0,.8,0l.6-.2.6-.2.6-.3.5-.4.4-.4.3-.5.3-.5.3-.5.2-.5.2-.6.2-.5v-.5c0,0,.2-2,.2-2v-1.6s.1-1.2.1-1.2v-4c0,0,0-1.5,0-1.5v-.7s-.1-.7-.1-.7v-.6c-.1,0-.2-.6-.2-.6l-.2-.7-.2-.6v-.6c-.1,0-.4-.6-.4-.6l-.3-.5-.3-.5-.3-.5-.3-.5-.3-.5-.4-.5-.4-.4-.5-.4-.6-.5-.7-.5-.7-.5-.8-.5-1.7-1-1.9-1.1-1.9-1-1.9-1-1.8-.9-1.5-.7-181.1-99.4h0s-191.9,108.4-191.9,108.4l-1.7.9-1.6.9-.7.4-.7.4-.7.5-.7.4-.6.5-.5.5-.4.6-.4.6-.3.6-.2.6-.2.7v.9c-.1,0-.1,1.6-.1,1.6v4.3c0,0,0,1.3,0,1.3v5.4c.1,0,.2.4.2.4l.2.4.2.4.3.4.3.3.4.3.5.2.5.2h.6c0,.1.7.1.7.1h.8c0,0,.8-.2.8-.2l.9-.2,1-.3,140.8-63.9,1.2-.5,1.3-.5,1.5-.5,1.5-.5,1.6-.5,1.7-.4,1.7-.4,1.8-.3,1.8-.3h1.9c0-.1,1.9-.2,1.9-.2h1.9l1.9.2,1.8.3,1.9.4,1.8.5,1.8.7,1.8.8,1.6,1,1.7,1.1,1.5,1.3,1.4,1.5,1.3,1.8,1.2,1.9,1.1,2.1,1,2.4.8,2.6.7,2.9.5,3.1.3,3.4v3.7c.1,0,0,3.9,0,3.9v84.6s-.2,2.4-.2,2.4v2.6c-.1,0-.2,2.7-.2,2.7v2.9c0,0-.2,1.4-.2,1.4l-.2,1.4-.2,1.6-.3,1.5-.3,1.6-.4,1.5-.4,1.6-.5,1.6-.6,1.5-.7,1.6-.8,1.5-.9,1.6-1,1.5-1.1,1.4-1.2,1.5-1.4,1.3-1.5,1.4-1.6,1.3-1.8,1.3-2,1.3-2.1,1.2-2.3,1.1-2.5,1.1-2.6,1.1-225.5,69.4-.2-64.2,176.5-62.8,1.5-.5,1.4-.5,1.4-.5,1.4-.5,1.4-.6,1.4-.5,1.4-.6,1.4-.6,1.1-.5,1-.5.5-.3.5-.3.4-.4.4-.3.3-.3.3-.4.3-.4.2-.5.2-.5.2-.5v-.6c0,0,.1-.6.1-.6v-12.4s0-1.1,0-1.1v-1.1s-.2-.9-.2-.9l-.2-.8-.2-.4-.2-.3-.2-.3-.2-.3-.2-.3-.3-.2-.3-.2-.3-.2-.3-.2h-.4c0-.1-.4-.2-.4-.2h-.4c0,0-.4,0-.4,0h-.5c0,0-.5,0-.5,0h-.5c0,0-1.1.2-1.1.2l-1.3.3-1.3.4-1.4.6-145.3,57-2.4.8-2.4.7-2.2.7-2.1.4-2,.4-2,.3-1.9.2-1.8.2h-1.7s-1.6.1-1.6.1h-1.5c0,0-1.4-.2-1.4-.2l-1.3-.2-1.3-.2-1.1-.3-1-.3-.7-.3-.7-.3-.6-.4-.6-.4-.6-.4-.5-.5-.5-.5-.4-.5-.5-.6-.4-.6-.4-.7-.4-.8-.3-.7-.3-.8-.3-.9-.2-.9-.2-.9-.2-1-.2-1-.2-1.1-.3-2.2-.2-2.4v-2.6c-.1,0-.2-2.7-.2-2.7v-6c0,0,0-3.3,0-3.3v-10.5c0,0,0-3.6,0-3.6v-11.1c0,0,0-3.7,0-3.7v-26.5c0,0,0-2,0-2v-1.9c0,0,.2-2,.2-2l.2-1.9.2-2,.2-1.9.3-1.9.3-1.9.4-1.9.4-1.8.4-1.9.5-1.8.6-1.8.6-1.7.8-1.8.7-1.6.8-1.4.8-1.4,1-1.3,1-1.3,1-1.2,1.1-1.2,1.2-1.2,1.2-1.2,1.2-1.1,1.2-1.2,1.3-1.1,1.3-1.1,2.7-2.1,2.8-2,1.9-1.3,1.9-1.3,1.9-1.2,1.9-1.3,1.8-1.2,1.8-1.2,1.7-1.2,1.7-1.2,221-125v2.2s0-2.2,0-2.2l14.3,7.7,14.6,7.9,15,8.1,30.8,16.7,15.5,8.4,15.7,8.5,15.6,8.4,15.5,8.4,15.3,8.2,15,8.1,14.8,8,14.3,7.8,13.8,7.5,13.3,7.3,12.6,6.9,1.2.6,1.2.6,1.2.8,1.1.8,1.1.8,1.1.9,1.1.9,1,.9,1,1.1,1,1.1,1,1.1.9,1.2.9,1.2.8,1.2.8,1.3.9,1.3.7,1.4.7,1.4.7,1.4.6,1.6.6,1.6.6,1.6.5,1.7.5,1.7.4,1.8.4,1.7.3,1.9.3,1.8.2,1.9.2,1.9v2c.1,0,.2,2,.2,2l.2,4.2v4.3c.1,0,.2,4.3.2,4.3v4.5c.1,0,.2,4.5.2,4.5v4.6c.1,0,.2,4.6.2,4.6v9.2s0,4.6,0,4.6Z"/>
  <g>
    <polygon ref={polygon4Ref} class="st01" points="960.5 356.5 960.5 425.1 1142.5 525 1144 525.7 1145.8 526.6 1147.7 527.5 1149.6 528.6 1151.6 529.6 1153.3 530.6 1154.1 531.1 1154.8 531.7 1155.5 532.1 1156.1 532.6 1156.6 533 1156.9 533.5 1157.4 534 1157.7 534.4 1158 535 1158.3 535.5 1158.6 536 1158.9 536.5 1159.1 537.1 1159.2 537.7 1159.4 538.3 1159.6 539 1159.7 539.6 1159.8 540.3 1159.8 541 1159.9 541.7 1159.9 543.2 1159.9 544.3 1159.9 545.3 1159.9 546.2 1159.9 547.2 1159.9 548.4 1159.8 550 1159.7 552 1159.6 552.5 1159.4 553 1159.3 553.6 1159.1 554.1 1158.8 554.6 1158.5 555.1 1158.1 555.6 1157.7 555.9 1157.3 556.3 1156.7 556.6 1156.1 556.8 1155.5 557.1 1154.7 557.1 1153.9 557.1 1153.1 556.8 1152.1 556.6 1012.9 495.6 1010.3 494.6 1007.8 493.7 1005.3 492.8 1003 492.1 1000.7 491.4 998.5 490.8 996.4 490.3 994.3 489.9 992.4 489.6 990.5 489.4 988.7 489.3 987 489.3 985.3 489.4 983.7 489.5 982.3 489.9 980.8 490.3 979.5 490.9 978.2 491.6 977 492.3 975.9 493.2 974.9 494.2 974 495.5 973.1 496.8 972.3 498.3 971.6 499.8 971 501.5 970.6 503.5 970.1 505.4 969.8 507.6 969.5 510 969.3 512.5 969.2 515.1 969.2 633.9 969.2 639.6 969.2 640.9 969.3 642.3 969.3 643.5 969.4 644.6 969.5 645.8 969.7 646.8 969.9 647.8 970.1 648.8 970.3 649.8 970.6 650.6 970.8 651.5 971.2 652.2 971.5 653 971.8 653.7 972.2 654.4 972.5 655 973 655.6 973.4 656.2 973.8 656.8 974.3 657.3 975.2 658.2 976.1 659.1 977.2 659.9 978.1 660.7 979.1 661.4 980.2 662 1029.6 692.6 1029.4 579.8 1029.5 578 1029.6 575.9 1029.7 574.8 1029.8 573.7 1030 572.7 1030.3 571.7 1030.5 571.2 1030.7 570.8 1031 570.4 1031.3 570.1 1031.6 569.8 1031.9 569.5 1032.3 569.2 1032.8 569.1 1033.3 568.9 1033.8 568.9 1034.4 568.8 1035 568.9 1035.7 568.9 1036.4 569.1 1037.2 569.3 1038.1 569.6 1177.3 623.5 1180.7 624.7 1183.8 625.7 1186.5 626.5 1189.1 627.3 1191.4 627.8 1193.5 628.1 1195.4 628.3 1197.1 628.3 1198.6 628.3 1200.1 628.2 1201.4 628 1202.6 627.8 1203.7 627.4 1204.8 627.1 1205.8 626.7 1206.8 626.3 1207.5 625.9 1208.1 625.5 1208.8 625 1209.4 624.5 1209.9 624 1210.5 623.4 1211.1 622.8 1211.6 622.2 1212.2 621.5 1212.7 620.8 1213.2 620.1 1213.7 619.3 1214.2 618.6 1214.6 617.8 1215 616.9 1215.5 616.1 1215.9 615.2 1216.3 614.2 1216.7 613.3 1217 612.3 1217.4 611.2 1217.7 610.2 1217.9 609.2 1218.2 608 1218.7 605.8 1219.1 603.4 1219.4 600.9 1219.6 598.3 1219.7 594.2 1219.9 589.9 1220 585.6 1220.1 581.1 1220.2 576.6 1220.2 572.1 1220.2 567.5 1220.2 562.9 1220.2 558.2 1220.1 553.7 1220 549.1 1220 544.6 1219.9 540.1 1219.8 535.8 1219.7 531.5 1219.5 527.3 1219.4 525.3 1219.3 523.4 1219.1 521.5 1218.9 519.5 1218.6 517.8 1218.3 515.9 1217.9 514.2 1217.5 512.4 1217 510.8 1216.5 509.1 1215.9 507.5 1215.3 506 1214.7 504.4 1214 503 1213.3 501.5 1212.6 500.1 1211.8 498.8 1211 497.5 1210.2 496.3 1209.3 495.1 1208.4 493.9 1207.4 492.8 1206.4 491.7 1205.4 490.7 1204.4 489.7 1203.3 488.8 1202.2 488 1201.1 487.2 1200 486.4 1198.8 485.6 1197.6 485 1196.4 484.4 1183.8 477.5 1170.5 470.2 1156.7 462.7 1142.4 454.9 1127.7 446.9 1112.7 438.8 1097.4 430.5 1081.9 422.2 1066.4 413.8 1050.7 405.3 1035.2 396.9 1004.4 380.3 989.4 372.2 974.7 364.2 960.5 356.5"/>
    <polygon  ref={polygon5Ref} class="st11" points="960.4 356.5 739.4 481.5 737.7 482.8 736 484 734.2 485.2 732.3 486.4 730.5 487.7 728.5 488.9 726.7 490.2 724.7 491.6 722 493.5 719.2 495.7 717.9 496.8 716.6 497.8 715.3 499 714.1 500.1 712.9 501.3 711.7 502.6 710.7 503.8 709.7 505 708.7 506.4 707.7 507.7 706.9 509.1 706.2 510.5 705.4 512.2 704.7 513.9 704 515.6 703.4 517.5 702.9 519.2 702.4 521.1 702 522.9 701.6 524.9 701.3 526.8 701 528.7 700.8 530.6 700.7 532.5 700.5 534.4 700.4 536.4 700.3 538.3 700.3 540.3 700.3 544 700.3 547.8 700.3 551.6 700.3 555.4 700.3 559.2 700.3 563 700.3 566.8 700.3 570.5 700.3 574.3 700.3 578 700.3 581.6 700.3 585.2 700.4 588.8 700.4 592.3 700.4 595.7 700.4 599 700.5 602.1 700.5 605 700.6 607.7 700.7 610.3 700.9 612.7 701.1 614.9 701.3 616 701.5 617 701.7 618 701.9 618.9 702.1 619.8 702.4 620.6 702.6 621.5 703 622.2 703.3 623 703.7 623.6 704.1 624.3 704.6 624.9 705 625.4 705.6 625.9 706.1 626.4 706.7 626.9 707.3 627.3 707.9 627.7 708.7 627.9 709.4 628.2 710.5 628.5 711.5 628.8 712.8 629 714.1 629.2 715.5 629.3 717 629.4 718.6 629.3 720.3 629.3 722.1 629.1 724 628.9 726 628.6 728.1 628.2 730.2 627.8 732.4 627.1 734.7 626.4 737.1 625.7 882.4 568.7 883.9 568.1 885.2 567.7 886.4 567.4 887.5 567.2 888 567.1 888.5 567.1 889 567.1 889.4 567.1 889.8 567.2 890.1 567.3 890.6 567.4 890.9 567.6 891.2 567.7 891.5 568 891.7 568.2 891.9 568.5 892.2 568.8 892.4 569.1 892.5 569.4 892.7 569.8 892.9 570.6 893 571.4 893.1 572.5 893.1 573.6 893 586 893 586.6 892.9 587.3 892.7 587.8 892.6 588.3 892.4 588.8 892.1 589.1 891.8 589.6 891.5 589.9 891.1 590.2 890.7 590.6 890.2 590.9 889.7 591.2 888.7 591.7 887.6 592.1 886.2 592.7 884.8 593.3 883.4 593.9 882 594.5 880.6 595 879.2 595.5 877.8 596 876.3 596.6 699.8 659.3 699.9 723.5 925.4 654.1 928.1 652.9 930.6 651.9 932.9 650.7 935 649.5 937 648.2 938.8 646.9 940.4 645.6 941.9 644.2 943.3 642.9 944.5 641.4 945.6 639.9 946.6 638.5 947.5 636.9 948.2 635.4 948.9 633.8 949.5 632.3 950 630.8 950.4 629.2 950.7 627.7 951.1 626.2 951.3 624.7 951.5 623.1 951.7 621.7 951.8 620.2 951.9 617.3 952 614.6 952.1 612 952.2 609.6 952.3 525 952.4 521.1 952.2 517.4 951.9 514 951.4 510.9 950.7 508 949.9 505.4 949 503 947.9 500.9 946.7 499 945.4 497.2 944 495.7 942.5 494.3 940.9 493.2 939.2 492.2 937.5 491.4 935.7 490.7 933.9 490.2 932 489.8 930.2 489.6 928.3 489.4 926.4 489.4 924.5 489.5 922.7 489.6 920.9 489.8 919.1 490.1 917.4 490.5 915.6 490.9 914 491.3 912.5 491.8 911 492.3 909.7 492.8 908.5 493.4 767.8 557.3 766.7 557.6 765.8 557.8 765 557.9 764.2 558 763.5 558 762.9 557.9 762.5 557.7 762 557.4 761.6 557.1 761.3 556.8 761 556.4 760.9 556 760.7 555.7 760.6 555.2 760.5 554.9 760.5 554.4 760.5 552.8 760.5 551.3 760.5 549.8 760.5 548.5 760.5 547.1 760.5 545.7 760.5 544.2 760.5 542.6 760.6 541.7 760.8 541 761 540.4 761.3 539.7 761.8 539.1 762.2 538.6 762.7 538.1 763.3 537.6 764 537.2 764.7 536.7 765.5 536.3 766.2 535.8 767.8 534.9 769.5 534 961.4 425.6 960.4 356.5"/>
  </g>
</svg>
      {/*   <svg
          className="h-[370px] w-[370px] 3xl:h-[450px] 3xl:w-[450px] absolute left-0 right-0 z-20"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 151 106.8"
        >
          <defs>
            <style></style>
          </defs>
          <polygon
            ref={polygon4Ref}
            class="st0"
            points="75.6 .5 75.6 20.3 128.1 49 128.5 49.3 129 49.5 129.6 49.8 130.1 50.1 130.7 50.4 131.2 50.7 131.4 50.8 131.6 51 131.8 51.1 132 51.3 132.1 51.4 132.2 51.5 132.4 51.6 132.5 51.8 132.6 51.9 132.7 52.1 132.7 52.2 132.8 52.4 132.9 52.5 132.9 52.7 133 52.9 133 53.1 133 53.3 133.1 53.5 133.1 53.7 133.1 53.9 133.1 54.3 133.1 54.6 133.1 54.9 133.1 55.2 133.1 55.5 133.1 55.8 133.1 56.3 133 56.8 133 57 133 57.1 132.9 57.3 132.9 57.4 132.8 57.6 132.7 57.7 132.6 57.9 132.5 58 132.3 58.1 132.2 58.2 132 58.2 131.8 58.3 131.6 58.3 131.4 58.3 131.1 58.2 130.9 58.2 90.7 40.6 90 40.3 89.3 40 88.6 39.8 87.9 39.6 87.2 39.4 86.6 39.2 86 39.1 85.4 38.9 84.8 38.9 84.3 38.8 83.8 38.8 83.3 38.8 82.8 38.8 82.3 38.8 81.9 38.9 81.5 39.1 81.1 39.2 80.8 39.4 80.4 39.6 80.1 39.9 79.8 40.2 79.5 40.5 79.3 40.9 79.1 41.4 78.9 41.8 78.7 42.3 78.5 42.9 78.4 43.4 78.3 44.1 78.2 44.7 78.2 45.4 78.1 46.2 78.2 80.4 78.2 82.1 78.2 82.5 78.2 82.9 78.2 83.2 78.2 83.5 78.2 83.9 78.3 84.2 78.3 84.5 78.4 84.7 78.5 85 78.5 85.3 78.6 85.5 78.7 85.7 78.8 86 78.9 86.2 79 86.3 79.1 86.5 79.2 86.7 79.4 86.9 79.5 87 79.6 87.2 79.9 87.5 80.1 87.7 80.4 87.9 80.7 88.2 81 88.4 81.3 88.5 95.5 97.4 95.5 64.8 95.5 64.3 95.6 63.7 95.6 63.4 95.6 63.1 95.7 62.8 95.8 62.5 95.8 62.4 95.9 62.3 96 62.1 96 62 96.1 62 96.2 61.9 96.3 61.8 96.5 61.8 96.6 61.7 96.8 61.7 96.9 61.7 97.1 61.7 97.3 61.7 97.5 61.8 97.8 61.8 98 61.9 138.1 77.4 139.1 77.8 140 78.1 140.8 78.3 141.5 78.5 142.2 78.7 142.8 78.8 143.3 78.8 143.8 78.8 144.3 78.8 144.7 78.8 145.1 78.7 145.4 78.7 145.7 78.6 146 78.5 146.3 78.4 146.6 78.2 146.8 78.1 147 78 147.2 77.9 147.4 77.7 147.5 77.6 147.7 77.4 147.9 77.2 148 77.1 148.2 76.9 148.3 76.7 148.5 76.5 148.6 76.2 148.8 76 148.9 75.8 149 75.5 149.1 75.3 149.3 75 149.4 74.8 149.5 74.5 149.6 74.2 149.7 73.9 149.8 73.6 149.8 73.3 149.9 73 150.1 72.3 150.2 71.7 150.2 70.9 150.3 70.2 150.3 69 150.4 67.8 150.4 66.5 150.5 65.2 150.5 63.9 150.5 62.6 150.5 61.3 150.5 60 150.5 58.6 150.5 57.3 150.4 56 150.4 54.7 150.4 53.4 150.4 52.2 150.3 50.9 150.3 49.7 150.3 49.2 150.2 48.6 150.2 48 150.1 47.5 150 47 149.9 46.4 149.8 45.9 149.7 45.4 149.6 45 149.4 44.5 149.3 44 149.1 43.6 148.9 43.1 148.7 42.7 148.5 42.3 148.3 41.9 148.1 41.5 147.8 41.1 147.6 40.8 147.3 40.4 147.1 40.1 146.8 39.8 146.5 39.5 146.2 39.2 145.9 38.9 145.6 38.6 145.3 38.4 145 38.2 144.7 37.9 144.3 37.7 144 37.5 143.6 37.4 140 35.4 136.2 33.3 132.2 31.1 128.1 28.9 123.8 26.6 119.5 24.2 115.1 21.8 110.6 19.4 106.2 17 101.6 14.6 97.2 12.1 92.7 9.7 88.3 7.3 84 5 79.8 2.7 75.6 .5"
          />
          <polygon
            ref={polygon5Ref}
            class="st1"
            points="75.6 .5 11.9 36.5 11.4 36.9 10.9 37.2 10.4 37.6 9.9 37.9 9.4 38.3 8.8 38.7 8.3 39 7.7 39.4 6.9 40 6.1 40.6 5.7 40.9 5.3 41.2 5 41.6 4.6 41.9 4.3 42.2 4 42.6 3.6 42.9 3.4 43.3 3.1 43.7 2.8 44.1 2.6 44.5 2.4 44.9 2.1 45.4 1.9 45.9 1.7 46.4 1.5 46.9 1.4 47.4 1.3 47.9 1.1 48.5 1 49 .9 49.6 .9 50.1 .8 50.7 .8 51.2 .7 51.8 .7 52.3 .7 52.9 .7 53.5 .7 54.5 .7 55.6 .7 56.7 .7 57.8 .7 58.9 .7 60 .7 61.1 .7 62.2 .7 63.3 .7 64.3 .7 65.4 .7 66.4 .7 67.4 .7 68.4 .7 69.4 .7 70.4 .7 71.3 .7 72.1 .7 72.9 .8 73.6 .8 74.3 .9 75 .9 75.3 1 75.6 1.1 75.8 1.1 76.1 1.2 76.4 1.3 76.6 1.3 76.9 1.4 77.1 1.5 77.3 1.6 77.5 1.8 77.7 1.9 77.8 2 78 2.2 78.1 2.3 78.3 2.5 78.4 2.7 78.5 2.9 78.6 3.1 78.7 3.3 78.8 3.6 78.9 3.9 79 4.3 79 4.6 79.1 5.1 79.1 5.5 79.1 5.9 79.1 6.4 79.1 6.9 79.1 7.5 79 8.1 78.9 8.7 78.8 9.3 78.7 9.9 78.5 10.6 78.3 11.3 78.1 53.1 61.7 53.6 61.5 53.9 61.4 54.3 61.3 54.6 61.2 54.7 61.2 54.9 61.2 55 61.2 55.1 61.2 55.3 61.2 55.4 61.3 55.5 61.3 55.6 61.3 55.7 61.4 55.8 61.4 55.8 61.5 55.9 61.6 55.9 61.7 56 61.8 56.1 61.9 56.1 62 56.2 62.2 56.2 62.4 56.2 62.8 56.2 63.1 56.2 66.6 56.2 66.8 56.2 67 56.1 67.2 56.1 67.3 56 67.4 55.9 67.5 55.8 67.7 55.8 67.8 55.6 67.9 55.5 68 55.4 68.1 55.2 68.1 54.9 68.3 54.6 68.4 54.2 68.6 53.8 68.7 53.4 68.9 53 69.1 52.6 69.2 52.2 69.4 51.8 69.5 51.4 69.7 .5 87.8 .5 106.3 65.5 86.3 66.3 85.9 67 85.6 67.7 85.3 68.3 84.9 68.9 84.6 69.4 84.2 69.9 83.8 70.3 83.4 70.7 83 71 82.6 71.4 82.2 71.6 81.8 71.9 81.3 72.1 80.9 72.3 80.4 72.5 80 72.6 79.5 72.7 79.1 72.8 78.7 72.9 78.2 73 77.8 73.1 77.3 73.1 76.9 73.1 76.5 73.2 75.7 73.2 74.9 73.2 74.1 73.3 73.4 73.3 49.1 73.3 47.9 73.3 46.9 73.2 45.9 73 45 72.8 44.2 72.6 43.4 72.3 42.7 72 42.1 71.7 41.6 71.3 41 70.9 40.6 70.5 40.2 70 39.9 69.5 39.6 69 39.4 68.5 39.2 68 39 67.4 38.9 66.9 38.8 66.4 38.8 65.8 38.8 65.3 38.8 64.7 38.8 64.2 38.9 63.7 39 63.2 39.1 62.7 39.2 62.3 39.4 61.8 39.5 61.4 39.6 61 39.8 60.7 39.9 20.1 58.4 19.8 58.4 19.5 58.5 19.3 58.5 19.1 58.6 18.9 58.6 18.7 58.5 18.6 58.5 18.4 58.4 18.3 58.3 18.2 58.2 18.2 58.1 18.1 58 18.1 57.9 18 57.8 18 57.7 18 57.5 18 57.1 18 56.6 18 56.2 18 55.8 18 55.4 18 55 18 54.6 18 54.1 18 53.9 18.1 53.7 18.2 53.5 18.2 53.3 18.4 53.1 18.5 53 18.6 52.8 18.8 52.7 19 52.6 19.2 52.4 19.4 52.3 19.7 52.2 20.1 51.9 20.6 51.6 75.9 20.4 75.6 .5"
          />
        </svg> */}
        <div className="ovrlywht absolute w-full h-full z-[19] bg-white"></div>
       {/*  <img
          src="../assets/images/loader.svg"
          alt=""
          className="w-screen h-full z-10 absolute object-cover loader-im"
          width={1920}
          height={1080}
        /> */}

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

      {/* Menu */}
      {/* {currentIndex > 0 && (
        <div className="fixed top-0 left-0 z-50 flex flex-col gap-3">
          {[1, 2, 3].map((i, idx) => {
            let opacity = "opacity-30";
            if (i === currentIndex) opacity = "opacity-100";
            else if (Math.abs(i - currentIndex) === 1) opacity = "opacity-70";

            return (
              <button
                key={i}
                onClick={() => handleMenuClick(i)}
                className={`transition-all duration-300 font-[300] hover:font-[700] text-12 ${opacity}`}
              >
                {menuTitles[idx]}
              </button>
            );
          })}
        </div>
      )} */}

      {/* Slide 1 */}
      <div
        ref={section1Ref}
        className="absolute top-0 left-0 w-full h-full bg-transparent"
      >
        <section className="h-[100dvh] overflow-x-hidden relative scroll-area overflow-hidden bg-transparent">
          <div
            className="h-full absolute top-0 left-0 w-full z-0"
            ref={videoRef}
          >
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
          {
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-black/35 h-[100dvh]"
            ></div>
          }
        </section>
      </div>

      {/* Slide 2 */}
      <div
        ref={section2Ref}
        className="absolute top-0 left-0 w-full h-full bg-transparent"
        style={{ visibility: "hidden", zIndex: 0 }}
      >
        <section
          className="h-screen scroll-area relative bg-transparent"
          id="section1"
        >
          {/*    <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-l from-white/10 to-white/80 opacity-[0.1]">
                           <img src={sprintData.mainBgImage} alt="" width={2000} height={1500} className="w-full h-full object-cover" ref={bgImageRef} />
                         </div> */}
          <div
            className="grid grid-cols-[2fr_5fr] 3xl:grid-cols-[657px_auto] h-full bg-transparent"
            ref={ttbxsRef}
          >
            <div
              ref={leftSecRef}
              className="relative py-4 xl:py-[50px] xl:pl-[150px] overflow-hidden"
            >
             
              <div
                className="absolute top-0 w-full z-10 h-full right-0 "
                ref={leftBgRef}
              >
                 <div className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-l from-black/30 from-0% to-black/80 to-100%"></div>
                <img
                  src={aboutData.leftBgImage}
                  alt=""
                  width={2000}
                  height={1500}
                  className="w-full h-full object-cover object-right"
                />
              </div>
            </div>

            <div
              ref={rightSecRef}
              className="relative flex flex-col h-full px-10 xl:px-[90px] pb-20 xl:pb-[93px] pt-20 xl:pt-[50px] overflow-hidden"
            >
             
              <div
                className="absolute top-0 w-full z-10 h-full right-0 opacity-0"
                ref={videoBgRef}
              >
                 <div className="absolute top-0 left-0 z-[22] w-full h-full bg-gradient-to-r from-black/85 from-0% via-black/65 via-75% to-black/60 to-100% "></div>
                <video
                  src="../assets/videos/hero.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover absolute left-0 right-0"
                ></video>
              </div>

              <div
                className="relative z-40 pt-6 xl:pt-[35px] text-white"
                ref={title2Ref}
              >
                <h1 className="text-48 3xl:text-60 font-light leading-[1.166666666666667] mb-3 3xl:mb-[25px]">
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
                    33000+
                  </h3>
                  <p className="text-16 xl:text-18 font-light leading-[1.555555555555556]">
                    Employees Strength
                  </p>
                </div>
                <div>
                  <h3 className="text-24 xl:text-40 font-light leading-[auto] mb-[5px]">
                    40+
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
        className="absolute top-0 left-0 w-full h-full bg-transparent"
        style={{ visibility: "hidden", zIndex: 0 }}
      >
        <section
          id="section3"
          className="h-screen overflow-hidden relative scroll-area"
        >
          <div className="grid grid-cols-[800px_auto] 3xl:grid-cols-[1021px_auto] h-full bg-transparent">
            <div className="lftblc relative right-0" ref={splftimng}>
               <div className="bg-primary absolute w-full right-0 h-full top-0 z-[-1]" ref={splftbg}></div>
              <img
                src={'../assets/images/abut-sp.jpg'}
                alt=""
                width={2000}
                height={1500}
                className="w-full h-full object-cover absolute object-center"
              />
            </div>
            <div className=" flex flex-col h-full px-[70px] 3xl:px-[100px] pb-[120px] 3xl:pb-[150px] pt-[120px] 3xl:pt-[150px] overflow-hidden relative" ref={sprghtBx}>
              <div className="bg-primary absolute w-full left-0 h-full top-0 z-[-1]"  ref={sprgtbg}></div>
              <img ref={sprIcnim} src="/assets/images/svg/sv-02.svg" width={600} height={600} className="absolute right-0 w-[250px] 3xl:w-[300px]"/>
              <div className="">
                <h1 ref={sptitle} className="text-34 xl:text-48 3xl:text-60 leading-[1.083333333333333] font-light  mb-8 xl:mb-[25px] text-white">
                  About SP <br></br>International
                </h1>
                <p ref={spdscrpt} className="text-18 text-white font-light leading-[1.5] max-w-[90%]  3xl:max-w-[75%] mb-[30px]">
                  Shapoorji Pallonji International (SPINT) is the international
                  arm of Shapoorji Pallonji Engineering & Construction (SP E&C)
                  for its construction operations outside India.
                </p>
                <a ref={spbtn}
                  href={"/"}
                  className="text-16 leading-[1.75] font-light text-white uppercase flex items-center gap-2 cursor-pointer group "
                >
                  <span>READ MORE</span>
                  <svg
                    width="27"
                    height="18"
                    viewBox="0 0 27 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:translate-x-2 transition-all ease-in-out duration-300"
                  >
                    <path
                      d="M17.6328 2.43262L25.0111 9.0134L17.6579 15.5679"
                      stroke="#30B6F9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24.5954 9H1.98047"
                      stroke="#30B6F9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-auto relative">
                <hr ref={spBrdOne} className="border-white opacity-20 absolute top-[55%] left-[-30%] right-0"/>
                  <div className="grid grid-cols-3 " ref={spStats}>
                         <div className="text-white">
                        <h1 className="text-[35px] xl:text-[40px] font-light leading-[1] mb-[35px]">
                          350+
                        </h1>
                        <p className="text-16 xl:text-18 opacity-70 font-light leading-[1.555555555555556]">
                          Iconic Projects
                        </p>
                      </div>
                     <div className="text-white">
                        <h1 className="text-[35px] xl:text-[40px] font-light leading-[1] mb-[35px]">
                         6000+
                        </h1>
                        <p className="text-16 xl:text-18 opacity-70 font-light leading-[1.555555555555556]">
                       Dedicated Workforce
                        </p>
                      </div>
                       <div className="text-white">
                        <h1 className="text-[35px] xl:text-[40px] font-light leading-[1] mb-[35px]">
                        250+
                        </h1>
                        <p className="text-16 xl:text-18 opacity-70 font-light leading-[1.555555555555556]">
                       Happy Clients
                        </p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          {/* <div className="absolute top-0 left-0 z-0 w-full h-full bg-transparent">
            <img
              src={sprintData.mainBgImage}
              alt=""
              width={2000}
              height={1500}
              className="w-full h-full object-cover opacity-0 absolute"
              ref={bgdivRef}
            />
          </div> */}
          {/*  <div className="absolute bottom-0 xl:bottom-10 left-[20%] xl:left-[17%] w-fit h-fit z-40">
            <svg
              width="503"
              height="707"
              viewBox="0 0 503 707"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={polygon3Ref}
                d="M502 3L1.00011 506.517L1 707H502V435.467L253.584 684.968V584.013L502 334.349V3Z"
                stroke="url(#paint0_linear_987_1030)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_987_1030"
                  x1="251.5"
                  y1="3"
                  x2="251.5"
                  y2="707"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#30B6F9" stopOpacity="0.25" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute bottom-0 left-[10%] xl:left-[8%] 3xl:left-[18%] w-full h-[35%] z-10">
            <svg
              className="absolute top-[50%] translate-y-[-50%]"
              width="719"
              height="102%"
              viewBox="0 0 719 366"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                ref={polygon1Ref}
                opacity="0.2"
                x1="4.37114e-08"
                y1="157.5"
                x2="718"
                y2="157.5"
                stroke="black"
              />
              <line
                ref={polygon2Ref}
                opacity="0.2"
                x1="718.5"
                y1="366"
                x2="718.5"
                y2="-2.18557e-08"
                stroke="black"
              />
            </svg>
          </div>
          <div className="grid grid-cols-2 grid-rows-[65%_auto] h-full relative z-10 ">
            <div ref={leftContentRef} className=" pt-[110px] 3xl:pt-[130px]">
             
            </div>
            <div ref={rightImageRef} className="relative z-50">
              <img
                src={sprintData.rightImage}
                alt=""
                width={2000}
                height={1500}
                className="w-full h-full object-cover absolute object-center"
              />
            </div>
            <div className="flex justify-end pb-[50px]">
              <div
                ref={swiperRef}
                className="bg-primary w-[298px] xl:h-full opacity-0 "
              >
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
                    <SwiperSlide
                      key={index}
                      className="w-full h-full flex flex-col justify-end"
                    >
                      <div className="text-white px-5 xl:px-10 py-5 xl:py-8 flex flex-col justify-end h-full">
                        <h1 className="text-24 xl:text-60 font-light leading-[1]">
                          {item.title}
                        </h1>
                        <p className="text-16 xl:text-18 font-light leading-[1.555555555555556]">
                          {item.description}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div
              ref={bottomTextRef}
              className="pt-20 xl:pt-[67px] relative z-50 opacity-0"
            >
              <div className="w-fit pl-10 xl:pl-[205px] 3xl:pl-[265px] pr-8">
                <p className="text-16 xl:text-18 font-light leading-[1.5] max-w-md">
                  {sprintData.description}
                </p>
                <div className="mt-10 xl:mt-15 3xl:mt-20">
                 
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </div>

      {/* Slide 4 */}
      <div
        ref={section4Ref}
        className="absolute top-0 left-0 w-full h-full bg-transparent"
        style={{ visibility: "hidden", zIndex: 0 }}
      >
        <section
          id="section4"
          className="h-screen relative overflow-hidden whitebgref scroll-area"
        >
          <figure className="absolute w-full h-full bg-white z-[-1]" ref={srvBgimg}>
            <img className="absolute w-full h-full object-cover" src="../assets/images/services-bg.jpg" alt="" />
          </figure>
          <div className="grid grid-cols-[800px_auto] 3xl:grid-cols-[1021px_auto] h-full">
            {/* left */}
            <div className="flex h-full">
         {/*      <div className="w-1/3"></div> */}
              <div className="w-full pt-33 pl-[245px] 3xl:pl-[310px]" ref={srvLftBx}>
                <div className="ml-[80px] 3xl:ml-[110px] flex flex-col h-full">
                  <h1
                    ref={srvttlRef}
                    className="text-34 xl:text-48 3xl:text-60 font-light gradient-text leading-[70px]"
                  >
                    Our Services
                  </h1>
                  <div className="w-full flex flex-col h-full justify-end   mt-15 relative">
                  
                    <div className="pb-4 relative">
                    
                   {/*    <p
                        ref={countRef}
                        className="text-60 font-light text-[#62626210]"
                      >
                        0{activeService.index + 1}/ 06
                      </p> */}
                    </div>
                    <div className="flex flex-col pt-18 pb-21 3xl:pt-14 3xl:pb-21 pr-2">
                      {content.map((service, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 cursor-pointer group"
                          ref={(el) => (textItemsRef.current[index] = el)}
                        >
                          <p
                            className="text-[24px] 3xl:text-28 leading-[1.607142857142857] font-light cursor-pointer group-hover:text-black group-hover:font-bold text-black"
                            onMouseOver={() =>
                              setActiveService({
                                image: service.image,
                                title: service.title,
                                description: service.description,
                                index,
                              })
                            }
                          >
                            <span className="duration-100">
                              {" "}
                              {service.title}
                            </span>
                          </p>
                          <img
                            src="../assets/images/services/arrowblw.svg"
                            className={`transform-all duration-300 hidden  group-hover:block`}
                            alt="Arrow"
                            width={21}
                            height={21}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* left */}

            <div className="relative w-full h-[100vh] z-[-1]"  ref={srvsRghtBx}>
              <div className="absolute h-full w-full" ref={srvsImgRef}>
                              <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 from-0% via-black/60 via-52% to-black/60 to-100%"></div>

                <img
                  src={activeService?.image}
                  alt="Service Image"
                  fill
                  className="object-cover absolute w-full h-full"
                />
              </div>
              <div className="absolute bottom-0 right-0  w-[40%] " ref={srvsVct}>
                <img
                  src="../assets/images/svg/srv-vct.svg"
                  alt="Logo"
                  className="h-full w-full"
                  width={682}
                  height={914}
                />
              </div>
              <div className="absolute bottom-[245px] 3xl:bottom-[300px]  left-[40px] 3xl:left-[58px] z-10" ref={srvsCntb}>
                  <hr
                        ref={brdonRef}
                        className="absolute right-[25%] left-[-85%] 3xl:left-[-78%] h-[1px] top-[60px] opacity-20 bottom-0 z-20 border-none   bg-gradient-to-r from-black to-white "
                      />
                  <hr
                        ref={brdonRef}
                        className="absolute  left-[-40px] 3xl:left-[-58px] right-[25%] h-[1px] top-[60px] opacity-20 bottom-0 z-20 border-none   bg-white "
                      />
                <h3 className="text-29 leading-[1.344827586206897] font-light text-white">
                  {activeService?.title}
                </h3>
                <p className="text-18 text-white mt-[80px] w-[75%] 3xl:w-[55%]">
                  {activeService?.description}
                </p>
              </div>
              <div className="absolute bottom-10 3xl:bottom-[50px] left-[45px] 3xl:left-[58px] z-10" ref={srvsArrw}>
                <img
                  src="../assets/images/services/arrow-up.svg"
                  alt="Arrow"
                  className=""
                  width={71}
                  height={71}
                />
              </div>
            </div>
            {/* right */}
            {/* <div ref={brdonRef} className=""></div> */}
          </div>
        </section>
      </div>
      {/* Slide 4 */}
    </div>
  );
};

export default SlideScrollThree;
