import React from 'react'
import Hero from '../sections/Hero'
import Navbar from '../partials/navbar'
import AboutUs from '../sections/AboutUs'

function Home() {
  return (
      <>
        <Navbar />
        <Hero />
        <AboutUs />
      </>
  )
}

export default Home