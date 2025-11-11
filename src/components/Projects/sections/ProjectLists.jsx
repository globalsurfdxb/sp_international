import { Listbox } from "@headlessui/react";
import { pressReleases } from "../data";
const sector = [
  { id: 1, title: "All" },
  { id: 2, title: "Press Releases 1" },
  { id: 3, title: "Press Releases 2" },
  { id: 4, title: "Press Releases 3" },
  { id: 5, title: "Press Releases 4" },
  { id: 6, title: "Press Releases 5" },
];

const status = [
  { id: 1, title: "All" },
  { id: 2, title: "Press Releases 1" },
  { id: 3, title: "Press Releases 2" },
  { id: 4, title: "Press Releases 3" },
  { id: 5, title: "Press Releases 4" },
  { id: 6, title: "Press Releases 5" },
];
const country = [
  { id: 1, title: "All" },
  { id: 2, title: "Press Releases 1" },
  { id: 3, title: "Press Releases 2" },
  { id: 4, title: "Press Releases 3" },
  { id: 5, title: "Press Releases 4" },
  { id: 6, title: "Press Releases 5" },
];
const service = [
  { id: 1, title: "All" },
  { id: 2, title: "Press Releases 1" },
  { id: 3, title: "Press Releases 2" },
  { id: 4, title: "Press Releases 3" },
  { id: 5, title: "Press Releases 4" },
  { id: 6, title: "Press Releases 5" },
];
const ProjectLists = () => {
  return (
    <>
      <section className="relative">
        <div className="container">
          <div className=" border-y border-cmnbdr mt-12 xl:mt-25 mb-8 xl:mb-15 py-6 xl:py-[35px]">
            <div className="flex justify-between">
                  <div className="flex gap-[174px]">
              <div className="flex gap-15 xl:gap-[90px] ">
                <div className="w-fit">
                  <Listbox>
                    <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-3 outline-0 border-0">
                      <span className="text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                        Sector
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Listbox.Button>
                    <Listbox.Options className="border-0 outline-0 absolute w-fit bg-white rounded-sm shadow-sm">
                      {sector.map((sector) => (
                        <Listbox.Option
                          key={sector.id}
                          value={sector.title}
                          className="py-1 px-4 hover:bg-[#f0f0f0] cursor-pointer group hover:font-bold transition-all duration-300 w-full"
                        >
                          <span className="group-hover:scale-[1.03]">
                            {sector.title}
                          </span>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
                <div className="w-fit">
                  <Listbox>
                    <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-3 outline-0 border-0">
                      <span className="text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                        Status
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Listbox.Button>
                    <Listbox.Options className="border-0 outline-0 absolute w-fit bg-white rounded-sm shadow-sm">
                      {status.map((status) => (
                        <Listbox.Option
                          key={status.id}
                          value={status.title}
                          className="py-1 px-4 hover:bg-[#f0f0f0] cursor-pointer group hover:font-bold transition-all duration-300 w-full"
                        >
                          <span className="group-hover:scale-[1.03]">
                            {status.title}
                          </span>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
                <div className="w-fit">
                  <Listbox>
                    <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-3 outline-0 border-0">
                      <span className="text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                        country
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Listbox.Button>
                    <Listbox.Options className="border-0 outline-0 absolute w-fit bg-white rounded-sm shadow-sm">
                      {country.map((country) => (
                        <Listbox.Option
                          key={country.id}
                          value={country.title}
                          className="py-1 px-4 hover:bg-[#f0f0f0] cursor-pointer group hover:font-bold transition-all duration-300 w-full"
                        >
                          <span className="group-hover:scale-[1.03]">
                            {country.title}
                          </span>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
                <div className="w-fit">
                  <Listbox>
                    <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-3 outline-0 border-0">
                      <span className="text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                        Service
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Listbox.Button>
                    <Listbox.Options className="border-0 outline-0 absolute w-fit bg-white rounded-sm shadow-sm">
                      {service.map((service) => (
                        <Listbox.Option
                          key={service.id}
                          value={service.title}
                          className="py-1 px-4 hover:bg-[#f0f0f0] cursor-pointer group hover:font-bold transition-all duration-300 w-full"
                        >
                          <span className="group-hover:scale-[1.03]">
                            {service.title}
                          </span>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="17" viewBox="0 0 27 17" fill="none">
                  <g clip-path="url(#clip0_3119_4427)">
                  <path d="M9.36719 1.93262L1.98894 8.5134L9.34206 15.0679" stroke="#30B6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.40464 8.5H25.0195" stroke="#30B6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_3119_4427">
                  <rect width="27" height="17" fill="white" transform="matrix(-1 0 0 1 27 0)"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <p className="uppercase text-16 text-paragraph font-light">Clear Filter</p></div>
              </div>
            </div>
            <div className="flex items-center gap-6 lg:gap-[30px]">
               <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <rect width="8" height="8" fill="#30B6F9"/>
              <rect y="11" width="8" height="8" fill="#30B6F9"/>
              <rect x="11" width="8" height="8" fill="#30B6F9"/>
              <rect x="11" y="11" width="8" height="8" fill="#30B6F9"/>
              </svg>
              <p className="uppercase text-16 text-paragraph font-light">Grid View</p>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none">
              <line y1="0.5" x2="19" y2="0.5" stroke="#464646"/>
              <line y1="12.5" x2="19" y2="12.5" stroke="#464646"/>
              </svg>
              <p className="uppercase text-16 text-paragraph font-light">list View</p>
            </div>
            </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30px gap-y-12 xl:gap-y-[80px] pb-10 xl:pb-[80px]">
            {pressReleases.items.map((item) => (
              <div key={item.id}  >
                <img
                  src={item.image}
                  alt={item.title}
                  width={520}
                  height={395}
                  className="w-full h-[395px] object-cover"
                />
                <div > 
                  <h2 className="text-29 leading-[1.344827586206897] font-light py-6 xl:max-w-[90%]">
                    {item.title}
                  </h2>
                </div>
                <div className="flex justify-between border-t border-t-black/20 border-b border-b-black/20">
                  <p className="text-paragraph text-16 font-light leading-[2.44]">
                    Sector: {item.sector}
                  </p>
                  <p className="text-paragraph text-16 font-light leading-[2.44] xl:pe-6">
                    BUA (Sq.ft): {item.sqft}
                  </p>
                </div>
                <div className="border-b border-b-black/20">
                     <p className="text-paragraph text-16 font-light leading-[2.44]">
                    Location: {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 w-full pb-10 lg:pb-[131px]">
            <img src="./assets/images/projects/lt.svg" alt=""/>
          <div className="text-lg font-semibold text-black flex items-center gap-1">
            <span className="font-bold text-gray-800">
              2
            </span>
            <span className="text-paragraph font-light text-16 ">/</span>
            <span className="text-paragraph font-light text-16">
              23
            </span>
          </div>
            <img src="./assets/images/projects/rt.svg" alt=""/>
          </div>
        </div>
        <div className="absolute bottom-3/7 translate-y-[-45px] -left-1 z-[-1]   ">
          <img src="./assets/images/projects/pjtbdy1.svg" alt="" className="w-[670px] object-contain"/>
        </div>
        <div className="absolute bottom-0 right-0 z-[-1]   ">
          <img src="./assets/images/projects/pjtbdy2.svg" alt="" className="w-[670px] object-contain"/>
        </div>
      </section>
    </>
  );
};
export default ProjectLists;
