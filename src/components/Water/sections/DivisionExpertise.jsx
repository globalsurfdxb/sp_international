"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { moveUp } from "../../../motionVarients"; 
import H2Title from "../../common/H2Title";
const DivisionExpertise = ({data}) => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    const targetEl = targetRef.current;

    if (!containerEl || !targetEl) return;

    const updateMargin = () => {
      if (window.innerWidth > 768) {
        // Only apply margin-left on screens wider than 768px
        const computedStyle = window.getComputedStyle(containerEl);
        const marginLeft = computedStyle.marginLeft;
        targetEl.style.marginLeft = marginLeft;
      } else {
        // Reset for mobile
        targetEl.style.marginLeft = "0px";
      }
    };

    // Initial call
    updateMargin();

    // Watch for resize
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  return (
    <section className="pt-text30 pb30 relative  overflow-hidden">
      <div className="xl:px-[15px] md:pe-0 relative">
        {/* Counter + Arrows */}
        <div className="container" ref={containerRef}>
          <H2Title titleText={data.title} titleColor="black" marginClass="mb-4 xl:mb-50px" /> 
        </div>
        {/* Swiper */}
        <div className="flex flex-col md:flex-row gap-3   md:pe-0" >
          <div className="container">
            <Swiper
              ref={swiperRef}
              modules={[EffectFade, Autoplay, Navigation]}
              spaceBetween={0} 
              slidesPerView={1}
              loop={true}
              loopedSlides={6}
              centeredSlides={false}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              // onSlideChange={(swiper) =>
              //   setCurrentSlide((swiper.realIndex % engineeringData.featuredProjectsData.items.length) + 1)
              // }
              speed={800}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                 300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1400: {
                  slidesPerView: 3.2,
                  spaceBetween: 40,
                },
              }}
              className="md:!overflow-visible h-full"
            >
              {data.items.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="overflow-hidden md:border-l border-black/20 h-full">
                    <div>
                      <motion.img variants={moveUp(0.1 * i)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} src={item.image} alt={`slide-${i}`} className="w-full h-auto object-cover" />
                    </div>
                    <div className="pt-6 md:pl-6   lg:pt-8 lg:pl-8 lg:pb-8 2xl:pt-10 2xl:pl-10 2xl:pb-12">
                      <div >
                        <h3 className="text-29 leading-[1.344827586206897] font-light mb-2">{item.title}</h3>
                      </div>
                      <p className="text-19 font-light font-paragraph leading-[1.5]">{item.desc}</p>
                    </div>
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

export default DivisionExpertise;
