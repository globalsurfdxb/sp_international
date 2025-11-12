'use client';  
const Trusted = () => {
 
  return (
    <>
        <section className="py-12 xl:py-15 2xl:py-[92px]  bg-[url('/assets/images/about-us/valuebg.svg')] bg-auto bg-right-bottom bg-no-repeat">
          <div className="container">
         <div className="flex flex-col sm:flex-row sm:items-center sm:gap-[84px] lg:gap-[104px]">
                <p className="text-60 max-w-[18.5ch] font-light leading-[1.18] text-black mb-5 lg:mb-0">Your Trusted Construction Partner for Quality and Innovation</p>
         <div className="flex flex-col justify-end items-end">
            <img src="../assets/images/about-us/toarrow.svg" width={71} height={71} alt="arrow" className="w-5 h-5 sm:w-[71px] sm:h-[71px]" />
            <p className="text-16 font-light leading-[1.474] text-paragraph uppercase pt-3">View projects</p>
         </div>
         </div>
          </div>
         
        </section>
    </>
  );
};

export default Trusted;
