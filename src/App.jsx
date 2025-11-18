import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Wishes from './pages/Wishes'
import About from './pages/About'

function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-emerald-950">
      <Navbar />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className="border-t border-emerald-800/40 bg-emerald-950 text-emerald-100/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Made with love for Krishnali • 20</span>
          <a href="/wishes" className="px-4 py-2 rounded-full bg-[gold] text-emerald-900 font-semibold shadow hover:shadow-lg transition">Send a Wish</a>
        </div>
      </footer>
    </div>
  )
}

export default App
