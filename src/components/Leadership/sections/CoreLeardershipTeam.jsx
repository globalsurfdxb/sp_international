import H2Title from "../../../components/common/H2Title";
import { useMediaQuery } from "react-responsive";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState, useMemo, useRef } from 'react'
import { assets } from "../../../assets/index";
import {motion, useScroll, useTransform} from "framer-motion";
import { moveUp } from "../../../motionVarients";

const CoreLeadershipTeam = ({ data = {} }) => {
  const items = data?.centetralfunctions || []; // fallback if undefined
  const [query, setQuery] = useState('') 

  const filteredItems = useMemo(() => {
    if (!query) return items;
    return items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, items]); 
      const [selected, setSelected] = useState({ id: "all", name: "All" });

  const filteredTeam = useMemo(() => {
    if (!data?.items) return [];
    return selected.id === "all"
      ? data.items
      : data.items.filter((member) => member.position === selected.name);
  }, [data?.items, selected]);

  const sectionRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 }); // < 768
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // 768 - 1023
  const shapeOffset = isMobile ? [-50, 50] : isTablet ? [-100, 100] : [-200, 200];


  const { scrollYProgress: shapeProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const shapeY = useTransform(shapeProgress, [0, 1], shapeOffset);

  const imageContainerRefTwo = useRef(null);
  const overlayRefTwo = useRef(null);

  return (
    <section className="pb30 relative overflow-hidden" ref={sectionRef}> 
      <div className={`${selected.id == 'all' ? 'visible' : 'hidden'}`}>
          <motion.img style={{y:shapeY}} src={assets.mainShape4} width={648} height={908} alt="" className="absolute -z-10 right-0 bottom-0 2xl:bottom-50 w-[300px] h-fit 3xl:w-[648px] max-h-[908px]" />
      </div>
      <div className="container">
        <div className="flex flex-wrap gap-y-5 justify-between items-center mb-6 lg:mb-10 xl:mb-12 2xl:mb-15 3xl:mb-18">
          <H2Title titleText={data?.title || "Core Leadership Team"} />
          <motion.div variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{amount: 0.2, once: true}}>
          <Combobox
            value={selected}
            onChange={(value) => setSelected(value)}
            onClose={() => setQuery('')}
          >
            <div className="relative 2xl:-left-[196px] border-b border-[#cccccc40]">
              <ComboboxInput
                className={clsx(
                  ' w-fit rounded-lg border-none bg-white/5 py-1.5 pr-1 pl-1 text-16 text-black outline-none select-none caret-transparent',
                  'placeholder:text-paragraph placeholder:text-sm placeholder:uppercase  placeholder:font-semibold',
                  'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                )}
                displayValue={(item) => item?.name || ''}
                placeholder="Central functions"
                onChange={(event) => setQuery(event.target.value)}
              />
              <ComboboxButton className="group absolute inset-y-0 right-0 px-1.5 w-full flex items-center justify-end cursor-pointer outline-none">
                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 1L7.9992 8L1 1.00159" stroke="#464646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </ComboboxButton>
            </div>

            <ComboboxOptions
              anchor="bottom"
              transition
              className={clsx(
                'w-(--input-width) rounded-xl border border-white/5 bg-black p-1 [--anchor-gap:--spacing(1)] empty:invisible',
                'transition duration-100 ease-in data-leave:data-closed:opacity-0'
              )}
            >
              <ComboboxOption
      key="all"
      value={{ id: "all", name: "All" }}
      className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
    > 
      <div className="text-sm/6 text-white">All</div>
    </ComboboxOption>
              {filteredItems.map((item) => (
                <ComboboxOption
                  key={item.id}
                  value={item}
                  className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
                >
                  {/* <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" /> */}
                  <div className="text-sm/6 text-white">{item.name}</div>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 3xl:gap-y-[70px] 3xl:gap-[30px]">
          {filteredTeam.map((member, index) => (
            <motion.div variants={moveUp(0.5 + 0.2*index)} initial="hidden" whileInView="show" viewport={{amount: 0.1, once: true}} key={index} className="relative">
              <div className="relative group">
                <img src={member.image} alt={member.name} className="w-full h-[250px] 2xl:h-[333px] object-contain rounded-xl mb-5 md:mb-[27px]" />
                <div className="absolute bottom-0 left-0 bg-f5f5 w-full h-[67%] max-h-[383px] z-[-1]"></div>
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
              <h3 className="text-29 font-light leading-[1.344827586206897] mb-[7px]">{member.name}</h3>
              <p className="text-paragraph text-19 font-light">{member.position}</p>
            </motion.div>
          ))}
        </div>
         {filteredTeam.length === 0 && (
            <div className="col-span-full text-center py-10 text-paragraph">
              No result found.
            </div>
          )}
      </div>
    </section>
  );
}

export default CoreLeadershipTeam;


