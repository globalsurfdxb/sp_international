"use client";
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
const H2Title = ({ titleText, titleColor, marginClass,maxW }) => {
  return (
    <motion.h2 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.6, once: true }} className={`text-60 md:text-40 2xl:text-45 3xl:text-60 font-light leading-[1.166666666666667] text-${titleColor} ${marginClass} ${maxW}`}>{titleText}</motion.h2>
  );
}

export default H2Title; 