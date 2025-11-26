import React from "react";
import { coreValueData } from "../data"; 
const CoreValues = () => {
  return (
    <section className="py-10 xl:py-15 2xl:pt-25 2xl:pb-30">
      <div className="container ">
        <div className="grid grid-cols-1   lg:grid-cols-[658px_auto] gap-23 items-center">
          <div>
            <img src={coreValueData.image} alt="" />
          </div>
          <div>
            <h2 className="text-60 font-light leading-[1.18] mb-7 max-w-[15ch]">{coreValueData.title}</h2>
            <p className="text-19 font-light leading-[1.474] max-w-[59ch] text-paragraph">{coreValueData.description}</p>
          </div>
          <img src="/assets/images/svg/sv-02.svg" alt="" className="absolute right-0 z-[-1]" width={667} height={934} /> 
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
