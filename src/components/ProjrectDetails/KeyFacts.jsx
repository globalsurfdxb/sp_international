'use client'; 
import { keyfactors} from "./data";
const KeyFacts = () => {
 
  return (
    <section>
        <div className="py-12  2xl:pt-[88px]  2xl:pb-[80px] bg-primary  ">
          <div className="container relative">
          <div className=" xl:max-w-[1200px] 2xl:max-w-[1208px] ml-auto">
             <div className="flex  justify-between items-center ">
               <div>
                 <h2 className="text-60 font-light leading-[1.17] mb-7 lg:mb-15 text-white">{keyfactors.title}</h2> 
               </div>
              
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 xl:gap-0">
              {keyfactors.list.map((item, i) => (
                <div key={i}>
                  <h3 className="text-40 font-light leading-[1.474] text-white">{item.value}</h3>
                  <p className="text-19 font-light leading-[1.474] text-white/70">{item.title}</p>
                </div>
              ))}
            </div>
              
          </div> 

          </div>
        
        </div>  
    </section>
  );
};

export default KeyFacts;
