import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>FOSSEE Workshops</h3>
          <p>A project by IIT Bombay to promote the use of Free and Open Source Software in education.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/workshops">Workshops</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@fossee.in</p>
          <p>Phone: +91 22 2576 4133</p>
          <p>IIT Bombay, Powai, Mumbai - 400076</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 FOSSEE, IIT Bombay. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer