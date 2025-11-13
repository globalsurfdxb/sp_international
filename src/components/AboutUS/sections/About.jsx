'use client';
import { data } from "../data";
import { motion } from "framer-motion";
import { paragraphItem, moveUp, moveLeft } from "../../../motionVarients";
const About = () => {

  return (
      <section className="py-10 xl:py-15 2xl:pt-25 2xl:pb-30 overflow-hidden">
        <div className="container">
          <div className={`grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-7 2xl:gap-[167px]`}>
            {/* Left Column */}
            <div>
              <motion.p variants={moveUp(2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className='text-29 font-light leading-[1.345]'>
                {data.left.text}
              </motion.p>
              <div className='mt-7 xl:mt-23 pt-7  xl:pt-12  border-t border-black/20'>
                <div className='text-19 font-light leading-[1.474] flex flex-col gap-4 lg:gap-7 text-paragraph'>
                  {data.left.paragraphs.map((p, i) => (
                    <motion.p variants={paragraphItem} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} key={i}>{p}</motion.p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <motion.div variants={moveLeft(2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} 
              className="bg-primary p-8 md:p-12 2xl:py-[48px] 2xl:px-15 h-full bg-[url('/assets/images/svg/sv-02.svg')] bg-auto bg-right-bottom bg-no-repeat">
                <div className="flex flex-col gap-8">
                  {data.right.map((item, i) => (
                    <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} key={i}>
                      <h3 className='text-40 font-light leading-[1.474] text-white'>
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
