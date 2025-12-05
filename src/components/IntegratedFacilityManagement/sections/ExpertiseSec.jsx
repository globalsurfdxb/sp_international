"use client";
import {motion, useScroll, useTransform} from "framer-motion"
import {moveUp } from "../../../motionVarients";
import { assets } from "../../../assets/index"
import H2Title from "../../common/H2Title"
import TabStyle1 from "../../common/TabStyle1"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ExpertiseSec = ({data}) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (!sectionRef.current) return;
    const overlay = sectionRef.current.querySelector(".reveal-overlay4");
    gsap.set(overlay, { xPercent: 0 }); // start covering
    gsap.to(overlay, {
      xPercent: 100, // slide out to the right
      duration: 2.7,
      ease: "expo.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%", // when section comes into view
        toggleActions: "play none none none",
      },
    });
  }, []);

  const { scrollYProgress: shapeProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const shapeY = useTransform(shapeProgress, [0, 1], [-200, 200]);

  return (
    <section className="relative pt-text90 pb25 bg-primary text-white overflow-hidden" ref={sectionRef}>
      <div className="reveal-overlay4 absolute inset-0 bg-black/20 z-20"></div>
      <div className="absolute bottom-0 right-0 w-[359px] h-[625px] 3xl:w-[519px] 3xl:h-[725px]"><motion.img style={{y:shapeY}} src={assets.mainShape3} alt="" /></div>
      <div className="container">
        {/* Header */}
        <div className="mb-50px">
          <H2Title titleText={data.title} titleColor="white" marginClass="mb-4 xl:mb-50px" />
          <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.6, once: true }} className="text-19 leading-[1.473684210526316] opacity-90 font-light max-w-5xl">
            {data.desc}
          </motion.p>
        </div>
        <TabStyle1 data={data.items} />
      </div>
    </section>
  );
};

export default ExpertiseSec;