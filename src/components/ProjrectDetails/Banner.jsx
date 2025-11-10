'use client'; 
import { projectdetails } from "./data";
const Banner = () => {
 
  return (
    <>
        <section className="py-12 xl:py-15 2xl:pt-25 2xl:pb-30">
          <div className="container">
             <div className="flex flex-col justify-between">
               <div>
                 <h1 className="text-4xl font-bold">{projectdetails.title}</h1>
                <p className="text-lg">{projectdetails.subtitle}</p>
               </div>
               <div>
                <p>{projectdetails.sector}</p>
               </div>
             </div>
          </div>
         
        </section>
    </>
  );
};

export default Banner;
