import React from 'react'

import Index from './sections/home/Index'
import Header from './components/Header'

import SmoothScroll from "./components/SmoothScroll";

const App = () => {
  return (
    <main>
      <SmoothScroll/>
      
      <Header/>
 <Index/>
    </main>
  )
}

export default App