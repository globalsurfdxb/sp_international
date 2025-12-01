import { assets } from "../../../assets";
import H2Title from "../../common/H2Title";

const LastSection = () => {
  return ( 
    <section className="py30 relative overflow-hidden">
      <img src={assets.mainShape2} alt="" className="absolute bottom-0 left-0 w-[45%] xl:w-[465px] h-auto object-contain" />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] items-center lg:gap-10 xl:gap-x-18 gap-y-6">
          <div className="order-2 xl:order-1">
            <H2Title titleText="Quality. Safety. Reliability." titleColor="black" marginClass="mb-3 xl:mb-10" />
            <p className="text-19 leading-[1.473684210526316] font-light text-paragraph ">We uphold the highest industry standards for quality and safety. Every façade system is designed and executed with meticulous precision, ensuring long-term durability and performance under varied conditions.</p>
          </div>
          <div className="order-1 xl:order-2">
            <img src="../../assets/images/design-studio/design-inpires.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default LastSection;