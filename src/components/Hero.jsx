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
import { image } from 'framer-motion/client'

// ========================================
// HERO SLIDES
// ========================================

const slides = [
  {
     image: Heroimg1,
   // image:"https://i.ibb.co/tT4NDHL1/Corrugated-Cardboard-Factory-Floor.png",
     mobileImage: "https://i.ibb.co/FbsVrd9C/hero-mobile-1-1.webp",
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
    //image:"https://i.ibb.co/XkbJrJLs/Modern-Cardboard-Box-Packaging-Display.png",
     mobileImage: "https://i.ibb.co/YB578jKx/Kraft-Cardboard-Boxes-in-Studio1.png",
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
    //image:"https://i.ibb.co/Cpk46gph/6d953a36-74af-4a0f-a890-e2e21556b71e.png",
     mobileImage: "https://i.ibb.co/Nnm1TLRt/hero-mobile-3-1.webp",
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

      {/* Desktop background */}
{/* <div
  className="vr-hero-background vr-hero-desktop"
  style={{
    backgroundImage: `url(${currentSlide.image})`,
  }}
/>

<div
  className="vr-hero-background vr-hero-mobile"
  style={{
    backgroundImage: `url(${currentSlide.mobileImage})`,
  }}
/> */}

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