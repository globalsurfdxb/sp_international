"use client";

import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { moveUp } from "../../motionVarients";
import H2Title from "./H2Title";

gsap.registerPlugin(ScrollTrigger);

const FALLBACK_IMAGE = "/assets/images/placeholder.jpg";

const ImgPointsComponent = ({ data, bgColor = "", sectionSpacing = "" }) => {
  /* ---------------- SAFE DATA ---------------- */
  const heading = data?.heading ?? "";
  const points = data?.points ?? [];

  /* ---------------- MEDIA ---------------- */
  const isMob = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  /* ---------------- STATE ---------------- */
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeImage, setActiveImage] = useState(FALLBACK_IMAGE);
  const [mounted, setMounted] = useState(false);

  /* ---------------- REFS ---------------- */
  const imageRef = useRef(null);

  /* ---------------- HYDRATION FIX ---------------- */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------------- MOBILE DETECT ---------------- */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const check = () =>
      setIsMobile(window.matchMedia("(max-width: 1023px)").matches);

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ---------------- DEFAULT IMAGE ---------------- */
  useEffect(() => {
    if (points.length) {
      setActiveImage(points[0].image);
    }
  }, [points]);

  /* ---------------- PARALLAX ---------------- */
  const imageOffset = isMob ? [-30, 30] : isTablet ? [-80, 80] : [-150, 150];

  const { scrollYProgress } = useScroll(
    mounted
      ? { target: imageRef, offset: ["start end", "end start"] }
      : {}
  );

  const imageY = useTransform(scrollYProgress ?? 0, [0, 1], imageOffset);

  /* ---------------- HELPERS ---------------- */
  const updateImage = (index) => {
    if (points[index]?.image) {
      setActiveImage(points[index].image);
    }
  };

  const isActive = (index) =>
    isMobile
      ? activeIndex === index
      : hoverIndex === index || activeIndex === index;

  if (!points.length) return null;

  return (
    <section className={`w-full ${bgColor} text-black ${sectionSpacing}`}>
      <div className="container">
        <motion.div
          variants={moveUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <H2Title
            titleText={heading}
            titleColor="black"
            marginClass="mb-4 lg:mb-6 xl:mb-8 3xl:mb-17"
          />
        </motion.div>

        <div className="grid md:grid-cols-[0.8fr_1fr] 2xl:grid-cols-[600px_auto] 3xl:grid-cols-[916px_auto] xl:items-center gap-8 xl:gap-10 2xl:gap-18 3xl:gap-[108px] transition-all duration-300">
          {/* IMAGE */}
          <div
            ref={imageRef}
            className="relative h-[250px] md:h-full overflow-hidden"
          >
            <motion.img
              key={activeImage}
              src={activeImage}
              alt=""
              style={{ y: imageY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover scale-110 md:scale-150 lg:scale-110"
            />
          </div>

          {/* TEXT */}
          <div className="border-t border-b border-black/20 3xl:max-w-[50ch]">
            {points.map((item, index) => (
              <motion.div
                key={index}
                variants={moveUp(0.15 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                onMouseEnter={() => {
                  if (!isMobile) {
                    setHoverIndex(index);
                    updateImage(index);
                  }
                }}
                onMouseLeave={() => !isMobile && setActiveIndex(null)}
                onClick={() => {
                  setActiveIndex(index);
                  updateImage(index);
                }}
                className="border-b border-black/20 last:border-b-0 py-5 3xl:py-8 cursor-pointer"
              >
                <div
                  className={`relative 2xl:text-24 3xl:text-29 transition-all ${isActive(index)
                      ? "text-black font-semibold"
                      : "text-paragraph font-light"
                    }`}
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-[3px] bg-secondary transition-transform origin-top  ${isActive(index) ? "scale-y-100" : "scale-y-0"
                      }`}
                  />
                  <span className={`inline-block transition-transform  ${isActive(index)
                      ? "translate-x-[20px] xl:translate-x-[43px]"
                      : "translate-x-0"
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgPointsComponent;
