"use client";
import { motion, useScroll, useTransform } from 'framer-motion'
import { moveUp, paragraphItem, moveLeft, moveRight } from '../../../motionVarients';
import React, { useRef, useState, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Controller } from 'swiper/modules';
import { assets } from "../../../assets/index"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import H2Title from "../../common/H2Title";
import { engineeringData } from '../data';
gsap.registerPlugin(ScrollTrigger);
const ExpertiseSec = () => {
  const { expertiseData } = engineeringData;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageSwiper, setImageSwiper] = useState(null);
  const [contentSwiper, setContentSwiper] = useState(null);
  const sectionRef = useRef(null);
  const imageParRef = useRef(null);
  useEffect(() => {
    if (!sectionRef.current) return;

    const overlay = sectionRef.current.querySelector(".reveal-overlay4");

    gsap.set(overlay, { xPercent: 0 }); // start covering
    gsap.to(overlay, {
      xPercent: 100, // slide out to the right
      duration: 2.7,
      ease: "expo.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%", // when section comes into view
        toggleActions: "play none none none",
      },
    });
  }, []);

    // Parallax for shape
    const { scrollYProgress: shapeProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    });
    const shapeY = useTransform(shapeProgress, [0, 1], [-200, 200]);

  // Parallax for main image container
  const { scrollYProgress: imageProgress } = useScroll({
    target: imageParRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(imageProgress, [0, 1], [-150, 150]);

  return (
    <section className="relative pt-text90 pb25 bg-primary text-white overflow-hidden" ref={sectionRef}>
      <div className="reveal-overlay4 absolute inset-0 bg-black/20 z-20"></div>
      <div className="absolute bottom-0 right-0 w-[280px]  lg:w-[519px]  md:w-[350px] md:h-[500px]  2xl:w-[519px] h-[525px] lg:h-[725px]"><motion.img style={{y:shapeY}} src={assets.mainShape} alt="" /></div>
      <div className="container">
        {/* Header */}
        <div className="mb-50px">
            <H2Title titleText={expertiseData.title} titleColor="white" marginClass="mb-4 xl:mb-5" />
            <motion.p variants={paragraphItem} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-19 leading-[1.473684210526316] opacity-90 font-light max-w-[85ch] pb-2 sm:pb-0">
            {expertiseData.desc}
          </motion.p>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 3xl:gap-[70px]">
            {/* Image Section - Swiper */}
            <motion.div variants={moveRight(0.4)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay, Controller]}
                spaceBetween={50}
                slidesPerView={1}
                speed={700}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
                }}
                loop={true}
                controller={{ control: contentSwiper }}
                onSwiper={setImageSwiper}
                onSlideChange={(swiper) => {
                  setCurrentSlide(swiper.realIndex);
                }}
                className="expertise-swiper"
              >
                {expertiseData.items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative overflow-hidden shadow-2xl" ref={imageParRef}>
                      <motion.img style={{y:imageY}} src={item.img} alt={item.mainTitle} className="w-full h-[300px] lg:h-[400px] xl:h-[500px] 3xl:h-[625px]  object-cover" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Content Section - Static with Navigation */}
            <motion.div variants={moveLeft(0.6)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}}>
              {/* Navigation - Fixed */}
              <div className="flex items-center gap-4  xl:gap-[51px] mb-5 xl:mb-[50px] border-b border-white/30 pt-5 lg:pt-5  pb-4 xl:pb-[30px]">
                <div className='flex items-center gap-[12px]'>
                  <button onClick={() => imageSwiper?.slidePrev()}
                  className="w-10 xl:w-50px xl:h-50px h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors"
                  aria-label="Previous slide"
                >
                  <img src={assets.arrowLeft2} alt="" />
                </button>
                <button onClick={() => imageSwiper?.slideNext()}
                  className="w-10 xl:w-50px xl:h-50px h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors"
                  aria-label="Next slide"
                >
                  <img src={assets.arrowRight2} alt="" />
                </button>
                </div>
                <span className="text-19 leading-[1.473684210526316] ml-2">
                 <span className='font-bold '> {String(currentSlide + 1).padStart(2, '0')}</span>/{String(expertiseData.items.length).padStart(2, '0')}
                </span>
              </div>

              {/* Dynamic Content - Swiper */}
              <Swiper
                modules={[Autoplay, Controller]}
                spaceBetween={50}
                slidesPerView={1}
                speed={700}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
                }}
                loop={true}
                controller={{ control: imageSwiper }}
                onSwiper={setContentSwiper}
                allowTouchMove={false}
                className="content-swiper"
              >
                {expertiseData.items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      <h3 className="text-29 leading-[1.344827586206897] font-light mb-4  xl:mb-5">
                        {item.mainTitle}
                      </h3>
                      <p className="text-white/80 text-19 leading-[1.473684210526316] font-light mb-8 2xl:mb-[45px]">
                        {item.mainDesc}
                      </p>

                      {/* Services */}
                      <div>
                        <h4 className="text-29 leading-[1.344827586206897] font-light mb-3 xl:mb-5">
                          {item.subTitle}
                        </h4>
                        <ul className="space-y-2">
                          {item.desc.map((service, idx) => (
                            <li key={idx} className="text-white/80 text-19 flex items-start">
                              <span className="mr-2">•</span>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSec;