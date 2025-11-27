import React, { useEffect, useState } from "react";
import { ecs1,ecs2,ecs3,ecs4,ecs5,ecs6,ecs7,ecs8,ecs9 } from "../data"; 
import { motion, AnimatePresence } from "framer-motion";
 
import { assets } from "../../../assets/index"
 

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
  big:    "2xl:min-w-full h-[150px] lg:h-[405px]",
  large: "2xl:min-w-full h-[125px] lg:h-[345px]",
  medium: "2xl:w-full h-[104px] lg:h-[244px]", 
  small:  "2xl:w-full h-[104px] lg:h-[182px]",
  extrasmall:  "2xl:w-full h-[104px] lg:h-[218px]",
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
    <section className="pt-10 xl:pt-15 2xl:pt-25 overflow-hidden relative">
         <div className="w-full h-[360px] lg:h-[670px] flex justify-center  gap-3">

      {/* LEFT SIDE */} 

        {/* Set 1 - small */}
        <div className="mt-[150px] lg:mt-[350px] min-w-[15.27%]">
        <Block src={all[0][idx[0]]} size={size.extrasmall} fade={fade} />
        </div>

         {/* Set 3 + Set 4 column */}
        <div className="flex flex-col gap-4 mt-[100px] lg:mt-[218px] min-w-[15.27%]">
        <Block src={all[1][idx[1]]} size={size.small} fade={fade} />
          <Block src={all[3][idx[3]]} size={size.medium} fade={fade} />
        </div>
      
        <div className={`mt-[40px] lg:mt-[136px] min-w-[15.74%]`}>
          <Block src={all[2][idx[2]]} size={size.large} fade={fade} />
          </div>
       
 

      {/* CENTER */}
        <div className={` min-w-[21.71%]`}>
      <Block src={all[4][idx[4]]} size={size.big} fade={fade} />
      </div>

      {/* RIGHT SIDE */} 

        {/* Set 6 - large */}
        <div className={ `mt-[40px] lg:mt-[136px] min-w-[15.74%]`}>
        <Block src={all[5][idx[5]]} size={size.large} fade={fade}  />
        </div>


        {/* Set 8 + Set 9 column */}
        <div className="flex flex-col gap-4 mt-[100px] lg:mt-[218px] min-w-[15.27%]">
          <Block src={all[7][idx[7]]} size={size.small} fade={fade} />
          <Block src={all[8][idx[8]]} size={size.medium} fade={fade} />
        </div> 
        {/* Set 7 - small */}
        <div className="mt-[150px] lg:mt-[350px] min-w-[15.27%]">
        <Block src={all[6][idx[6]]} size={size.extrasmall} fade={fade} />
        </div>

    </div>

    <div className="container">
      <div className="pb-10 xl:pb-15 2xl:pb-30">
        <h1 className="text-60 font-light leading-[1.18] max-w-[20ch] text-center mb-5 2xl:mb-10 m-auto ">Empowering Communities, Enriching Lives</h1>
        <p className="text-29 text-paragraph font-light leading-[1.285] max-w-[46ch] m-auto text-center">Our leadership and expertise in various segments of our business portfolio comes from more than a century old dedication, experience, continuous innovation and investment in our people</p>
      </div>
    </div>
          <div className="absolute top-15 right-0 z-[-1] w-[700px] h-[980px]"><img src={assets.mainShape} alt="" /></div>
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
