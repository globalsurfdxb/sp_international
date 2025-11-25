import React from "react";
import { ecs } from "../data"; 
import { motion } from "framer-motion";
const EmpoweringCommunities  = () => {
  return (
    <section className="pt-10 xl:pt-15 2xl:pt-25 ">
           <div className="relative w-full h-[760px]">
      {ecs.map((src, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 w-[415px] h-[405px] "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.9,   
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img src={src} alt="" className="w-full h-full object-contain" />
        </motion.div>
      ))}
    </div>

    </section>
  );
};

export default EmpoweringCommunities ;
