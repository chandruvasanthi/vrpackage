
import './Footer.css'

import {
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
} from 'react-icons/fa'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const quickLinks = [
  { name: 'Home', path: '/#home' },
  { name: 'About', path: '/#about' },
  { name: 'Products', path: '/#products' },
  { name: 'Process', path: '/#process' },
  { name: 'Contact', path: '/#contact' },
]

const products = [
  { name: 'Corrugated Boxes', path: '/product/corrugated-boxes' },
  { name: 'Printed Boxes', path: '/product/Printed Packaging Boxes' },
  { name: 'Heavy Duty Boxes', path: '/product/Heavy Duty Boxes' },
  { name: 'Corrugated Rolls', path: '/product/Corrugated Rolls' },
  { name: 'Corrugated Sheets', path: '/product/Corrugated Sheets' },
]

function Footer() {
  return (
    <footer className="footer">

      {/* Decorative background */}
      <div className="footer-bg-design" aria-hidden="true">
        <span className="footer-bg-box footer-bg-box-one" />
        <span className="footer-bg-box footer-bg-box-two" />
        <span className="footer-bg-line" />
      </div>

      <div className="footer-container">

        {/* Company information */}
        <div className="footer-about">

          <div className="footer-brand-row">

            <a href="/#home" className="footer-logo">
              <img
                src="https://i.ibb.co/5xYQJVFL/16ec22a5-bc2c-4640-9249-35f514835786.png"
                alt="VR Package Logo"
                className="footer-logo-image"
              />

              <h2>
                <span className="vr-text">VR</span>{' '}
                <span className="package-text">PACKAGE</span>
              </h2>
            </a>

            {/* Animated skeleton box */}
            <div className="footer-box-animation" aria-hidden="true">
              <svg viewBox="0 0 120 110" className="footer-box-svg">

                <path
                  className="box-line box-main"
                  d="M20 39 L60 57 L100 39 L100 78 L60 98 L20 78 Z"
                />

                <path
                  className="box-line box-top"
                  d="M20 39 L60 18 L100 39 L60 57 Z"
                />

                <path
                  className="box-line box-fold"
                  d="M60 57 L60 98 M60 18 L60 57 M20 39 L20 78 M100 39 L100 78"
                />

                <path
                  className="box-line box-flap box-flap-left"
                  d="M20 39 L7 19 L45 4 L60 18"
                />

                <path
                  className="box-line box-flap box-flap-right"
                  d="M60 18 L76 4 L113 19 L100 39"
                />

              </svg>
            </div>

          </div>

          <p>
            VR Package is a renowned manufacturer, supplier, and exporter of
            high-quality corrugated boxes in Salem.
          </p>

          {/* Social links */}
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

            <Link to="/location" aria-label="View factory location">
              <FaMapMarkerAlt />
            </Link>

          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          {quickLinks.map((item) => (
            <HashLink
              key={item.name}
              smooth
              to={item.path}
              className="footer-nav-link"
            >
              <FaChevronRight className="footer-link-arrow" />
              <span>{item.name}</span>
            </HashLink>
          ))}

        </div>

        {/* Products */}
        <div className="footer-links" id="footer-products">

          <h3>Our Products</h3>

          {products.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="footer-nav-link"
            >
              <FaChevronRight className="footer-link-arrow" />
              <span>{item.name}</span>
            </Link>
          ))}

        </div>

        {/* Contact information */}
        <div className="footer-contact">

          <h3>Contact Info</h3>

          <a href="tel:+916381506536" className="footer-contact-item">

            <span className="footer-contact-icon">
              <FaPhoneAlt />
            </span>

            <span className="footer-contact-text">
              +91 6381506536
            </span>

          </a>

          <a
            href="mailto:vrpackageofficial@gmail.com"
            className="footer-contact-item"
          >

            <span className="footer-contact-icon">
              <FaEnvelope />
            </span>

            <span className="footer-contact-text">
              vrpackageofficial@gmail.com
            </span>

          </a>

          <Link
            to="/location"
            className="footer-contact-item"
            aria-label="View factory location"
          >

            <span className="footer-contact-icon">
              <FaMapMarkerAlt />
            </span>

            <span className="footer-contact-text">
              Salem, Tamil Nadu
            </span>

          </Link>

        </div>

      </div>

      {/* Scroll to top */}
      <button
        className="footer-scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        type="button"
      >
        <FaArrowUp />
      </button>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2026 VR PACKAGE. All Rights Reserved.</p>
      </div>

    </footer>
  )
}

export default Footer
