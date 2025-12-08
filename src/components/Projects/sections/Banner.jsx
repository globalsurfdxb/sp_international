"use client";
import React, { useRef, useEffect } from "react";
import { projectDetails } from "../data";
import gsap from "gsap";
import { moveUp, moveLeft } from "../../../motionVarients";
import { motion } from "framer-motion";
const Banner = () => {
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.4 },
      });

      tl
        // Step 1: mask slides left → right revealing the overlay + image
        .fromTo(
          maskRef.current,
          {
            x: "0%",
          },
          {
            x: "100%",
            duration: 1.6,
            ease: "power4.inOut",
          }
        )
        // Step 2: subtle image zoom-out
        .fromTo(
          imgRef.current,
          { scale: 1.15 },
          { scale: 1, duration: 1.6, ease: "power3.out" },
          "-=1.2"
        )
        // Step 3: text fade-in after reveal
        .fromTo(
          titleRef.current,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} className="relative w-full h-[280px] lg:h-[350px] xl:h-[440px] 3xl:h-[560px] bg-secondary/20 overflow-hidden">
    <img ref={imgRef} src="/assets/images/projects/banner.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover object-center z-0" />
    <div ref={overlayRef} className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_18.92%,rgba(0,0,0,0)_72.69%)]"></div>
    <div className="container  " ref={containerRef}></div>
    <div className=" relative z-2 h-full " ref={targetRef}>
      <div className="flex flex-col justify-end h-full  ">
        <div className="flex flex-col md:flex-row justify-between ps-3 gap-5 lg:gap-0">
          <h1 ref={titleRef} className="text-white  text-70  font-light leading-[1.08]">Projects</h1>
          <motion.div variants={moveLeft(2)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="py-3 lg:py-[48px] ps-6 lg:ps-[83px] pe-6 bg-primary min-w-[70.68%]">
            <div className="flex items-center gap-12 xl:gap-[148px]">
              {projectDetails.list.map((item, i) => (
                <div key={i}>
                  <h3 className="text-40 font-light leading-[1.5] text-white">{item.value}</h3>
                  <p className="text-[16px] md:text-19 font-light leading-[1.2] text-white/70">{item.title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
      <motion.div variants={moveUp(2)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="absolute right-0 -bottom-8 lg:bottom-0 z-10">
      <img  src="../assets/images/svg/sv-02.svg" className="w-[200px]  lg:w-[449px] h-[630px] object-cover object-center" alt="" />
    </motion.div>
  </section>
  );
};

export default Banner;
