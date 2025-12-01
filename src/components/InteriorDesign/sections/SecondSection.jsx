import React from 'react';
import { assets } from "../../../assets/index"

const SecondSection = ({data}) => {
  return (
    <section className="relative pt-text90 pb25 bg-primary text-white overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[519px] h-[725px] "><img src={assets.mainShape} className=' object-contain' alt="" /></div>
      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-50px">
          <h2 className="text-60 font-light leading-[1.166666666666667] mb-30px">
            {data.title}
          </h2>
          <p className='text-19 leading-[1.473684210526316] font-extralight max-w-6xl'>{data.desc}</p>
        </div>
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-30px'>
            {
              data.items.map((item)=>(
                <div>
                  <div className='border-b border-white/30 pb-30px'>
                    <img src={item.icon} alt="" width={65} height={65} className='h-10 w-auto xl:h-[65px] object-contain' />
                  </div>
                  <h3 className='text-29 leading-[1.344827586206897] font-light mt-30px mb-5'>{item.title}</h3>
                  <p className='text-19 leading-[1.473684210526316] font-extralight'>{item.desc}</p>
                </div>
              ))
            }
        </div>
      </div>
    </section>
  );
};

export default SecondSection;