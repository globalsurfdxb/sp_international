import {assets} from "../../../assets"
 
const ExpandingHorizons = ({data}) => {
  return ( 
    <section className="relative overflow-hidden pt25 pb30">
      <div className="absolute bottom-0 left-0"><img src={assets.mainShape2} alt="" className="w-[563px] h-auto max-w-[788px] object-contain" /></div>
      <div className="container">
        <div>
          <div>
            <div className="2xl:max-w-[85%] 3xl:max-w-[67.84%]  ml-auto ">
              <h2 className="text-60 font-light leading-[1.166666666666667] mb-50px max-w-[22ch]">{data.title}</h2>
              {
                data.desc.map((item)=>(
                  <p className="mb-4 xl:mb-8 last:mb-0 text-29 font-light leading-[1.35] text-paragraph max-w-[48ch]">{item}</p>
                ))
              }
            </div>
          </div>
         

        </div>
      </div>
    </section>
   );
}
 
export default ExpandingHorizons;