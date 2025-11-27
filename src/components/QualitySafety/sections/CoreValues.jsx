import React from "react";
import { coreValueData } from "../data"; 
const CoreValues = () => {
  return (
    <section className="pt25 pb30">
      <div className="container ">
        <div className="grid grid-cols-1   xl:grid-cols-[658px_auto] gap-10 2xl:gap-15 3xl:gap-23 items-center">
          <div>
            <img src={coreValueData.image} alt="" className="w-full object-cover h-[600px] xl:h-full" />
          </div>
          <div>
            <h2 className="text-60 font-light leading-[1.18] mb-7 max-w-[15ch]">{coreValueData.title}</h2>
            <p className="text-19 font-light leading-[1.474] xl:max-w-[59ch] text-paragraph">{coreValueData.description}</p>
          </div>
          <img src="/assets/images/svg/sv-02.svg" alt="" className="absolute right-0 z-[-1]" width={667} height={934} /> 
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
