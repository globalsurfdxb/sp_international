"use client"; 
import { values } from "../data";
import ValueItem from "./ValueItem";
import { motion } from "framer-motion";
import { moveUp, moveLeft } from "../../../motionVarients";
const OurValues = () => {
  return (
    // <section className="py-12 xl:py-15 2xl:py-30 bg-[url('/assets/images/about-us/valuebg.svg')] bg-auto bg-right-bottom bg-no-repeat">
    <section className="py-12 xl:py-15 2xl:py-30 relative overflow-hidden">
      <motion.img variants={moveLeft(1)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} src="/assets/images/svg/sv-02.svg" alt="" width={"432px"} height={"607px"} className="absolute bottom-0 right-0" />
      <div className="container">
        <motion.h2 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}}
         className="text-60 font-light leading-[1.18] text-black mb-5 2xl:mb-[54px]">
          {values.title}
        </motion.h2>

        <div className="max-w-[1207px]">
          {values.data.map((item, index) => (
            <ValueItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

 

export default OurValues;
