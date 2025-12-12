import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skill'
import Experience from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Experience/>
    </>
  )
}

export default App
