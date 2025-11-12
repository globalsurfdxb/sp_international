import React from "react";
import { careersData } from "../data";
import { motion } from "framer-motion";
import { moveLeft, moveRight, moveUp } from "../../../motionVarients";
const Strength = () => {
  return (
    <section className="py-8 md:py-15 xl:py-20 2xl:py-25">
      <div className="container flex flex-col md:flex-row items-start 2xl:gap-[190px]">
        {/* Left Button */}
        <motion.div variants={moveRight(0.4)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="mb-10 md:mb-0 md:mt-[10px] flex justify-center md:justify-start">
          <div className="relative inline-block">
            {/* SVG Gradient Border */}
            <svg width="223" height="45" viewBox="0 0 223 45" xmlns="http://www.w3.org/2000/svg" className="w-[223px] h-[45px]">
              <rect x="0.5" y="0.5" width="222" height="43" rx="22" ry="22" fill="white" stroke="url(#gradient)" strokeWidth="1" />
              <defs>
                <linearGradient id="gradient" x1="222" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1E45A2" />
                  <stop offset="1" stopColor="#30B6F9" />
                </linearGradient>
              </defs>
            </svg>

            {/* Centered Text */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-16 leading-[1.75] font-light hover:opacity-[0.8] transition-all duration-300 ease-in-out cursor-pointer w-full text-center">{careersData.buttonText}</span>

            {/* Hover Fill Effect (Overlay Layer) */}
            <span className="absolute inset-0 rounded-full bg-[#0055A5] opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out" style={{ zIndex: -1 }}></span>
          </div>
        </motion.div>

        {/* Right Text Section */}
        <div className="text-left">
          <motion.h2 variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-60 font-light leading-[1.166666666666667] text-black mb-[30px]">{careersData.title}</motion.h2>
          <motion.p variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-19 font-light leading-[1.473684210526316] text-paragraph max-w-[72ch]">{careersData.description}</motion.p>
          <motion.div variants={moveUp(0.8)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="border-b border-gray-200 mt-[30px] xl:mt-[50px] 2xl:mt-[70px]" />
        </div>
      </div>
    </section>
  );
};

export default Strength;
