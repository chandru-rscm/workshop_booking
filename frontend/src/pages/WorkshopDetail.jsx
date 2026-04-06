import { useParams, Link } from 'react-router-dom'
import './WorkshopDetail.css'

// same data as workshops page
const workshopData = [
  { id: 1, name: 'Python for Beginners', duration: 2, description: 'An introductory workshop on Python programming covering basics like variables, loops, functions and file handling. Suitable for students with no prior programming experience.', instructor: 'Prof. Arun KP', institute: 'IIT Bombay' },
  { id: 2, name: 'Scilab Workshop', duration: 3, description: 'Learn Scilab for numerical computation, matrix operations and plotting. This workshop covers toolboxes and real engineering applications using Scilab.', instructor: 'Prof. Mahesh Gudi', institute: 'IIT Bombay' },
  { id: 3, name: 'OpenFOAM Basics', duration: 2, description: 'Introduction to Computational Fluid Dynamics using OpenFOAM. Covers mesh generation, boundary conditions and running basic simulations.', instructor: 'Prof. Prabhu Ramachandran', institute: 'IIT Bombay' },
  { id: 4, name: 'Django Web Development', duration: 3, description: 'Build web applications using Django framework. Covers models, views, templates, forms and user authentication.', instructor: 'Prof. Akshen Doke', institute: 'IIT Bombay' },
  { id: 5, name: 'Circuit Simulation with eSim', duration: 2, description: 'Learn to design and simulate electronic circuits using eSim, a free and open source EDA tool developed by FOSSEE.', instructor: 'Prof. Aditya P', institute: 'IIT Bombay' },
  { id: 6, name: 'Linux for Engineers', duration: 1, description: 'Get started with Linux for engineering applications. Covers terminal commands, shell scripting and setting up development environments.', instructor: 'Prof. Ankit Javalkar', institute: 'IIT Bombay' },
  { id: 7, name: 'DWSIM Process Simulation', duration: 2, description: 'Process simulation using DWSIM for chemical engineering applications. Covers flowsheeting, unit operations and thermodynamic models.', instructor: 'Prof. Prathamesh Salunke', institute: 'IIT Bombay' },
  { id: 8, name: 'OpenModelica', duration: 3, description: 'Model and simulate physical systems using OpenModelica. Covers equation based modelling, libraries and running simulations.', instructor: 'Prof. Kiran Kishore', institute: 'IIT Bombay' },
  { id: 9, name: 'Spoken Tutorial', duration: 1, description: 'Learn various software tools through spoken tutorials developed by IIT Bombay. Self paced learning with audio video content.', instructor: 'Prof. KhushalSingh Rajput', institute: 'IIT Bombay' },
  { id: 10, name: 'PHP and MySQL', duration: 2, description: 'Web development using PHP and MySQL. Covers server side scripting, database connectivity and building simple web apps.', instructor: 'Prof. Mahesh Gudi', institute: 'IIT Bombay' },
  { id: 11, name: 'Advanced Python', duration: 3, description: 'Deep dive into Python covering OOP, decorators, generators, multithreading and working with libraries like NumPy and Pandas.', instructor: 'Prof. Arun KP', institute: 'IIT Bombay' },
  { id: 12, name: 'LaTeX for Beginners', duration: 1, description: 'Learn to write professional documents and research papers using LaTeX. Covers document structure, math equations and bibliography management.', instructor: 'Prof. Prabhu Ramachandran', institute: 'IIT Bombay' },
]

function WorkshopDetail() {
  const { id } = useParams()

  // find the workshop matching the url id
  const workshop = workshopData.find(w => w.id === parseInt(id))

  if (!workshop) {
    return (
      <div className="not-found">
        <h2>Workshop not found</h2>
        <Link to="/workshops">Back to Workshops</Link>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <Link to="/workshops" className="back-link">← Back to Workshops</Link>

      <div className="detail-card">
        <h2>{workshop.name}</h2>

        <div className="detail-info">
          <div className="info-item">
            <span className="info-label">Duration</span>
            <span className="info-value">{workshop.duration} day(s)</span>
          </div>
          <div className="info-item">
            <span className="info-label">Instructor</span>
            <span className="info-value">{workshop.instructor}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Institute</span>
            <span className="info-value">{workshop.institute}</span>
          </div>
        </div>

        <div className="detail-description">
          <h3>About this Workshop</h3>
          <p>{workshop.description}</p>
        </div>

        <Link to="/login" className="book-btn">Book this Workshop</Link>
      </div>
    </div>
  )
}

export default WorkshopDetail