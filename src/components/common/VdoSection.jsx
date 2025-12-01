import {assets} from "../../assets"
import H2Title from "./H2Title";
import VideoPlayer from "./VideoPlayer";
const VdoSection = ({data}) => {
  return ( 
    <section className="relative overflow-hidden mt-text25 pb30">
      <div className="absolute bottom-0 left-0 h-full w-full z-0"><img src={assets.mainShape2} alt="" className="w-[250px] lg:w-[400px] xl:w-[500px] 3xl:w-[709px] h-auto max-w-[702px] object-contain" /></div>
      <div className="container">
        <div className="w-full lg:w-[700px] xl:w-[1238px] mx-auto relative z-10">
          <div>
            <div className="lg:max-w-[600px] xl:max-w-[795px] ml-auto mb-5 xl:mb-[70px]">
              <H2Title titleText={data.title} titleColor="primary" marginClass="mb-4 3xl:mb-10" />
              {
                data.desc.map((item)=>(
                  <p className="text-19 leading-[1.473684210526316] font-light text-paragraph mb-4 xl:mb-8 last:mb-0">{item}</p>
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