'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Import your data
import { nextpjt } from "../data";
import { motion } from "framer-motion";
import { moveUp } from "../../../motionVarients";
const NextProject = () => {
  const imageContainerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const container = imageContainerRef.current;
    const overlay = overlayRef.current;

    if (!container || !overlay) return;

    // Set initial state - overlay covers the image
    gsap.set(overlay, { scaleX: 1, transformOrigin: 'right' });

    // Create ScrollTrigger animation with scrub
    gsap.to(overlay, {
      scaleX: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="pt-text30 pb30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_550px] xl:grid-cols-[auto_1fr] 3xl:grid-cols-[auto_961px] gap-8 lg:gap-20 xl:gap-[137px]">
          <div className="flex flex-col justify-between items-left pt-0 2xl:pt-[45px] pb-0 2xl:pb-[50px]">
            <div className="mb-5 xl:mb-[68px]">
              <motion.h2 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-29 font-light leading-[1.17] mb-3 lg:mb-[21px] text-paragraph">
                {nextpjt.title}
              </motion.h2>
              <motion.p variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-60 font-light leading-[1.17] text-black max-w-[12ch]">
                {nextpjt.subtitle}
              </motion.p>
            </div>
            <Link to="/project-details" className='w-fit'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer w-[35px] h-[35px] xl:w-[71px] xl:h-[71px]"
              width="71"
              height="71"
              viewBox="0 0 71 71"
              fill="none"
            >
              <path
                d="M4.75781 4.76465H66.2437V66.2365"
                stroke="#30B6F9"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M66.2468 4.76465L5.05469 66.2365"
                stroke="#30B6F9"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            </Link>
          </div>
          <div ref={imageContainerRef} className="relative overflow-hidden">
            <img
              src={nextpjt.image}
              alt=""
              className="img-fluid"
            />
            {/* Overlay that reveals from right to left */}
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextProject;