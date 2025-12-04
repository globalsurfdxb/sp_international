"use client"; 
import { values } from "../data";
import ValueItem from "./ValueItem";
import { motion } from "framer-motion";
import { moveUp, moveLeft ,paragraphItem} from "../../../motionVarients";
import { useRef, useState } from "react";
const OurValues = () => {
   const listRef = useRef(null);
    const [isHovered, setIsHovered] = useState(1);
    const [height, setHeight] = useState(0);
  
    const handleMouseEnter = (index) => {
      if (listRef.current) {
        setHeight(listRef.current.scrollHeight);
      }
      setIsHovered(index);
    };
  
    const handleMouseLeave = (index) => {
      setIsHovered(index);
      setHeight(0);
    };
  return (
    // <section className="py-12 xl:py-15 2xl:py-30 bg-[url('/assets/images/about-us/valuebg.svg')] bg-auto bg-right-bottom bg-no-repeat">
    <section className="pt-text30 pb30 relative overflow-hidden">
      <motion.img variants={moveLeft(1)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} src="/assets/images/svg/sv-02.svg" alt="" width={"432px"} height={"607px"} className="absolute bottom-0 -right-25 3xl:right-0 z-[-1] w-[152px] h-full md:w-[232px] md:h-full lg:w-[432px] lg:h-[607px]" />
      <div className="container">
        <motion.h2 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}}
         className="text-60 font-light leading-[1.18] text-black mb-5 2xl:mb-[54px]">
          {values.title}
        </motion.h2>

        <div className="xl:max-w-[74.51%]">
          {values.data.map((item, index) => (
            // <ValueItem key={index} item={item} />
              <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}}
                  className="group flex flex-col lg:flex-row lg:justify-between  py-[16px] cursor-pointer border-b border-black/20 first:border-t"
                  onMouseEnter={  () => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div className="flex   justify-between">
                    <h3 className="text-29 font-light leading-[1.474] lg:leading-[2.43] text-paragraph group-hover:text-black transition-all ease-in-out duration-500 group-hover:font-bold">
                      {item.label}
                    </h3><div
                      className={`flex lg:hidden w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] rounded-full border border-black/20 justify-center items-center transition-transform duration-500 ${isHovered === index ? "rotate-180" : ""
                        }`}
                    >
                      <img src="/assets/images/about-us/toparrow.svg" width={14} height={14} alt="arrow" />
                    </div>
                  </div>
            
                  <div className="flex overflow-hidden gap-10 lg:gap-[217px]   ">
                    {/* Expanding List */}
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden  ${isHovered === index ? `opacity-100 h-[${height}px]` : "opacity-0 h-0" }`} >
                      <ul ref={listRef} className="text-19 leading-[1.85] max-w-50ch ps-6 lg:ps-12 py-[11px]">
                        {item.list.map((listItem, i) => (
                          <li key={i} className="relative before:content-[''] before:absolute before:-left-6 before:top-[14px] before:w-[7px] before:h-[7px]
                           before:bg-secondary before:rounded-none text-paragraph">{listItem}</li>
                        ))}
                      </ul>
                    </div>
            
                    <div className={`hidden lg:flex min-w-[35px] min-h-[35px] lg:w-[50px] lg:h-[50px] rounded-full border border-black/20 justify-center items-center transition-transform duration-500 ${isHovered === index ? "rotate-180" : ""
                        }`}>
                      <img src="/assets/images/about-us/arrow-top1.svg" width={20} height={20} alt="arrow" />
                    </div>
                  </div>
                </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

 

export default OurValues; 