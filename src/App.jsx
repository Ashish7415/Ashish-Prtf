
import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Footer from './Components/Footer'

import PortFolio from './Components/PortFolio'
import Experiance from './Components/Experiance'
import Contact from './Components/contact'
import {Toaster} from 'react-hot-toast'




function App() {
  return (
    <>
    <div>
      <Navbar/>
    <Home/>
    < About/>
    
    < PortFolio/>
    < Experiance/>
    <Contact/>
    < Footer/>
    
    </div>
    <Toaster/>
    

    


    </>
  )
}

export default App