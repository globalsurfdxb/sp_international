import React, { useEffect, useState } from "react";
import { ecs1,ecs2,ecs3,ecs4,ecs5,ecs6,ecs7,ecs8,ecs9 } from "../data"; 
import { motion, AnimatePresence } from "framer-motion";
 
 

const config = [
  {   duration: 0.8, delay: 0.1 },
  {   duration: 1.2, delay: 0.3 },
  {   duration: 0.9, delay: 0.5 },
  {  duration: 1.4, delay: 0.2 },
  { duration: 1.0, delay: 0.0 },
  {  duration: 1.3, delay: 0.4 },
  {  duration: 0.7, delay: 0.6 },
  { duration: 1.1, delay: 0.3 },
  {  duration: 0.9, delay: 0.2 },
];
const all = [ecs1, ecs2, ecs3, ecs4, ecs5, ecs6, ecs7, ecs8,ecs9];

// Sizes
const size = {
  big:    "2xl:min-w-full h-[405px]",
  large: "2xl:min-w-full h-[345px]",
  medium: "2xl:w-full h-[244px]", 
  small:  "2xl:w-full h-[182px]",
  extrasmall:  "2xl:w-full h-[218px]",
};

const EmpoweringCommunities  = () => {

  const [idx, setIdx] = useState(new Array(9).fill(0));
const intervals = [
 1200,  
  1400, 
  1300,  
  1200,  
  1400, 
  1200,  
  1300,  
  1400,  
  1200,
];
useEffect(() => {
  const timers = all.map((arr, i) =>
    setInterval(() => {
      setIdx(prev => {
        const updated = [...prev];
        updated[i] = (prev[i] + 1) % arr.length;  
        return updated;
      });
    }, intervals[i])  
  );

  return () => timers.forEach(clearInterval);
}, []);

  const fade = {
    initial: { opacity: .8, scale: 1.02},
    animate: { opacity: 1 , scale: 0.98  },
    exit:    { opacity: .9 ,  scale: 1.02 }
  };
  return (
    <section className="pt-10 xl:pt-15 2xl:pt-25 overflow-hidden">
         <div className="w-full h-[760px] flex justify-center  gap-3">

      {/* LEFT SIDE */} 

        {/* Set 1 - small */}
        <div className="mt-[350px] min-w-[15.27%]">
        <Block src={all[0][idx[0]]} size={size.extrasmall} fade={fade} />
        </div>

         {/* Set 3 + Set 4 column */}
        <div className="flex flex-col gap-4 mt-[218px] min-w-[15.27%]">
        <Block src={all[1][idx[1]]} size={size.small} fade={fade} />
          <Block src={all[3][idx[3]]} size={size.medium} fade={fade} />
        </div>
      
        <div className={`mt-[136px] min-w-[15.74%]`}>
          <Block src={all[2][idx[2]]} size={size.large} fade={fade} />
          </div>
       
 

      {/* CENTER */}
        <div className={` min-w-[21.71%]`}>
      <Block src={all[4][idx[4]]} size={size.big} fade={fade} />
      </div>

      {/* RIGHT SIDE */} 

        {/* Set 6 - large */}
        <div className={ `mt-[136px] min-w-[15.74%]`}>
        <Block src={all[5][idx[5]]} size={size.large} fade={fade}  />
        </div>


        {/* Set 8 + Set 9 column */}
        <div className="flex flex-col gap-4 mt-[218px] min-w-[15.27%]">
          <Block src={all[7][idx[7]]} size={size.small} fade={fade} />
          <Block src={all[8][idx[8]]} size={size.medium} fade={fade} />
        </div> 
        {/* Set 7 - small */}
        <div className="mt-[350px] min-w-[15.27%]">
        <Block src={all[6][idx[6]]} size={size.extrasmall} fade={fade} />
        </div>

    </div>


    </section>
  );
};
function Block({ src, size, fade }) {
  return (
    <div className={`${size} relative`}>
      <AnimatePresence mode="wait">
        <motion.div
      key={src}
          className={`absolute inset-0 `}
          initial={fade.initial}
          animate={fade.animate}
          exit={fade.exit}
          transition={{ duration: 1.6 }}
        >
          <img src={src} className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default EmpoweringCommunities ;
