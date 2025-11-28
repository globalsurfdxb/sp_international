"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";



export default function TabStyle1({ data }) {
  const [activeId, setActiveId] = useState(data[1]?.id || data[0].id);
  const tabsContainerRef = useRef(null);

  useEffect(() => {
    if (!tabsContainerRef.current) return;
    const buttons = tabsContainerRef.current.querySelectorAll(".tab-style1-btn");

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

  const activeTab = data.find((t) => t.id === activeId) || tabs[0];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="max-w-[1345px]">
        <div ref={tabsContainerRef} className={`flex flex-wrap w-full overflow-hidden `}>
          {data.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`tab-style1-btn flex-1 px-4 py-4 lg:py-5 flex flex-col items-center  text-center border transition-all duration-300 ${tab.id === activeId ? "bg-secondary/15 border-secondary" : "border-white/30 bg-transparent hover:bg-white/5"} ${index !== 0 ? "" : ""}`}
            >
              <span className="text-16 leading-[1.75] text-white font-light mb-4">{tab.number}</span>
              <span className={`text-19 leading-[1.473684210526316] max-w-[30ch]  ${tab.id === activeId ? "font-bold" : "font-light"}`}>{tab.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1345px] mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-x-18 items-center"
          >
            {/* Left image */}
            <motion.div
              initial={{ opacity: 0.6, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full"
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="w-full h-full max-h-[420px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right content */}
            <div className="text-white text-sm lg:text-19">
              <h3 className="text-29 leading-[1.344827586206897] font-bold mb-30px">
                {activeTab.title}
              </h3>
              <p className="text-19 leading-[1.473684210526316] font-extralight">{activeTab.desc}</p>

              {activeTab.points?.length > 0 && (
                <ul className="space-y-2 mt-4 xl:mt-[25px]">
                  {activeTab.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 xl:gap-[18px] font-extralight">
                      <span className="mt-[7px] h-[7px] w-[7px] bg-secondary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
