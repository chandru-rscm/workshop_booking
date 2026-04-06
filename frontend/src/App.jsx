import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Workshops from './pages/Workshops'
import WorkshopDetail from './pages/WorkshopDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/workshops/:id" element={<WorkshopDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App