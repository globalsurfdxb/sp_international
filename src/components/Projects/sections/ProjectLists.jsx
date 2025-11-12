import { Listbox } from "@headlessui/react";
import { pjtList } from "../data";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { moveUp } from "../../../motionVarients";
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



const ITEMS_PER_PAGE = 12;

const ProjectLists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate total pages based on actual data
  const totalPages = Math.ceil(pjtList.items.length / ITEMS_PER_PAGE);

  // Get current items for the page
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return pjtList.items.slice(startIndex, endIndex);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || isAnimating) return;

    setIsAnimating(true);
    setCurrentPage(newPage);

    // Scroll to top of section smoothly
    const section = document.querySelector('section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    handlePageChange(currentPage + 1);
  };

  return (
    <section className="relative">
      <div className="container">
        <motion.div variants={moveUp(2)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="border-y border-cmnbdr mt-10 xl:mt-25 mb-8 xl:mb-15 py-4 md:py-6 xl:py-[35px]">
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
            <div className="flex flex-col md:flex-row gap-8  2xl:gap-25  3xl:gap-[174px] justify-between">
              <div className="flex flex-col md:flex-row gap-6 2xl:gap-[90px] ">
                <div className="w-full lg:w-fit">
                  <Listbox>
                    <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-3 outline-0 border-0 justify-between">
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
                <div className="w-full lg:w-fit">
                  <Listbox>
                    <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-3 outline-0 border-0 justify-between">
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
                <div className="w-full lg:w-fit">
                  <Listbox>
                    <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-3 outline-0 border-0 justify-between">
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
                <div className="w-full lg:w-fit">
                  <Listbox>
                    <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-3 outline-0 border-0 justify-between">
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
                      <path d="M9.36719 1.93262L1.98894 8.5134L9.34206 15.0679" stroke="#30B6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2.40464 8.5H25.0195" stroke="#30B6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_3119_4427">
                        <rect width="27" height="17" fill="white" transform="matrix(-1 0 0 1 27 0)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="uppercase text-16 text-paragraph font-light">Clear Filter</p></div>
              </div>
            </div>
            <div className="flex items-center gap-6 lg:gap-[30px] justify-end">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <rect width="8" height="8" fill="#30B6F9" />
                  <rect y="11" width="8" height="8" fill="#30B6F9" />
                  <rect x="11" width="8" height="8" fill="#30B6F9" />
                  <rect x="11" y="11" width="8" height="8" fill="#30B6F9" />
                </svg>
                <p className="uppercase text-16 text-paragraph font-light">Grid View</p>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none">
                  <line y1="0.5" x2="19" y2="0.5" stroke="#464646" />
                  <line y1="12.5" x2="19" y2="12.5" stroke="#464646" />
                </svg>
                <p className="uppercase text-16 text-paragraph font-light">list View</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30px  gap-y-10 md:gap-y-12 xl:gap-y-[80px] pb-10 xl:pb-[80px] transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
          style={{
            transform: isAnimating ? 'translateY(16px)' : 'translateY(0)',
            transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out'
          }}>
          {currentItems.map((item,index) => (
            <motion.div key={item.id} variants={moveUp(0.2*index)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }}  >
              <img
                src={item.image}
                alt={item.title}
                width={520}
                height={395}
                className="w-full h-[250px] lg:h-[395px] object-cover"
              />
              <div >
                <h2 className="text-29 leading-[1.344827586206897] font-light py-4 md:py-6 xl:max-w-[90%]">
                  {item.title}
                </h2>
              </div>
              <div className="flex justify-between border-t border-t-black/20 border-b border-b-black/20">
                <p className="text-paragraph text-19 font-light leading-[2.44]">
                  Sector: {item.sector}
                </p>
                <p className="text-paragraph text-19 font-light leading-[2.44] xl:pe-6">
                  BUA (Sq.ft): {item.sqft}
                </p>
              </div>
              <div className="border-b border-b-black/20">
                <p className="text-paragraph text-19 font-light leading-[2.44]">
                  Location: {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 w-full pb-10 lg:pb-[120px]">
          <div className="pagination flex items-center gap-2 justify-center ">
            <button
              className={`prev cursor-pointer transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed ${currentPage === 1 || isAnimating ? 'opacity-30' : 'opacity-100'
                }`}
              onClick={handlePrev}
              disabled={currentPage === 1 || isAnimating}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.7549 1.25L1.25 9.7549M1.25 9.7549L9.75297 18.2579M1.25 9.7549L18.2169 9.79374"
                  stroke="#30B6F9"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <p>
              <span className="current-page font-bold text-16 leading-[2.4375]">
                {String(currentPage).padStart(2, "0")}
              </span>
              {" / "}
              <span className="total-pages">
                {String(totalPages).padStart(2, "0")}
              </span>
            </p>

            <button
              className={`next cursor-pointer transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed ${currentPage === totalPages || isAnimating ? 'opacity-30' : 'opacity-100'
                }`}
              onClick={handleNext}
              disabled={currentPage === totalPages || isAnimating}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.71189 1.25L18.2168 9.7549M18.2168 9.7549L9.71383 18.2579M18.2168 9.7549L1.24994 9.79374"
                  stroke="#30B6F9"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-3/7 translate-y-[-45px] -left-1 z-[-1]   ">
        <img src="./assets/images/projects/pjtbdy1.svg" alt="" className="w-[670px] object-contain" />
      </div>
      <div className="absolute bottom-0 right-0 z-[-1]   ">
        <img src="./assets/images/projects/pjtbdy2.svg" alt="" className="w-[670px] object-contain" />
      </div>
    </section>
  );
};
export default ProjectLists;
