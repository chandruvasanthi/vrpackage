import './Process.css'
import processData from '../data/processData'
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

function Process() {
  const firstSetRef = useRef(null)
  const isDragging = useRef(false)
  const isHovered = useRef(false)

  const [setWidth, setSetWidth] = useState(0)
  const x = useMotionValue(0)

  // Measure the width of one complete set of process cards.
  const measureTrack = useCallback(() => {
    if (firstSetRef.current) {
      setSetWidth(firstSetRef.current.getBoundingClientRect().width)
    }
  }, [])

  useEffect(() => {
    measureTrack()

    window.addEventListener('resize', measureTrack)

    let resizeObserver

    if (typeof ResizeObserver !== 'undefined' && firstSetRef.current) {
      resizeObserver = new ResizeObserver(measureTrack)
      resizeObserver.observe(firstSetRef.current)
    }

    return () => {
      window.removeEventListener('resize', measureTrack)
      resizeObserver?.disconnect()
    }
  }, [measureTrack])

  // Smooth automatic scrolling; pause on hover and while dragging.
  useAnimationFrame((_, delta) => {
    if (!setWidth || isHovered.current || isDragging.current) {
      return
    }

    const speed = 32 // Pixels per second; lower = slower.

    let nextX = x.get() - (speed * delta) / 1000

    // Loop seamlessly across the duplicated card sets.
    if (nextX <= -setWidth) {
      nextX += setWidth
    }

    x.set(nextX)
  })

  const handleDragStart = () => {
    isDragging.current = true
  }

  const handleDragEnd = () => {
    isDragging.current = false

    if (!setWidth) return

    // Keep the track position within the repeating loop.
    let currentX = x.get()

    while (currentX <= -setWidth) {
      currentX += setWidth
    }

    while (currentX > 0) {
      currentX -= setWidth
    }

    x.set(currentX)
  }

  const renderCards = (isDuplicate = false) =>
    processData.map((item) => (
      <div
        className="process-card"
        key={`${isDuplicate ? 'duplicate-' : ''}${item.id}`}
      >
        <div className="card-number">
          {String(item.id).padStart(2, '0')}
        </div>

        <div className="card-top-line">
          <span className="card-step">STEP</span>
          <span className="card-line"></span>
        </div>

        <div className="card-icon">{item.icon}</div>

        <h3>{item.title}</h3>
        <p>{item.description}</p>

        <div className="card-glow"></div>
        <div className="card-bottom-accent"></div>
      </div>
    ))

  return (
    <section className="process-section" id="process">
      <div className="process-heading">
        <h2>Our Process</h2>
      </div>

      <div
        className="horizontal-scroll"
        onMouseEnter={() => {
          isHovered.current = true
        }}
        onMouseLeave={() => {
          isHovered.current = false
        }}
      >
        <motion.div
          className="process-track"
          style={{ x }}
          drag="x"
          dragConstraints={{
            left: setWidth ? -setWidth * 2 : -1000,
            right: setWidth ? 0 : 1000,
          }}
          dragElastic={0.03}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {/* ORIGINAL PROCESS CARDS */}
          <div className="process-card-set" ref={firstSetRef}>
            {renderCards()}
          </div>

          {/* DUPLICATE SET FOR CONTINUOUS LOOPING */}
          <div className="process-card-set" aria-hidden="true">
            {renderCards(true)}
          </div>
        </motion.div>
      </div>

      <p className="process-hint">
        Hover to pause · Drag or swipe to explore
      </p>
    </section>
  )
}

export default Process

