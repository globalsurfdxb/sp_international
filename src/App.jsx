import React from 'react'


import Header from './components/Header'
import { useState,useEffect } from 'react'
import SlideScroll from './sections/home/SlideScroll'
import SlideScrollTwo from './sections/home/SlideScrollTwo'
import MainLayout from './MainLayout/MainLayout'

/* import SmoothScroll from "./components/SmoothScroll"; */

const App = () => {
  const [indexToScroll, setIndexToScroll] = useState(0);

  useEffect(() => {
    console.log(indexToScroll)
  }, [setIndexToScroll])

  return (
    <main className='no-scrollbar hidden 2xl:block'>
      <MainLayout/>
    </main>
  )
}

export default App