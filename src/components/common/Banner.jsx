"use client";
import React from "react";

const Banner = ({ title, image }) => {
  return (
    <section className="relative w-full h-[280px] lg:h-[560px] bg-secondary/20">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_18.92%,rgba(0,0,0,0)_72.69%)]"></div>

      {/* Content */}
      <div className="container relative z-10 h-full">
        <div className="flex flex-col justify-end h-full pb-10 lg:pb-15 xl:pb-26">
          <h1 className="text-white text-70 font-light leading-[1.08] capitalize">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
