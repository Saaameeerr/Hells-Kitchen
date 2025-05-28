import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='container-fluid'>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <strong>Hells <em className='text-danger'>Kitchen</em></strong>
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/" aria-current="page"
                >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className='nav-link'>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className='nav-link'>Menu</Link>
              </li>
              <li className='nav-item'>
                <Link to="/testimonials" className='nav-link'>Testimonials</Link>
              </li>
              <li className='nav-item'>
                <Link to="/contact" className='nav-link'>Contact</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header
