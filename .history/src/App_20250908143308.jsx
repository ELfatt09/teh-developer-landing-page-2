import { useState } from 'react'
import Navbar from './partials/navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Portofolio from './page/Portofolio'
import Hero from ''

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
<<<<<<< HEAD
        <Route path='/portofolio' element={<Portofolio />} />
      </Routes>
    </>
=======

      </Routes>

    </Router>
>>>>>>> 1868cc9848c2a43694253855b51884a3ec40be9b
  )
}

export default App
