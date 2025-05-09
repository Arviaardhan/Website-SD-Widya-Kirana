import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './pages/Home'
import VisiMisi from './pages/VisiMisi'
import GuruStaff from './pages/GuruStaff'
import Ekstrakurikuler from './pages/Ekstrakurikuler'
import Kurikulum from './pages/Kurikulum'
import Prestasi from './pages/Prestasi'
import Blog from './pages/Blog'
import NewsDetail from './pages/NewsDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/guru" element={<GuruStaff />} />
        <Route path="/ekstra" element={<Ekstrakurikuler />} />
        <Route path="/kurikulum" element={<Kurikulum />} />
        <Route path="/prestasi" element={<Prestasi />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </Router>
  )
}

export default App
