'use client';  
import { projectdetails } from "../data";
 
const Banner = () => {
 
  return (
    <section>
        <div className="pt-12 xl:pt-25  2xl:pt-30">
          <div className="container relative">
             <div className=" border-y border-cmnbdr  py-6 xl:py-[35px]">
                        <div className="flex justify-between">
                              <div className=" ">
                          <div className="flex gap-15 xl:gap-[90px] 2xl:gap-[325px] ">
                            <div className="w-fit">
                             <p className="uppercase text-paragraph text-19 font-light">INDUSTRY</p>
                            </div> 
                            <div className="w-fit">
                             <p className="uppercase text-paragraph text-19 font-light">JAN 09, 2024</p>
                            </div> 
                          </div>
                           
                        </div>
                       
                        </div>
                      </div>
             <div className="flex  justify-between items-center my-6 lg:my-10">
               <div>
                 <h1 className="text-70 font-light leading-[1.07] max-w-[26.35ch]">Shapoorji Pallonji Energy's FPSO Armada Sterling Commences Production</h1>
              
               </div> 
             </div>
              
          </div> 
        
        </div> 
        <div className="container relative ">
            <img src="/assets/images/press-releases/newsbanner.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 right-0  ">
            <img src="/assets/images/project-details/bannerbg.svg" alt="" className=" object-fit" />
          </div>
    </section>
  );
};

export default Banner;
