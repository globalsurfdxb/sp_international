
"use client";
import {motion} from "framer-motion";
import { moveUp, paragraphItem } from "../../../motionVarients";
import AccordionStyle1 from "../../common/AccordionStyle1";
import H2Title from "../../common/H2Title";
import{assets} from "../../../assets"
const WhyChooseSec = ({data}) => {

  return ( 
    <section className="pt-text30 pb30 relative">
      <motion.div variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="absolute bottom-0 left-0 w-full h-fit pb-20 lg:pb-25 xl:pb-30">
          <img src={assets.mainShape2} alt="" className="object-contain w-[425px] h-[594px]" />
        </motion.div>
      <div className="container relative">
        <div className="max-w-[1207px] ml-auto">
          <div className="border-b border-cmnbdr pb-50px">
              <H2Title titleText="Why Choose Us" titleColor="black" marginClass="mb-2 xl:mb-5" />
              <motion.p variants={paragraphItem} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}} className="text-19 leading-[1.526315789473684] font-light text-paragraph">With over a century of experience, SP International is committed to</motion.p>
          </div>
          <div className="">
            <AccordionStyle1 accData={data} />
          </div>
       </div>
      </div>
    </section>
   );
}
 
export default WhyChooseSec;