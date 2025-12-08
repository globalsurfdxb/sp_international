'use client';
import { useMediaQuery } from "react-responsive";
import { projectdetails } from "../data";
import { motion,useScroll,useTransform } from "framer-motion";
import { moveRight, moveUp, paragraphItem } from "../../../motionVarients";
import { useRef } from "react";
const Banner = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // < 768
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // 768 - 1023
    const imageOffset = isMobile ? [-30, 30] : isTablet ? [-80, 80] : [-150, 150];
  const sectionRef = useRef(null);
  const imageContainerRefTwo = useRef(null);

  // Parallax for main image container
  const { scrollYProgress: imageProgress } = useScroll({
    target: imageContainerRefTwo,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(imageProgress, [0, 1], imageOffset);


  return (
    <section className="relative overflow-hidden" ref={sectionRef}>
      <div className="pt-12 xl:pt-15  3xl:pt-30 pb-26 md:pb-38  lg:pb-[170px] xl:pb-[230px] bg-f5f5 2xl:pb-[232px]  ">
        <div className="container relative   z-[2]">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 lg:gap-0 ">
            <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} > 
              <h1 className="text-70 font-light leading-[1.07] mb-3 lg:mb-5">{projectdetails.title}</h1>
              <p className="text-29 font-light text-paragraph leading-[1.33]">{projectdetails.subtitle}</p>
            </motion.div>
            <div className="w-fit ml-auto">
              <p className="text-[18px] font-light text-paragraph/70 leading-[1.8] border-b [border-image-source:linear-gradient(270deg,#1E45A2_0%,#30B6F9_100%)] [border-image-slice:1]">{projectdetails.sector}</p>
            </div>
          </div>
        </div>

      </div>
      <div className="container relative bottom-19 md:bottom-28 lg:bottom-[120px] xl:bottom-[150px] left-0 z-[2] overflow-hidden" ref={imageContainerRefTwo}>
        <motion.img style={{y:imageY}} variants={moveRight(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} src={projectdetails.image}
        width={1620} height={750} alt="" className="w-full h-[200px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] 3xl:h-[750px] object-cover scale-110" />
      </div>
      <div className="container relative md:bottom-[70px] bottom-10 left-0 2xl:pb-[50px]">
        <motion.h2 variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="text-60 font-light mb-7  xl:mb-10  2xl:mb-[58px] leading-[1.17]">About Project</motion.h2>
        <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-[825px_1fr]  border-t border-black/20  ">
          <div className="flex items-center  py-3 lg:py-6 border-b border-black/20 md:border-b-0">
            <p className="text-19 font-light text-paragraph leading-[1.475] min-w-[11.467ch]">Project:</p>
            <p className="text-19 font-light   leading-[1.475] text-black">{projectdetails.title}</p>
          </div>
          <div className="flex items-center  py-3 lg:py-6">
            <p className="text-19 font-light text-paragraph leading-[1.475] min-w-[11.467ch]">Location:</p>
            <p className="text-19 font-light   leading-[1.475] text-black">{projectdetails.Location}</p>
          </div> </motion.div>

        <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-[825px_1fr]  border-t border-black/20  ">
          <div className="flex items-center  py-3 lg:py-6 border-b border-black/20 md:border-b-0">
            <p className="text-19 font-light text-paragraph leading-[1.475] min-w-[11.467ch]">Sector:</p>
            <p className="text-19 font-light   leading-[1.475] text-black">{projectdetails.sector}</p>
          </div>
          <div className="flex items-center  py-3 lg:py-6">
            <p className="text-19 font-light text-paragraph leading-[1.475] min-w-[11.467ch]">Status:</p>
            <p className="text-19 font-light   leading-[1.475] text-black">{projectdetails.status}</p>
          </div>
        </motion.div>

        <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-[825px_1fr]  border-t border-black/20  ">
          <div className="flex items-center  py-3 lg:py-6  border-b border-black/20 md:border-b-0 ">
            <p className="text-19 font-light text-paragraph leading-[1.475] min-w-[11.467ch]">Client:</p>
            <p className="text-19 font-light   leading-[1.475] text-black">{projectdetails.client}</p>
          </div>
          <div className="flex items-center  py-3 lg:py-6">
            <p className="text-19 font-light text-paragraph leading-[1.475] min-w-[11.467ch]">BUA (Sq.ft):</p>
            <p className="text-19 font-light   leading-[1.475] text-black">{projectdetails.sqft}</p>
          </div>
        </motion.div>
        <div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-[825px_1fr]  border-t border-b border-black/20  ">
          <div className="flex items-center  py-3 lg:py-6 border-b border-black/20 md:border-b-0">
            <p className="text-19 font-light text-paragraph leading-[1.475] min-w-[11.467ch]">Consultant:</p>
            <p className="text-19 font-light   leading-[1.475] text-black">{projectdetails.Consultant}</p>
          </div>
          <div className="flex items-center  py-3 lg:py-6">
            <p className="text-19 font-light text-paragraph leading-[1.475] min-w-[11.467ch]">Contract Model:</p>
            <p className="text-19 font-light   leading-[1.475] text-black">{projectdetails.Contractmodel}</p>
          </div>
        </div>

      </div>
      <div className="absolute top-0 right-0 z-0">
        <img src="/assets/images/project-details/bannerbg.svg" alt="" className=" object-fit" />
      </div>
    </section>
  );
};

export default Banner;
