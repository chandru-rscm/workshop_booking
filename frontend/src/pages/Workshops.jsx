import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Workshops.css'

// sample workshop types based on the original django site
const workshopData = [
  { id: 1, name: 'Python for Beginners', duration: 2 },
  { id: 2, name: 'Scilab Workshop', duration: 3 },
  { id: 3, name: 'OpenFOAM Basics', duration: 2 },
  { id: 4, name: 'Django Web Development', duration: 3 },
  { id: 5, name: 'Circuit Simulation with eSim', duration: 2 },
  { id: 6, name: 'Linux for Engineers', duration: 1 },
  { id: 7, name: 'DWSIM Process Simulation', duration: 2 },
  { id: 8, name: 'OpenModelica', duration: 3 },
  { id: 9, name: 'Spoken Tutorial', duration: 1 },
  { id: 10, name: 'PHP and MySQL', duration: 2 },
  { id: 11, name: 'Advanced Python', duration: 3 },
  { id: 12, name: 'LaTeX for Beginners', duration: 1 },
]

function Workshops() {
  const [search, setSearch] = useState('')

  // filter workshops based on search input
  const filtered = workshopData.filter(w =>
    w.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="workshops-page">
      <div className="workshops-header">
        <h2>Workshop Types</h2>
        <input
          type="text"
          placeholder="Search workshops..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="workshops-container">
        <table className="workshops-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Workshop Name</th>
              <th>Duration (Days)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((w, index) => (
                <tr key={w.id}>
                  <td>{index + 1}</td>
                  <td>{w.name}</td>
                  <td>{w.duration}</td>
                  <td>
                    <Link to={`/workshops/${w.id}`} className="view-btn">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-results">No workshops found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Workshops