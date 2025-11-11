"use client";

import React from "react";
import { cultureData } from "../data";

const CultureSection = () => {
  const { title, description, buttonText, backgroundImage } = cultureData;

  return (
    <section className="container py-8 md:py-17 xl:py-22 2xl:py-30">
      <div
        className="relative w-full h-[420px] xl:h-[490px] overflow-hidden flex items-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 7.22%, rgba(0, 0, 0, 0) 74.6%), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-white px-6 sm:px-10 md:px-14 lg:px-[100px]">
          <h2 className="text-48 lg:text-60 font-light leading-[1.166666666666667] mb-6 xl:mb-[30px] lg:max-w-[500px]">
            {title}
          </h2>
          <p className="text-18 md:text-19 font-light leading-[1.473684210526316] max-w-[660px] mb-[24px] xl:mb-[30px]">
            {description}
          </p>
          {/* Button with centered text over SVG */}
          <button className="relative inline-flex items-center justify-center">
            <img
              src="/assets/images/careers/partofus/btn-svg.svg"
              alt="button"
              className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-auto"
            />
            <span className="absolute text-white font-light uppercase text-12 md:text-14 lg:text-16 leading-[1.75]">
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
