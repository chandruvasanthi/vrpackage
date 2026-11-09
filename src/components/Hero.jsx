// import './Hero.css'
// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import Heroimg1 from '../assets/Heroimg1.webp'
// import Heroimg2 from '../assets/Heroimg2.webp'
// import Heroimg3 from '../assets/Heroimg3.webp'

// function Hero() {
//   const heroSlides = [
//     {
//       image: Heroimg1,
//       title: 'Premium Corrugated Box Manufacturing Solutions in Salem',
//       description:
//         'High-quality corrugated packaging boxes for ecommerce, industries and export businesses.'
//     },
//     {
//       image: Heroimg2,
//       title: 'Strong & Secure Industrial Packaging ',
//       description:
//         'Durable corrugated packaging solutions designed for safe transportation and storage.'
//     },
//     {
//       image: Heroimg3,
//       title: 'Custom Printed Corrugated Boxes',
//       description:
//         'Modern custom packaging and printed carton boxes for branding and retail packaging.'
//     }
//   ]

//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [animate, setAnimate] = useState(true)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimate(false)

//       const timeout = setTimeout(() => {
//         setCurrentSlide((prev) =>
//           prev === heroSlides.length - 1 ? 0 : prev + 1
//         )
//         setAnimate(true)
//       }, 300)

//       return () => clearTimeout(timeout)
//     }, 4000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section
//       className="hero"
//       id="home"
//       style={{
//         backgroundImage: `
//           linear-gradient(
//             90deg,
//             rgba(9, 10, 15, 0.96) 0%,
//             rgba(9, 10, 15, 0.83) 48%,
//             rgba(9, 10, 15, 0.35) 100%
//           ),
//           linear-gradient(
//             0deg,
//             rgba(9, 10, 15, 0.65),
//             transparent 55%
//           ),
//           url("${heroSlides[currentSlide].image}")
//         `
//       }}
//     >
//       <div className="hero-inner">
//         <div
//           className={`hero-content ${animate ? 'animate' : ''}`}
//           key={currentSlide}
//         >
//           <div className="hero-eyebrow">
//             <span className="hero-eyebrow-line" />
//             <span>VR PACKAGE . Salem</span>
//           </div>

//           <h1>
//             {heroSlides[currentSlide].title}
//           </h1>

//           <p>{heroSlides[currentSlide].description}</p>

//           <div className="hero-buttons">
//             <Link to="/get-quote" className="hero-link">
//               <button className="btn" id="gqbtn">
//                 Get Quote
//                 <span className="hero-btn-arrow">↗</span>
//               </button>
//             </Link>

//             <Link to="/products" className="hero-link">
//               <button className="outline-btn">
//                 Explore Products
//                 <span className="hero-btn-arrow">→</span>
//               </button>
//             </Link>
//           </div>

//           <div className="hero-slide-indicators">
//             {heroSlides.map((slide, index) => (
//               <button
//                 key={slide.title}
//                 className={`hero-indicator ${
//                   currentSlide === index ? 'active' : ''
//                 }`}
//                 onClick={() => {
//                   setAnimate(false)
//                   setTimeout(() => {
//                     setCurrentSlide(index)
//                     setAnimate(true)
//                   }, 150)
//                 }}
//                 aria-label={`Go to slide ${index + 1}`}
//                 aria-current={currentSlide === index ? 'true' : undefined}
//               />
//             ))}

            
//           </div>
//         </div>
//       </div>

//       <div className="hero-bottom-label">
//         <span className="hero-status-dot" />
//         Corrugated Packaging Solutions
//       </div>
//     </section>
//   )
// }

// export default Hero



import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  FaArrowRight,
  FaArrowDown,
} from 'react-icons/fa6'

import './Hero.css'

import Heroimg1 from '../assets/Heroimg1.webp'
import Heroimg2 from '../assets/Heroimg2.webp'
import Heroimg3 from '../assets/Heroimg3.webp'

// ========================================
// HERO SLIDES
// ========================================

const slides = [
  {
    image: Heroimg1,
    eyebrow: 'VR PACKAGE  •  SALEM',
    title: 'Premium Corrugated',
    highlight: 'Box Manufacturing',
    subtitle: 'Solutions in Salem',
    description:
      'High-quality corrugated packaging boxes for e-commerce, industries and export businesses.',
    primary: 'Get Custom Quote',
    secondary: 'Explore Products',
  },
  {
    image: Heroimg2,
    eyebrow: 'STRENGTH YOU CAN TRUST',
    title: 'Strong & Secure',
    highlight: 'Industrial',
    subtitle: 'Packaging Solutions',
    description:
      'Reliable corrugated packaging engineered to protect your products during storage, handling and transportation.',
    primary: 'Get Custom Quote',
    secondary: 'Explore Products',
  },
  {
    image: Heroimg3,
    eyebrow: 'PACKAGING MADE FOR YOUR BRAND',
    title: 'Custom Printed',
    highlight: 'Corrugated Boxes',
    subtitle: 'For Your Business',
    description:
      'Customized box sizes, quality printing and dependable packaging solutions designed around your business needs.',
    primary: 'Get Custom Quote',
    secondary: 'Explore Products',
  },
]

// ========================================
// HERO COMPONENT
// ========================================

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const currentSlide = slides[activeSlide]

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="vr-hero" id="home">

      {/* Background image */}
      <div
        className="vr-hero-background"
        key={currentSlide.image}
        style={{
          backgroundImage: `url(${currentSlide.image})`,
        }}
      />

      {/* Background overlays */}
      <div className="vr-hero-overlay" />

      {/* Main content */}
      <div className="vr-hero-container">

        <div className="vr-hero-content" key={activeSlide}>

          {/* Eyebrow */}
          <div className="vr-hero-eyebrow">
            <span className="vr-eyebrow-line" />
            <span>{currentSlide.eyebrow}</span>
          </div>

          {/* Heading */}
          <h1>
            {currentSlide.title}

            <span className="vr-hero-highlight">
              {currentSlide.highlight}
            </span>

            {currentSlide.subtitle}
          </h1>

          {/* Description */}
          <p className="vr-hero-description">
            {currentSlide.description}
          </p>

          {/* Buttons */}
          <div className="vr-hero-buttons">

            <Link
              to="/get-quote"
              className="vr-hero-btn vr-hero-btn-primary"
            >
              {currentSlide.primary}
              <FaArrowRight />
            </Link>

            <Link
              to="/products"
              className="vr-hero-btn vr-hero-btn-outline"
            >
              {currentSlide.secondary}
              <FaArrowRight />
            </Link>

          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="vr-hero-slider-controls">

        <div className="vr-hero-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              className={activeSlide === index ? 'active' : ''}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={activeSlide === index}
            />
          ))}
          
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