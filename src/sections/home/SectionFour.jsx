import React from "react";

const SectionFour = () => {
  return (
    <section
      id="section3"
      className="h-screen relative overflow-hidden whitebgref scroll-area"
    >
      <div className="grid grid-cols-2 h-full">
        {/* lfts */}
         <div>
      <div className="flex h-full">
        <div className="w-1/3"> </div>
        <div className="w-2/3 pt-33">
          <div className="ml-28 flex flex-col h-full">
            <h1 className="text-60 font-light gradient-text leading-[70px]">
              Our Services
            </h1>
            <div className="  w-full   flex flex-col h-full justify-end border-l border-black/20 pl-13   mt-15">
              <div className=" pb-4    ">
                <p className="text-60  font-light text-[#62626210]">02/06</p>
              </div>
              <div className="flex flex-col gap-2  pt-14 pb-21 pr-2  ">
                <div className="flex items-center gap-3 cursor-pointer group">
                  <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262] cursor-pointer transform-all duration-300">
                    Engineering & Construction
                  </p>
                  <img
                    src="../assets/images/services/arrowblw.svg"
                    className="hidden group-hover:block transform-all duration-300"
                    alt="Logo"
                    width={21}
                    height={21}
                  />
                </div>
                <div className="flex items-center gap-3 cursor-pointer group">
                  <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262] cursor-pointer transform-all duration-300">
                    Design Studio
                  </p>
                  <img
                    src="../assets/images/services/arrowblw.svg"
                    className="hidden group-hover:block transform-all duration-300"
                    alt="Logo"
                    width={21}
                    height={21}
                  />
                </div>
                <div className="flex items-center gap-3 cursor-pointer group">
                  <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262]  transform-all duration-300">
                    MEP
                  </p>
                  <img
                    src="../assets/images/services/arrowblw.svg"
                    className="hidden group-hover:block transform-all duration-300"
                    alt="Logo"
                    width={21}
                    height={21}
                  />
                </div>
                <div className="flex items-center gap-3 cursor-pointer group">
                  <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262]  transform-all duration-300">
                    Interior Fit-out
                  </p>
                  <img
                    src="../assets/images/services/arrowblw.svg"
                    className="hidden group-hover:block transform-all duration-300"
                    alt="Logo"
                    width={21}
                    height={21}
                  />
                </div>
                <div className="flex items-center gap-3 cursor-pointer group">
                  <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262]  transform-all duration-300">
                    Façade
                  </p>
                  <img
                    src="../assets/images/services/arrowblw.svg"
                    className="hidden group-hover:block transform-all duration-300"
                    alt="Logo"
                    width={21}
                    height={21}
                  />
                </div>
                <div className="flex items-center gap-3 cursor-pointer group">
                  <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262]  transform-all duration-300">
                    Facilities Management
                  </p>
                  <img
                    src="../assets/images/services/arrowblw.svg"
                    className="hidden group-hover:block transform-all duration-300"
                    alt="Logo"
                    width={21}
                    height={21}
                  />
                </div>
                <div className="flex items-center gap-3 cursor-pointer group">
                  <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262]  transform-all duration-300">
                    Water
                  </p>
                  <img
                    src="../assets/images/services/arrowblw.svg"
                    className="hidden group-hover:block transform-all duration-300"
                    alt="Logo"
                    width={21}
                    height={21}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* lfts */}
         <div>
       <div className="relative w-full h-full">  
  <img
    src="/assets/images/services/servicemain.jpg"
    alt="Service Image"
    fill
    className="object-cover"
  />
  <div className="absolute top-0 right-20  ">
    <img src="../assets/images/services/studio-over.svg" alt="Logo" width={682} height={914} /></div>
</div>
    </div>
        {/* rts */}
       
        <div className="absolute inset-0 top-[50%] h-[1px] bg-gradient-to-r from-black/30 to-white w-[70%] left-[15%]"></div>
      </div>
    </section>
  );
};

export default SectionFour;
