import React from 'react';
import { assets } from "../../../assets/index"

const ExpertiseSec = ({data}) => {
  

  return (
    <section className="relative pt-12 pb-16 xl:pt-14 xl:pb-16 2xl:pt-[89px] 2xl:pb-[95px] bg-primary text-white overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[519px] h-[725px] z-0"><img src={assets.mainShape} alt="" /></div>
      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-50px">
          <h2 className="text-60 font-light leading-[1.166666666666667] mb-3 xl:mb-5">
            {data.title}
          </h2>
        </div>
        <div className='grid grid-cols-2 xl:grid-cols-4 gap-30px'>
            {
              data.items.map((item)=>(
                <div>
                  <img src={item.img} alt="" />
                  <h3 className='text-29 leading-[1.344827586206897] font-light mt-30px'>{item.title}</h3>
                </div>
              ))
            }
        </div>
       
      </div>
    </section>
  );
};

export default ExpertiseSec;