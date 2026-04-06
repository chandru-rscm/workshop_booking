import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  // some sample workshops to show on homepage
  const workshops = [
    { id: 1, title: 'Python for Beginners', date: 'April 15, 2025', location: 'IIT Bombay', status: 'upcoming' },
    { id: 2, title: 'Scilab Workshop', date: 'April 20, 2025', location: 'IIT Madras', status: 'upcoming' },
    { id: 3, title: 'OpenFOAM Basics', date: 'March 10, 2025', location: 'IIT Delhi', status: 'completed' },
    { id: 4, title: 'Django Web Development', date: 'April 28, 2025', location: 'IIT Kharagpur', status: 'upcoming' },
    { id: 5, title: 'Circuit Simulation with eSim', date: 'March 25, 2025', location: 'IIT Bombay', status: 'completed' },
    { id: 6, title: 'Linux for Engineers', date: 'May 5, 2025', location: 'IIT Roorkee', status: 'upcoming' },
  ]

  return (
    <div className="home">

      {/* hero section */}
      <div className="hero">
        <h1>Book a FOSSEE Workshop</h1>
        <p>Learn open source tools like Python, Scilab, OpenFOAM and more — conducted by IIT Bombay.</p>
        <Link to="/workshops" className="hero-btn">Browse Workshops</Link>
      </div>

      {/* stats section */}
      <div className="stats">
        <div className="stat-item">
          <h2>120+</h2>
          <p>Workshops Conducted</p>
        </div>
        <div className="stat-item">
          <h2>40+</h2>
          <p>Instructors</p>
        </div>
        <div className="stat-item">
          <h2>5000+</h2>
          <p>Students Enrolled</p>
        </div>
        <div className="stat-item">
          <h2>10+</h2>
          <p>Tools Covered</p>
        </div>
      </div>

      {/* featured workshops */}
      <div className="featured">
        <h2>Featured Workshops</h2>
        <div className="workshop-grid">
          {workshops.map(workshop => (
            <div className="workshop-card" key={workshop.id}>
              <h3>{workshop.title}</h3>
              <p>📅 {workshop.date}</p>
              <p>📍 {workshop.location}</p>
              <span className={`badge ${workshop.status}`}>
                {workshop.status}
              </span>
              <br />
              <Link to={`/workshops/${workshop.id}`} className="card-btn">View Details</Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home