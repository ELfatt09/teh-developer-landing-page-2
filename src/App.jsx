import Navbar from './partials/navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Portofolio from './page/Portofolio'
import Home from './page/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio/:slug" element={<Portofolio />} />
      </Routes>

    </Router>
  )
}

export default App
