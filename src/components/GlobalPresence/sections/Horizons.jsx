 
 
const Horizons = ({data}) => {
  return ( 
    <section className="relative overflow-hidden pt25 pb30 bg-f5f5"> 
      <div className="container">
         
           <h2 className="text-60 font-light leading-[1.166666666666667] mb-50px max-w-[22ch]">{data.title}</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 lg:gap-y-10 xl:gap-y-[120px]">
            {
              data.items.map((item)=>(
                <div className="group border-l border-black/20 border-t border-t-transparent border-b border-b-transparent bdrrst hover:border-t hover:border-t-[#30B6F9] hover:border-b hover:border-b-[#30B6F9] transition-all duration-300">
                  <h3 className="text-29 font-light leading-[1.311] mb-4 lg:mb-5  px-3 lg:px-10 pt-4 lg:pt-7">{item.location}</h3>
                  <div className="relative">
                    <div className="absolute bottom-0 w-full h-0 group-hover:h-full group-hover:bg-[linear-gradient(180deg,rgba(48,182,249,0)_0%,rgba(48,182,249,0.75)_100%)] transition-all duration-300 ">
                      <div className="h-0 w-6 group-hover:h-6 lg:w-10 group-hover:lg:h-10 2xl:w-20 group-hover:2xl:h-20 bg-primary flex items-center justify-center absolute bottom-0 transition-all duration-300 delay-100 ">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150"> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 35 35" fill="none">
                          <path d="M1.25 1.25012H33.2484V33.2412" stroke="#30B6F9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M33.2517 1.25L1.40625 33.2411" stroke="#30B6F9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>  
                      </div>
                    </div>
                  <img src={item.image} alt="" className="h-[310px] object-cover w-full" />
                  </div>
                 <div className="p-4 lg:p-7 2xl:p-10">
                   <div className="flex gap-5 lg:gap-[45px]   max-w-[413px]">
                    <div className="w-[185px]">
                      <p className="text-[30px] xl:text-40 leading-[1.1] font-light">{item.projects} +</p>
                      <p className="text-16 font-light text-paragraph">Projects</p>
                    </div>
                    <div>
                      <p className="text-[30px] xl:text-40 leading-[1.1] font-light">{item.countries} +</p>
                      <p className="text-16 font-light text-paragraph">Countries</p>
                    </div>
                   </div>
                  <ul className="flex flex-wrap gap-2 ulst pt-3 lg:pt-5 2xl:pt-[35px] mt-3 lg:mt-5 2xl:mt-[35px] border-t border-black/20">
                    {
                      item.countriesList.map((country)=>(
                        <li>{country}<span className="text-[#30B6F9] pl-2 laststs">|</span> </li>
                        
                      ))
                    }
                  </ul>
                 </div>
                </div>
              ))
            }
           </div>
      </div>
    </section>
   );
}
 
export default Horizons;