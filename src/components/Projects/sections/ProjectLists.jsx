import { Listbox } from "@headlessui/react";
import { pjtList } from "../data";
import { useState, useMemo } from "react";
import { motion,useScroll,useTransform } from "framer-motion";
import { moveUp } from "../../../motionVarients";
import { Link } from "react-router-dom";

import { useRef } from "react";


const sector = [
  { id: 1, title: "All" },
  { id: 2, title: "Social Infrstrucure" },
  { id: 3, title: "Social Infrstrucure 2" },
  { id: 4, title: "Social Infrstrucure 3" },
  { id: 5, title: "Social Infrstrucure 4" },
  { id: 6, title: "Social Infrstrucure 5" },
];

const status = [
  { id: 1, title: "All" },
  { id: 2, title: "Completed" },
  { id: 3, title: "Ongoing" },
];

const country = [
  { id: 1, title: "All" },
  { id: 2, title: "Oman" },
  { id: 3, title: "UAE" },
];

const service = [
  { id: 1, title: "All" },
  { id: 2, title: "Service1" },
  { id: 3, title: "Service2" },
  { id: 4, title: "Service3" },
  { id: 5, title: "Service4" },
  { id: 6, title: "Service5" },
];

const ITEMS_PER_PAGE = 12;

const ProjectLists = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef=useRef(null)
    const { scrollYProgress: shapeProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    });
    const shapeY = useTransform(shapeProgress, [0, 1], [-200, 200]);
  const [view, setView] = useState("grid");

  // 🔹 Filter states
  const [selectedSector, setSelectedSector] = useState(sector[0]);
  const [selectedStatus, setSelectedStatus] = useState(status[0]);
  const [selectedCountry, setSelectedCountry] = useState(country[0]);
  const [selectedService, setSelectedService] = useState(service[0]);

  // 🔹 Filter items based on all dropdowns
  const filteredItems = useMemo(() => {
    let items = [...pjtList.items];

    if (selectedSector.id !== 1) {
      items = items.filter((item) => item.sector === selectedSector.title);
    }

    if (selectedStatus.id !== 1) {
      // assuming your data has item.status
      items = items.filter((item) => item.status === selectedStatus.title);
    }

    if (selectedCountry.id !== 1) {
      items = items.filter((item) => item.country === selectedCountry.title);
    }

    if (selectedService.id !== 1) {
      // assuming your data has item.service
      items = items.filter((item) => item.service === selectedService.title);
    }

    return items;
  }, [selectedSector, selectedStatus, selectedCountry, selectedService]);

  // 🔹 Total pages based on filtered data
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
  }, [filteredItems.length]);

  // 🔹 Current page items from filtered list
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, endIndex);
  }, [currentPage, filteredItems]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || isAnimating) return;

    setIsAnimating(true);
    setCurrentPage(newPage);

    const section = document.querySelector("section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

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

  // 🔹 Filter change handlers (reset page to 1)
  const handleSectorChange = (opt) => {
    setSelectedSector(opt);
    setCurrentPage(1);
  };

  const handleStatusChange = (opt) => {
    setSelectedStatus(opt);
    setCurrentPage(1);
  };

  const handleCountryChange = (opt) => {
    setSelectedCountry(opt);
    setCurrentPage(1);
  };

  const handleServiceChange = (opt) => {
    setSelectedService(opt);
    setCurrentPage(1);
  };

  // 🔹 Clear all filters
  const handleClearFilters = () => {
    setSelectedSector(sector[0]);
    setSelectedStatus(status[0]);
    setSelectedCountry(country[0]);
    setSelectedService(service[0]);
    setCurrentPage(1);
  };

  return (
    <section className="relative" ref={sectionRef}>
      <div className="container">
        <motion.div
          variants={moveUp(2)}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2, once: true }}
          className="border-y border-cmnbdr mt-10 xl:mt-25 mb-8 xl:mb-15 3xl:mb-30 py-4 md:py-6 xl:py-[35px]"
        >
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
            <div className="flex flex-col md:flex-row gap-8  2xl:gap-25  3xl:gap-[174px] justify-between">
              <div className="flex flex-col md:flex-row gap-6 2xl:gap-[90px] ">
                {/* Sector */}
                <div className="w-full lg:w-fit relative">
                  <Listbox value={selectedSector} onChange={handleSectorChange}>
                    <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-[16px] outline-0 border-0 justify-between">
                      <span className="text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                        {selectedSector.title === "All"
                          ? "Sector"
                          : selectedSector.title}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="7"
                        viewBox="0 0 16 9"
                        fill="none"
                      >
                        <path
                          d="M15 1L7.9992 8L1 1.00159"
                          stroke="#464646"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Listbox.Button>
                    <Listbox.Options className="border-0 outline-0 absolute w-[200px] bg-white rounded-sm shadow-sm z-[1]">
                      {sector.map((opt) => (
                        <Listbox.Option
                          key={opt.id}
                          value={opt}
                          className="py-1 px-4 hover:bg-[#f0f0f0] cursor-pointer group hover:font-bold transition-all duration-300 w-full"
                        >
                          <span className="group-hover:scale-[1.03]">
                            {opt.title}
                          </span>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>

                {/* Status */}
                <div className="w-full lg:w-fit relative">
                  <Listbox value={selectedStatus} onChange={handleStatusChange}>
                    <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-[16px] outline-0 border-0 justify-between">
                      <span className="text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                        {selectedStatus.title === "All"
                          ? "Status"
                          : selectedStatus.title}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="7"
                        viewBox="0 0 16 9"
                        fill="none"
                      >
                        <path
                          d="M15 1L7.9992 8L1 1.00159"
                          stroke="#464646"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Listbox.Button>
                    <Listbox.Options className="border-0 outline-0 absolute w-[120px] bg-white rounded-sm shadow-sm z-[1]">
                      {status.map((opt) => (
                        <Listbox.Option
                          key={opt.id}
                          value={opt}
                          className="py-1 px-4 hover:bg-[#f0f0f0] cursor-pointer group hover:font-bold transition-all duration-300 w-full"
                        >
                          <span className="group-hover:scale-[1.03]">
                            {opt.title}
                          </span>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>

                {/* Country */}
                <div className="w-full lg:w-fit relative">
                  <Listbox
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  >
                    <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-[16px] outline-0 border-0 justify-between">
                      <span className="text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                        {selectedCountry.title === "All"
                          ? "Country"
                          : selectedCountry.title}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="7"
                        viewBox="0 0 16 9"
                        fill="none"
                      >
                        <path
                          d="M15 1L7.9992 8L1 1.00159"
                          stroke="#464646"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Listbox.Button>
                    <Listbox.Options className="border-0 outline-0 absolute w-[150px] bg-white rounded-sm shadow-sm z-[1]">
                      {country.map((opt) => (
                        <Listbox.Option
                          key={opt.id}
                          value={opt}
                          className="py-1 px-4 hover:bg-[#f0f0f0] cursor-pointer group hover:font-bold transition-all duration-300 w-full"
                        >
                          <span className="group-hover:scale-[1.03]">
                            {opt.title}
                          </span>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>

                {/* Service */}
                <div className="w-full lg:w-fit relative">
                  <Listbox
                    value={selectedService}
                    onChange={handleServiceChange}
                  >
                    <Listbox.Button className="relative w-full cursor-pointer text-left flex items-center gap-[16px] outline-0 border-0 justify-between">
                      <span className="text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                        {selectedService.title === "All"
                          ? "Service"
                          : selectedService.title}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="7"
                        viewBox="0 0 16 9"
                        fill="none"
                      >
                        <path
                          d="M15 1L7.9992 8L1 1.00159"
                          stroke="#464646"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Listbox.Button>
                    <Listbox.Options className="border-0 outline-0 absolute w-[200px] bg-white rounded-sm shadow-sm z-[1]">
                      {service.map((opt) => (
                        <Listbox.Option
                          key={opt.id}
                          value={opt}
                          className="py-1 px-4 hover:bg-[#f0f0f0] cursor-pointer group hover:font-bold transition-all duration-300 w-full"
                        >
                          <span className="group-hover:scale-[1.03]">
                            {opt.title}
                          </span>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
              </div>

              {/* Clear Filter */}
              <div>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="flex items-center gap-[10px] cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="17"
                    viewBox="0 0 27 17"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_3119_4427)">
                      <path
                        d="M9.36719 1.93262L1.98894 8.5134L9.34206 15.0679"
                        stroke="#30B6F9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.40464 8.5H25.0195"
                        stroke="#30B6F9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3119_4427">
                        <rect
                          width="27"
                          height="17"
                          fill="white"
                          transform="matrix(-1 0 0 1 27 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="uppercase text-16 text-paragraph font-light">
                    Clear Filter
                  </p>
                </button>
              </div>
            </div>

            {/* View toggles */}
            <div className="flex items-center gap-6 lg:gap-[30px] justify-end">
              <div
                className="flex group items-center gap-[6px] cursor-pointer"
                onClick={() => setView("grid")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  className={`brightness-0 group-hover:brightness-100 transition-all duration-300 ${
                    view === "grid" ? "brightness-100" : "brightness-0"
                  }`}
                >
                  <rect width="8" height="8" fill="#30B6F9" />
                  <rect y="11" width="8" height="8" fill="#30B6F9" />
                  <rect x="11" width="8" height="8" fill="#30B6F9" />
                  <rect x="11" y="11" width="8" height="8" fill="#30B6F9" />
                </svg>
                <p className="uppercase text-16 text-paragraph font-light ">
                  Grid View
                </p>
              </div>
              <div
                className="flex group items-center gap-[6px] cursor-pointer"
                onClick={() => setView("list")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`brightness-0 group-hover:brightness-100 transition-all duration-300 ${
                    view === "list" ? "brightness-100" : "brightness-0"
                  }`}
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                >
                  <line y1="0.5" x2="19" y2="0.5" stroke="#30B6F9" />
                  <line y1="12.5" x2="19" y2="12.5" stroke="#30B6F9" />
                </svg>
                <p className="uppercase text-16 text-paragraph font-light ">
                  list View
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GRID VIEW */}
        <div
          className={`gap-x-30px  gap-y-10 md:gap-y-12 xl:gap-y-[80px] pb-10 xl:pb-[80px] transition-all duration-300 
        ${
          isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        } ${
            view === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "hidden"
          }`}
          style={{
            transform: isAnimating ? "translateY(16px)" : "translateY(0)",
            transition:
              "opacity 300ms ease-in-out, transform 300ms ease-in-out",
          }}
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={moveUp(0.2 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2, once: true }}
              className="group"
            >
              <Link to="/project-details">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={520}
                    height={395}
                    className="w-full h-[250px] lg:h-[395px] object-cover"
                  />
                  <div className=" opacity-0 group-hover:opacity-100 transition-all duration-300 absolute left-0 bottom-0 w-[50px] h-[50px]  xl:w-[80px] xl:h-[80px] flex items-center justify-center bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-translate-x-2 group-hover:translate-x-0 translate-y-2 group-hover:translate-y-0 transition-all duration-500 w-[25px] h-[25px] lg:w-[25px] lg:h-[25px]"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <path
                        d="M1.25 1.25H33.2484V33.2411"
                        stroke="#30B6F9"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.2498 1.25L1.4043 33.2411"
                        stroke="#30B6F9"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
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
                    Location: {item.country}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}

          {currentItems.length === 0 && (
            <div className="col-span-full text-center py-10 text-paragraph">
              No projects found for selected filters.
            </div>
          )}
        </div>

        {/* LIST VIEW */}
        <div
          className={`   pb-10 xl:pb-[80px] transition-all duration-300 
        ${
          isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        } ${view === "list" ? "flex flex-col " : "hidden"}`}
          style={{
            transform: isAnimating ? "translateY(16px)" : "translateY(0)",
            transition:
              "opacity 300ms ease-in-out, transform 300ms ease-in-out",
          }}
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={moveUp(0.2 * index)}
              initial="hidden"
              whileInView="show"
              className="border-b border-black/20 pb-[30px] mb-[30px] group"
              viewport={{ amount: 0.2, once: true }}
            >
              <Link to="/project-details">
                <div className="flex flex-col lg:flex-row gap-3 md:gap-10 3xl:gap-[69px] ">
                  <div className="w-full lg:w-[274px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={274}
                      height={208}
                      className="w-full h-full   md:h-[350px] lg:min-w-[274px] lg:h-[208px] object-fit"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between gap-1 md:gap-10 2xl:gap-10 3xl:gap-[104px] w-full">
                    <div>
                      <div>
                        <h2 className="text-29 leading-[1.344827586206897] font-light  ">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                    <div>
                      <div className="bg-f5f5 p-5 xl:py-[18px] xl:px-[30px]">
                        <div className="flex gap-5 3xl:gap-[168px] justify-between border-b border-b-black/20 pb-[11px] mb-[7px] ">
                          <p className="text-paragraph text-19 font-light leading-[2] ">
                            Sector: {item.sector}
                          </p>
                          <p className="text-paragraph text-19 font-light leading-[2] xl:pe-6">
                            BUA (Sq.ft): {item.sqft}
                          </p>
                        </div>
                        <div className="">
                          <p className="text-paragraph text-19 font-light leading-[2]">
                            Location: {item.country}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 hidden lg:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="none"
                      >
                        <path
                          d="M1.25 1.25H33.2484V33.2411"
                          stroke="#30B6F9"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M33.2498 1.25L1.4043 33.2411"
                          stroke="#30B6F9"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {currentItems.length === 0 && (
            <div className="text-center py-10 text-paragraph">
              No projects found for selected filters.
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 w-full pb-10 xl:pb-15 2xl:pb-[120px]">
          <div className="pagination flex items-center gap-5 justify-center ">
            <button
              className={`prev cursor-pointer transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed ${
                currentPage === 1 || isAnimating ? "opacity-30" : "opacity-100"
              }`}
              onClick={handlePrev}
              disabled={currentPage === 1 || isAnimating}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
              className={`next cursor-pointer transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed ${
                currentPage === totalPages || isAnimating
                  ? "opacity-30"
                  : "opacity-100"
              }`}
              onClick={handleNext}
              disabled={currentPage === totalPages || isAnimating}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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

      {view === "grid" && (
        <>
          <div className="absolute bottom-3/7 translate-y-[-78px] left-0 z-[-1]">
            <motion.img style={{y:shapeY}}
              src="./assets/images/projects/pjtbdy1.svg"
              alt=""
              className="w-[670px] object-contain"
            />
          </div>
          <div className="absolute bottom-0 right-0 z-[-1]   ">
            <motion.img style={{y:shapeY}}
              src="./assets/images/projects/pjtbdy2.svg"
              alt=""
              className="w-[670px] object-contain"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectLists;
