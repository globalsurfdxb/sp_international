import { assets } from "../../../assets";
import H2Title from "../../common/H2Title";

const LastSection = () => {
  return ( 
    <section className="py-20 lg:py-25 xl:py-30 relative">
      <img src={assets.mainShape2} alt="" className="absolute bottom-0 left-0 w-[45%] xl:w-[465px] h-auto object-contain" />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <div>
            <H2Title titleText="Design That Inspires Progress" titleColor="black" marginClass="mb-0" />
            <p>We believe that great design merges creativity with engineering precision. Our multidisciplinary approach ensures that every project is not only visually compelling but also technically sound, sustainable, and aligned with client vision.</p>
          </div>
          <div>
            <img src="../../assets/images/design-studio/design-inpires.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default LastSection;