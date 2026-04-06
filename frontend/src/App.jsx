import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <h2>Page content goes here</h2>
      </div>
    </BrowserRouter>
  )
}

export default App