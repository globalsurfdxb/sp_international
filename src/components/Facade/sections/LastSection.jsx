import { assets } from "../../../assets";
import H2Title from "../../common/H2Title";

const LastSection = () => {
  return ( 
    <section className="py-20 lg:py-25 xl:py-30 relative">
      <img src={assets.mainShape2} alt="" className="absolute bottom-0 left-0 w-[45%] xl:w-[465px] h-auto object-contain" />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 xl:gap-[70px] items-center">
          <div>
            <H2Title titleText="Quality. Safety. Reliability." titleColor="black" marginClass="mb-8 xl:mb-10" />
            <p>We uphold the highest industry standards for quality and safety. Every façade system is designed and executed with meticulous precision, ensuring long-term durability and performance under varied conditions.</p>
          </div>
          <div>
            <img src="../../assets/images/facade/quality-safety-reliability.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default LastSection;