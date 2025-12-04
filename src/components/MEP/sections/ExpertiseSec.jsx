"use client";

import React, { useRef, useEffect } from 'react';
import { assets } from "../../../assets/index"
import H2Title from '../../common/H2Title';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);
const ExpertiseSec = ({data}) => {
    const sectionRef = useRef(null);
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
  return (
    <section className="relative pt-text90 pb-12 md:pb-15 lg:pb-22 3xl:pb-[95px] bg-primary text-white overflow-hidden" ref={sectionRef}>
      <div className="reveal-overlay4 absolute inset-0 bg-black/20 z-20"></div>
      <div className="absolute -top-3 right-0 w-[624px] h-[874px] z-0"><img src={assets.mainShape} alt="" /></div>
      <div className="container relative z-10">
        {/* Header */}
          <H2Title titleText={data.title} titleColor="white" marginClass="mb-3 md:mb-5 lg:mb-6 3xl:mb-[70px]" />
        <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-30px gap-y-5 lg:gap-y-8'>
            {
              data.items.map((item,i)=>(
                <motion.div className="relative overflow-hidden border-b xl:border-b-0 border-white/30"
                  initial={{ rotateY: -90, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15, // stagger effect
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, amount: 0.6 }} // triggers when card is 30% visible
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img src={item.img} alt={item.title} className="w-full h-[250px] xl:h-[300px] 3xl:h-[416px]  object-cover" />
                  <div className="pt-4 lg:pt-6 2xl:pt-30px">
                    <h3 className="text-24 3xl:text-29 leading-[1.2] 3xl:leading-[1.35] font-light ">{item.title}</h3>
                    <p className="text-19 leading-[1.526315789473684] font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))
            }
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSec;