"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { journeyData } from "../data";

const JourneySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="overflow-hidden max-w-[1920px] bg-white pt-30">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-60 font-light leading-[1.166666666666667] mb-10">
          {journeyData.title}
        </h2>

        <div className="container relative">
          {/* Decorative SVGs */}
          <div>
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
          <div className="journey-slider container relative">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
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
              className="swiper_container relative flex justify-center !pt-15 !pb-20"
            >
              {journeyData.slides.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <SwiperSlide key={index} className="swiper-slide relative">
                    {/* Image Container */}
                    <div
                      className="relative overflow-hidden transition-all duration-500"
                      style={{
                        boxShadow: isActive
                          ? "0px 10px 60px 0px #00041680"
                          : "none",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.alt || `slide_image_${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay for active / non-active slides */}
                      <div
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          background: isActive
                            ? "linear-gradient(180deg, rgba(0,0,0,0) 44.18%, rgba(0,0,0,0.8) 100%)"
                            : "#0A0A0A80",
                        }}
                      />
                      {/* Text (only visible on active slide) */}
                      <div
                        className={`absolute bottom-[32px] left-[38px] font-light z-10 transition-all duration-500 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <h2 className="text-white text-[29px] mb-[7px] leading-[1.310344827586207]">
                          {item.name}
                        </h2>
                        <p className="text-white text-[19px] leading-[1.473684210526316]">
                          {item.designation}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Pagination + Arrows */}
            <div className="flex items-center justify-center gap-x-[14px] -mt-[20px]">
              {/* Left Arrow */}
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

              {/* Counter */}
              <div className="text-16 leading-[2.4] text-color-paragraph">
                <span className="font-bold">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span>/</span>
                <span>
                  {String(journeyData.slides.length).padStart(2, "0")}
                </span>
              </div>

              {/* Right Arrow */}
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
