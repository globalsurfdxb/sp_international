"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { journeyData } from "../data";
import { motion } from "framer-motion";
import { fadeIn, moveUp } from "../../../motionVarients";

const JourneySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMdUp, setIsMdUp] = useState(false);
  const swiperRef = useRef(null);

  // Detect screen size (runs once + on resize)
  useEffect(() => {
    const handleResize = () => setIsMdUp(window.innerWidth >= 768); // Tailwind md breakpoint
    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="overflow-hidden max-w-[1920px] bg-white 2xl:pt-30 pt-8 md:pt-17 xl:pt-22">
      <div className={isMdUp ? "container" : "px-[15px]"}>
        <motion.h2 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-60 font-light leading-[1.166666666666667] mb-10">
          {journeyData.title}
        </motion.h2>

        <div className={isMdUp ? "container relative" : "relative"}>
          {/* Decorative SVGs */}
          <div className="hidden lg:block">
            <div className="absolute top-30 left-0">
              <img
                src="/assets/images/careers/journey-slider/svg/left.svg"
                alt="decor-left"
              />
            </div>
            <div className="absolute bottom-30 right-0">
              <img
                src="/assets/images/careers/journey-slider/svg/right.svg"
                alt="decor-right"
              />
            </div>
          </div>

          {/* Swiper */}
          <div className={`journey-slider relative ${isMdUp ? "container" : ""}`}>
            <Swiper
              effect="coverflow"
              grabCursor
              centeredSlides
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 5.2,
              }}
              onBeforeInit={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              modules={[EffectCoverflow, Autoplay]}
              className="swiper_container relative flex justify-center lg:!pt-15 lg:!pb-20"
            >
              {journeyData.slides.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <SwiperSlide key={index} className="swiper-slide relative">
                    <motion.div variants={fadeIn(0.2*index)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="relative overflow-hidden transition-all duration-500"
                      style={{
                        boxShadow:
                          isActive && isMdUp
                            ? "0px 10px 60px 0px #00041680"
                            : "none",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.alt || `slide_image_${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          background: isActive
                            ? "linear-gradient(180deg, rgba(0,0,0,0) 44.18%, rgba(0,0,0,0.8) 100%)"
                            : "#0A0A0A80",
                        }}
                      />
                      <div
                        className={`absolute bottom-[20px] left-[20px] md:bottom-[32px] md:left-[38px] font-light z-10 transition-all duration-500 ${isActive ? "opacity-100" : "opacity-0"
                          }`}
                      >
                        <h2 className="text-white text-[29px] mb-[4px] md:mb-[7px] leading-[1.31]">
                          {item.name}
                        </h2>
                        <p className="text-white text-[19px] leading-[1.47]">
                          {item.designation}
                        </p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Pagination + Arrows */}
            <div className="flex items-center justify-center gap-x-[14px] mt-4 lg:-mt-[20px]">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-[52px] h-[52px] flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              >
                <img
                  src="/assets/images/careers/journey-slider/svg/arrow-left.svg"
                  alt="Previous"
                  className="w-[28px] h-[28px]"
                />
              </button>
              <div className="text-16 leading-[2.4] text-color-paragraph">
                <span className="font-bold">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span>/</span>
                <span>
                  {String(journeyData.slides.length).padStart(2, "0")}
                </span>
              </div>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-[52px] h-[52px] flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              >
                <img
                  src="/assets/images/careers/journey-slider/svg/arrow-left.svg"
                  alt="Next"
                  className="w-[28px] h-[28px] rotate-180"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySlider;
