import './Footer.css'
import { FaInstagram, FaWhatsapp, FaArrowUp,FaMapMarkerAlt  } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company information */}
        <div className="footer-about">
          <a href="/#home" className="footer-logo">
            <img
              src="https://i.ibb.co/5xYQJVFL/16ec22a5-bc2c-4640-9249-35f514835786.png"
              alt="VR Logo"
              className="footer-logo-image"
            />

            <h2>
              <span className="vr-text">VR</span>{' '}
              <span className="package-text">PACKAGE</span>
            </h2>
          </a>

          <p>
            VR Package is a renowned manufacturer, supplier, and exporter of
            high-quality corrugated boxes in Salem.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/916381506536"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>


            <Link to="/location" aria-label="View factory location"> <FaMapMarkerAlt /></Link>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <HashLink smooth to="/#home">Home</HashLink>
          <HashLink smooth to="/#about">About</HashLink>
          <HashLink smooth to="/#products">Products</HashLink>
          <HashLink smooth to="/#process">Process</HashLink>
          <HashLink smooth to="/#contact">Contact</HashLink>
        </div>

        {/* Products */}
        <div className="footer-links" id="footer-products">
          <h3>Our Products</h3>

          <Link to="/product/corrugated-boxes">
            Corrugated Boxes
          </Link>

          <Link to="/product/Printed Packaging Boxes">
            Printed Boxes
          </Link>

          <Link to="/product/Heavy Duty Boxes">
            Heavy Duty Boxes
          </Link>

          <Link to="/product/Corrugated Rolls">
            Corrugated Rolls
          </Link>

          <Link to="/product/Corrugated Sheets">
            Corrugated Sheets
          </Link>
        </div>

        {/* Contact information */}
        <div className="footer-contact">
          <h3>Contact Info</h3>

          <a href="tel:6381506536">
            <p>+91 6381506536</p>
          </a>

          <a href="mailto:chandrutas007@gmail.com">
            <p>vrpackageofficial@gmail.com</p>
          </a>

          <p>Salem, Tamil Nadu.</p>
        </div>
      </div>

      <div
        className="footer-scroll-top"
        onClick={scrollToTop}
        role="button"
        tabIndex={0}
        aria-label="Scroll to top"
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            scrollToTop()
          }
        }}
      >
        <FaArrowUp />
      </div>

      <div className="footer-bottom">
        <p>© 2026 VR PACKAGE. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
