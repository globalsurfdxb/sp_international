"use client";
import React, { useRef, useEffect } from 'react';
import { assets } from "../../../assets/index"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { motion } from "framer-motion";
import { moveUp } from "../../../motionVarients";
import H2Title from '../../common/H2Title';
const SecondSection = ({data}) => {
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
    <section className="relative pt-text90 pb25 bg-primary text-white overflow-hidden" ref={sectionRef}>
      <div className="reveal-overlay4 absolute inset-0 bg-black/20 z-20"></div>
      <div className="absolute bottom-0 right-0 w-[519px] h-[725px] "><img src={assets.mainShape} className=' object-contain' alt="" /></div>
      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-50px">
          <H2Title titleText={data.title} titleColor="white" marginClass="mb-2 xl:mb-5" />
          <p className='text-19 leading-[1.473684210526316] font-extralight max-w-6xl'>{data.desc}</p>
        </div>
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-30px'>
            {
              data.items.map((item,index)=>(
                <div>
                  <motion.div variants={moveUp(0.2*index)} initial="hidden" whileInView="show" viewport={{ amount: 0.6, once: true }} className='border-b border-white/30 pb-30px'>
                    <img src={item.icon} alt="" width={65} height={65} className='h-10 w-auto xl:h-[65px] object-contain' />
                  </motion.div>
                  <motion.h3 variants={moveUp(0.2*index)} initial="hidden" whileInView="show" viewport={{ amount: 0.6, once: true }} className='text-29 leading-[1.344827586206897] font-light mt-30px mb-5'>{item.title}</motion.h3>
                  <motion.p variants={moveUp(0.2*index)} initial="hidden" whileInView="show" viewport={{ amount: 0.6, once: true }} className='text-19 leading-[1.473684210526316] font-extralight'>{item.desc}</motion.p>
                </div>
              ))
            }
        </div>
      </div>
    </section>
  );
};

export default SecondSection;