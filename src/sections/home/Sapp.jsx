import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const Sapp = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const sections = [section1Ref, section2Ref, section3Ref, section4Ref];
  const [currentSlide, setCurrentSlide] = useState(0);
  const isScrolling = useRef(false);
  const menuItems = ["SP GROUP", "SPINT", "SERVICES"];

  // Initial fade block
  const blockRefs = useRef([]);
  useEffect(() => {
    blockRefs.current = document.querySelectorAll(".fade-block");
    gsap.set(blockRefs.current, { opacity: 1, height: "100%" });

    blockRefs.current.forEach((el, i) => {
      gsap.to(el, {
        opacity: 0,
        height: "0%",
        duration: 1,
        delay: 0.5 + i * 0.3,
        ease: "power3.easeInOut",
      });
    });

    updateSlides(0);
  }, []);

  const updateSlides = (index) => {
    sections.forEach((ref, i) => {
      if (!ref.current) return;
      gsap.set(ref.current, {
        visibility: i === index ? "inherit" : "hidden",
        zIndex: i === index ? 2 : i < index ? 1 : 0,
      });
    });

    setCurrentSlide(index);
  };

  const scrollToSlide = (index) => {
    if (index === currentSlide || isScrolling.current) return;
    isScrolling.current = true;

    updateSlides(index);

    setTimeout(() => {
      isScrolling.current = false;
    }, 1000); // Delay to allow scroll effect
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      if (e.deltaY > 0 && currentSlide < sections.length - 1) {
        scrollToSlide(currentSlide + 1);
      } else if (e.deltaY < 0 && currentSlide > 0) {
        scrollToSlide(currentSlide - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSlide]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Fade overlay */}
      <div className="fixed inset-0 z-[9999] pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="fade-block bg-black w-full h-full"
            style={{ position: "absolute", top: 0, left: 0 }}
          ></div>
        ))}
      </div>

      {/* Menu */}
      {currentSlide > 0 && (
        <div className="fixed top-8 right-8 z-[999] space-y-3">
          {menuItems.map((item, i) => {
            const index = i + 1; // starts from slide 2
            const distance = Math.abs(currentSlide - index);
            return (
              <button
                key={item}
                className={`block transition-opacity duration-500 text-white text-xl ${
                  currentSlide === index
                    ? "opacity-100 font-semibold"
                    : distance === 1
                    ? "opacity-70"
                    : "opacity-30"
                }`}
                onClick={() => scrollToSlide(index)}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}

      {/* Section 1 */}
      <div
        ref={section1Ref}
        className="absolute top-0 left-0 w-full h-full bg-white text-black flex items-center justify-center"
        style={{ visibility: "inherit", zIndex: 2 }}
      >
        <h1 className="text-5xl font-bold">Welcome Slide</h1>
      </div>

      {/* Section 2 */}
      <div
        ref={section2Ref}
        className="absolute top-0 left-0 w-full h-full bg-[#141414] text-white flex items-center justify-center"
        style={{ visibility: "hidden", zIndex: 0 }}
      >
        <h1 className="text-5xl font-bold">SP GROUP</h1>
      </div>

      {/* Section 3 */}
      <div
        ref={section3Ref}
        className="absolute top-0 left-0 w-full h-full bg-[#1E1E1E] text-white flex items-center justify-center"
        style={{ visibility: "hidden", zIndex: 0 }}
      >
        <h1 className="text-5xl font-bold">SPINT</h1>
      </div>

      {/* Section 4 */}
      <div
        ref={section4Ref}
        className="absolute top-0 left-0 w-full h-full bg-[#292929] text-white flex items-center justify-center"
        style={{ visibility: "hidden", zIndex: 0 }}
      >
        <h1 className="text-5xl font-bold">SERVICES</h1>
      </div>
    </div>
  );
};

export default Sapp;
