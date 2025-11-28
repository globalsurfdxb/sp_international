'use client';
import { Inquiretoday } from "../data";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { moveUp } from "../../../motionVarients";
const InquireToday = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (!sectionRef.current) return;

    const overlay = sectionRef.current.querySelector(".reveal-overlay3");

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
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="reveal-overlay3 absolute inset-0 bg-black/20 z-20"></div>
      <div className="bg-primary">
        <div className="container relative py-8 xl:py-15 2xl:py-22 3xl:py-[108px] overflow-hidden">
          <motion.img variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} width={"313px"} height={"440px"} src="/assets/images/svg/sv-02.svg" alt="" className="absolute left-0 bottom-0 z-10 object-contain" />
          <div className="2xl:max-w-[1208px] ml-auto">
            <div className="flex justify-between items-center ">
              <div className="mb-5 xl:mb-[68px]">
                <motion.h2 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-60 font-light leading-[1.17] mb-3 lg:mb-[21px] text-white">{Inquiretoday.title}</motion.h2>
                <motion.p variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-29 font-light leading-[1.35] text-white">
                  {Inquiretoday.subtitle}</motion.p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="font-16 font-light text-white">Email</motion.p>
              <motion.p variants={moveUp(0.5)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="font-16 font-light text-[#97B6FF]">{Inquiretoday.mail}</motion.p>
              <motion.svg variants={moveUp(0.5)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} xmlns="http://www.w3.org/2000/svg" width="27" height="17" viewBox="0 0 27 17" fill="none">
                <path d="M17.6328 1.93262L25.0111 8.5134L17.6579 15.0679" stroke="#30B6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24.5954 8.5H1.98047" stroke="#30B6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </motion.svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquireToday;
