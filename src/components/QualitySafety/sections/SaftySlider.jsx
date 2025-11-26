"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { moveLeft } from "../../../motionVarients";
import { motion } from "framer-motion";


import { sliderImages,saftyData } from "../data"; 

const SaftySlider = () => {
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
    <section className="max-w-[1920px] mx-auto ">
     <div className="relative">
      <img src="/assets/images/svg/sv-02.svg" alt="" className="absolute bottom-0 left-0 z-[-1]" width={468} height={655} /> 
      <div className="container pt-10 xl:pt-15 2xl:pt-30">   
        <div className=" max-w-[1206px] ml-auto  ">
            
          <div >
            <h2 className="text-60 font-light leading-[1.18] mb-6 lg:mb-12 max-w-[15ch]">{saftyData.title}</h2>
                    <p className="text-19 font-light leading-[1.474] max-w-[59ch] text-paragraph">{saftyData.description}</p>
          </div>
          <div className="flex flex-col md:flex-row p-5 lg:px-12  lg:py-10 bg-f5f5 mb-3 gap-8 md:gap-0">
            {saftyData.counts.map((item,index)=>(
              <div key={index} className="">
                <p className="text-40 font-light leading-[1.02] text-paragraph mb-3 lg:mb-[18px] ">{item.count}</p>
                <p className="text-19 font-light leading-[1.48] pt-3 lg:pt-[14px] border-t border-[#cccccc] pr-5 lg:pr-[150px]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
     </div>
      <div className="w-full bg-white pb-10 xl:pb-15 2xl:pb-30">
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
              1024: { slidesPerView: 2.2 }, // LG
              768: { slidesPerView: 2.2 }, // MD
              0: { slidesPerView: 1.2 }, // SM
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="h-[400px] md:h-[470px]  lg:h-[570px] xl:h-[586px] 2xl:h-[611px] 3xl:h-[679px]"
          >
            {[...sliderImages, ...sliderImages].map((img, i) => (
              <SwiperSlide
                key={i}
                className="flex justify-center items-center transition-all duration-500 ease-in-out"
                style={{
                  flexShrink: 0,
                  width: "520px",
                  transition: "height 0.6s ease",
                }}
              >
                <div className="overflow-hidden transition-all duration-500 ease-in-out"
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
                  <img src={img} alt={`slide-${i}`} className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default SaftySlider;
