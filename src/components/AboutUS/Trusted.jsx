'use client'; 
import { data } from "./data";
const Trusted = () => {
 
  return (
    <>
        <section className="py-12 xl:py-15 2xl:pt-25 2xl:pb-30">
          <div className="container">
         <div className="flex flex-col sm:flex-row sm:items-center sm:gap-[104px]">
                <p className="text-60 max-w-[18.5ch] font-light leading-[1.18] text-black mb-5 lg:mb-0">Your Trusted Construction Partner for Quality and Innovation</p>
         <div className="flex flex-col justify-end items-end">
            <img src="../assets/images/about-us/toarrow.svg" width={71} height={71} alt="arrow" />
            <p className="text-16 font-light leading-[1.474] text-paragraph uppercase pt-3">View projects</p>
         </div>
         </div>
          </div>
         
        </section>
    </>
  );
};

export default Trusted;
