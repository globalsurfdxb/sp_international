'use client';
import { keyfactors } from "../data";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
const KeyFacts = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (!sectionRef.current) return;

    const overlay = sectionRef.current.querySelector(".reveal-overlay2");

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
      <div className="py-12  2xl:pt-[88px]  2xl:pb-[80px] bg-primary  ">
        <div className="reveal-overlay2 absolute inset-0 bg-black/20 z-20"></div>
        <div className="container relative">
          <div className=" xl:max-w-[1200px] 2xl:max-w-[1208px] ml-auto">
            <div className="flex  justify-between items-center ">
              <div>
                <h2 className="text-60 font-light leading-[1.17] mb-7 lg:mb-15 text-white">{keyfactors.title}</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 xl:gap-0">
              {keyfactors.list.map((item, i) => (
                <div key={i}>
                  <h3 className="text-40 font-light leading-[1.474] text-white">{item.value}</h3>
                  <p className="text-19 font-light leading-[1.474] text-white/70">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFacts;
