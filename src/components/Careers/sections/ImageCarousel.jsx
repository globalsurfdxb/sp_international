"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const images = [
  "/assets/images/careers/carousel/car-1.jpg",
  "/assets/images/careers/carousel/car-2.jpg",
  "/assets/images/careers/carousel/car-3.jpg",
  "/assets/images/careers/carousel/car-4.jpg",
  "/assets/images/careers/carousel/car-5.jpg",
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const computeHeight = (i, scale = 1) => {
    const diff = Math.abs(activeIndex - i);
    let baseHeight = 455;
    if (diff === 0) baseHeight = 679;
    else if (diff === 1 && i > activeIndex) baseHeight = 536;
    else if (diff === 1 && i < activeIndex) baseHeight = 593;
    else if (diff === 2 && i < activeIndex) baseHeight = 517;
    else if (diff === 2 && i > activeIndex) baseHeight = 455;

    return `${baseHeight * scale}px`;
  };

  return (
    <section className="max-w-[1920px] mx-auto">
      <div className="w-full bg-white pb-30">
        <div className="overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            centeredSlides
            loop={true}
            spaceBetween={15}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1400}
            breakpoints={{
              1536: { slidesPerView: 3.6165 }, // 2XL
              1280: { slidesPerView: 3.45 }, // XL
              1024: { slidesPerView: 2.2 }, // LG
              768: { slidesPerView: 2.2 }, // MD
              0: { slidesPerView: 1.2 }, // SM
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="h-[455px] xl:h-[536px] 2xl:h-[679px]"
          >
            {[...images, ...images].map((img, i) => (
              <SwiperSlide
                key={i}
                className="flex justify-center items-center transition-all duration-500 ease-in-out"
                style={{
                  flexShrink: 0,
                  width: "520px",
                  transition: "height 0.6s ease",
                }}
              >
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    // Dynamically scale height based on screen width
                    height: computeHeight(
                      i,
                      window.innerWidth >= 1536
                        ? 1
                        : window.innerWidth >= 1280
                        ? 0.9
                        : window.innerWidth >= 1024
                        ? 0.8
                        : window.innerWidth >= 768
                        ? 0.7
                        : 0.6
                    ),
                    width: "100%",
                  }}
                >
                  <img
                    src={img}
                    alt={`slide-${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
