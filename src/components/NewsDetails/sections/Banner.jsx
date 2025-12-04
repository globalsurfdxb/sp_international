'use client';
import { useRef } from "react";
import { projectdetails } from "../data";
import { motion, useScroll, useTransform } from "framer-motion";
import { moveUp } from "../../../motionVarients";
const Banner = () => {
  const imageContainerRefTwo = useRef(null);
  const sectionRef = useRef(null)
  // Parallax for main image container
  const { scrollYProgress: imageProgress } = useScroll({
    target: imageContainerRefTwo,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(imageProgress, [0, 1], [-150, 150]);

    const { scrollYProgress: shapeProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    });
    const shapeY = useTransform(shapeProgress, [0, 1], [-200, 200]);
  return (
    <section className="relative overflow-hidden" ref={sectionRef}>
      <div className="pt-12 xl:pt-25  2xl:pt-30">
        <div className="container relative">
          <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="border-y border-cmnbdr  py-6 xl:py-[35px]">
            <div className="flex justify-between">
              <div className=" ">
                <div className="flex gap-15 xl:gap-[90px] 2xl:gap-[325px] ">
                  <div className="w-fit">
                    <p className="uppercase text-paragraph text-19 font-light">INDUSTRY</p>
                  </div>
                  <div className="w-fit">
                    <p className="uppercase text-paragraph text-19 font-light">JAN 09, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex  justify-between items-center my-6 lg:my-10">
            <div>
              <motion.h1 variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-70 font-light leading-[1.143] max-w-[26.35ch]">Shapoorji Pallonji Energy's FPSO Armada Sterling Commences Production</motion.h1>
            </div>
          </div>
        </div>
      </div>
      <motion.div variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="container relative overflow-hidden" ref={imageContainerRefTwo}>
        <motion.img style={{ y: imageY }} src="/assets/images/press-releases/newsbanner.jpg" alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute top-0 right-0">
        <motion.img style={{ y: shapeY }} src="/assets/images/project-details/bannerbg.svg" alt="" className=" object-fit" />
      </div>
    </section>
  );
};

export default Banner;
