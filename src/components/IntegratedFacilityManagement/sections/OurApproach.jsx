
"use client";
import {motion, useScroll, useTransform} from "framer-motion"
import {moveUp } from "../../../motionVarients";
import H2Title from "../../common/H2Title";
const OurApproach = ({data}) => {
  return (
    <section className="pt-text30 pb30">
      <div className="container">
        <H2Title titleText="Our Approach" titleColor="black" marginClass="mb-50px" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-30px">
          {
            data.items.map((item,index)=>(
                <motion.div variants={moveUp(0.4 + 0.2*index)} initial="hidden" whileInView="show" viewport={{ amount: 0.6, once: true }} key={index}>
                  <div className="border-b border-cmnbdr pb-8">
                    <img src={item.icon} width={65} height={65} alt="" className="w-auto h-10 xl:h-[65px] object-contain" />
                  </div>
                  <div className="pt-5 xl:pt-8">
                  <h3 className="text-29 leading-[1.344827586206897] font-light mb-2 md:mb-3 xl:mb-[15px]">{item.title}</h3>
                  <p className="text-paragraph text-19 leading-[1.473684210526316] font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))
          }
        </div>
      </div>
    </section>
  );
}

export default OurApproach;