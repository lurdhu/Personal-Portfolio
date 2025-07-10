import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Tecnologies from './components/Tecnologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        <div className='fixed w-full h-full top-0 -z-10'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className='container lg:px-20 px-10 mx-auto'>
          <NavBar />
          <Hero />
          <About />
          <Tecnologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
