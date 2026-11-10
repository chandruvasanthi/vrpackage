// // import './Process.css'
// // import processData from '../data/processData'
// // import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
// // import { useCallback, useEffect, useRef, useState } from 'react'

// // function Process() {
// //   const firstSetRef = useRef(null)
// //   const isDragging = useRef(false)
// //   const isHovered = useRef(false)

// //   const [setWidth, setSetWidth] = useState(0)
// //   const x = useMotionValue(0)

// //   // Measure the width of one complete set of process cards.
// //   const measureTrack = useCallback(() => {
// //     if (firstSetRef.current) {
// //       setSetWidth(firstSetRef.current.getBoundingClientRect().width)
// //     }
// //   }, [])

// //   useEffect(() => {
// //     measureTrack()

// //     window.addEventListener('resize', measureTrack)

// //     let resizeObserver

// //     if (typeof ResizeObserver !== 'undefined' && firstSetRef.current) {
// //       resizeObserver = new ResizeObserver(measureTrack)
// //       resizeObserver.observe(firstSetRef.current)
// //     }

// //     return () => {
// //       window.removeEventListener('resize', measureTrack)
// //       resizeObserver?.disconnect()
// //     }
// //   }, [measureTrack])

// //   // Smooth automatic scrolling; pause on hover and while dragging.
// //   useAnimationFrame((_, delta) => {
// //     if (!setWidth || isHovered.current || isDragging.current) {
// //       return
// //     }

// //     const speed = 32 // Pixels per second; lower = slower.

// //     let nextX = x.get() - (speed * delta) / 1000

// //     // Loop seamlessly across the duplicated card sets.
// //     if (nextX <= -setWidth) {
// //       nextX += setWidth
// //     }

// //     x.set(nextX)
// //   })

// //   const handleDragStart = () => {
// //     isDragging.current = true
// //   }

// //   const handleDragEnd = () => {
// //     isDragging.current = false

// //     if (!setWidth) return

// //     // Keep the track position within the repeating loop.
// //     let currentX = x.get()

// //     while (currentX <= -setWidth) {
// //       currentX += setWidth
// //     }

// //     while (currentX > 0) {
// //       currentX -= setWidth
// //     }

// //     x.set(currentX)
// //   }

// //   const renderCards = (isDuplicate = false) =>
// //     processData.map((item) => (
// //       <div
// //         className="process-card"
// //         key={`${isDuplicate ? 'duplicate-' : ''}${item.id}`}
// //       >
// //         <div className="card-number">
// //           {String(item.id).padStart(2, '0')}
// //         </div>

// //         <div className="card-top-line">
// //           <span className="card-step">STEP</span>
// //           <span className="card-line"></span>
// //         </div>

// //         <div className="card-icon">{item.icon}</div>

// //         <h3>{item.title}</h3>
// //         <p>{item.description}</p>

// //         <div className="card-glow"></div>
// //         <div className="card-bottom-accent"></div>
// //       </div>
// //     ))

// //   return (
// //     <section className="process-section" id="process">
// //       <div className="process-heading">
// //         <h2>Our Process</h2>
// //       </div>

// //       <div
// //         className="horizontal-scroll"
// //         onMouseEnter={() => {
// //           isHovered.current = true
// //         }}
// //         onMouseLeave={() => {
// //           isHovered.current = false
// //         }}
// //       >
// //         <motion.div
// //           className="process-track"
// //           style={{ x }}
// //           drag="x"
// //           dragConstraints={{
// //             left: setWidth ? -setWidth * 2 : -1000,
// //             right: setWidth ? 0 : 1000,
// //           }}
// //           dragElastic={0.03}
// //           dragMomentum={false}
// //           onDragStart={handleDragStart}
// //           onDragEnd={handleDragEnd}
// //         >
// //           {/* ORIGINAL PROCESS CARDS */}
// //           <div className="process-card-set" ref={firstSetRef}>
// //             {renderCards()}
// //           </div>

// //           {/* DUPLICATE SET FOR CONTINUOUS LOOPING */}
// //           <div className="process-card-set" aria-hidden="true">
// //             {renderCards(true)}
// //           </div>
// //         </motion.div>
// //       </div>

// //       <p className="process-hint">
// //         Hover to pause · Drag or swipe to explore
// //       </p>
// //     </section>
// //   )
// // }

// // export default Process




// import './Process.css'
// import processData from "../data/processData";
// import { useRef } from 'react'
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// function Process() {
//   const trackRef = useRef(null)

//   const scrollTrack = (direction) => {
//     if (!trackRef.current) return

//     trackRef.current.scrollBy({
//       left: direction * 300,
//       behavior: 'smooth'
//     })
//   }

//   return (
//     <section className="journey-section" id="process">

//       {/* BACKGROUND */}
//       <div className="journey-bg-orb journey-orb-one"></div>
//       <div className="journey-bg-orb journey-orb-two"></div>
//       <div className="journey-grid"></div>

//       <div className="journey-container">

//         {/* HEADER */}
//         <div className="journey-header">

//           <div className="journey-heading-left">

//             <div className="journey-eyebrow">
//               <span className="eyebrow-line"></span>
//               <span>HOW WE WORK</span>
//               <span className="eyebrow-dot"></span>
//             </div>

//             <h2>
//               From vision
//               <br />
//               to <span>reality.</span>
//             </h2>

//           </div>
//                 <div className="journey-animation">
//   <DotLottieReact
//     src="https://lottie.host/e18b9041-9a1c-48b0-9bea-3f2bc7e04ff6/LMxUUEeBiq.lottie"
//     loop
//     autoplay
//   />
// </div>
//           <div className="journey-heading-right">

//             <p>
//               Every great result begins with a clear direction.
//               Our structured approach transforms ambitious ideas
//               into meaningful digital experiences.
//             </p>

//             <div className="journey-header-note">
//               <span className="note-indicator"></span>
//               A thoughtful process. Exceptional results.
//             </div>

//           </div>

//         </div>

//         {/* TOOLBAR */}
//         <div className="journey-toolbar">

//           <div className="journey-counter">
//             <span className="counter-label">OUR WORKFLOW</span>
//             <span className="counter-divider"></span>
//             <span className="counter-total">
//               {String(processData.length).padStart(2, '0')} STAGES
//             </span>
//           </div>

//           <div className="journey-navigation">

//             <button
//               type="button"
//               className="journey-nav-btn"
//               onClick={() => scrollTrack(-1)}
//               aria-label="Previous process stages"
//             >
//               ←
//             </button>

//             <button
//               type="button"
//               className="journey-nav-btn"
//               onClick={() => scrollTrack(1)}
//               aria-label="Next process stages"
//             >
//               →
//             </button>

//           </div>

//         </div>

//         {/* TIMELINE */}
//         <div className="journey-viewport" ref={trackRef}>

//           <div className="journey-track">

//             {processData.map((item, index) => (

//               <article
//                 className="journey-card"
//                 key={item.id}
//               >

//                 {/* CONNECTOR */}
//                 <div className="journey-node-area">

//                   <div className="journey-node">
//                     <span></span>
//                   </div>

//                   <span className="journey-node-line"></span>

//                 </div>

//                 {/* CARD */}
//                 <div className="journey-card-inner">

//                   <div className="journey-card-top">

//                     <span className="journey-step-label">
//                       PHASE {String(index + 1).padStart(2, '0')}
//                     </span>

//                     <span className="journey-step-number">
//                       {String(index + 1).padStart(2, '0')}
//                     </span>

//                   </div>

//                   {/* ICON */}
//                   <div className="journey-icon-wrap">
//                     <div className="journey-icon">
//                       {item.icon}
//                     </div>
//                   </div>

//                   {/* CONTENT */}
//                   <div className="journey-card-content">

//                     <h3>{item.title}</h3>

//                     <p>{item.description}</p>

//                   </div>

//                   {/* FOOTER */}
//                   <div className="journey-card-footer">

//                     <span>
//                       STEP {String(index + 1).padStart(2, '0')}
//                     </span>

//                     <span className="journey-card-arrow">
//                       ↗
//                     </span>

//                   </div>

//                   <div className="journey-card-glow"></div>

//                 </div>

//               </article>

//             ))}

//           </div>

//         </div>

//         {/* BOTTOM */}
//         <div className="journey-bottom">

//           <div className="journey-bottom-left">
//             <span className="journey-bottom-dot"></span>
//             <p>ONE CONNECTED JOURNEY</p>
//           </div>

//           <p className="journey-bottom-right">
//             Swipe or use the arrows to explore our process
//           </p>

//         </div>

//       </div>

//     </section>
//   )
// }

// export default Process




import './Process.css'
import processData from "../data/processData";
import { useRef } from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
              ←
            </button>

            <button
              type="button"
              className="journey-nav-btn"
              onClick={() => scrollTrack(1)}
              aria-label="Next process stages"
            >
              →
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
                      PHASE {String(index + 1).padStart(2, '0')}
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
                      STEP {String(index + 1).padStart(2, '0')}
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
