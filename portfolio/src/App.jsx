import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import './App.css'

import Header from './components/Header'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
function App() {

  return (
    <>
      {/* <div className='header'>
        <Header/>
      </div>
       */}
       
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
       <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>

      
    </>
  )
}

export default App
