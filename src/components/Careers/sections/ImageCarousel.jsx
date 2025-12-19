"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { moveLeft } from "../../../motionVarients";
import { motion, useScroll, useTransform } from "framer-motion";
const images = [
  "/assets/images/careers/carousel/car-1.jpg",
  "/assets/images/careers/carousel/car-2.jpg",
  "/assets/images/careers/carousel/car-3.jpg",
  "/assets/images/careers/carousel/car-4.jpg",
  "/assets/images/careers/carousel/car-5.jpg",
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageContainerRefTwo = useRef(null);

  // Parallax for main image container
  const { scrollYProgress: imageProgress } = useScroll({
    target: imageContainerRefTwo,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(imageProgress, [0, 1], [-150, 150]);
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
      <div className="w-full bg-white pb30">
        <motion.div variants={moveLeft(0.3)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="overflow-hidden">
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
              1024: { slidesPerView: 3.2 }, // LG
              768: { slidesPerView: 2.2 }, // MD
              0: { slidesPerView: 1.2 }, // SM
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="h-[400px] md:h-[470px]  lg:h-[570px] xl:h-[586px] 2xl:h-[611px] 3xl:h-[679px]"
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
                <div className="overflow-hidden transition-all duration-500 ease-in-out relative" ref={imageContainerRefTwo}
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
                  <motion.img style={{ y: imageY }} src={img} alt={`slide-${i}`} className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageCarousel;
