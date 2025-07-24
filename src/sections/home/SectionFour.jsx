"use client";

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import gsap from "gsap";
import { useState } from "react";
/* import { useEffect } from "react"; */

const SectionFour = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const textItemsRef = useRef([]);
  const titleRef = useRef(null);
  const rightImageRef = useRef(null);
  const imageRef = useRef(null);
  const borderRef = useRef(null);
  const borderTwRef = useRef(null);
  const indxsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // svg
  const AnimatedArrowSVG = () => (
    <svg
      id="ekVUvFDlGn21"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 71 71"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      style={{ width: "71px", height: "71px" }} // optional
    >
      <style>
        {`
        #ekVUvFDlGn22 {
          animation: ekVUvFDlGn22_s_p 12000ms linear infinite alternate forwards
        }
        @keyframes ekVUvFDlGn22_s_p {
          0% { stroke: #f6f5f5 }
          66.666667% { stroke: #30b6f9 }
          100% { stroke: #30b6f9 }
        }

        #ekVUvFDlGn23 {
          animation: ekVUvFDlGn23_s_p 12000ms linear infinite alternate forwards
        }
        @keyframes ekVUvFDlGn23_s_p {
          0% { stroke: #f6f5f5 }
          66.666667% { stroke: #30b6f9 }
          100% { stroke: #30b6f9 }
        }
      `}
      </style>
      <path
        id="ekVUvFDlGn22"
        d="M4.75781,4.76465h61.48589v61.47185"
        fill="none"
        stroke="#f6f5f5"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="ekVUvFDlGn23"
        d="M66.2468,4.76465L5.05469,66.2365"
        fill="none"
        stroke="#f6f5f5"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  useEffect(() => {
    if (imageRef.current && rightImageRef.current) {
      // Image fade-in animation
      gsap.fromTo(
        imageRef.current,
        { width: "0%", opacity: 0 },
        { width: "100%", opacity: 1, duration: 1, ease: "power2.out" }
      );
    }

    if (textItemsRef.current[activeIndex]) {
      gsap.fromTo(
        textItemsRef.current[activeIndex],
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  // Expose GSAP animation method to parent via ref
  useImperativeHandle(ref, () => ({
    playAnimations: () => {
      const tl = gsap.timeline();

      // Animate title
      tl.fromTo(
        titleRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power4.out" }
      )
        .fromTo(
          indxsRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power4.out" }
        )
        .fromTo(
          borderRef.current,
          { width: "0%" },
          { width: "70%", duration: 1, ease: "power4.out" },
          "-=1"
        )
        .fromTo(
          borderTwRef.current,
          { height: "0%" },
          { height: "100%", duration: 1, ease: "power4.out" },
          "-=1.5"
        )

        .fromTo(
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

      // Animate image
      gsap.fromTo(
        rightImageRef.current,
        { x: 50, width: "0%", opacity: 0 },
        {
          x: 0,
          width: "100%",
          opacity: 1,
          duration: 1,
          ease: "power2.easeInOut",
        }
      );
      // fadeout
      const fadeOutTL = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top+=200 top", // Slight delay after scroll begins
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });
      fadeOutTL
        .fromTo(
          titleRef.current,
          { x: 50, opacity: 0, duration: 1, ease: "power4.out" },
          "-=0.5"
        )
        .fromTo(
          indxsRef.current,
          { x: 50, opacity: 0, duration: 1, ease: "power4.out" },
          "-=0.5"
        )
        .fromTo(
          textItemsRef.current,
          {
            y: 40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .fromTo(
          rightImageRef.current,

          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.easeInOut",
          },
          "-=0.5"
        );
    },
    resetAnimations: () => {
      // Reset all opacity for text items
      textItemsRef.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0 });
      });
      gsap.set(titleRef.current, { opacity: 0 });
      gsap.set(rightImageRef.current, { opacity: 0 });
    },
  }));

  const content = [
    {
      image: "/assets/images/services/engineering-construction.jpg",
      title: "Engineering & Construction",
      description: "",
    },
    {
      image: "/assets/images/services/servicemain.jpg",
      title: "Design Studio",
      description: "",
    },
    {
      image: "/assets/images/services/mep.jpg",
      title: "MEP",
      description: "",
    },
    {
      image: "/assets/images/services/interior-fit-out.jpg",
      title: "Interior Fit-out",
      description: "",
    },
    {
      image: "/assets/images/services/servicemain.jpg",
      title: "Façade",
      description: "",
    },
    {
      image: "/assets/images/services/servicemain.jpg",
      title: "Facilities Management",
      description: "",
    },
    {
      image: "/assets/images/services/servicemain.jpg",
      title: "Water",
      description: "",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="section4"
      className="h-screen relative overflow-hidden whitebgref scroll-area"
    >
      <div className="grid grid-cols-2 h-full">
        {/* left side */}
        <div>
          <div className="flex h-full">
            <div className="w-1/3"></div>
            <div className="w-2/3 pt-33">
              <div className="ml-28 flex flex-col h-full">
                <h1
                  ref={titleRef}
                  className="text-34 xl:text-48 3xl:text-60 font-light gradient-text leading-[70px]"
                >
                  Our Services
                </h1>
                <div className="w-full flex flex-col h-full justify-end  pl-13 mt-15 relative">
                  <hr
                    ref={borderTwRef}
                    className="border-l border-black/10 absolute h-full left-0 top-0"
                  />
                  <div className="pb-4">
                    <p
                      ref={indxsRef}
                      className="text-60 font-light text-[#62626210]"
                    >
                      {String(activeIndex + 1).padStart(2, "0")}/
                      {String(content.length).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="flex flex-col pt-14 pb-21 pr-2">
                    {content.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 cursor-pointer group"
                        ref={(el) => (textItemsRef.current[index] = el)}
                        onClick={() => setActiveIndex(index)}
                      >
                        <p
                          className={`text-28 leading-[1.607142857142857] font-light cursor-pointer group-hover:text-black group-hover:font-bold  ${
                            activeIndex === index
                              ? "text-black font-bold"
                              : "text-[#626262]"
                          }`}
                        >
                          <span className="duration-100"> {service.title}</span>
                        </p>
                        <img
                          src="../assets/images/services/arrowblw.svg"
                          className={`transform-all duration-300 ${
                            activeIndex === index
                              ? "block"
                              : "hidden group-hover:block"
                          }`}
                          alt="Arrow"
                          width={21}
                          height={21}
                        />
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
            <img
              key={activeIndex}
              src={content[activeIndex].image}
              alt="Service Image"
              fill
              className="object-cover absolute w-full h-full"
              ref={imageRef}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/40 from-0% via-black/40 via-52% to-black/40 to-100%"></div>
            <div className="absolute top-0 right-20">
              <img
                src="../assets/images/services/studio-over.svg"
                alt="Logo"
                width={682}
                height={914}
              />
            </div>
            <div className="absolute top-[43%] left-20 z-10">
              <h3 className="text-18 3xl:text-29 leading-[1.344827586206897] font-light text-white">
                {content[activeIndex].title}
              </h3>
            </div>
            <div className="absolute bottom-10 3xl:bottom-[50px] left-20 z-10">
              <img
                src="../assets/images/services/arrow-up.svg"
                alt="Arrow"
                className=""
                width={71}
                height={71}
              />
            </div>
          </div>
        </div>

        {/* horizontal line */}
        <div
          ref={borderRef}
          className="absolute inset-0 top-[50%] h-[1px] bg-gradient-to-r from-black/30 to-white w-[70%] left-[15%] opacity-30"
        ></div>
      </div>
    </section>
  );
});

export default SectionFour;
