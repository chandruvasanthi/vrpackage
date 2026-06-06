import { image } from 'framer-motion/client'
import './Hero.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Hero() {

  const heroSlides = [

    {
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop',
      title: 'Premium Corrugated Box Manufacturing Solutions in Salem',
      description:'High-quality corrugated packaging boxes for ecommerce, industries and export businesses.'
    },

    {
      image:'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1400&auto=format&fit=crop',
      title:'Strong & Secure Industrial Packaging',
      description:'Durable corrugated packaging solutions designed for safe transportation and storage.'
    },

    {
     image:'https://i.ibb.co/pBFqX3JP/6d953a36-74af-4a0f-a890-e2e21556b71e.png',
      title:'Custom Printed Corrugated Boxes',
      description:'Modern custom packaging and printed carton boxes for branding and retail packaging.'
    }

  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [animate, setAnimate] = useState(true)


  useEffect(() => {
  heroSlides.forEach((slide) => {
    const img = new Image();
    img.src = slide.image;
  });
}, []);
  useEffect(() => {

    const interval = setInterval(() => {

      setAnimate(false)

      setTimeout(() => {

        setCurrentSlide((prev) =>
          prev === heroSlides.length - 1 ? 0 : prev + 1
        )

        setAnimate(true)

      }, 300)

    }, 4000)

    return () => clearInterval(interval)

  }, [])

  return (

    <section className='hero' id='home'

      style={{
        backgroundImage: `linear-gradient( rgba(15,23,42,0.75), rgba(15,23,42,0.75)),
        url(${heroSlides[currentSlide].image})`
      }}
    >

      <div className={`hero-content ${animate ? 'animate' : ''}`} >
      <h1> {heroSlides[currentSlide].title}</h1>
      <p> {heroSlides[currentSlide].description}</p>
      
        <div className='hero-buttons'>
           <Link to='/get-quote'>
            <button className='btn' id='gqbtn'> Get Quote </button>
          </Link>
          <Link to='/products'>
            <button className='outline-btn'> Explore Products </button>
          </Link>
        </div>

      </div>

    </section>
  )
}

export default Hero;