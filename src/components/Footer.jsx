import './Footer.css'
import {  FaWarehouse } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa'
import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TfiDropboxAlt } from "react-icons/tfi";


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Footer() {
  return (
    <footer className='footer'>
      
      <div className='container footer-container'>
        <div className='footer-about'>
         <a href="/#home" className="logo">

  <img
    src="https://i.ibb.co/5xYQJVFL/16ec22a5-bc2c-4640-9249-35f514835786.png"
     alt="VR Logo"  className="logo-image"/>

  <h2>
    <span className="vr-text">VR</span>
    <span className="package-text">PACKAGE</span>
  </h2>

</a>
          <p>
            VR Package is a renowned manufacturer, supplier, and exporter of high-quality corrugated boxes.
          </p>

          <div className='footer-socials'>
            {/* <a href='#'> <FaFacebookF /></a> */}
            <a href='#'><FaInstagram /> </a>
            {/* <a href='#'><FaLinkedinIn /> </a> */}
            <a href='https://wa.me/916381506536'><FaWhatsapp /> </a>
           </div>

        </div>

      <div className='footer-links'>
          <h3>Quick Links</h3>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#products'>Products</a>
          <a href='#process'>Process</a>
          <a href='#contact'>Contact</a>
      </div>

        <div className='footer-links'>
          <h3>Our Products</h3>
          <a href='#'>Corrugated Boxes</a>
          <a href='#'>Printed Boxes</a>
          <a href='#'>Heavy Duty Boxes</a>
          <a href='#'>Corrugated Rolls</a>
          <a href='#'>Corrugated Sheets</a>
        </div>

        <div className='footer-contact'>
          <h3>Contact Info</h3>
          <p> +91 6381506536 </p>
          <p> vrpackageboxes@gmail</p>
           <p> Salem, Tamil Nadu. </p>
        </div>
            
      </div>
  <div className="footer-scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      <div className='footer-bottom'>
        <p>  © 2026 VR PACKAGE. All Rights Reserved. </p>
      </div>
        
    </footer>
  )
}

export default Footer;