import {assets} from "../../assets"

import VideoPlayer from "./VideoPlayer";
const VdoSection = ({data}) => {
  return ( 
    <section className="relative overflow-hidden mt-15 xl:mt-25 pb-16 xl:pb-30">
      <div className="absolute bottom-0 left-0 h-full w-full "><img src={assets.mainShape2} alt="" className="w-[709px] h-auto max-w-[702px] object-contain" /></div>
      <div className="container">
        <div>
          <div>
            <div className="max-w-[932px] ml-auto mb-5 xl:mb-[70px]">
              <h2 className="text-60 font-light leading-[1.166666666666667] mb-6 xl:mb-10">{data.title}</h2>
              {
                data.desc.map((item)=>(
                  <p className="mb-4 xl:mb-8 last:mb-0">{item}</p>
                ))
              }
            </div>
          </div>
          <div>
            <VideoPlayer src={data.vdo} poster={data.vdoPoster} />
          </div>

        </div>
      </div>
    </section>
   );
}
 
export default VdoSection;