
import { assets } from "../../../assets/index"
import 'swiper/css';
import H2Title from "../../common/H2Title";
const ExpertiseSec = ({data}) => {


  return (
    <section className="relative pt-text30 overflow-hidden">
      <div className="absolute top-12 lg:top-20 xl:top-30 2xl:top-[126px] left-0 w-[558px] h-[725px]"><img src={assets.mainShape2} alt="" /></div>
      <div className="container">
        <div className="lg:border-b pb-0 lg:pb-10 xl:pb-15 2xl:pb-22 3xl:pb-30 border-cmnbdr">
          <H2Title titleText="Our Expertise" titleColor="black" marginClass="mb-4 xl:mb-8 2xl:mb-50px" />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-30px 2xl:gap-10">
            {
              data.items.map((item, index) => (
                <div className="relative overflow-hidden ">
                  <img src={item.img} alt={item.title} className="w-full h-[200px] lg:h-[250px] 2xl:h-[300px] 3xl:h-[333px]  object-cover" />
                  <div className="border-b lg:border-l lg:border-b-0 border-cmnbdr p-4 xl:p-10">
                    <h3 className="text-24 2xl:text-29 leading-tight 3xl:leading-[1.724137931034483] font-light mb-2 2xl:mb-3">{item.title}</h3>
                    <p className="text-19 leading-[1.526315789473684] font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSec;