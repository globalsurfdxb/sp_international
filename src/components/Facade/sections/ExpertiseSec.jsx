
"use client"; 
import { motion,useScroll,useTransform } from "framer-motion";
import { moveUp } from "../../../motionVarients";
import H2Title from "../../common/H2Title";
import { assets } from "../../../assets/index"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ExpertiseSec = ({ data }) => {
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
      <div className="reveal-overlay4 absolute bottom-0 md:inset-0 bg-black/20 z-20"></div>
        <div className="absolute bottom-0 right-0 "><motion.img style={{y:shapeY}} src='/assets/images/svg/sv-02.svg' className=' object-contain w-[205px] h-[352px] md:w-[285px] md:h-[402px] lg:w-[465px] lg:h-[652px] ' alt="" /></div>
          
      <div className="container">
        <H2Title titleText="Our Expertise" marginClass="mb-50px" />
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-30px gap-y-15 xl:gap-y-[70px]'>
          {
            data.items.map((item,index) => (
              <motion.div variants={moveUp(0.1*index)} initial="hidden" whileInView="show" viewport={{ amount: 0.6, once: true }}>
                <div className='border-b border-[#CCCCCC] pb-30px'>
                  <img src={item.icon} width={65} height={65} alt="" className="w-auto h-10 xl:h-[65px] object-contain" />
                </div>
                {/* <h3 className='text-29 leading-[1.344827586206897] font-light mt-30px mb-5'>{item.title}</h3> */}
                <p className='text-19 leading-[1.473684210526316] font-extralight mt-30px'>{item.desc}</p>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSec;