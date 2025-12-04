"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { moveLeft, moveUp } from "../../motionVarients";
import H2Title from "./H2Title";



const FeaturedProjectSlider = ({ data }) => {
  const swiperRef = useRef(null);
  const [slideKey, setSlideKey] = useState(0);

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
    <section className="pt-text90 pb25 relative bg-f5f5 overflow-hidden">
      <div className="xl:px-[15px] md:pe-0 relative">
        {/* Counter + Arrows */}
        <div className="container" ref={containerRef}>
          <div className="flex justify-between items-center mb-5 3xl:mb-17">
            <motion.div variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{amount:0.2, once:true}} >
              <H2Title titleText="Featured Projects" titleColor="black" marginClass="mb-0" />
            </motion.div>

            <div className="flex gap-5 ">
              <button className="custom-prev  w-[35px] h-[35px] xl:w-[50px] xl:h-[50px] flex items-center justify-center cursor-pointer rounded-full group border border-black/20   hover:bg-secondary hover:text-white transition">
                <img src="/assets/images/project-details/rightarrow.svg" className="w-[13.89px] h-[13.89px] rotate-180 group-hover:brightness-0 group-hover:invert-100 transition-all duration-300" alt="" width={14} height={14} />
              </button>
              <button className="custom-next w-[35px] h-[35px] xl:w-[50px] xl:h-[50px] flex items-center justify-center cursor-pointer rounded-full group border border-black/20   hover:bg-secondary hover:text-white transition">
                <img src="/assets/images/project-details/rightarrow.svg" className="w-[13.89px] h-[13.89px] group-hover:brightness-0 group-hover:invert-100 transition-all duration-300" alt="" width={14} height={14} />
              </button>
            </div>
          </div>
        </div>
        {/* Swiper */}
        <div className="flex flex-col md:flex-row gap-3 xl:px-[15px] md:pe-0" >
          <div className="container">
            <Swiper
              ref={swiperRef}
              modules={[EffectFade, Autoplay, Navigation]}
              spaceBetween={40}
              slidesPerView={1}
              loop={true}
              centeredSlides={false}
              loopAdditionalSlides={1}
              watchSlidesProgress={true}
              // loopedSlides={data.items.length}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              // onSlideChange={(swiper) =>
              //   setCurrentSlide((swiper.realIndex % engineeringData.featuredProjectsData.items.length) + 1)
              // }
              onSlideChange={() => setSlideKey(prev => prev + 1)}
              speed={1200}
              // autoplay={{
              //   delay: 4000,
              //   disableOnInteraction: false,
              //   waitForTransition: true,
              // }}
              breakpoints={{
                600: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              className="!overflow-visible"
            >
              {data.items.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="">
                    <div className="overflow-hidden">
                      <motion.img
                        key={`img-${slideKey}-${i}`}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 * i, ease: "easeOut" }}
                        src={item.image}
                        alt={`slide-${i}`}
                        className="w-full h-[250px] xl:h-[520px] object-cover"
                      />
                    </div>
                    <div key={`content-${slideKey}`}>
                      <div className="border-b border-cmnbdr pt-5 xl:pt-7 pb-5 xl:pb-7">
                        <div className="overflow-hidden">
                          <motion.h3
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-29 leading-[1.344827586206897] font-light"
                          >
                            {item.title}
                          </motion.h3>
                        </div>
                      </div>
                      <div className="border-b border-cmnbdr grid lg:grid-cols-2  2xl:grid-cols-[413px_1fr] items-center">
                        <div className="border-b border-cmnbdr lg:border-0">
                          <div className="overflow-hidden">
                            <motion.h4
                              initial={{ y: 50 }}
                              animate={{ y: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              className="text-19 leading-[2.052631578947368] font-light text-paragraph"
                            >
                              <span>Sector: </span>{item.sector}
                            </motion.h4>
                          </div>
                        </div>
                        <div className="">
                          <div className="overflow-hidden">
                            <motion.h4
                              initial={{ y: 50 }}
                              animate={{ y: 0 }}
                              transition={{ duration: 0.6, delay: 0.6 }}
                              className="text-19 leading-[2.052631578947368] font-light text-paragraph"
                            >
                              <span>BUA (Sq.ft): </span>500000
                            </motion.h4>
                          </div>
                        </div>
                      </div>
                      <div className="border-b border-cmnbdr py-1">
                        <div className="overflow-hidden">
                          <motion.h4
                            initial={{ y: 50 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-19 leading-[2.052631578947368] font-light text-paragraph"
                          >
                            <span>Location: </span>{item.location}
                          </motion.h4>
                        </div>
                      </div>
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

export default FeaturedProjectSlider;
