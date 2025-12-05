"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { moveLeft, moveUp } from "../../../motionVarients";
import { motion, useScroll, useTransform } from "framer-motion";

import H2Title from "../../common/H2Title";

import { sliderImages,saftyData } from "../data"; 

const SaftySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const imageContainerRefTwo = useRef(null);

  // Parallax for main image container
  const { scrollYProgress: imageProgress } = useScroll({
    target: imageContainerRefTwo,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(imageProgress, [0, 1], [-150, 150]);
  // Parallax for shape
  const { scrollYProgress: shapeProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const shapeY = useTransform(shapeProgress, [0, 1], [-200, 200]);

  const computeHeight = (i, scale = 1) => {
    const diff = Math.abs(activeIndex - i);
    let baseHeight = 455;
    if (diff === 0) baseHeight = 597;
    else if (diff === 1 && i > activeIndex) baseHeight = 471;
    else if (diff === 1 && i < activeIndex) baseHeight = 521;
    else if (diff === 2 && i < activeIndex) baseHeight = 455;
    else if (diff === 2 && i > activeIndex) baseHeight = 400;

    return `${baseHeight * scale}px`;
  };

  return (
    <section className="max-w-[1920px] mx-auto overflow-hidden " ref={sectionRef}>
     <div className="relative mb-3">
      <motion.img style={{y:shapeY}} src="/assets/images/svg/sv-02.svg" alt="" className="absolute bottom-0 2xl:bottom-[-58px] left-[-150px] 3xl:left-0 z-[-1] w-[468px] h-[655px] 2xl:h-[555px] 3xl:h-[655px]" width={468} height={655} /> 
      <div className="container pt-text30">   
        <div className=" max-w-[1206px] 2xl:max-w-[1056px] 3xl:max-w-[1206px] ml-auto  ">
          <div>
            <H2Title titleText={saftyData.title} titleColor="black" marginClass="mb-4 2xl:mb-50px max-w-[15ch]" />
              <motion.p variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="text-19 font-light leading-[1.474] max-w-[59ch] text-paragraph">{saftyData.description}</motion.p>
          </div>
          <motion.div variants={moveLeft(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="flex flex-col md:flex-row p-5 lg:px-12  lg:py-10 bg-f5f5  gap-8 md:gap-0">
            {saftyData.counts.map((item,index)=>(
              <div key={index} className="md:w-[33.33%] w-auto">
                <motion.p variants={moveLeft(0.3*index)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="text-40 font-light leading-[1.02] text-paragraph mb-3 lg:mb-[18px] ">{item.count}</motion.p>
                <motion.p variants={moveLeft(0.3*index)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="text-19 font-light text-black/70 leading-[1.48] pt-3 lg:pt-[14px] border-t border-[#cccccc] xl:whitespace-nowrap pr-5 lg:pr-[100px] 3xl:pr-[150px]">{item.title}</motion.p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
     </div>
      <div className="w-full bg-white   xl:pb-5 3xl:pb-30">
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
            className="h-[400px] md:h-[470px]  lg:h-[570px] xl:h-[586px] 2xl:h-[611px] 3xl:h-[597px]"
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
                  <motion.img style={{y:imageY}} src={img} alt={`slide-${i}`} className="w-full h-full object-cover" />
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
