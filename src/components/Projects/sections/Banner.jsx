"use client";
import React, { useRef, useEffect } from "react";
import { projectDetails } from "../data";
const Banner = () => {
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    const targetEl = targetRef.current;

    if (!containerEl || !targetEl) return;
 
    const computedStyle = window.getComputedStyle(containerEl);
    const marginLeft = computedStyle.marginLeft;
 
    targetEl.style.marginLeft = marginLeft;
 
    const handleResize = () => {
      const updatedStyle = window.getComputedStyle(containerEl);
      targetEl.style.marginLeft = updatedStyle.marginLeft;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="relative w-full h-[280px] lg:h-[560px] bg-secondary/20">
        <img
          src="/assets/images/projects/banner.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_18.92%,rgba(0,0,0,0)_72.69%)]"
        ></div>
        <div className="container  " ref={containerRef}></div>
        <div className=" relative z-2 h-full " ref={targetRef}>
          <div className="flex flex-col justify-end h-full  ">
            <div className="flex justify-between">
              <h1 className="text-white  text-70  font-light leading-[1.08]  ">
                Projects
              </h1>
                <div className="py-6 lg:py-[48px] ps-6 lg:ps-[83px] pe-6 bg-primary min-w-[1250px]">
                  <div className="flex items-center gap-12 xl:gap-[148px]">
                    {projectDetails.list.map((item, i) => (
                                <div key={i}>
                                  <h3 className="text-40 font-light leading-[1.5] text-white">{item.value}</h3>
                                  <p className="text-19 font-light leading-[1.2] text-white/70">{item.title}</p>
                                </div>
                              ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 z-10">
          <img src="/assets/images/projects/bannersvg.svg" className="  object-cover object-center" alt="" />
        </div>
      </section>
    </>
  );
};

export default Banner;
