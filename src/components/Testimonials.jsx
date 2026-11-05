
import { useState, useEffect, useRef } from 'react'
import './Testimonials.css'

import {
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaQuoteRight,
} from 'react-icons/fa'

// =========================================
// TESTIMONIAL DATA
// =========================================

const testimonials = [
  {
    id: 1,
    name: 'Customer Name',
    role: 'Business Owner',
    company: 'Food & Beverage',
    initials: 'CN',
    avatarColor: 'avatar-one',
    rating: '5.0',
    review:
      'Add genuine customer feedback about the strength, quality and durability of VR Package corrugated boxes.',
  },
  {
    id: 2,
    name: 'Customer Name',
    role: 'Purchase Manager',
    company: 'E-Commerce',
    initials: 'CN',
    avatarColor: 'avatar-two',
    rating: '5.0',
    review:
      'Add genuine customer feedback about custom packaging solutions, product protection and reliable delivery.',
  },
  {
    id: 3,
    name: 'Customer Name',
    role: 'Operations Manager',
    company: 'Manufacturing',
    initials: 'CN',
    avatarColor: 'avatar-three',
    rating: '5.0',
    review:
      'Add genuine customer feedback about heavy-duty packaging, material quality and professional service.',
  },
  {
    id: 4,
    name: 'Customer Name',
    role: 'Business Owner',
    company: 'Retail & FMCG',
    initials: 'CN',
    avatarColor: 'avatar-four',
    rating: '5.0',
    review:
      'Add genuine customer feedback about printing quality, customized designs and packaging presentation.',
  }
]

// =========================================
// TESTIMONIAL COMPONENT
// =========================================

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const dragStartX = useRef(0)
  const draggingRef = useRef(false)

  const totalTestimonials = testimonials.length

  const previousIndex =
    (activeIndex - 1 + totalTestimonials) % totalTestimonials

  const nextIndex =
    (activeIndex + 1) % totalTestimonials

  // =========================================
  // AUTOMATIC SLIDE
  // =========================================

  useEffect(() => {
    if (isHovered || isDragging) return

    const interval = setInterval(() => {
      setActiveIndex((current) =>
        (current + 1) % totalTestimonials
      )
    }, 4500)

    return () => clearInterval(interval)
  }, [isHovered, isDragging, totalTestimonials])

  // =========================================
  // NAVIGATION
  // =========================================

  const goToPrevious = () => {
    setActiveIndex((current) =>
      (current - 1 + totalTestimonials) % totalTestimonials
    )
  }

  const goToNext = () => {
    setActiveIndex((current) =>
      (current + 1) % totalTestimonials
    )
  }

  // =========================================
  // MOUSE DRAG / TOUCH SWIPE
  // =========================================

  const handlePointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return

    dragStartX.current = e.clientX
    draggingRef.current = true

    setIsDragging(true)

    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerUp = (e) => {
    if (!draggingRef.current) return

    const difference = e.clientX - dragStartX.current

    draggingRef.current = false
    setIsDragging(false)

    if (Math.abs(difference) > 45) {
      if (difference < 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }
  }

  const handlePointerCancel = () => {
    draggingRef.current = false
    setIsDragging(false)
  }

  // =========================================
  // VISIBLE CARDS
  // =========================================

  const visibleCards = [
    {
      item: testimonials[previousIndex],
      position: 'previous',
    },
    {
      item: testimonials[activeIndex],
      position: 'active',
    },
    {
      item: testimonials[nextIndex],
      position: 'next',
    },
  ]

  // =========================================
  // JSX
  // =========================================

  return (
    <section className="vr-testimonials" id="testimonials">

      <div className="testimonial-container">

        {/* SECTION HEADING */}

        <div className="testimonial-heading">

          <div className="testimonial-eyebrow">
            <span className="testimonial-eyebrow-line" />
            CUSTOMER EXPERIENCES
            <span className="testimonial-eyebrow-line" />
          </div>

          <h2>
            Voices of <span>Trust.</span>
          </h2>

          <p>
            Real experiences from businesses that trust
            VR Package for their packaging solutions.
          </p>

        </div>

        {/* TESTIMONIAL CAROUSEL */}

        <div
          className={`testimonial-carousel ${
            isDragging ? 'is-dragging' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onLostPointerCapture={handlePointerCancel}
        >

          <div className="testimonial-stage">

            {visibleCards.map(({ item, position }) => (

              <article
                key={item.id}
                className={`testimonial-card testimonial-${position}`}
                aria-hidden={position !== 'active'}
              >

                {/* QUOTE ICON */}

                <div className="testimonial-quote-mark">
                  <FaQuoteRight />
                </div>

                {/* REVIEW */}

                <p className="testimonial-review">
                  "{item.review}"
                </p>

                {/* RATING */}

                <div className="testimonial-rating">

                  <div className="testimonial-stars">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} />
                    ))}

                  </div>

                  <span>{item.rating}</span>

                </div>

                {/* DIVIDER */}

                <div className="testimonial-divider" />

                {/* CUSTOMER PROFILE */}

                <div className="testimonial-profile">

                  <div
                    className={`testimonial-profile-image ${item.avatarColor}`}
                  >
                    {item.initials}
                  </div>

                  <div className="testimonial-profile-details">

                    <h3>{item.name}</h3>

                    {/* <p>{item.role}</p>

                    <span>{item.company}</span> */}

                  </div>

                  <div className="testimonial-profile-accent">
                    <FaQuoteRight />
                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

        {/* NAVIGATION BUTTONS */}

        <div className="testimonial-controls">

          <button
            type="button"
            className="testimonial-control"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <FaArrowLeft />
          </button>

          <button
            type="button"
            className="testimonial-control"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <FaArrowRight />
          </button>

        </div>

      </div>

    </section>
  )
}

export default Testimonials
