import { assets } from "../../../assets"
import {motion,useScroll,useTransform} from "framer-motion"
import { useRef } from "react";
const ExpandingHorizons = ({ data }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress: shapeProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const shapeY = useTransform(shapeProgress, [0, 1], [-200, 200]);
  return (
    <section className="relative overflow-hidden pt-text25 pb30" ref={sectionRef}>
      <div className="absolute bottom-[-10px] lg:bottom-0 right-0 lg:left-0 w-fit">
        <motion.img style={{y:shapeY}} src={assets.mainShape2} alt="" className="w-[150px] lg:w-[450px] 3xl:w-[563px] h-auto max-w-[788px] object-contain relative lg:left-[-100px]" /></div>
      <div className="container">
        <div>
          <div>
            <div className="2xl:max-w-[75%] 3xl:max-w-[67.84%] ml-auto ">
              <h2 className="text-60 font-light leading-[1.166666666666667] mb-50px max-w-[22ch]">{data.title}</h2>
              {
                data.desc.map((item) => (
                  <p className="mb-4 xl:mb-8 last:mb-0 text-20 2xl:text-29 font-light leading-[1.35] text-paragraph max-w-[48ch]">{item}</p>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpandingHorizons;