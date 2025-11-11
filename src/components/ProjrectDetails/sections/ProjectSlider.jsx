"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const legacyData = [
  { image: "/assets/images/project-details/abtsl1.jpg" },
  { image: "/assets/images/project-details/abtsl2.jpg" },
  { image: "/assets/images/project-details/abtsl1.jpg" },
  { image: "/assets/images/project-details/abtsl2.jpg" },
  { image: "/assets/images/project-details/abtsl1.jpg" },
  { image: "/assets/images/project-details/abtsl2.jpg" },
  { image: "/assets/images/project-details/abtsl1.jpg" },
  { image: "/assets/images/project-details/abtsl2.jpg" },
  { image: "/assets/images/project-details/abtsl1.jpg" },
  { image: "/assets/images/project-details/abtsl2.jpg" },
];

const ProjectSlider = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section className="py-10 xl:py-15 2xl:pt-[80px] 2xl:pb-25 relative">
      <div className="container relative">
        {/* Counter + Arrows */}
        <div className="flex justify-between items-center mb-5">
          <div className="text-lg font-semibold text-black flex items-center gap-1">
            <span className="font-bold text-gray-800">
              {String(currentSlide).padStart(2, "0")}
            </span>
            <span className="text-paragraph font-light text-16 ">/</span>
            <span className="text-paragraph font-light text-16">
              {String(legacyData.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex gap-3 absolute right-[15px] md:right-[28%] md:translate-x-[28%]  xl:right-[26%] xl:translate-x-[26%] top-[-5px] xl:-top-5">
            <button
              className="custom-prev  w-[35px] h-[35px] xl:w-[50px] xl:h-[50px] flex items-center justify-center cursor-pointer rounded-full group border border-black/20   hover:bg-secondary hover:text-white transition"
            >
              
              <img src="/assets/images/project-details/rightarrow.svg" className="rotate-180 group-hover:brightness-0 group-hover:invert-100 transition-all duration-300" alt="" width={14} height={14} />
            </button>
            <button
              className="custom-next w-[35px] h-[35px] xl:w-[50px] xl:h-[50px] flex items-center justify-center cursor-pointer rounded-full group border border-black/20   hover:bg-secondary hover:text-white transition"
            >
              <img src="/assets/images/project-details/rightarrow.svg" className="group-hover:brightness-0 group-hover:invert-100 transition-all duration-300" alt="" width={14} height={14} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full">
            <Swiper
              ref={swiperRef}
              modules={[EffectFade, Autoplay, Navigation]}  
              spaceBetween={20}
              slidesPerView={1.5}
              centeredSlides={false}
              loop={true}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              onSlideChange={(swiper) =>
                setCurrentSlide((swiper.realIndex % legacyData.length) + 1)
              }
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 1.3,
                  spaceBetween: 30,
                },
              }}
              className="overflow-visible"
            >
              {legacyData.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="overflow-hidden ">
                    <img
                      src={item.image}
                      alt={`slide-${i}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
