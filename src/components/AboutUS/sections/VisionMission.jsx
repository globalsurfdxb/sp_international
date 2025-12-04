'use client';
import { Vision } from "../data";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { moveUp } from "../../../motionVarients";

const VisionMission = () => {
  const sectionRef = useRef(null);
  const imageContainerRefTwo = useRef(null);

  // Parallax for main image container
  const { scrollYProgress: imageProgress } = useScroll({
    target: imageContainerRefTwo,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(imageProgress, [0, 1], [-150, 150]);
  useEffect(() => {
    if (!sectionRef.current) return;

    const overlay = sectionRef.current.querySelector(".reveal-overlay");

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
    <>
      <section ref={sectionRef} className="py25  bg-f5f5 relative overflow-hidden">
        <div className="reveal-overlay absolute inset-0 bg-white z-20"></div>
        <div className="container">
          <div className={`grid grid-cols-1 lg:grid-cols-[1fr_567px] gap-10 lg:gap-[90px] items-center justify-stretch`}>
            {/* Left Column */}
            <div className="h-full relative overflow-hidden" ref={imageContainerRefTwo}>
              <motion.img style={{y:imageY}} variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="z-10 relative h-full" src={Vision.image} alt="" />
            </div>

            {/* Right Column */}
            <div>
              <div className="z-10 relative">
                <div className="flex flex-col gap-8 2xl:gap-[56px]">
                  {Vision.right.map((item, i) => (
                    <motion.div variants={moveUp(0.5*i)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="z-10" key={i}>
                      <h3 className='text-60 font-light leading-[1.18] text-black mb-4 lg:mb-6'>
                        {item.title}
                      </h3>
                      <p className='text-19 font-light leading-[1.474] text-paragraph'>{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default VisionMission;
