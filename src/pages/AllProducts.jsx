import './AllProducts.css'
import productData from '../data/productData'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import WhatsApp from '../components/WhatsApp'

function AllProducts() {

     useEffect(() => {

  window.scrollTo(0, 0)

}, [])

  return (

    <>
      <Navbar />

      <section className='all-products'>

        <div className='container'>

            <h2 className='all-products-heading'> Exclusive Products Collection </h2>
          <div className='all-products-grid'>

            {productData.map((item) => (

              <div className='all-product-card'  key={item.id} >
                <img src={item.image} alt={item.title}  loading='lazy' />

                <div className='all-product-content'>
                   <h3> {item.title} </h3>
                   {<p> {item.description}</p> }
                    {/* <HashLink smooth to='/#contact'>
                       <button className='product-btn'>  Get Quote</button>
                    </HashLink> */}
                    <HashLink smooth to={`/product/${item.slug}`} > 
                       <button className="product-btn"> Explore </button>
                     </HashLink>
                </div>

              </div>

            ))}

          </div>

        </div>

        <div className='industries-section'>

          <h2> Industries We Serve </h2>

          <div className='industries-grid'>
            <div className='industry-box'> E-Commerce </div>
            <div className='industry-box'>  Food & Beverage </div>
            <div className='industry-box'>  Electronics </div>
            <div className='industry-box'>  Pharmaceuticals </div>
            <div className='industry-box'>  Retail Packaging </div>
            <div className='industry-box'>  Logistics & Shipping </div>

          </div>
        </div>

        <div className='quote-cta'>
          <h2> Need Custom Packaging Solutions?</h2>
          <p>
            Get high-quality corrugated boxes manufactured according to
            your exact business requirements.
          </p>
      
           <a href='https://wa.me/916381506536'  target="_blank" rel="noopener noreferrer"  >
                  <button className='cta-btn'>  Request a Quote </button>
            </a>
        </div>
      </section>

      <Footer />
     <WhatsApp />
      </>

  )
}

export default AllProducts;