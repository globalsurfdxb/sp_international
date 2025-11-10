'use client'; 
import { Vision } from "./data";
const VisionMission = () => {
 
  return (
    <>
        <section className="py-12 xl:py-15 2xl:py-25  bg-f5f5">
          <div className="container">
             <div
      className={`grid grid-cols-1 lg:grid-cols-[1fr_567px] gap-10 lg:gap-[90px] items-center`}
    >
      {/* Left Column */}
      <div>
         <img src={Vision.image} alt="" />
      </div>

      {/* Right Column */}
      <div>
        <div className="">
          <div className="flex flex-col gap-8">
            {Vision.right.map((item, i) => (
              <div key={i}>
                <h3 className='text-60 font-light leading-[1.18] text-black mb-4 lg:mb-6'>
                  {item.title}
                </h3>
                <p className='text-19 font-light leading-[1.474] text-paragraph'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
          </div>
         
        </section>
    </>
  );
};

export default VisionMission;
