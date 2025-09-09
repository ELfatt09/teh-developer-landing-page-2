import { useState } from 'react'
import Navbar from './partials/navbar'
import { Routes, Route } from 'react-router-dom'

import Portofolio from './page/Portofolio'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/portofolio' element={Portofolio} />
      </Routes>
    </>
  )
}

export default App
