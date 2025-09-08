import { useState } from 'react'
import Navbar from './partials/navbar'
import Hero from './sections/Hero'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />

      </Routes>

    </Router>
  )
}

export default App
