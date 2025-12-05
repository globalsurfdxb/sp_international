import React from "react";
import { coreValueData } from "../data"; 
import H2Title from "../../common/H2Title";
import {motion} from "framer-motion"
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
const CoreValues = () => {
  const sectionRef = useRef(null);
  const imageContainerRefTwo = useRef(null);

  // Parallax for main image container
  const { scrollYProgress: imageProgress } = useScroll({
    target: imageContainerRefTwo,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(imageProgress, [0, 1], [-150, 150]);

  // Parallax for shape
  const { scrollYProgress: shapeProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const shapeY = useTransform(shapeProgress, [0, 1], [-200, 200]);
  return (
    <section className="pt25 pb30 relative" ref={sectionRef}>
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[658px_auto]  gap-5 2xl:gap-15 3xl:gap-23 items-center">
          <div className="relative overflow-hidden" ref={imageContainerRefTwo}>
            <motion.img style={{y:imageY}} src={coreValueData.image} width={658} height={545} alt="" className="w-full  md:w-full h-[250px] md:h-[350px] lg:h-[450px] 2xl-h-[545px] object-cover" />
          </div>
          <div className="border-b border-[#cccccc] pb-5 md:pb-7 xl:pb-[42px]">
            <H2Title titleText={coreValueData.title} titleColor="black" marginClass="mb-4 2xl:mb-[30px] max-w-[15ch]" />
            <p className="text-19 font-light leading-[1.474] xl:max-w-[59ch] text-paragraph">{coreValueData.description}</p>
          </div>
          <motion.img src="/assets/images/svg/sv-02.svg" style={{y:shapeY}} alt=""  className="absolute bottom-0 right-0 xl:right-[-40px] z-[-1] w-[461px] 2xl:w-[461px] 3xl:w-[667px] h-[934px]" width={667} height={934} /> 
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
