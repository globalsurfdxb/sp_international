"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
 

const legacyData = [
  {
    year: "1975 - 1980",
    title: "1975 - 1980",
    text: "Fostering an environment that helps in the creation of knowledge and its application to work.",
    image: "/assets/images/about-us/slide1.jpg",
  },
  {
    year: "1980 - 1985",
    title: "1980 - 1985",
    text: "Fostering an environment that helps in the creation of knowledge and its application to work. ",
    image: "/assets/images/about-us/slide1.jpg",
  },
  {
    year: "1985 - 1990",
    title: "1985 - 1990",
    text: "Fostering an environment that helps in the creation of knowledge and its application to work. ",
    image: "/assets/images/about-us/slide1.jpg",
  },
  {
    year: "1990 - 1995",
    title: "1990 - 1995",
    text: "Fostering an environment that helps in the creation of knowledge and its application to work. ",
    image: "/assets/images/about-us/slide1.jpg",
  },
  {
    year: "1995 - 2000",
    title: "1995 - 2000",
    text: "Fostering an environment that helps in the creation of knowledge and its application to work. ",
    image: "/assets/images/about-us/slide1.jpg",
  },
];
const Legacy = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);
 
  return (
    <>
      <section className="py-12 xl:py-15 2xl:pt-[108px] 2xl:pb-30 bg-primary relative">
        <div className="absolute bottom-0 left-0 ">
          <img src="../assets/images/about-us/lcbanner.svg" alt="" />
        </div>
        <div className="container">
           <div className="xl:max-w-[1200px] 2xl:max-w-[1310px] ml-auto">
        <h2 className="text-60 font-light leading-[1.18] text-white mb-5 lg:mb-15">
          Legacy
        </h2>

         <div className="flex flex-col md:flex-row gap-3 md:gap-[106px] lg:gap-[106px] xl:gap-[100px] 2xl:gap-[306px] justify-between md:items-end">
          {/* LEFT: Vertical Year Thumbs */}
          <div className="text-white font-light text-24 xl:text-29 leading-[1.42]  xl:leading-[2.42] lg:mb-7 w-full lg:w-[200px] relative">
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
              className="legacy-year-swiper !overflow-visible h-auto md:h-[280px] xl:h-[350px]" 
            >
              {legacyData.map((item, i) => { 
  const opacity = 1 - i * 0.20;  
  return (
    <SwiperSlide key={i}>
      <p
        className="cursor-pointer transition-all duration-300 hover:text-[#fff]"
        style={{ opacity: opacity }}
      >
        {item.year}
      </p>
    </SwiperSlide>
  );
})}  
               
     
            </Swiper>

            {/* Bottom transparent fade */}
           </div>

          {/* RIGHT: Main Content */}
          <div className="  md:max-w-[450px] lg:max-w-[600px] xl:max-w-[705px] 2xl:max-w-[825px]  w-full">
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
                  <div className="mb-4 lg:mb-[53px]">
                    <h2 className="text-60 font-light leading-[1.18] text-white mb-5 xl:mb-15">
                      {item.title}
                    </h2>
                    <p className="text-19 lg:text-29 font-light leading-[1.374] text-white">
                      {item.text}
                    </p>
                  </div>
                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
        </div>
      </section>
    </>
  );
};

export default Legacy;
