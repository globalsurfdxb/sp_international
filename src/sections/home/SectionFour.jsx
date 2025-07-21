'use client';

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";
import { useState } from "react";
import { useEffect } from "react";

const SectionFour = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const textItemsRef = useRef([]);
  const titleRef = useRef(null);
  const rightImageRef = useRef(null);
  const imageRef = useRef(null);
  const borderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Expose GSAP animation method to parent via ref
  useImperativeHandle(ref, () => ({
    playAnimations: () => {
      const tl = gsap.timeline();

      // Animate title
      tl.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
      );

      // Animate each service item
      tl.fromTo(
        textItemsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );

    gsap.fromTo(
       rightImageRef.current,
      { x: 50, width: '0%', opacity: 0 },
      {
        x: 0,
        width: '100%',
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
       rightImageRef.current,
      { x: 50, width: '0%', opacity: 0 },
      {
        x: 0,
        width: '100%',
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    },
  }));

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { x: 50, width: '0%', opacity: 0 },
        {
          x: 0,
          width: '100%',
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );
    }
  }, [activeIndex]);

/*   useEffect(() => {
  if (!textItemsRef.current.length) return;

  const ctx = gsap.context(() => {
    textItemsRef.current.forEach((el, i) => {
      gsap.to(el, {
        opacity: 0,
        y: 30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: () => `top+=${100 + i * 50} top`, // stagger by offset
          end: "bottom top",
          scrub: true,
        },
        ease: "none",
      });
    });
  }, sectionRef);

  return () => ctx.revert(); // Clean up on unmount
}, []); */


  const content = [
    {
      image:"/assets/images/services/servicemain.jpg",
      title:"Engineering & Construction",
      description:""
    },
    {
        image:"/assets/images/services/servicemain.jpg",
      title:"Design Studio",
      description:""
    },
    {
        image:"/assets/images/services/servicemain.jpg",
      title:"MEP",
      description:""
    },
    {
         image:"/assets/images/services/servicemain.jpg",
      title:"Interior Fit-out",
      description:""
    },
    {
         image:"/assets/images/services/servicemain.jpg",
      title:"Façade",
      description:""
    },
    {
        image:"/assets/images/services/servicemain.jpg",
      title:"Facilities Management",
      description:""
    },
    {
        image:"/assets/images/services/servicemain.jpg",
      title:"Water",
      description:""
    },

  ];


  return (
    <section ref={sectionRef} id="section4" className="h-screen relative overflow-hidden whitebgref scroll-area">
      <div className="grid grid-cols-2 h-full">
        {/* left side */}
        <div>
          <div className="flex h-full">
            <div className="w-1/3"></div>
            <div className="w-2/3 pt-33">
              <div className="ml-28 flex flex-col h-full">
                <h1 ref={titleRef} className="text-60 font-light gradient-text leading-[70px]">Our Services</h1>
                <div className="w-full flex flex-col h-full justify-end border-l border-black/20 pl-13 mt-15">
                  <div className="pb-4">
                   <p className="text-60 font-light text-[#62626210]">
  {String(activeIndex + 1).padStart(2, '0')}/{String(content.length).padStart(2, '0')}
</p>
                  </div>
                  <div className="flex flex-col gap-2 pt-14 pb-21 pr-2">
                    {content.map((service, index) => (
                      <div key={index} className="flex items-center gap-3 cursor-pointer group" ref={(el) => (textItemsRef.current[index] = el)} onClick={()=>setActiveIndex(index)}>
                        <p className="text-29 font-light group-hover:text-black group-hover:font-bold text-[#626262] cursor-pointer transform-all duration-300">{service.title}</p>
                        <img src="../assets/images/services/arrowblw.svg" className="hidden group-hover:block transform-all duration-300" alt="Arrow" width={21} height={21}/>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div>
          <div ref={rightImageRef} className="relative w-full h-[100vh]">
            <img key={activeIndex} src={content[activeIndex].image} alt="Service Image" fill className="object-cover absolute w-full h-full" ref={imageRef} />
            <div className="absolute top-0 right-20"><img src="../assets/images/services/studio-over.svg" alt="Logo" width={682} height={914}/></div>
          </div>
        </div>

        {/* horizontal line */}
        <div ref={borderRef} className="absolute inset-0 top-[50%] h-[1px] bg-gradient-to-r from-black/30 to-white w-[70%] left-[15%] opacity-30"></div>
      </div>
    </section>
  );
});

export default SectionFour;
