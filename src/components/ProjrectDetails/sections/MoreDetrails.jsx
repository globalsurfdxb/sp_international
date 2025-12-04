'use client';
import { moredetrails } from "../data";
import { motion } from "framer-motion";
import { moveUp, paragraphItem } from "../../../motionVarients";
const MoreDetrails = () => {

  return (
    <section>
      <div className="pt-7 pb-10 xl:py-15 2xl:py-22  3xl:py-[80px]  relative bg-f5f5 ">
        <div className="container relative">
          <div className="2xl:max-w-[1208px] ml-auto">
            <div className="flex  justify-between items-center border-b border-black/20">
              <div>
                <motion.h2 variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-60 font-light leading-[1.17] mb-3 lg:mb-7 text-black">{moredetrails.title}</motion.h2>
                <div>
                  {moredetrails.paragraphs.map((paragraph, index) => (
                  <motion.p key={index} variants={paragraphItem} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-19 font-light text-paragraph mb-3 xl:mb-5  3xl:mb-[25.4px] last:lg:mb-10 last:2xl:mb-[80px]">{paragraph}</motion.p>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
         <motion.div variants={moveUp(2)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="absolute hidden md:block left-[-120px] bottom-[-253px] lg:left-[-290px] lg:bottom-[73px]  z-[-1]">
              <img  src="../assets/images/svg/sv-02.svg" className="w-[500px] h-[992px] lg:w-[742px] lg:h-[1040px] object-cover object-center" alt="" />
            </motion.div>
      </div>
    </section>
  );
};

export default MoreDetrails;
