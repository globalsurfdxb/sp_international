'use client'; 
import { projectdetails } from "./data";
const Banner = () => {
 
  return (
    <section>
        <div className="pt-12 xl:pt-25  2xl:pt-30 pb-20  md:pb-[200px] xl:pb-[230px]  2xl:pb-[232px] bg-f5f5 bg-[url('/assets/images/project-details/bannerbg.svg')]
        bg-no-repeat bg-contain bg-right">
          <div className="container relative">
             <div className="flex  justify-between items-center ">
               <div>
                 <h1 className="text-70 font-light leading-[1.07] mb-3 lg:mb-5">{projectdetails.title}</h1>
                <p className="text-29 font-light text-paragraph">{projectdetails.subtitle}</p>
               </div>
               <div>
                <p className="font-18 font-light text-paragraph/70 leading-[1.8] border-b [border-image-source:linear-gradient(270deg,#30B6F9_0%,#1E45A2_100%)] [border-image-slice:1]">{projectdetails.sector}</p>
               </div>
             </div>
              
          </div> 
        
        </div> 
        <div className="container relative bottom-[50px] md:bottom-[150px] left-0">
            <img src={projectdetails.image} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container relative md:bottom-[70px] bottom-[10px] left-0 pb-[50px]">
             <h2 className="text-60 font-light mb-5 lg:mb-[58px] leading-[1.17]">About Project</h2>
             <div className="grid grid-cols-1 md:grid-cols-2  border-t border-black/20  ">
                <div className="flex items-center  py-3 lg:py-6">
                  <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Project:</p>
                  <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.title}</p>
                </div>
                <div className="flex items-center  py-3 lg:py-6">
                  <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Location:</p>
                  <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.Location}</p>
                </div> </div>
                
             <div className="grid grid-cols-1 md:grid-cols-2  border-t border-black/20  ">
                <div className="flex items-center  py-3 lg:py-6">
                  <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Sector:</p>
                  <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.sector}</p>
                </div>
                <div className="flex items-center  py-3 lg:py-6">
                  <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Status:</p>
                  <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.status}</p>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2  border-t border-black/20  ">
                <div className="flex items-center  py-3 lg:py-6">
                  <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Client:</p>
                  <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.client}</p>
                </div>
                <div className="flex items-center  py-3 lg:py-6">
                  <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">BUA (Sq.ft):</p>
                  <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.sqft}</p>
                </div>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2  border-t border-b border-black/20  ">
                <div className="flex items-center  py-3 lg:py-6">
                  <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Consultant:</p>
                  <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.Consultant}</p>
                </div>
                <div className="flex items-center  py-3 lg:py-6">
                  <p className="font-19 font-light text-paragraph leading-[1.8] min-w-[13ch]">Contract Model:</p>
                  <p className="font-19 font-light   leading-[1.8] text-black">{projectdetails.Contractmodel}</p>
                </div>
             </div>
             
          </div>
    </section>
  );
};

export default Banner;
