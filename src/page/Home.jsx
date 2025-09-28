import React from 'react'
import Hero from '../sections/Hero'
import Navbar from '../partials/navbar'
import AboutUs from '../sections/AboutUs'
import Team from '../sections/Team'
import Projects from '../sections/projects'

function Home() {
  return (
      <>
        <Navbar />
        <Hero />
      <AboutUs />
      <Team />
      <Projects />
      </>
  )
}

export default Home