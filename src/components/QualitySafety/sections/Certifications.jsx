import React from "react";
import { CertificationsData } from "../data"; 
const Certifications = () => {
  return (
    <section className="py-10 xl:py-15 2xl:py-22 3xl:pt-23 3xl:pb-25 bg-primary">
      <div className="container ">
         <div>
            <h2 className="text-60 font-light leading-[1.18] mb-7 text-white">{CertificationsData.title}</h2>
            <p className="text-19 font-light leading-[1.474] max-w-[85ch] text-white">{CertificationsData.description}</p>
          </div> 
          <div> 
            <div className="grid grid-cols-1  md:grid-cols-3  gap-2 lg:gap-23 mt-12 border-t border-white/20">
              {CertificationsData.certificates.map((item,index)=>(
                <div key={index} className="p-6 lg:p-10 md:border-l border-white/20 md:last:border-r border-b md:border-b-0">
                  <img src={item.image} alt="" />
                  <h2 className="text-19 lg:text-29 mt-7 text-white font-light leading-[1.312]  max-w-[15ch]">{item.title}</h2>
                </div>
              ))}  
            </div> 
        </div>
      </div>
    </section>
  );
};

export default Certifications;
