import React from "react";
import { coreValueData } from "../data"; 
import H2Title from "../../common/H2Title";
const CoreValues = () => {
  return (
    <section className="pt25 pb30">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[658px_auto]  gap-5 2xl:gap-15 3xl:gap-23 items-center">
          <div>
            <img src={coreValueData.image} width={658} height={545} alt="" className="w-full  md:w-full h-[250px] md:h-[350px] lg:h-[450px] 2xl-h-[545px] object-cover" />
          </div>
          <div>
            <H2Title titleText={coreValueData.title} titleColor="black" marginClass="mb-4 2xl:mb-50px" />
            <p className="text-19 font-light leading-[1.474] xl:max-w-[59ch] text-paragraph">{coreValueData.description}</p>
          </div>
          <img src="/assets/images/svg/sv-02.svg" alt=""  className="absolute right-0 z-[-1]" width={667} height={934} /> 
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
