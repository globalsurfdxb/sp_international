import { assets } from "../../../assets";
import H2Title from "../../common/H2Title";
import { motion } from "framer-motion";
import { moveUp, paragraphItem } from "../../../motionVarients";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const LastSection = () => {

  const imageContainerRefTwo = useRef(null);
  const overlayRefTwo = useRef(null);

  useEffect(() => {
    const container = imageContainerRefTwo.current;
    const overlay = overlayRefTwo.current;

    if (!container || !overlay) return;

    // Set initial state - overlay covers the image
    gsap.set(overlay, { scaleX: 1, transformOrigin: 'right' });

    // Create ScrollTrigger animation with scrub
    gsap.to(overlay, {
      scaleX: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'top 20%',
        // scrub: 1,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ( 
    <section className="py30 relative overflow-hidden">
      <img src={assets.mainShape2} alt="" className="absolute bottom-0 left-0 w-[45%] xl:w-[465px] h-auto object-contain" />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] items-center lg:gap-10 xl:gap-x-18 gap-y-6">
          <div className="order-2 xl:order-1">
              <H2Title titleText="Design That Inspires Progress" titleColor="black" marginClass="mb-3 xl:mb-10" />
            <motion.p variants={paragraphItem} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="text-19 leading-[1.473684210526316] font-light text-paragraph ">We believe that great design merges creativity with engineering precision. Our multidisciplinary approach ensures that every project is not only visually compelling but also technically sound, sustainable, and aligned with client vision.</motion.p>
          </div>
          <div className="order-1 xl:order-2 relative overflow-hidden" ref={imageContainerRefTwo}>
            <img src="../../assets/images/design-studio/design-inpires.jpg" alt="" />
            <div ref={overlayRefTwo} className="absolute top-0 left-0 w-full h-full bg-white z-10"></div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default LastSection;