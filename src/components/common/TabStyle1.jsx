"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { moveUp } from "../../motionVarients";

export default function TabStyle1({ data }) {
  const [activeId, setActiveId] = useState(data[1]?.id || data[0].id);
  const tabsContainerRef = useRef(null);
const itemRefs = useRef({});
  useEffect(() => {
    if (!tabsContainerRef.current) return;
    const buttons =
      tabsContainerRef.current.querySelectorAll(".tab-style1-btn");

    gsap.fromTo(
      buttons,
      { y: -18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.08,
      }
    );
  }, []);

  const activeTab = data.find((t) => t.id === activeId);

  return (
    <div className="w-full">
      {/* ================= TABS ================= */}
      <div className="max-w-[1345px]">
        <div
          ref={tabsContainerRef}
          className="flex flex-col md:flex-row flex-wrap w-full overflow-hidden"
        >
          {data.map((tab, index) => {
            const isActive = tab.id === activeId;

            return (
              <div key={tab.id}
  ref={(el) => (itemRefs.current[tab.id] = el)}
  className="w-full md:flex-1">
                {/* TAB BUTTON */}
                <motion.button
                  variants={moveUp(0.6 + 0.2 * index)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2, once: true }}
                 onClick={() => {
                  setActiveId(tab.id);

                  if (window.innerWidth < 768) {
                    setTimeout(() => {
                      itemRefs.current[tab.id]?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 250); // wait for accordion animation
                  }
                }}
                  className={`tab-style1-btn w-full px-4 py-4 lg:py-5 flex flex-col items-center text-center border h-full
                    ${
                      isActive
                        ? "bg-secondary/15 border-secondary"
                        : "border-white/30 bg-transparent hover:bg-white/5"
                    }`}
                >
                  <span className="text-16 leading-[1.75] text-white font-light mb-4">
                    {tab.number}
                  </span>
                  <span
                    className={`text-19 leading-[1.473684210526316] max-w-[30ch] transition-all duration-300 ${
                      isActive ? "font-bold" : "font-light"
                    }`}
                  >
                    {tab.title}
                  </span>
                </motion.button>

                {/* ================= MOBILE CONTENT ONLY ================= */}
                <div className="md:hidden">
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="px-4 py-6 border border-white/20"
                      >
                        {/* Image */}
                        <img
                          src={tab.image}
                          alt={tab.title}
                          className="w-full max-h-[260px] object-cover mb-4"
                        />

                        {/* Text */}
                        <h3 className="text-22 font-bold mb-3 text-white">
                          {tab.title}
                        </h3>

                        <p className="text-16 font-extralight text-white">
                          {tab.desc}
                        </p>

                        {tab.points?.length > 0 && (
                          <ul className="space-y-2 mt-4">
                            {tab.points.map((point, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 font-extralight text-white"
                              >
                                <span className="mt-[7px] h-[7px] w-[7px] bg-secondary" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= DESKTOP CONTENT (UNCHANGED) ================= */}
      <div className="hidden md:block max-w-[1377px] mt-12">
        <AnimatePresence mode="wait">
          {activeTab && (
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[650px_auto] gap-10 xl:gap-x-18 items-center"
            >
              {/* Left image */}
              <motion.div
                initial={{ opacity: 0.6, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
                className="w-full"
              >
                <img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="w-full h-full max-h-[445px] object-cover"
                />
              </motion.div>

              {/* Right content */}
              <div className="text-white text-sm lg:text-19">
                <motion.h3
                  variants={moveUp(0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2, once: true }}
                  className="text-29 font-bold mb-30px"
                >
                  {activeTab.title}
                </motion.h3>

                <motion.p
                  variants={moveUp(0.8)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ amount: 0.2, once: true }}
                  className="text-19 font-extralight"
                >
                  {activeTab.desc}
                </motion.p>

                {activeTab.points?.length > 0 && (
                  <ul className="space-y-2 mt-4 xl:mt-[25px]">
                    {activeTab.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        variants={moveUp(0.6 + 0.2 * idx)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ amount: 0.2, once: true }}
                        className="flex items-start gap-2 xl:gap-[18px] font-extralight"
                      >
                        <span className="mt-[7px] h-[7px] w-[7px] bg-secondary" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
