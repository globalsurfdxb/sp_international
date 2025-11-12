'use client';
import { moredetrails } from "../data";
import { motion } from "framer-motion";
import { moveUp, paragraphItem } from "../../../motionVarients";
const MoreDetrails = () => {

  return (
    <section>
      <div className="py-10 xl:py-15   2xl:py-[80px] bg-f5f5 bg-[url('/assets/images/project-details/bg-svg.svg')] bg-no-repeat bg-[position:left_-160px] bg-size-[445px]">
        <div className="container relative">
          <div className="2xl:max-w-[1208px] ml-auto">
            <div className="flex  justify-between items-center border-b border-black/20">
              <div>
                <motion.h2 variants={moveUp(0.3)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-60 font-light leading-[1.17] mb-3 lg:mb-7 text-black">{moredetrails.title}</motion.h2>
                {moredetrails.paragraphs.map((paragraph, index) => (
                  <motion.p key={index} variants={paragraphItem} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-19 font-light text-paragraph mb-3 xl:mb-5 last:xl:mb-10 last:lg:mb-[80px]">{paragraph}</motion.p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreDetrails;
