import React from 'react'
import Hero from '../sections/Hero'
import Navbar from '../partials/navbar'
import AboutUs from '../sections/AboutUs'
import Team from '../sections/Team'

function Home() {
  return (
      <>
        <Navbar />
        <Hero />
      <AboutUs />
      <Team />
      </>
  )
}

export default Home