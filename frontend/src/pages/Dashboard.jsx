import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

// sample data showing coordinator's booked workshops
const myWorkshops = [
  { id: 1, title: 'Python for Beginners', date: 'April 15, 2025', location: 'IIT Bombay', status: 'confirmed' },
  { id: 2, title: 'Scilab Workshop', date: 'April 20, 2025', location: 'IIT Madras', status: 'pending' },
  { id: 3, title: 'OpenFOAM Basics', date: 'March 10, 2025', location: 'IIT Delhi', status: 'completed' },
  { id: 4, title: 'Django Web Development', date: 'May 5, 2025', location: 'IIT Kharagpur', status: 'pending' },
]

function Dashboard() {
  const [activeTab, setActiveTab] = useState('workshops')

  return (
    <div className="dashboard-page">

      <div className="dashboard-header">
        <div>
          <h2>My Dashboard</h2>
          <p>Welcome back, Coordinator</p>
        </div>
        <Link to="/workshops" className="propose-btn">+ Propose Workshop</Link>
      </div>

      {/* quick stats */}
      <div className="dash-stats">
        <div className="dash-stat-card">
          <h3>{myWorkshops.length}</h3>
          <p>Total Workshops</p>
        </div>
        <div className="dash-stat-card">
          <h3>{myWorkshops.filter(w => w.status === 'confirmed').length}</h3>
          <p>Confirmed</p>
        </div>
        <div className="dash-stat-card">
          <h3>{myWorkshops.filter(w => w.status === 'pending').length}</h3>
          <p>Pending</p>
        </div>
        <div className="dash-stat-card">
          <h3>{myWorkshops.filter(w => w.status === 'completed').length}</h3>
          <p>Completed</p>
        </div>
      </div>

      {/* tabs */}
      <div className="dash-tabs">
        <button
          className={activeTab === 'workshops' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('workshops')}
        >
          My Workshops
        </button>
        <button
          className={activeTab === 'profile' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('profile')}
        >
          My Profile
        </button>
      </div>

      {/* workshops tab */}
      {activeTab === 'workshops' && (
        <div className="dash-table-container">
          <table className="dash-table">
            <thead>
              <tr>
                <th>Workshop</th>
                <th>Date</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {myWorkshops.map(w => (
                <tr key={w.id}>
                  <td>{w.title}</td>
                  <td>{w.date}</td>
                  <td>{w.location}</td>
                  <td>
                    <span className={`status-badge ${w.status}`}>
                      {w.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* profile tab */}
      {activeTab === 'profile' && (
        <div className="profile-section">
          <div className="profile-item">
            <span className="profile-label">Name</span>
            <span className="profile-value">John Coordinator</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Email</span>
            <span className="profile-value">john@college.edu</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Institute</span>
            <span className="profile-value">Example Engineering College</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Position</span>
            <span className="profile-value">Coordinator</span>
          </div>
        </div>
      )}

    </div>
  )
}

export default Dashboard