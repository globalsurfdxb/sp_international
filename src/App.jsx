import React from 'react'


import Header from './components/Header'
import MainLayout from './mainLayout/mainLayout'

/* import SmoothScroll from "./components/SmoothScroll"; */

const App = () => {

  return (
    <main className='no-scrollbar hidden 2xl:block'>
      <MainLayout/>
    </main>
  )
}

export default App