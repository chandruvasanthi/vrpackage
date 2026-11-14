import './Process.css'
import processData from "../data/processData";
import { useRef } from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaArrowLeft, FaArrowRight,} from 'react-icons/fa'

function Process() {
  const trackRef = useRef(null)

  const scrollTrack = (direction) => {
    if (!trackRef.current) return

    trackRef.current.scrollBy({
      left: direction * 300,
      behavior: 'smooth'
    })
  }

  return (
    <section className="journey-section" id="process">

      {/* BACKGROUND */}
      <div className="journey-bg-orb journey-orb-one"></div>
      <div className="journey-bg-orb journey-orb-two"></div>
      <div className="journey-grid"></div>

      <div className="journey-container">

        {/* HEADER */}
        <div className="journey-header">

          <div className="journey-heading-left">

            <div className="journey-eyebrow">
              <span className="eyebrow-line"></span>
              <span>HOW WE WORK</span>
                            <span className="eyebrow-line"></span>
              {/* <span className="eyebrow-dot"></span> */}
            </div>

            <h2>
              From vision
              <br />
              to <span>reality.</span>
            </h2>

          </div>

          {/* CENTER ANIMATION */}
          <div className="journey-animation">
            <DotLottieReact
             src="https://lottie.host/283b77fe-a14b-441c-94a9-507d27b0935d/SDEhQ3pnhH.lottie"
              loop
              autoplay
              speed={0.5}

            />
          </div>

          <div className="journey-heading-right">

            <p>
              From raw materials to finished boxes.
              We follow a precise manufacturing process to deliver quality packaging solutions built to protect your products.
            </p>

            <div className="journey-header-note">
              <span className="note-indicator"></span>
              A thoughtful process. Exceptional results.
            </div>

          </div>

        </div>

        {/* TOOLBAR */}
        <div className="journey-toolbar">

          <div className="journey-counter">
            <span className="counter-label">OUR WORKFLOW</span>
            <span className="counter-divider"></span>
            <span className="counter-total">
              {String(processData.length).padStart(2, '0')} STAGES
            </span>
          </div>

          <div className="journey-navigation">

            <button
              type="button"
              className="journey-nav-btn"
              onClick={() => scrollTrack(-1)}
              aria-label="Previous process stages"
            >
              <FaArrowLeft />
            </button>

            <button
              type="button"
              className="journey-nav-btn"
              onClick={() => scrollTrack(1)}
              aria-label="Next process stages"
            >
              <FaArrowRight />
            </button>

          </div>

        </div>

        {/* TIMELINE */}
        <div className="journey-viewport" ref={trackRef}>

          <div className="journey-track">

            {processData.map((item, index) => (

              <article
                className="journey-card"
                key={item.id}
              >

                {/* CONNECTOR */}
                <div className="journey-node-area">

                  <div className="journey-node">
                    <span></span>
                  </div>

                  <span className="journey-node-line"></span>

                </div>

                {/* CARD */}
                <div className="journey-card-inner">

                  <div className="journey-card-top">

                    <span className="journey-step-label">
                      {/* PHASE {String(index + 1).padStart(2, '0')} */}
                      PHASE
                    </span>

                    <span className="journey-step-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                  </div>

                  {/* ICON */}
                  <div className="journey-icon-wrap">
                    <div className="journey-icon">
                      {item.icon}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="journey-card-content">

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                  </div>

                  {/* FOOTER */}
                  <div className="journey-card-footer">

                  <span>
                    {[
                     "Clear Vision",
                     "Smart Design",
                     "Expert Craft",
                     "Quality Assured",
                     "Safe Delivery"
                    ][index]}
                  </span>
                    <span className="journey-card-arrow">
                      ↗
                    </span>

                  </div>

                  <div className="journey-card-glow"></div>

                </div>

              </article>

            ))}

          </div>

        </div>

        {/* BOTTOM */}
        <div className="journey-bottom">

          <div className="journey-bottom-left">
            <span className="journey-bottom-dot"></span>
            <p>ONE CONNECTED JOURNEY</p>
          </div>

          <p className="journey-bottom-right">
            Swipe or use the arrows to explore our process
          </p>

        </div>

      </div>

    </section>
  )
}

export default Process
