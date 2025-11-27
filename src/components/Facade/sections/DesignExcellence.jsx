
import { assets } from "../../../assets/index";
const DesignExcellence = ({ data }) => {
  return (
    <section className="relative overflow-hidden mt-15 xl:mt-25 2xl:mt-[161px] 2xl:pb-30 pb-16 xl:pb-30">
      <div className="absolute bottom-0 left-0 h-full w-full "><img src={assets.mainShape2} alt="" className="w-[425px] h-auto max-w-[425px] object-contain" /></div>
      <div className="container">
        <div>
          <div>
            <div className="max-w-[1207px] ml-auto ">
              <h2 className="text-60 font-light leading-[1.166666666666667] mb-6 xl:mb-10">{data.title}</h2>
              <p className="mb-4 xl:mb-8 last:mb-0">{data.desc}</p>
              <div>
                <img src={data.img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignExcellence;