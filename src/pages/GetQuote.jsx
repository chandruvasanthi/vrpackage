import './GetQuote.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import WhatsApp from '../components/WhatsApp'
import { IoHomeSharp } from "react-icons/io5";

function GetQuote() {

  useEffect(() => {

  window.scrollTo(0, 0)

}, [])

  return (
       <>

      <Navbar />
    <section className='getquote' id='quote'>

      <div className='quote-overlay'>

        <div className='quote-content'>
          <h2> Get Custom Packaging Quotes </h2>

          <p>Looking for premium corrugated box manufacturing solutions for your business?</p>
          <p className='quote-subtext'>
            We provide durable and high-quality packaging
            solutions for ecommerce, retail, industrial,
            export and custom business requirements.
          </p>

          <div className='quote-features'>
            <div className='quote-card'>
              <h3>Custom Sizes</h3>
              <span> Tailor-made boxes for all industries</span>
            </div>

            <div className='quote-card'>
              <h3>Bulk Orders</h3>
              <span> Affordable pricing for large quantity orders </span>
            </div>

            <div className='quote-card'>
              <h3>Fast Delivery</h3>
              <span> Quick manufacturing & safe delivery support</span>
            </div>

          </div>

          {/* <HashLink smooth to='/#contact'>
            <button className='quote-btn'> Request Free Quote </button>
          </HashLink> */}
           
            <a href='https://wa.me/916381506536'   target="_blank" rel="noopener noreferrer">
                 <button className='quote-btn'> Request Free Quote </button>
            </a>
        </div>

      </div>
            {/* <HashLink smooth  to="/#top" className="bthbtn"> <span> <IoHomeSharp /> </span></HashLink> */}
    </section>
    <Footer />
    <WhatsApp />
    </>
  )
}

export default GetQuote;