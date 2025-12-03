import React from "react";

import Header from "./components/Header";
import { useState, useEffect } from "react";
import SlideScroll from "./sections/home/SlideScroll";
import SlideScrollTwo from "./sections/home/SlideScrollTwo";
import MainLayout from "./MainLayout/MainLayout";
import Lenis from "lenis";
/* import SmoothScroll from "./components/SmoothScroll"; */

const App = () => {
  const [indexToScroll, setIndexToScroll] = useState(0);

  useEffect(() => {
    console.log(indexToScroll);
  }, [setIndexToScroll]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    // <main className='no-scrollbar hidden 2xl:block'>
    <main className="no-scrollbar">
      <MainLayout /> 
    </main>
  );
};

export default App;
