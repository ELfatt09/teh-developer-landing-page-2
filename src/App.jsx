import React from 'react'
import Navbar from './partials/navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Portofolio from './page/Portofolio'
import Hero from './sections/Hero'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/portofolio" element={<Portofolio />} />
      </Routes>

    </Router>
  )
}

export default App
