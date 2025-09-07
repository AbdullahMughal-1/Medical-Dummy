import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

import SpecialistsLayout from './components/SpeciallistLayout'
import TestimonialSection from './components/TestimonialSection'
import HealthLayout from './components/HealthLayout'




function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <SpecialistsLayout/>
      <TestimonialSection/>
      <HealthLayout/>
    </>
  )
}

export default App
