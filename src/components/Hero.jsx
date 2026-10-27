import './Hero.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Heroimg1 from '../assets/Heroimg1.webp'
import Heroimg2 from '../assets/Heroimg2.webp'
import Heroimg3 from '../assets/Heroimg3.webp'

function Hero() {
  const heroSlides = [
    {
      image: Heroimg1,
      title: 'Premium Corrugated Box Manufacturing Solutions in Salem',
      description:
        'High-quality corrugated packaging boxes for ecommerce, industries and export businesses.'
    },
    {
      image: Heroimg2,
      title: 'Strong & Secure Industrial Packaging',
      description:
        'Durable corrugated packaging solutions designed for safe transportation and storage.'
    },
    {
      image: Heroimg3,
      title: 'Custom Printed Corrugated Boxes',
      description:
        'Modern custom packaging and printed carton boxes for branding and retail packaging.'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false)

      const timeout = setTimeout(() => {
        setCurrentSlide((prev) =>
          prev === heroSlides.length - 1 ? 0 : prev + 1
        )
        setAnimate(true)
      }, 300)

      return () => clearTimeout(timeout)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(9, 10, 15, 0.96) 0%,
            rgba(9, 10, 15, 0.83) 48%,
            rgba(9, 10, 15, 0.35) 100%
          ),
          linear-gradient(
            0deg,
            rgba(9, 10, 15, 0.65),
            transparent 55%
          ),
          url("${heroSlides[currentSlide].image}")
        `
      }}
    >
      <div className="hero-inner">
        <div
          className={`hero-content ${animate ? 'animate' : ''}`}
          key={currentSlide}
        >
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span>VR PACKAGE</span>
          </div>

          <h1>
            {heroSlides[currentSlide].title}
          </h1>

          <p>{heroSlides[currentSlide].description}</p>

          <div className="hero-buttons">
            <Link to="/get-quote" className="hero-link">
              <button className="btn" id="gqbtn">
                Get Quote
                <span className="hero-btn-arrow">↗</span>
              </button>
            </Link>

            <Link to="/products" className="hero-link">
              <button className="outline-btn">
                Explore Products
                <span className="hero-btn-arrow">→</span>
              </button>
            </Link>
          </div>

          <div className="hero-slide-indicators">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                className={`hero-indicator ${
                  currentSlide === index ? 'active' : ''
                }`}
                onClick={() => {
                  setAnimate(false)
                  setTimeout(() => {
                    setCurrentSlide(index)
                    setAnimate(true)
                  }, 150)
                }}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? 'true' : undefined}
              />
            ))}

            {/* <span className="hero-slide-count">
              <span>
                {String(currentSlide + 1).padStart(2, '0')}
              </span>
              <span className="hero-count-divider">/</span>
              {String(heroSlides.length).padStart(2, '0')}
            </span> */}
          </div>
        </div>
      </div>

      <div className="hero-bottom-label">
        <span className="hero-status-dot" />
        Corrugated Packaging Solutions
      </div>
    </section>
  )
}

export default Hero
