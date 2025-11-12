'use client';
import { projectdetails } from "../data";
import { motion } from "framer-motion";
import { moveLeft, moveRight, moveUp, paragraphItem } from "../../../motionVarients";
const Banner = () => {

  return (
    <section className=" ">
      <div className="pt-12 xl:pt-25  2xl:pt-30 pb-20  md:pb-[200px] xl:pb-[230px] bg-f5f5 2xl:pb-[232px]  ">
        <div className="container relative   z-[2]">
          <div className="flex  justify-between items-center ">
            <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} > 
              <h1 className="text-70 font-light leading-[1.07] mb-3 lg:mb-5">{projectdetails.title}</h1>
              <p className="text-29 font-light text-paragraph leading-[1.33]">{projectdetails.subtitle}</p>
            </motion.div>
            <div>
              <p className="font-18 font-light text-paragraph/70 leading-[1.8] border-b [border-image-source:linear-gradient(270deg,#30B6F9_0%,#1E45A2_100%)] [border-image-slice:1]">{projectdetails.sector}</p>
            </div>
          </div>
        </div>

      </div>
      <div className="container relative bottom-[50px] md:bottom-[150px] left-0 z-[2]">
        <motion.img variants={moveRight(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} src={projectdetails.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container relative md:bottom-[70px] bottom-[10px] left-0 pb-[50px]">
        <motion.h2 variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="text-60 font-light mb-5 lg:mb-[58px] leading-[1.17]">About Project</motion.h2>
        <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="grid grid-cols-1 md:grid-cols-2  border-t border-black/20  ">
          <div className="flex items-center  py-3 lg:py-6">
            <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Project:</p>
            <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.title}</p>
          </div>
          <div className="flex items-center  py-3 lg:py-6">
            <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Location:</p>
            <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.Location}</p>
          </div> </motion.div>

        <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="grid grid-cols-1 md:grid-cols-2  border-t border-black/20  ">
          <div className="flex items-center  py-3 lg:py-6">
            <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Sector:</p>
            <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.sector}</p>
          </div>
          <div className="flex items-center  py-3 lg:py-6">
            <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Status:</p>
            <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.status}</p>
          </div>
        </motion.div>

        <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="grid grid-cols-1 md:grid-cols-2  border-t border-black/20  ">
          <div className="flex items-center  py-3 lg:py-6">
            <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Client:</p>
            <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.client}</p>
          </div>
          <div className="flex items-center  py-3 lg:py-6">
            <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">BUA (Sq.ft):</p>
            <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.sqft}</p>
          </div>
        </motion.div>
        <div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="grid grid-cols-1 md:grid-cols-2  border-t border-b border-black/20  ">
          <div className="flex items-center  py-3 lg:py-6">
            <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Consultant:</p>
            <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.Consultant}</p>
          </div>
          <div className="flex items-center  py-3 lg:py-6">
            <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Contract Model:</p>
            <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.Contractmodel}</p>
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
