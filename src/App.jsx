import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <>
    <div>

      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <div className="flex justify-center items-center">
      <Footer/>
      </div>
    </div>
    <Toaster />
    </>
  )
}

export default App
