"use client";

import { motion } from "framer-motion";
import { moveUp, moveDown } from "../../../motionVarients";
import H2Title from "../../common/H2Title";
import { assets } from "../../../assets/index";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Controller } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ExpertiseSec = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [slideKey, setSlideKey] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const overlay = sectionRef.current.querySelector(".reveal-overlay4");

    gsap.set(overlay, { xPercent: 0 });
    gsap.to(overlay, {
      xPercent: 100,
      duration: 2.7,
      ease: "expo.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // Intersection Observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Get the actual slide index (handling loop)
  const getSlideDistance = (slideIndex) => {
    const totalSlides = data.items.length;
    let distance = slideIndex - activeIndex;

    // Handle loop wrapping
    if (distance < 0) distance += totalSlides;
    if (distance > totalSlides / 2) distance -= totalSlides;

    return Math.abs(distance);
  };

  return (
    <section className="relative pt-text90 pb25 bg-primary text-white overflow-hidden" ref={sectionRef}>
      <div className="reveal-overlay4 absolute inset-0 bg-black/20 z-20"></div>
      <div className="container !overflow-visible">
        <div className="flex justify-between mb-3 lg:mb-6 xl:mb-50px ">
          <H2Title titleText="Our Expertise" />
          {/* Navigation - Fixed */}
          <div className="flex items-center gap-4 ">
            <button onClick={() => swiperRef?.slidePrev()}
              className="w-[35px] h-[35px] xl:w-[50px] xl:h-[50px] rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-white/10"
              aria-label="Previous slide"
            >
              <img src={assets.arrowLeft2} width={13.89} height={13.89} alt="" className="w-[13.89px] h-[13.89px] xl:w-5 xl:h-5" />
            </button>
            <button onClick={() => swiperRef?.slideNext()}
              className="w-[35px] h-[35px] xl:w-[50px] xl:h-[50px] rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-white/10"
              aria-label="Next slide"
            >
              <img src={assets.arrowRight2} width={13.89} height={13.89} alt="" className="w-[13.89px] h-[13.89px] xl:w-5 xl:h-5" />
            </button>
          </div>
        </div>

        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Controller]}
            spaceBetween={40}
            slidesPerView={1}
            speed={700}
            onSwiper={setSwiperRef}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              setSlideKey(prev => prev + 1); // Force re-animation
            }}
            loopAdditionalSlides={1}
            watchSlidesProgress={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3.15,
                spaceBetween: 40,
              },
            }}
            className="expertise-swiper !overflow-visible"
          >
            {data.items.map((item, index) => {
              const distance = getSlideDistance(index);
              const shouldShow = distance <= 4; // Show slides within 4 positions

              return (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div
                      key={`${index}-${slideKey}`}
                      className="relative"
                      
                    >
                      <motion.img
                        src={item.img}
                        alt={item.slideTitle}
                        className="w-full h-[250px] lg:h-[300px] xl:h-[333px] object-cover"
                        initial={{ rotateY: -90, opacity: 0 }}
                        animate={
                          isInView && shouldShow
                            ? { rotateY: 0, opacity: 1 }
                            : { rotateY: -90, opacity: 0 }
                        }
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: distance * 0.08
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                      />
                      <motion.div variants={moveDown(0.2 * index)} initial="hidden" animate="show" viewport={{ amount: 0.2, once: false }} className="pl-0 pt-4 xl:p-10 xl:border-l border-white/30">
                        <motion.h3 variants={moveUp(0.1 * index)} initial="hidden" animate="show" viewport={{ amount: 0.2, once: false }} className="text-20 xl:text-29 leading-[1.2] 3xl:leading-[1.724137931034483] font-normal xl:font-extralight mb-2 xl:mb-2">
                          {item.slideTitle}
                        </motion.h3>
                        <motion.p variants={moveUp(0.15 * index)} initial="hidden" animate="show" viewport={{ amount: 0.2, once: false }} className="text-19 leading-[1.526315789473684] font-extralight">
                          {item.slideDesc}
                        </motion.p>
                      </motion.div>
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSec;