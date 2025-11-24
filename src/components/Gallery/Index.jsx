
'use client';
import MainNavbar from "../../MainLayout/MainNavbar";
import Footer from "../../MainLayout/Footer";
import { Listbox } from "@headlessui/react";
import { pressReleases } from "./data";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { moveUp } from "../../motionVarients";
 

 

const ITEMS_PER_PAGE = 12;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);  

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
          <div className="mb-10 xl:mb-15 2xl:mb-20 mt-12 xl:mt-25 2xl:mt-30">
            <motion.h1 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="text-70 font-light leading-[1.071428571428571]">{pressReleases.title}</motion.h1>
          </div>

          <motion.div variants={moveUp(0.5)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between border-y border-cmnbdr pt-35px mb-10 lg:mb-15 2xl:mb-25">
            <div className="flex flex-col md:flex-row gap-5 md:gap-15 xl:gap-[75px]">
              <div className=" relative pb-35px    transition-all duration-300 group">
                <span className= "cursor-pointer   text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                    All
                    </span>
                    <div className="absolute bottom-[-2px] left-0 w-full h-1 bg-secondary transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
               <div className=" relative pb-35px transition-all duration-300 group">
                <span className="cursor-pointer  text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                    Events
                    </span>         
                    <div className="absolute bottom-[-2px] left-0 w-full h-1 bg-secondary transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
           
              </div>
               <div className=" relative pb-35px transition-all duration-300 group">
                <span className="cursor-pointer  text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                    Activities
                    </span>
                    <div className="absolute bottom-[-2px] left-0 w-full h-1 bg-secondary transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
               <div className=" relative pb-35px transition-all duration-300 group">
                <span className="cursor-pointer  text-paragraph text-16 font-semibold leading-[1.75] uppercase">
                    Achievements
                    </span>
                    <div className="absolute bottom-[-2px] left-0 w-full h-1 bg-secondary transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>

           
            </div> 
          </motion.div>

          <div className={`relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-30px gap-y-10 xl:gap-y-15 2xl:gap-y-30 mb-10 xl:mb-12 2xl:mb-[100.32px] transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
            style={{
              transform: isAnimating ? 'translateY(16px)' : 'translateY(0)',
              transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out'
            }}
          >

            {currentItems.map((item, index) => (
              <motion.div variants={moveUp(0.1*index)} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }}
                key={item.id}
                className="border-b border-black/20 pb-5 lg:border-b-0 lg:pb-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={520}
                  height={339}
                  className="w-full h-[339px] 2xl:h-[442px] object-cover"
                />
                <div className="pt-7">
                   <h4 className="text-paragraph text-16 font-light leading-[1.75] uppercase pb-3">
                      {item.category}
                    </h4>
                  
                  <h2 className="text-29 leading-[1.344827586206897] font-light   xl:max-w-[90%]">
                    {item.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pagination flex items-center gap-2 justify-center mb-10 xl:mb-15 2xl:mb-[131.68px]">
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
        
        <div className="absolute bottom-1/8 left-0 z-[-1] ">
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