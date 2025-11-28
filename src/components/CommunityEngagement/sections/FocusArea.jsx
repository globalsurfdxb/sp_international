import React from 'react'; 
import { useRef, useEffect,useState } from "react";
import { focusData } from "../data";
 
import { assets } from "../../../assets/index"

const FocusArea  = () => { 
  const leftRef = useRef(null);
  const rightRef = useRef(null); 
  // guard to avoid looped updates
  const isSyncingRef = useRef(false);

  // sync helper: set target scrollTop based on source ratio
  function syncScroll(sourceEl, targetEl) {
    if (!sourceEl || !targetEl) return;

    const sourceScrollableHeight = sourceEl.scrollHeight - sourceEl.clientHeight;
    const targetScrollableHeight = targetEl.scrollHeight - targetEl.clientHeight;

    // avoid division by zero
    const sourceRatio = sourceScrollableHeight <= 0
      ? 0
      : sourceEl.scrollTop / sourceScrollableHeight;

    // compute target top
    const targetTop = Math.round(sourceRatio * Math.max(0, targetScrollableHeight));

    // apply using rAF for smoothness
    window.requestAnimationFrame(() => {
      targetEl.scrollTop = targetTop;
    });
  }

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    function onLeftScroll() {
      if (isSyncingRef.current) return;
      isSyncingRef.current = true;
      syncScroll(left, right);
      // release guard next frame to allow further scrolls
      requestAnimationFrame(() => { isSyncingRef.current = false; });
    }

    function onRightScroll() {
      if (isSyncingRef.current) return;
      isSyncingRef.current = true;
      syncScroll(right, left);
      requestAnimationFrame(() => { isSyncingRef.current = false; });
    }

    left.addEventListener("scroll", onLeftScroll, { passive: true });
    right.addEventListener("scroll", onRightScroll, { passive: true });

    // initial sync (optional) — align right to left at mount
    syncScroll(left, right);

    return () => {
      left.removeEventListener("scroll", onLeftScroll);
      right.removeEventListener("scroll", onRightScroll);
    };
  }, []);
  return (
    <section className="  pt-12 pb-16 xl:pt-20 xl:pb-32 bg-f5f5 relative  overflow-hidden">
     
      <div className="container">
        <div className="w-[1316px]   pr-4  flex justify-end ml-auto "> 
         <h2 className='w-full md:pl-6 lg:pl-10 2xl:pl-[107px] text-60 font-light leading-[1.18] mb-5 lg:mb-8 xl:mb-25'>{focusData.title}</h2>
        </div>
      <div className="flex gap-6  xl:gap-[80px] justify-end relative z-[2]">
      {/* Left column */}
      <div
        ref={leftRef}
        
        className="max-h-[100dvh] overflow-y-auto  scrollbar-hidden hidden lg:block   "
      > 
      {/* <h2 className='text-60 font-light leading-[1.18] mb-5 lg:mb-8 xl:mb-25 invisible'>ss</h2> */}
        {focusData.areas.map((area, i) => (
          <div key={i} className=" mb-6 xl:mb-[63px] last:mb-0 last:xl:mb-0 h-[262px] md:h-[226px] xl:h-[262px] pt-2" >
            <img src={area.icon} alt=''/>  
          </div>
        ))}
      </div>

      {/* Right column */}
      <div
        ref={rightRef}
        className="w-[1316px] max-h-[100dvh] overflow-y-auto pr-4 custom-scroll-left "
      >
      <div className='pl-6 lg:pl-10 2xl:pl-[107px]'>
        {focusData.areas.map((area, i) => (
          <div key={i} className="flex gap-3 pb-6 xl:pb-[63px] last:pb-0 last:xl:pb-0"
         
          > 
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-12 2xl:gap-[181px] justify-between w-full sdsdsd'>
              <div>
              <div className='flex gap-3 lg:block items-center'>
                 <img src={area.icon} alt='' className='lg:hidden w-[32px] h-[32px] mb-3 lg:mb-5'/>  
                <p className='text-29 font-light mb-3 lg:mb-5 leading-[1.474]'>{area.title}</p></div>
              <div><p className='text-16 font-light leading-[1.75] text-paragraph max-w-[42ch]'>{area.description}</p></div>
            </div>
            <div   >
              <img src={area.image} alt="" className='w-full h-[250px] md:h-[300px] object-cover lg:h-auto  min-w-[258px] lg:min-w-[358px] xl:min-w-[478px]'/>
            </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>


      </div>
      
                <div className="absolute top-1/2 translate-y-[-50%] left-0 z-[1] w-[510px] h-[714px]"><img src={assets.mainShape} alt="" /></div>
    </section>
  );
};

export default FocusArea ;