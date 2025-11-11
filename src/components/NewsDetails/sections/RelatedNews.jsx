'use client';  
import { pressReleases } from "../../PressReleases/data";
const RelatedNews = () => {
 
  return (
    <section>
        <div className="pb-12    2xl:pb-30     ">
          <div className="container relative ">
            <h2 className="text-60 font-light leading-[1.17] mb-4 xl:mb-17">Related News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30px gap-y-15 xl:gap-y-30 ">
                      {pressReleases.items.slice(0, 3).map((item) => (
                        <div key={item.id} className="bg-white">
                          <img src={item.image} alt={item.title} width={520} height={339} className="w-full h-[339px] object-cover" />
                          <div className="pt-5">
                            <div className="flex items-center justify-between pt-[14px] pb-[13px] pl-[23.15px] pr-[23.17px] bg-f5f5">
                              <h4 className="text-paragraph text-16 font-light leading-[1.75] uppercase">{new Date(item.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}</h4>
                              <h4 className="text-paragraph text-16 font-light leading-[1.75] uppercase">{item.category}</h4>
                            </div>
                            <h2 className="text-29 leading-[1.344827586206897] font-light mt-30px xl:max-w-[90%]">{item.title}</h2>
                          </div>
                        </div>
                      ))}
                    </div>

          </div>
        
        </div>  
    </section>
  );
};

   
export default RelatedNews;
