"use client";
import { useMediaQuery } from "react-responsive";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { motion, useScroll, useTransform } from "framer-motion";
import { moveUp } from "../../../motionVarients";
import H2Title from "../../../components/common/H2Title";
import SplitTextAnimation from "../../../components/common/SplitTextAnimation";


const legacyData = [
  {
    year: "1971",
    title: "The Beginning",
    text: "As the first Indian construction company to operate in the GCC, we marked our global debut with the construction of the iconic Al Alam Palace in Muscat, Oman. This landmark project laid the foundation for our enduring legacy in the region.",
    image: "/assets/images/about-us/slide1.jpg",
  },
  {
    year: "2005 - 2010",
    title: "Establishing SP International",
    text: "With the formal establishment of SP International, we undertook iconic UAE projects such as DAMAC Park Towers, Taj Grandeur Hotel, Jumeirah Lake Towers, and the Fairmont Hotel in Abu Dhabi. These developments showcased our ability to deliver high-profile, complex projects on time and to exacting standards.",
    image: "/assets/images/about-us/slide1.jpg",
  },
  {
    year: "2011 - 2015",
    title: "Regional Expansion",
    text: "Expanding across Qatar, Saudi Arabia, and Kuwait, we delivered landmark projects including Barwa Commercial Avenue, Barwa City, King Abdullah Financial District (KAFD), AKH Tower, Kuwait University, and Al Sabah Hospital. This period demonstrated our capacity to manage multi-location, large-scale developments with efficiency and excellence.",
    image: "/assets/images/about-us/slide1.jpg",
  },
  {
    year: "2016 - 2020",
    title: "Prestige & Growth",
    text: "We delivered some of the GCC and Africa’s most prestigious projects, including 5JJ Tower, Dubai Hills, Kings College, SECO, and SABIC Headquarters, as well as cultural landmarks like the Mall of Oman and Oman Convention Centre.Beyond the Gulf, we completed the Niger Convention Centre, reinforcing our global execution capabilities.",
    image: "/assets/images/about-us/slide1.jpg",
  },
  {
    year: "2021 - 2025",
    title: "Diversification & New Horizons",
    text: "Expanding into entertainment and lifestyle, we delivered Obhur Entertainment Complex, Exit 10, Palm Beach Towers, and Al Marjan Islands Residences, alongside critical healthcare projects like Corniche Hospital. These developments highlight our ability to execute diverse, large-scale projects across multiple sectors.",
    image: "/assets/images/about-us/slide1.jpg",
  },
];
const Legacy = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // < 768
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // 768 - 1023
  const imageOffset = isMobile ? [-30, 30] : isTablet ? [-80, 80] : [-150, 150];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const imageContainerRefTwo = useRef(null);

  // Parallax for main image container
  const { scrollYProgress: imageProgress } = useScroll({
    target: imageContainerRefTwo,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(imageProgress, [0, 1], imageOffset);
  return (
      <section className="py-7 xl:py-15 2xl:pt-18 3xl:pt-[108px] pb30 bg-primary relative overflow-hidden">
        <div className="absolute top-0 md:top-auto md:bottom-0 right-0 md:-left-25 3xl:left-0 w-[50%]  md:w-[25%] 3xl:w-full">
          <img src="../assets/images/about-us/lcbanner.svg" alt="" />
        </div>
        <div className="container">
        <div>
            <div className="md:max-w-[650px] lg:max-w-[800px]  xl:max-w-[950px] 2xl:max-w-[80.9%] ml-auto">
            {/* <motion.h2 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="text-60 font-light leading-[1.18] text-white">
              Legacy
            </motion.h2> */}
            <H2Title titleText="Legacy" titleColor="white" marginClass=" mb-5 lg:mb-8 xl:mb-15"/>

            <div className="flex flex-col-reverse md:flex-row gap-7 md:gap-5 2xl:gap-[20%]  3xl:gap-[23.3%] justify-between md:items-end">
              {/* LEFT: Vertical Year Thumbs */}
              <div className="text-white font-light text-24 xl:text-29 leading-[1.42]  xl:leading-[2.42] lg:mb-7 w-full  relative">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={10}
                  direction="horizontal"
                  onSwiper={setThumbsSwiper}
                  watchSlidesProgress={true}
                  modules={[Thumbs, Autoplay]}
                  breakpoints={{
                    768: {
                      direction: "vertical",
                      slidesPerView: 5,
                    },
                  }}
                  autoplay={{
                    delay: 4000, // 4 seconds
                    disableOnInteraction: false,
                  }}
                  className="legacy-year-swiper !overflow-visible h-auto md:h-[220px] lg:h-[280px] xl:h-[320px] 2xl:h-[350px]"
                >
                  {legacyData.map((item, i) => {
                    const opacity = 1 - i * 0.20;
                    return (
                      <SwiperSlide key={i}>
                        <motion.p variants={moveUp(0.6 + 0.2*i)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-[15px] sm:text-16 md:text-16 lg:text-29 cursor-pointer hover:text-[#fff]" style={{ opacity: opacity }}>{item.year}</motion.p>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                {/* Bottom transparent fade */}
              </div>

              {/* RIGHT: Main Content */}
              <div className="  md:max-w-[450px] lg:max-w-[550px] xl:max-w-[600px] 2xl:max-w-[63%]  w-full ">
                <Swiper
                  modules={[Thumbs, EffectFade, Autoplay]}
                  thumbs={{ swiper: thumbsSwiper }}
                  spaceBetween={30}
                  slidesPerView={1}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  className="legacy-main-swiper"
                >
                  {legacyData.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="mb-4 md:mb-[30px] lg:mb-[53px]">
                        <h2 className="text-[22px] md:text-45 3xl:text-60 font-light leading-[1.18] text-white mb-5 xl:mb-[37px]">
                          <SplitTextAnimation children={item.title} staggerDelay={0.1} animationDuration={0.8} delay={0.8} />
                        </h2>
                        {/* <H2Title titleText={item.title} titleColor={"white"} marginClass={"mb-5 xl:mb-[37px]"} /> */}
                        <motion.p variants={moveUp(1)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-19 3xl:text-29 font-light leading-[1.374] text-white">{item.text}</motion.p></div>
                      <div className="relative overflow-hidden" ref={imageContainerRefTwo}><motion.img style={{y:imageY}} src={item.image} alt={item.title} className="w-full object-cover scale-110" /></div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

  );
};

export default Legacy;
