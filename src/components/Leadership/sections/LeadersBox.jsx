import H2Title from "../../../components/common/H2Title";
import {assets} from "../../../assets/index";
const LeaderBox = ({ data }) => {
  return (
    <section className="relative overflow-hidden">
        <img src={assets.mainShape2} alt="" className="absolute left-0 bottom-20 w-[40%] 3xl:w-[764px]" />
      <div className="container">
       <div className="border-b border-cmnbdr  relative overflow-hidden mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-[739px_auto] gap-6 md:gap-10 xl:gap-15 2xl:gap-17 3xl:gap-[88px] 3xl:pt-18 3xl:pb-[135px]">
            <div className="relative ">
              <img src={data[0].image} alt={data[0].name} className="relative w-fit mx-auto z-20" />
              <div className="absolute bottom-0 left-0 h-[90%] 3xl:h-[612px] w-full bg-primary z-10"></div>
              <div className="absolute bottom-0 left-0 h-[90%] 3xl:h-[612px] w-full bg-gradient-to-t from-primary to-transparent z-30"></div>

            </div>
            <div className="pt-5 xl:pt-8 2xl:pt-12 3xl:pt-[68.5px]">
              <H2Title titleText={data[0].name} marginClass={"mb-[10px]"} />
              <h3 className="text-29 font-light leading-[1.344827586206897] text-paragraph mb-6 lg:mb-8 xl:mb-[45px]">{data[0].position}</h3>
              <div className="max-h-[385px] overflow-y-scroll scrollbar-thin">
                {data[0].desc.map((item, index) => (
                  <div key={index} className="">
                    <p className="text-19 leading-[1.473684210526316] text-paragraph font-light max-w-xl mb-4 2xl:mb-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-[793px_auto] gap-6 md:gap-10 xl:gap-15 2xl:gap-17 3xl:gap-[88px] 3xl:pb-[135px]">
            <div className="pt-5 xl:pt-8 2xl:pt-12 3xl:pt-[63.89px]">
              <H2Title titleText={data[1].name} marginClass={"mb-[10px]"} />
              <h3 className="text-29 font-light leading-[1.344827586206897] text-paragraph mb-6 lg:mb-8 xl:mb-[45px]">{data[1].position}</h3>
              <div className="max-h-[490px] overflow-y-scroll scrollbar-thin">
                {data[1].desc.map((item, index) => (
                  <div key={index} className="">
                    <p className="text-19 leading-[1.473684210526316] text-paragraph font-light max-w-2xl mb-4 2xl:mb-6">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative ">
              <img src={data[1].image} alt={data[1].name} className="absolute bottom-0 right-3 z-30 w-fit " />
              <div className="absolute bottom-0 left-0 h-[90%] 3xl:h-[612px] w-full bg-primary z-10"></div>
              <div className="absolute bottom-0 left-0 h-[90%] 3xl:h-[612px] w-full bg-gradient-to-t from-primary to-transparent z-30"></div>

            </div>
          </div>
       </div>
      </div>
    </section>
  );
}

export default LeaderBox;