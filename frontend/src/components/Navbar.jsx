import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  // for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">FOSSEE Workshops</Link>
      </div>

      {/* hamburger icon for mobile */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/workshops" onClick={() => setMenuOpen(false)}>Workshops</Link></li>
        <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
        <li><Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar