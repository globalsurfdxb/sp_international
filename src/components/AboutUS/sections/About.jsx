'use client';
import { data } from "../data";
import { motion, useScroll, useTransform } from "framer-motion";
import { paragraphItem, moveUp, moveLeft } from "../../../motionVarients";
import { useRef } from "react";
import { assets } from "../../../assets";
const About = () => {
  const sectionRef = useRef(null);
// Parallax for shape
  const { scrollYProgress: shapeProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const shapeY = useTransform(shapeProgress, [0, 1], [-200, 200]);
  return (
      <section className="pt-7 xl:py-15 2xl:pt-22 pb-10  3xl:pt-25 pb30 overflow-hidden" ref={sectionRef}>
        <div className="container">
          <div className={`grid grid-cols-1 lg:grid-cols-[1fr_430px] 2xl:grid-cols-[1fr_480px] 3xl:grid-cols-[1fr_520px] gap-7 2xl:gap-[100px] 3xl:gap-[167px]`}>
            {/* Left Column */}
            <div>
              <motion.p variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className='text-29 text-paragraph font-light leading-[1.345]'>
                {data.left.text}
              </motion.p>
              <div className='mt-7 xl:mt-23 pt-7  xl:pt-12  border-t border-black/20'>
                <div className='text-19 font-light leading-[1.474] flex flex-col gap-4 lg:gap-7 text-paragraph'>
                  {data.left.paragraphs.map((p, i) => (
                    <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} key={i}>{p}</motion.p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <motion.div variants={moveLeft(2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} 
              className="bg-primary p-8 md:p-12 2xl:pt-[48px] 2xl:pb-[117px] 2xl:px-15 h-full  bg-right-bottom bg-no-repeat bg-size bg-auto md:bg-[length:308px] relative overflow-hidden">
                <motion.img style={{y:shapeY}} src={assets.mainShape} alt="" className="absolute bottom-0 right-0 max-w-[55%]" />
                <div className="flex flex-col gap-12 md:gap-20  2xl:gap-15 3xl:gap-[35px]">
                  {data.right.map((item, i) => (
                    <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} key={i}>
                      <h3 className='text-40 font-light leading-[1] mb-3 text-white'>
                        {item.value}
                      </h3>
                      <p className='text-19 font-light leading-[1.474] text-white/70'>{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
