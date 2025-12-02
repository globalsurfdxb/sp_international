"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../../assets';
import { paragraphItem } from '../../motionVarients';

const AccordionStyle1 = ({accData}) => {
console.log(accData)
  const [openIndex, setOpenIndex] = useState(1);

  const accordionData = [
    {
      title: "On-Time, On-Budget Delivery",
      content: "We ensure your projects are completed within the agreed timeline and budget constraints, with transparent communication and efficient resource management throughout the entire process."
    },
    {
      title: "High-Quality Construction & Engineering Standards",
      subtitle: "Designers, engineers, and project managers aligned for excellence",
      content: "Our team of experienced professionals adheres to the highest industry standards, implementing rigorous quality control measures and innovative engineering solutions to deliver exceptional results."
    },
    {
      title: "Innovative & Sustainable Practices",
      content: "We integrate cutting-edge sustainable technologies and eco-friendly materials into our projects, reducing environmental impact while maximizing efficiency and long-term value."
    },
    {
      title: "End-to-End Project Management",
      content: "From initial concept to final delivery, we provide comprehensive project management services, coordinating all aspects of construction to ensure seamless execution and client satisfaction."
    },
    {
      title: "Global Expertise, Local Execution",
      content: "Combining international best practices with local knowledge, we deliver world-class solutions tailored to your specific regional requirements and cultural context."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div variants={paragraphItem} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}}>
      <div className="space-y-1">
        {accData.items.map((item, index) => (
          <div key={index} className={`border-b border-cmnbdr relative  ${openIndex === index
            ? 'pl-50px '
            : 'pl-0 '
              }`} >
            <div className={`absolute left-0 top-[50%] translate-y-[-50%]  h-[80%] bg-[#30B6F9] ${openIndex === index
              ? 'w-[3px] '
              : 'w-0 '
              }`}/>
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full ${openIndex === index ? 'pt-30px pb-2 xl:pb-[15px] ' : 'pt-30px pb-30px' } flex items-center justify-between text-left group`}
            >
              <div className="flex-1">
                <h3 className="text-24 xl:text-32 leading-[1.3125] font-normal text-gray-900">
                  {item.title}
                </h3>
                {item.subtitle && openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-19 leading-[1.526315789473684] text-paragraph"
                  >
                    {item.subtitle}
                  </motion.p>
                )}
              </div>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`flex-shrink-0 ml-4 w-6 h-6 md:w-10 md:h-10 xl:w-[50px] xl:h-[50px] rounded-full border  flex items-center justify-center transition-colors duration-300 ${openIndex === index
                  ? 'bg-[#30B6F9] text-white border-[#30B6F9]'
                  : 'bg-white border-black/20'
                  }`}
              >
                {/* <ChevronDown size={18} /> */}
                <img src={assets.arrowDown} alt="" width={15} height={15} className={`xl:w-auto xl:h-auto ${openIndex === index
                  ? 'brightness-0 invert-100'
                  : ''
                  }`} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                      opacity: { duration: 0.3, delay: 0.1 }
                    }
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                      opacity: { duration: 0.2 }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 xl:pb-10">
                    <p className="text-19 text-paragraph font-light leading-[1.526315789473684] max-w-5xl">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AccordionStyle1;