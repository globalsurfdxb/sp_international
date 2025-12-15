import { useMediaQuery } from "react-responsive";
import { assets } from "../../../assets";
import H2Title from "../../common/H2Title";
import { motion, useScroll, useTransform } from "framer-motion";
import { moveUp, paragraphItem } from "../../../motionVarients";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const LastSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // < 768
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // 768 - 1023
  const imageOffset = isMobile ? [-30, 30] : isTablet ? [-80, 80] : [-150, 150];
  const shapeOffset = isMobile ? [-50, 50] : isTablet ? [-100, 100] : [-200, 200];
  const sectionRef = useRef(null);
  const imageContainerRefTwo = useRef(null);

  // Parallax for main image container
  const { scrollYProgress: imageProgress } = useScroll({
    target: imageContainerRefTwo,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(imageProgress, [0, 1], imageOffset);

  // Parallax for shape
  const { scrollYProgress: shapeProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const shapeY = useTransform(shapeProgress, [0, 1], shapeOffset);


  return (
    <section ref={sectionRef} className="py30 relative overflow-hidden">
      <motion.img
        style={{ y: shapeY }}
        src={assets.mainShape2}
        alt=""
        className="absolute bottom-0 right-0 lg:left-0  w-[45%] xl:w-[365px] 3xl:w-[465px] h-auto object-contain"
      />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[0.8fr_1.2fr] items-center lg:gap-10 xl:gap-x-18 gap-y-6">
          <div className="order-2 xl:order-1">
            <H2Title titleText="Commitment to Quality and Safety" titleColor="black" marginClass="mb-5 2xl:mb-10" />
            <motion.p variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="text-19 leading-[1.473684210526316] font-light text-paragraph ">
              We maintain the highest industry standards for quality and safety. Every façade system is engineered and executed with precision to ensure long-term performance, durability, and reliability under diverse conditions.
            </motion.p>
          </div>
          <div
            className="order-1 xl:order-2 relative overflow-hidden"
            ref={imageContainerRefTwo}
          >
            <motion.img
              style={{ y: imageY }}
              src="../../assets/images/facade/quality-safety-reliability.jpg"
              width={932}
              height={532}
              className="w-full h-[320px]   lg:h-[350px] md:w-full lg:w-full xl:h-[400px] 2xl:h-[532px] 2xl:w-[932px] object-cover scale-105 "
              alt=""
            />
            {/* <div ref={overlayRefTwo} className="absolute top-0 left-0 w-full h-full bg-white z-10"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LastSection;