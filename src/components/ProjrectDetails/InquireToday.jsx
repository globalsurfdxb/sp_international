'use client'; 
import { Inquiretoday} from "./data";
const InquireToday = () => {
 
  return (
    <section>
        <div className=" bg-primary  ">
          <div className="container relative py-12  2xl:py-[108px] bg-[url('/assets/images/project-details/bsvtr.svg')] bg-size-[314px] bg-no-repeat bg-left ">
          <div className=" xl:max-w-[1200px] 2xl:max-w-[1208px] ml-auto">
             <div className="flex  justify-between items-center ">
               <div className="mb-5 xl:mb-[68px]">
                 <h2 className="text-60 font-light leading-[1.17] mb-3 lg:mb-[21px] text-white">{Inquiretoday.title}</h2> 
                 <p className="text-29 font-light leading-[1.474] text-white">{Inquiretoday.subtitle}</p>
               </div>
              
             </div>
             
              <div className="flex items-center gap-2">
                <p className="font-16 font-light text-white">Email</p>
                <p className="font-16 font-light text-[#97B6FF]">{Inquiretoday.mail}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="17" viewBox="0 0 27 17" fill="none">
                <path d="M17.6328 1.93262L25.0111 8.5134L17.6579 15.0679" stroke="#30B6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.5954 8.5H1.98047" stroke="#30B6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>              
          </div> 

          </div>
        
        </div>  
    </section>
  );
};

export default InquireToday;
