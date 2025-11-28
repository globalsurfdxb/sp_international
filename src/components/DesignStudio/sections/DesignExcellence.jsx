
import { assets } from "../../../assets/index";
import H2Title from "../../common/H2Title";
const DesignExcellence = ({ data }) => {
  return (
    <section className="relative overflow-hidden mt-8 lg:mt-18 xl:mt-20 2xl:mt-30 3xl:mt-[161px] pb-6 lg:pb-15 xl:pb-15 2xl:pb-22 3xl:pb-30;">
      <div className="absolute bottom-0 left-0 h-full w-full z-0"><img src={assets.mainShape2} alt="" className="w-[30%] 2xl:w-[425px] h-auto max-w-[425px] object-contain" /></div>
      <div className="container">
        <div className="w-full lg:max-w-[800px] 2xl:max-w-[1207px] ml-auto flex flex-col gap-5 xl:gap-0">
          <div className="mb-0 xl:mb-20 2xl:mb-18 order-2 xl:order-1">
            <H2Title titleText={data.title} marginClass={"mb-2 xl:mb-30px"} />
            <p className="text-19 leading-[1.473684210526316] font-light text-paragraph max-w-3xl">{data.desc}</p>
          </div>
          <div className="order-1 xl:order-2">
            <img src={data.img} alt="" width={1270} height={470} className="w-full xl:h-[300px] 2xl:w-[1270px] 2xl:h-[470px]  object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignExcellence;