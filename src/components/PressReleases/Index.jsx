import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import { Listbox } from "@headlessui/react";
import { pressReleases } from "./data";
import { useState, useMemo } from "react";

const topics = [
  { id: 1, title: "All" },
  { id: 2, title: "Press Releases 1" },
  { id: 3, title: "Press Releases 2" },
  { id: 4, title: "Press Releases 3" },
  { id: 5, title: "Press Releases 4" },
  { id: 6, title: "Press Releases 5" },
];

const years = [
  { id: 1, title: "2024" },
  { id: 2, title: "2023" },
  { id: 3, title: "2022" },
  { id: 4, title: "2021" },
  { id: 5, title: "2020" },
];

const ITEMS_PER_PAGE = 12;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  // Calculate total pages based on actual data
  const totalPages = Math.ceil(pressReleases.items.length / ITEMS_PER_PAGE);

  // Get current items for the page
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return pressReleases.items.slice(startIndex, endIndex);
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
    <>
      <header className="">
        <MainNavbar />
        <img src="./assets/images/shape-right.svg" alt="" className="absolute top-0 right-0 z-[-1]" />
      </header>
      <section className="relative">
        {/* <img src="./assets/images/shape-left.svg" alt="" className="absolute  bottom-30 left-0 z-[-1]" /> */}
        <div className="container">
          <div className="mb-10 xl:mb-20 mt-15 xl:mt-30">
            <h1 className="text-70 font-light leading-[1.071428571428571]">Press Releases</h1>
          </div>

          <div className="flex justify-between border-y border-cmnbdr py-35px mb-15 xl:mb-20">
            <div className="flex gap-15 xl:gap-[90px]">
              <div className="w-full max-w-[200px] min-w-[180px] relative">
                <Listbox value={selectedTopic} onChange={setSelectedTopic}>
                  <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-3 outline-0 border-0">
                    <span className="text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                      {selectedTopic.title}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </Listbox.Button>
                  <Listbox.Options className="border-0 outline-0 absolute w-full bg-white rounded-sm shadow-sm z-10">
                    {topics.map((topic) => (
                      <Listbox.Option
                        key={topic.id}
                        value={topic}
                        className="py-1 px-4 hover:bg-[#f0f0f0] cursor-pointer group hover:font-bold transition-all duration-300 w-full"
                      >
                        <span className="group-hover:scale-[1.03]">{topic.title}</span>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>

              <div className="w-fit relative">
                <Listbox value={selectedYear} onChange={setSelectedYear}>
                  <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-3 outline-0 border-0">
                    <span className="text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                      {selectedYear.title}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </Listbox.Button>
                  <Listbox.Options className="border-0 outline-0 absolute w-fit bg-white rounded-sm shadow-sm z-10">
                    {years.map((year) => (
                      <Listbox.Option
                        key={year.id}
                        value={year}
                        className="py-1 px-4 hover:bg-[#f0f0f0] cursor-pointer group hover:font-bold transition-all duration-300 w-full"
                      >
                        <span className="group-hover:scale-[1.03]">{year.title}</span>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>
           </div>
           <div className="flex items-center gap-3 group cursor-pointer">
            <img src="./assets/images/icons/arrow-tail-left.svg" alt="" className="group-hover:translate-x-[-3px] transition-all duration-300" />
              <p className="text-paragraph text-16 font-light leading-[1.75] uppercase transition-all duration-300">Clear Filter</p>
           </div>
          </div>

          <div className={`relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30px gap-y-15 xl:gap-y-30 mb-10 xl:mb-[100.32px] transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            style={{
              transform: isAnimating ? 'translateY(16px)' : 'translateY(0)',
              transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out'
            }}
          >
           
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="transition-all duration-300 "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={520}
                  height={339}
                  className="w-full h-[339px] object-cover"
                />
                <div className="pt-5">
                  <div className="flex items-center justify-between pt-[14px] pb-[13px] pl-[23.15px] pr-[23.17px] bg-f5f5">
                    <h4 className="text-paragraph text-16 font-light leading-[1.75] uppercase">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </h4>
                    <h4 className="text-paragraph text-16 font-light leading-[1.75] uppercase">
                      {item.category}
                    </h4>
                  </div>
                  <h2 className="text-29 leading-[1.344827586206897] font-light mt-30px xl:max-w-[90%]">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))} 
          </div>

          <div className="pagination flex items-center gap-2 justify-center mb-15 xl:mb-[131.68px]">
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
        {/* <div className="absolute top-0 right-0  ">
            <img src="/assets/images/project-details/bannerbg.svg" alt="" className=" object-fit" />
          </div>   */}
           <div className="absolute bottom-1/7 left-0 z-[-1] ">
            <img src="/assets/images/press-releases/listbody.svg" alt="" className=" object-fit" />
          </div>
          
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Index;