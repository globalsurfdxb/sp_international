"use client";
import { useRef, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import {assets} from "../../assets"
import H2Title from "./H2Title";
import VideoPlayer from "./VideoPlayer";
import { motion } from "framer-motion";
import { moveUp, paragraphItem } from "../../motionVarients";
const VdoSection = ({data}) => {


  // Inside your component:
  const containerRef = useRef < HTMLDivElement > (null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const blurValue = useTransform(scrollYProgress,
    [0, 0.25, 0.75, 1],
    [20, 0, 0, 20]
  );

  const blur = useTransform(
    blurValue,
    (value) => `blur(${value}px)`
  );

  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.5, 1.05, 1.05, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [200, 0, 0, -200]);
  const x = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [-150, 0, 0, 150]);
  const rotateX = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [45, 0, 0, -45]);
  const rotateY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [-25, 0, 0, 25]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [-8, 0, 0, 8]);
  return ( 
    <section className="relative overflow-hidden mt-text25 pb30">
      <div className="absolute bottom-0 left-0 h-full w-full z-0"><img src={assets.mainShape2} alt="" className="w-[250px] lg:w-[400px] xl:w-[500px] 3xl:w-[709px] h-auto max-w-[702px] object-contain" /></div>
      <div className="container">
        <div className="w-full lg:w-[700px] xl:w-[1238px] mx-auto relative z-10">
          <div>
            <div className="lg:max-w-[600px] xl:max-w-[795px] ml-auto mb-5 xl:mb-[70px]">
             <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }}> 
                <H2Title titleText={data.title} titleColor="primary" marginClass="mb-4 3xl:mb-10" />
             </motion.div>
              {
                data.desc.map((item)=>(
                  <motion.p variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="text-19 leading-[1.473684210526316] font-light text-paragraph mb-4 xl:mb-8 last:mb-0">{item}</motion.p>
                ))
              }
            </div>
          </div>
         
          <motion.div ref={containerRef}
            style={{
              scale,
              y,
              x,
              rotateX,
              rotateY,
              rotateZ,
              filter: blur,
              transformPerspective: 1500,
              transformStyle: 'preserve-3d'

            }}
            className="container-scroll-effect">
            <VideoPlayer src={data.vdo} poster={data.vdoPoster} />
          </motion.div>
        </div>
      </div>
    </section>
   );
}
 
export default VdoSection;