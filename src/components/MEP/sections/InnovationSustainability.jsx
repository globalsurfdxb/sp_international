import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import H2Title from "../../common/H2Title";
import { assets } from "../../../assets";
const accordionData = [
  {
    id: 1,
    title: "BIM",
    content:
      "Shapoorji International brings decades of expertise in delivering end-to-end MEP solutions that power, connect, and sustain world-class projects. From designing efficient systems to executing large-scale installations.",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
    icon: "https://api.iconify.design/mdi:cube-outline.svg?color=%231E45A2",
  },
  {
    id: 2,
    title: "Smart Systems",
    content:
      "Shapoorji International brings decades of expertise in delivering end-to-end MEP solutions that power, connect, and sustain world-class projects. From designing efficient systems to executing large-scale installations.",
    image:
      "../../assets/images/mep/smart-systems.jpg",
    icon:
      "../../assets/images/mep/icons/smart-systems.svg",
  },
  {
    id: 3,
    title: "Energy-Saving Solutions",
    content:
      "Shapoorji International brings decades of expertise in delivering end-to-end MEP solutions that power, connect, and sustain world-class projects. From designing efficient systems to executing large-scale installations.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    icon: "https://api.iconify.design/mdi:leaf.svg?color=%231E45A2",
  },
  {
    id: 4,
    title: "Green Building Compliance",
    content:
      "Shapoorji International brings decades of expertise in delivering end-to-end MEP solutions that power, connect, and sustain world-class projects. From designing efficient systems to executing large-scale installations.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    icon:
      "https://api.iconify.design/mdi:check-circle-outline.svg?color=%231E45A2",
  },
];

const InnovationSustainability = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const imageRef = useRef < HTMLDivElement | null > (null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? index : index);
  };

  const getSpacing = (index) => {
    if (activeIndex === index) return "64px";
    if (activeIndex === index + 1) return "64px";
    return "32px";
  };

  return (
    <section className="relative overflow-hidden py-10 lg:py-20 xl:py-30 bg-gradient-to-br from-slate-50 to-blue-50">
      <img src={assets.mainShape2} alt="" className="absolute bottom-0 left-0 w-[50%] 2xl:w-[960px] h-auto object-contain" />
      <div className="container mx-auto px-4">
        <H2Title titleText="Innovation & Sustainability in MEP" titleColor="black" marginClass="mb-18"/>
        <div className="grid lg:grid-cols-2 xl:grid-cols-[0.8fr_1.1fr] gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="relative h-full">
            {/* Vertical line – perfectly centered with circles */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-4 w-px bg-[#1E45A2]" />

            <div className="flex flex-col justify-center h-full">
              {accordionData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex"
                  style={{
                    marginBottom:
                      index < accordionData.length - 1 ? getSpacing(index) : "0",
                  }}
                  initial={false}
                  animate={{
                    marginBottom:
                      index < accordionData.length - 1 ? getSpacing(index) : "0",
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Timeline cell: circles + line center aligned */}
                  <div className="w-8 flex items-start justify-center">
                    <motion.button
                      onClick={() => handleAccordionClick(index)}
                      className="relative z-10 flex items-center justify-center cursor-pointer"
                    >
                      <motion.div
                        animate={{
                          backgroundColor: "#30B6F94D",
                          width: activeIndex === index ? 72 : 20,
                          height: activeIndex === index ? 72 : 20,
                          
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="rounded-full flex items-center justify-center backdrop-blur-[10px]"
                      >
                        <AnimatePresence mode="wait">
                          {activeIndex === index && (
                            <motion.img
                              key="icon"
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                              transition={{ duration: 0.3 }}
                              src={item.icon}
                              alt={item.title}
                              className="w-[32px] h-auto object-contain"
                            />
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Content cell */}
                  <div className="flex-1 pl-10">
                    <motion.button
                      onClick={() => handleAccordionClick(index)}
                      className="w-full text-left group flex items-start"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.h3
                        animate={{
                          fontSize: activeIndex === index ? "1.875rem" : "1.25rem",
                          color:
                            activeIndex === index ? "#000000" : "#4B5563",
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="font-light"
                        style={{ lineHeight: "1.2" }}
                      >
                        {item.title}
                      </motion.h3>
                    </motion.button>

                    <AnimatePresence initial={false}>
                      {activeIndex === index && item.content && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <motion.p
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="text-19 leading-[1.473684210526316] text-paragraph font-light pr-8 mt-4"
                          >
                            {item.content}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE – unchanged */}
          <div className="relative">
            <motion.div
              ref={imageRef}
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={accordionData[activeIndex]?.image}
                  alt={accordionData[activeIndex]?.title}
                  className="w-full h-full min-h-[400px] lg:min-h-[500px] 2xl:min-h-[706px] object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -z-10"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSustainability;
