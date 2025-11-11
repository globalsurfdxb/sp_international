'use client'; 
import { nextpjt} from "../data";
const NextProject = () => {
 
  return (
    <section className="py-10 lg:py-[120px]"> 
          <div className="container  ">
          <div className=" grid grid-cols-1 lg:grid-cols-[auto_1fr] 2xl:grid-cols-[auto_961px] gap-5 lg:gap-[137px]">
             <div className="flex flex-col justify-between items-left pt-0 2xl:pt-[45px] pb-0 2xl:pb-[50px] ">
               <div className="mb-5 xl:mb-[68px]">
                 <h2 className="text-29 font-light leading-[1.17] mb-3 lg:mb-[21px] text-paragraph ">{nextpjt.title}</h2> 
                 <p className="text-60 font-light leading-[1.17] text-black max-w-[11ch]">{nextpjt.subtitle}</p>
               </div> 
               <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-[35px] h-[35px] xl:w-[71px] xl:h-[71px]" width="71" height="71" viewBox="0 0 71 71" fill="none">
              <path d="M4.75781 4.76465H66.2437V66.2365" stroke="#30B6F9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M66.2468 4.76465L5.05469 66.2365" stroke="#30B6F9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
             </div>
             <div>
              <img src={nextpjt.image} alt=""  className="img-fluid" />
             </div>
          </div>
        
        </div>  
    </section>
  );
};

export default NextProject;
