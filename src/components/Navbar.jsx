import './Navbar.css'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <a href="/#home" className="logo" onClick={closeMenu}>
        <div className="logo-icon">
          <img
            src="https://i.ibb.co/5xYQJVFL/16ec22a5-bc2c-4640-9249-35f514835786.png"
            
            alt="VR Logo"
            className="logo-image"
          />
        </div>

        <h2>
          <span className="vr-text">VR</span>{' '}
          <span className="package-text">PACKAGE</span>
        </h2>
      </a>

      <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
        <li>
          <HashLink smooth to="/#home" onClick={closeMenu}>
            Home
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/#about" onClick={closeMenu}>
            About
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/#products" onClick={closeMenu}>
            Products
          </HashLink>
        </li>
        {/* <li className="nav-dropdown">
  <HashLink smooth to="/#products" onClick={closeMenu}>
    Products
    <span className="dropdown-arrow"> <FaChevronDown className="dropdown-arrow" /></span>
  </HashLink>

  <ul className="dropdown-menu">
    <li>
      <Link to="/product/corrugated-boxes" onClick={closeMenu}>
        Corrugated Boxes
      </Link>
    </li>

    <li>
      <Link to="/product/printed-boxes" onClick={closeMenu}>
        Printed Corrugated Boxes
      </Link>
    </li>

    <li>
      <Link to="/product/custom-cartons" onClick={closeMenu}>
        Custom Carton Boxes
      </Link>
    </li>

    <li>
      <Link to="/product/heavy-duty-boxes" onClick={closeMenu}>
        Heavy Duty Boxes
      </Link>
    </li>

    <li>
      <Link to="/product/die-cut-boxes" onClick={closeMenu}>
        Die-Cut Boxes
      </Link>
    </li>

    <li>
      <Link to="/product/export-packaging" onClick={closeMenu}>
        Export Packaging Boxes
      </Link>
    </li>

    <li>
      <Link to="/product/food-packaging" onClick={closeMenu}>
        Food Packaging Boxes
      </Link>
    </li>

    <li>
      <Link to="/product/oil-packaging" onClick={closeMenu}>
        Oil Packaging Boxes
      </Link>
    </li>

    <li>
      <Link to="/product/partition-boxes" onClick={closeMenu}>
        Partition Boxes
      </Link>
    </li>
  </ul>
</li> */}

        {/* <li>
          <HashLink smooth to="/#process" onClick={closeMenu}>
            Process
          </HashLink>
        </li>
         <li>
          <HashLink smooth to="/#CorrugatedBox3D" onClick={closeMenu}>
            Why we
          </HashLink>
        </li> */}

         <li>
          <HashLink smooth to="/blog" onClick={closeMenu}>
            Blog
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact" onClick={closeMenu}>
            Contact
          </HashLink>
        </li>
       
        {/* <li>
          <HashLink smooth to="/#faq" onClick={closeMenu}>
            FAQ's
          </HashLink>
        </li> */}

        <li className="mobile-quote-item">
          <HashLink
            smooth
            to="/get-quote"
            className="mobile-quote-link"
            onClick={closeMenu}
          >
            Get Quote <span>↗</span>
          </HashLink>
        </li>
      </ul>

      <HashLink smooth to="/get-quote" className="nav-quote-link">
        <button className="nav-btn" onClick={closeMenu}>
          Get Quote
          <span className="nav-btn-arrow">↗</span>
        </button>
      </HashLink>

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? 'menu-open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <button
          type="button"
          className="nav-overlay"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}
    </nav>
  )
}

export default Navbar
