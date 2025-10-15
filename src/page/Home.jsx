import React from 'react'
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

import Hero from '../sections/Hero'
import Navbar from '../partials/Navbar'
import AboutUs from '../sections/AboutUs'
import Team from '../sections/Team'
import Projects from '../sections/Projects'
import Services from '../sections/Services'
import KataClient from '../sections/KataClient'
import Kontak from '../sections/Kontak'
import Footer from '../sections/Footer'

function Home() {
  return (
    <>
          <ScrollToHashElement />

        <Navbar />
        <Hero />
      <AboutUs />
      <Team />
      <Projects />
      <Services />
      <KataClient />
      <Kontak />
      <Footer />
      </>
  )
}

export default Home