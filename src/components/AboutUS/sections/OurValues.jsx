"use client"; 
import { values } from "../data";
import ValueItem from "./ValueItem";

const OurValues = () => {
  return (
    <section className="py-12 xl:py-15 2xl:py-30 bg-[url('/assets/images/about-us/valuebg.svg')] bg-auto bg-right-bottom bg-no-repeat">
      <div className="container">
        <h2 className="text-60 font-light leading-[1.18] text-black mb-5 2xl:mb-[54px]">
          {values.title}
        </h2>

        <div className="max-w-[1207px]">
          {values.data.map((item, index) => (
            <ValueItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

 

export default OurValues;
