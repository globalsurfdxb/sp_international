"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { paragraphItem } from "../../../motionVarients";
const ValueItem = ({ item }) => {
  const listRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [height, setHeight] = useState(0);

  const handleMouseEnter = () => {
    if (listRef.current) {
      setHeight(listRef.current.scrollHeight);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHeight(0);
  };

  return (
    <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}}
      className="group flex flex-col lg:flex-row lg:justify-between  py-[16px] cursor-pointer border-b border-[#E5E5E5] first:border-t"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex   justify-between">
        <h3 className="text-29 font-light leading-[1.474] lg:leading-[2.43] text-paragraph group-hover:text-black transition-all ease-in-out duration-500 group-hover:font-bold">
          {item.label}
        </h3><div
          className={`flex lg:hidden w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] rounded-full border border-black/20 justify-center items-center transition-transform duration-500 ${isHovered ? "rotate-180" : ""
            }`}
        >
          <img src="/assets/images/about-us/toparrow.svg" width={14} height={14} alt="arrow" />
        </div>
      </div>

      <div className="flex overflow-hidden gap-10 lg:gap-[217px]   ">
        {/* Expanding List */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden  ${isHovered ? "opacity-100" : "opacity-0" }`} style={{ height: `${height}px` }} >
          <ul ref={listRef} className="text-19 leading-[1.85] max-w-50ch ps-6 lg:ps-12 py-[11px]">
            {item.list.map((listItem, i) => (
              <li key={i} className="relative before:content-[''] before:absolute before:-left-6 before:top-[14px] before:w-[7px] before:h-[7px]
               before:bg-secondary before:rounded-none text-paragraph">{listItem}</li>
            ))}
          </ul>
        </div>

        <div className={`hidden lg:flex min-w-[35px] min-h-[35px] lg:w-[50px] lg:h-[50px] rounded-full border border-black/20 justify-center items-center transition-transform duration-500 ${isHovered ? "rotate-180" : ""
            }`}>
          <img src="/assets/images/about-us/toparrow.svg" width={14} height={14} alt="arrow" />
        </div>
      </div>
    </motion.div>
  );
};

export default ValueItem;
