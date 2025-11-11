 
import { Listbox } from "@headlessui/react";
import { pressReleases } from "../data";
const topics = [
  { id: 1, title: "All" },
  { id: 2, title: "Press Releases 1" },
  { id: 3, title: "Press Releases 2" },
  { id: 4, title: "Press Releases 3" },
  { id: 5, title: "Press Releases 4" },
  { id: 6, title: "Press Releases 5" },
]
const years = [
  { id: 1, title: "2024" },
  { id: 2, title: "2023" },
  { id: 3, title: "2022" },
  { id: 4, title: "2021" },
  { id: 5, title: "2020" },
]
const ProjectLists = () => {
  return (
    <>
    
      <section>
        <div className="container">
          <div className="mb-10 xl:mb-20 mt-15 xl:mt-30">
            <h1 className="text-70 font-light leading-[1.071428571428571]">Press Releases</h1>
          </div>
          <div className="flex gap-15 xl:gap-[90px] border-y border-cmnbdr py-35px mb-15 xl:mb-20">
            <div className="w-full min-w-max max-w-[200px] relative">
              <Listbox>
                <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-3 outline-0 border-0">
                  <span className="text-paragraph text-16 font-semibold leading-[1.75] uppercase">Topics</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </Listbox.Button>
                <Listbox.Options className="border-0 outline-0 absolute w-full bg-white rounded-sm shadow-sm">
                  {topics.map((topic) => (
                    <Listbox.Option key={topic.id} value={topic.title} className="py-1 px-4 hover:bg-[#f0f0f0] cursor-pointer group hover:font-bold transition-all duration-300 w-full">
                      <span className="group-hover:scale-[1.03]">{topic.title}</span>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
            <div className="w-fit">
              <Listbox>
                <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-3 outline-0 border-0">
                  <span className="text-paragraph text-16 font-semibold leading-[1.75] uppercase">Years</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </Listbox.Button>
                <Listbox.Options className="border-0 outline-0 absolute w-fit bg-white rounded-sm shadow-sm">
                  {years.map((year) => (
                    <Listbox.Option key={year.id} value={year.title} className="py-1 px-4 hover:bg-[#f0f0f0] cursor-pointer group hover:font-bold transition-all duration-300 w-full">
                      <span className="group-hover:scale-[1.03]">{year.title}</span>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30px gap-y-15 xl:gap-y-30 mb-10 xl:mb-30">
            {pressReleases.items.map((item) => (
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
      </section>
      
    </>
  );
} 
export default ProjectLists;
