import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './pages/Home'
import VisiMisi from './pages/VisiMisi'
import GuruStaff from './pages/GuruStaff'
import Ekstrakurikuler from './pages/Ekstrakurikuler'
import Kurikulum from './pages/Kurikulum'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/guru" element={<GuruStaff />} />
        <Route path="/ekstra" element={<Ekstrakurikuler />} />
        <Route path="/kurikulum" element={<Kurikulum />} />
      </Routes>
    </Router>
  )
}

export default App
