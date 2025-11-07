"use client";
import { useRef, useState } from "react";
 
 

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
    <div
      className="group flex justify-between items-center py-[16px] cursor-pointer border-b border-[#E5E5E5] first:border-t"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    > 
      <h3 className="text-29 font-light leading-[2.43] text-paragraph">
        {item.label}
      </h3>
 
      <div className="flex overflow-hidden gap-[217px] items-center py-[11px]">
        {/* Expanding List */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{ height: `${height}px` }}
        >
          <ul ref={listRef} className="text-19 leading-[1.85] max-w-50ch">
            {item.list.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </ul>
        </div>
 
        <div
          className={`flex w-[50px] h-[50px] rounded-full border justify-center items-center transition-transform duration-500 ${
            isHovered ? "rotate-180" : ""
          }`}
        >
          <img
            src="/assets/images/about-us/toparrow.svg"
            width={13}
            height={13}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default ValueItem;
