import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Admissions from './pages/Admissions.jsx'
import Academics from './pages/Academics.jsx'
import CoCurricular from './pages/CoCurricular.jsx'
import NewsEvents from './pages/NewsEvents.jsx'
import ParentInfo from './pages/ParentInfo.jsx'
import Contact from './pages/Contact.jsx'
import HighSchool from './pages/HighSchool.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/co-curricular" element={<CoCurricular />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/parents" element={<ParentInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/high-school" element={<HighSchool />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
