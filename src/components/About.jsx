import './About.css'

function About() {
  return (
    <section className='about' id='about'>

      <div className='container about-container'>

        <div className='about-image'>

          <img
            src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1974&auto=format&fit=crop'
            alt='VR Package Factory' loading='lazy'
          />

        </div>

        <div className='about-content'  data-aos='fade-left'>

          <h2 className='heading'>
            About Us
          </h2>

          <p className='text'>

            VR Package is a newly established corrugated
            box manufacturing company focused on delivering
            durable, innovative and premium-quality packaging
            solutions for industries and businesses.

            <br /><br />

            We are committed to building trust through
            strong product quality, reliable service and
            modern packaging standards for every customer.

          </p>

          <div className='about-cards'>
            <div className='about-card'>
              <h3>   New Venture  </h3>
              <p>    Fresh & Innovative Packaging Solutions</p>

            </div>

            <div className='about-card'>
              <h3> Quality Focus </h3>
              <p>  Premium Corrugated Box Manufacturing </p>
            </div>

            <div className='about-card'>
              <h3> Customer First  </h3>
              <p>   Reliable Support & Timely Delivery  </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About