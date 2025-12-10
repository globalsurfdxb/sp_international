import { assets } from "../../../assets/index"
import SplitTextAnimation from "../../common/SplitTextAnimation"
import { motion } from "framer-motion"
import { moveUp } from "../../../motionVarients"
const Banner = () => {
  return ( 
    <section className="py25 3xl:pt-[171px] 3xl:pb-[76px] bg-f5f5 relative overflow-hidden">
      <img src={assets.mainShape2} alt="" className="absolute bottom-10 right-0 w-[487px] h-fit" />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-[830px_auto]">
          <div>
            <h1 className="text-70 font-light leading-[1.071428571428571]">
              <SplitTextAnimation children={"Leadership"} staggerDelay={0.2} animationDuration={0.8} delay={0.2}/>
            </h1>
          </div>
          <div>
            <motion.h2 variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="text-29 leading-[1.344827586206897] font-light mb-3 xl:mb-5">Guided by Vision, Driven by Excellence</motion.h2>
            <motion.p variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="text-19 leading-[1.473684210526316] text-paragraph font-light max-w-xl">Shapoorji Pallonji International (SPINT) is the international arm of Shapoorji Pallonji Engineering & Construction (SP E&C) for its construction operations outside India</motion.p>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Banner;