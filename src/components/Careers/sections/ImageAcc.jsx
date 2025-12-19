import {useRef} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AccordionCareer from "../../common/AccordionCareer";
import H2Title from "../../common/H2Title";
import{assets} from "../../../assets"
const ImageAcc = ({data}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress: shapeProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const shapeY = useTransform(shapeProgress, [0, 1], [-200, 200]);
  return ( 
    <section className="py30 relative overflow-hidden" ref={sectionRef}>
     
      <div className="container relative">
        <div className=" ">
          <div className=" pb-8 xl:pb-50px">
            <H2Title titleText="A Workplace Built Around People" titleColor="black" marginClass="mb-0" />
            {/* <p className="text-19 leading-[1.526315789473684] font-light text-paragraph">With over a century of experience, SP International is committed to</p> */}
          </div>
          <div className=" grid   lg:grid-cols-[430px_1fr] 2xl:grid-cols-[700px_auto]  3xl:grid-cols-[916px_auto] gap-8 2xl:gap-18 3xl:gap-[107px] items-center">
            <img src="assets/images/careers/workplace/leftimage.jpg" alt="" className="sm:h-[300px] max-h-[621px] lg:h-auto w-full object-cover"/>
            <div className="border-t border-cmnbdr">
            <AccordionCareer accData={data} />
            </div>
          </div>
       </div>
      </div>
    </section>
   );
}
 
export default ImageAcc;