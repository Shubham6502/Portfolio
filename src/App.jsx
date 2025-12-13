import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skill'
import Experience from './components/Experience'
import Cerification from './components/Cerification'
import ScrollToTop from './components/ScrollToTop'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Experience/>
     <Cerification/>
     <Projects/>
     <Contact/>
     <Footer/>
     <ScrollToTop/>
     
    </>
  )
}

export default App
