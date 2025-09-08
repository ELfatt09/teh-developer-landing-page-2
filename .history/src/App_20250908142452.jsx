import { useState } from 'react'
import Navbar from './partials/navbar'
import { Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <R/>
      </Routes>
    </>
  )
}

export default App
