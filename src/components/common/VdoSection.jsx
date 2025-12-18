"use client";
import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { assets } from "../../assets"
import H2Title from "./H2Title";
import VideoPlayer from "./VideoPlayer";
import { motion } from "framer-motion";
import { moveUp} from "../../motionVarients";
const VdoSection = ({ data, maxW, maxtextwidth }) => {


  const [enableAnim, setEnableAnim] = useState(false);

  // Check screen size (Tablet >= 768px)
  useEffect(() => {
    const media = window.matchMedia("(min-width: 992px)");
    const updateMatch = () => setEnableAnim(media.matches);

    updateMatch();
    media.addEventListener("change", updateMatch);

    return () => media.removeEventListener("change", updateMatch);
  }, []);

  // Inside your component:
  const containerRef = useRef < HTMLDivElement > (null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 80%"]
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


  // Parallax for shape
  const { scrollYProgress: shapeProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const shapeY = useTransform(shapeProgress, [0, 1], [-200, 200]);

  return (
    <section className="relative sectm-100 pb30" ref={sectionRef}>
      <div className="absolute top-custom-100 right-0 lg:left-[-200px] xl:left-[-14%] 2xl:left-[-80px] 3xl:left-[-58px] h-fit w-fit z-0 ">
        <motion.img style={{ y: shapeY }} src={assets.mainShape2} alt="" className="w-[152px] lg:w-[400px] xl:w-[55%] 2xl:w-[70%] 3xl:w-[100%] h-fit object-contain vdo-shape" />
      </div>
      <div className="container">
        <div className="w-full lg:max-w-[70%] xl:max-w-[95%] 2xl:max-w-[90%] 3xl:max-w-[70%] mx-auto relative z-10 overflow-hidden vdo-content-wrapper">
          <div>
            <div className="lg:max-w-[600px] xl:max-w-[850px] 2xl:max-w-[800px] 3xl:max-w-[880px] ml-auto mb-4 xl:mb-50px 3xl:mb-17">
              {/* <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }}> */}
                <H2Title titleText={data.title} titleColor="primary" marginClass="mb-3 md:mb-4 lg:mb-5 3xl:mb-50px " maxW={maxW} delay={1.2} />
              {/* </motion.div> */}
              {
                data.desc.map((item) => (
                  <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className={`${maxtextwidth} text-16 xl:text-19 leading-[1.473684210526316] font-light text-paragraph mb-4 xl:mb-8 last:mb-0`}>{item}</motion.p>
                ))
              }
            </div>
          </div>
          <motion.div ref={containerRef} 
            style={
              enableAnim
                ? {
                  scale,
                  y,
                  x,
                  rotateX,
                  rotateY,
                  rotateZ,
                  filter: blur,
                  transformPerspective: 1500,
                  transformStyle: "preserve-3d",
                }
                : {}
            }
            className="container-scroll-effect lg:max-w-[100%] mx-auto">
            <VideoPlayer src={data.vdo} poster={data.vdoPoster} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VdoSection;