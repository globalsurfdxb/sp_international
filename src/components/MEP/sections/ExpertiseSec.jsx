import React from 'react';
import { assets } from "../../../assets/index"
import H2Title from '../../common/H2Title';

const ExpertiseSec = ({data}) => {
  return (
    <section className="relative pt-text90 pb25 bg-primary text-white overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[519px] h-[725px] z-0"><img src={assets.mainShape} alt="" /></div>
      <div className="container relative z-10">
        {/* Header */}
          <H2Title titleText={data.title} titleColor="white" marginClass="mb-3 xl:mb-50px" />
       
        <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-30px'>
            {
              data.items.map((item)=>(
                <div className="relative overflow-hidden border-b lg:border-l lg:border-b-0 border-white/30">
                  <img src={item.img} alt={item.title} className="w-full h-[250px] xl:h-[300px] 3xl:h-[333px]  object-cover" />
                  <div className="px-0 pt-4 xl:pl-8 3xl:pl-10 3xl:pt-10">
                    <h3 className="text-29 leading-[1.724137931034483] font-light mb-2">{item.title}</h3>
                    <p className="text-19 leading-[1.526315789473684] font-light">{item.desc}</p>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSec;