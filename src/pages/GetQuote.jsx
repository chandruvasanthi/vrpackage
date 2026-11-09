// import './GetQuote.css';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { useEffect } from 'react';
// import WhatsApp from '../components/WhatsApp';
// import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';


// function GetQuote() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <Navbar />
       
//       <main className="getquote" id="quote">
//         <div className="quote-background-glow quote-glow-one"></div>
//         <div className="quote-background-glow quote-glow-two"></div>

//         <div className="quote-container">
//           <div className="quote-content">
//             <div className="quote-eyebrow">
//               <span className="quote-eyebrow-line"></span>
//               VR PACKAGE
//               <span className="quote-eyebrow-line"></span>
//             </div>

//             <h1>
//               Get  Custom  Packaging
//               <span> Quotes</span>
//             </h1>

//             <p className="quote-intro">
//               Looking for premium corrugated box manufacturing
//               solutions for your business?
//             </p>

//             <p className="quote-subtext">
//               We provide durable and high-quality packaging
//               solutions for ecommerce, retail, industrial,
//               export and custom business requirements.
//             </p>

//             <div className="quote-features">
//               <div className="quote-card">
              

//                 <div className="quote-card-icon">
//                   <FaCheckCircle />
//                 </div>

//                 <h3>Custom Sizes</h3>

//                 <span>
//                   Tailor-made boxes for all industries
//                 </span>

//                 <div className="quote-card-line"></div>
//               </div>

//               <div className="quote-card">
               

//                 <div className="quote-card-icon">
//                   <FaCheckCircle />
//                 </div>

//                 <h3>Bulk Orders</h3>

//                 <span>
//                   Affordable pricing for large quantity orders
//                 </span>

//                 <div className="quote-card-line"></div>
//               </div>

//               <div className="quote-card">
               

//                 <div className="quote-card-icon">
//                   <FaCheckCircle />
//                 </div>

//                 <h3>Fast Delivery</h3>

//                 <span>
//                   Quick manufacturing &amp; safe delivery support
//                 </span>

//                 <div className="quote-card-line"></div>
//               </div>
//             </div>

//             <div className="quote-action">
//               <a
//                 href="https://wa.me/916381506536"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="quote-btn"
//               >
//                 <span>Request Free Quote</span>
//                 <FaArrowRight className="quote-btn-icon" />
//               </a>

//               <p className="quote-action-note">
//                 Let's discuss your packaging requirements
//               </p>
//             </div>
//           </div>

//           <div className="quote-bottom-label">
//             <span></span>
//             CUSTOM PACKAGING SOLUTIONS
//             <span></span>
//           </div>
//         </div>
//       </main>

//       <Footer />
//       <WhatsApp />
//     </>
//   );
// }

// export default GetQuote;




import './GetQuote.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsApp from '../components/WhatsApp'
import { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

import {
  FaArrowRight,
  FaCheckCircle,
  FaRulerCombined,
  FaBoxes,
  FaCube,
  FaWhatsapp,
  FaShieldAlt,
  FaTruck,
  FaIndustry,
} from 'react-icons/fa'

const WHATSAPP_NUMBER = '916381506536'
const industries = [
    "E-Commerce",
    "Food & Beverage",
    "Electrical & Electronics",
    "Pharmaceuticals",
    "Retail Packaging",
    "Logistics & Shipping",
    "FMCG Products",
    "Textile & Garments",
    "Automotive Industry",
    "Industrial manufacturing",
  ];

  const row1 = industries.slice(0, 5);
  const row2 = industries.slice(5);

function GetQuote() {
  const [boxType, setBoxType] = useState('Corrugated Box')
  const [ply, setPly] = useState('3-Ply')

  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')

  const [unit, setUnit] = useState('cm')
  const [quantity, setQuantity] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Convert between cm and inches
  const changeUnit = (newUnit) => {
    if (newUnit === unit) return

    const convert = (value) => {
      if (value === '') return ''

      const number = Number(value)

      const converted =
        newUnit === 'inches'
          ? number / 2.54
          : number * 2.54

      return Number(converted.toFixed(2)).toString()
    }

    setLength(convert(length))
    setWidth(convert(width))
    setHeight(convert(height))
    setUnit(newUnit)
  }

  const sendEnquiry = () => {
    const l = Number(length)
    const w = Number(width)
    const h = Number(height)
    const qty = Number(quantity)

    if (
      length === '' ||
      width === '' ||
      height === '' ||
      !Number.isFinite(l) || l <= 0 ||
      !Number.isFinite(w) || w <= 0 ||
      !Number.isFinite(h) || h <= 0
    ) {
      setError('Please enter valid Length, Width and Height.')
      return
    }

    if (
      quantity === '' ||
      !Number.isInteger(qty) ||
      qty <= 0
    ) {
      setError('Please enter a valid box quantity.')
      return
    }

    setError('')

    const message = `
Hello VR Package,

I would like to request a quotation for my box requirements.

BOX SPECIFICATIONS
Box Type: ${boxType}
Ply Strength: ${ply}

BOX DIMENSIONS
Length: ${length} ${unit}
Width: ${width} ${unit}
Height: ${height} ${unit}

QUANTITY
Required Boxes: ${quantity}

DESIGN / REFERENCE
I will attach my design or reference file directly in this WhatsApp chat.

Please share the quotation and further details.

Thank you.
    `.trim()

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    window.open(whatsappURL, '_blank', 'noopener,noreferrer')
  }

  const dimensionsEntered =
    length !== '' && width !== '' && height !== ''

  return (
    <>
      <Navbar />

      <main className="getquote-page">

        {/* HERO */}

        <section className="quote-hero">
          <div className="quote-hero-grid"></div>
          <div className="quote-hero-glow"></div>

          <div className="quote-hero-content">
            <span className="quote-eyebrow">
              <FaCube />
              CUSTOM PACKAGING SOLUTIONS
            </span>

            <h1>
              Let's Build Your <span>Perfect Box.</span>
            </h1>

            <p>
              Tell us what you need. We'll help you create strong,
              reliable and custom-made corrugated packaging.
            </p>

            <div className="quote-benefits">
              <div>
                <FaCheckCircle />
                <span>Custom Sizes</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Quality Materials</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Bulk Manufacturing</span>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE BUILDER */}

        <section className="quote-builder-section">

          <div className="quote-builder-heading">
            {/* <span>START YOUR ENQUIRY</span> */}
            <h2>Configure Your<span> Box</span></h2>
            <p>
              Enter your box specifications and send your requirements
              directly to our team.
            </p>
          </div>

          <div className="quote-unified-card">

            {/* LEFT FORM */}

            <div className="quote-unified-main">

              <div className="quote-field-group">
                <div className="quote-field-heading">
                  <span className="quote-step-icon">
                    <FaBoxes />
                  </span>

                  <div>
                    <h3>Box Specifications</h3>
                    <p>Select the type and strength of your packaging.</p>
                  </div>
                </div>

                <label className="quote-label" htmlFor="box-type">
                  Box Type
                </label>

                <select
                  id="box-type"
                  className="quote-input"
                  value={boxType}
                  onChange={(e) => setBoxType(e.target.value)}
                >
                  <option>Corrugated Box</option>
                  <option>Printed Box</option>
                  <option>Die-Cut Box</option>
                  <option>Heavy-Duty Box</option>
                  <option>Custom Box</option>
                </select>

                <label className="quote-label ply-label">
                  Ply Strength
                </label>

                <div className="ply-options">
                  {['3-Ply', '5-Ply'].map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={`ply-option ${ply === item ? 'active' : ''}`}
                      onClick={() => setPly(item)}
                    >
                      <span className="ply-option-title">{item}</span>

                      <span>
                        {item === '3-Ply'
                          ? 'Light to medium packaging'
                          : 'Extra protection & strength'}
                      </span>

                      {ply === item && <FaCheckCircle />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="quote-divider"></div>

              {/* DIMENSIONS */}

              <div className="quote-field-group">
                <div className="quote-field-heading">
                  <span className="quote-step-icon">
                    <FaRulerCombined />
                  </span>

                  <div>
                    <h3>Box Dimensions</h3>
                    <p>Enter your required internal box measurements.</p>
                  </div>
                </div>

                <div className="dimension-top-row">
                  <label className="quote-label">
                    Measurement Unit
                  </label>

                  <div className="unit-switch">
                    {['cm', 'inches'].map((item) => (
                      <button
                        type="button"
                        key={item}
                        className={unit === item ? 'active' : ''}
                        onClick={() => changeUnit(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="dimension-inputs">
                  <div>
                    <label htmlFor="box-length">Length</label>
                    <div className="dimension-input-wrap">
                      <input
                        id="box-length"
                        type="number"
                        min="0"
                        step="any"
                        placeholder={unit === 'cm' ? '30' : '11.81'}
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                      />
                      <span>{unit}</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="box-width">Width</label>
                    <div className="dimension-input-wrap">
                      <input
                        id="box-width"
                        type="number"
                        min="0"
                        step="any"
                        placeholder={unit === 'cm' ? '20' : '7.87'}
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                      />
                      <span>{unit}</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="box-height">Height</label>
                    <div className="dimension-input-wrap">
                      <input
                        id="box-height"
                        type="number"
                        min="0"
                        step="any"
                        placeholder={unit === 'cm' ? '15' : '5.91'}
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                      />
                      <span>{unit}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="quote-divider"></div>

              {/* QUANTITY */}

              <div className="quote-field-group">
                <div className="quote-field-heading">
                  <span className="quote-step-icon">
                    <FaBoxes />
                  </span>

                  <div>
                    <h3>Required Quantity</h3>
                    <p>Tell us how many boxes you require.</p>
                  </div>
                </div>

                <label className="quote-label" htmlFor="box-quantity">
                  Number of Boxes
                </label>

                <input
                  id="box-quantity"
                  className="quote-input"
                  type="number"
                  min="1"
                  step="1"
                  placeholder="Example: 1000"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              {error && (
                <p className="quote-error" role="alert">
                  {error}
                </p>
              )}

              {/* WHATSAPP */}

              <button
                type="button"
                className="quote-submit-button"
                onClick={sendEnquiry}
              >
                <FaWhatsapp />
                <span>Send Enquiry on WhatsApp</span>
                <FaArrowRight className="submit-arrow" />
              </button>

              <div className="quote-attachment-note">
                <FaCheckCircle />
                <p>
                  Have a design? Attach your PDF or image directly
                  in WhatsApp after opening the chat.
                </p>
              </div>
              
              <div className="preview-delivery-note">
                <FaTruck />
                <span>Manufacturing with care. Delivery with commitment.</span>
              </div>
                <div className="preview-manufacturing-note">
                <div className="manufacturing-note-icon">
                  <FaIndustry />
                </div>

                <div>
                  <strong>Made for your requirements.</strong>
                  <p>
                    Custom sizes, dependable quality and packaging
                    solutions for your business.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT PREVIEW */}

            <aside className="quote-preview-panel">

              <div className="preview-heading">
                <span className="preview-live-label">
                  <i></i> BOX VISUALIZER
                </span>

                <h3>Made Around Your Needs.</h3>

                <p>
                  A glimpse of your custom corrugated packaging.
                </p>
              </div>

             <div className="box-illustration-stage">
  <div className="box-dimension-diagram">
    <svg viewBox="0 0 440 320" role="img" aria-label="Box dimensions showing length, width and height">
      <defs>
        <marker
          id="dimensionArrow"
          markerWidth="7"
          markerHeight="7"
          refX="3.5"
          refY="3.5"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L7 3.5 L0 7 Z" fill="#F25D29" />
        </marker>
      </defs>

      <polygon points="105,95 265,95 345,52 185,52" fill="#D97943" />
      <polygon points="105,95 265,95 265,210 105,210" fill="#A94F29" />
      <polygon points="265,95 345,52 345,167 265,210" fill="#71371F" />

      <path d="M105 95 L185 52 L345 52 L265 95 Z" fill="none" stroke="#F5B18F" strokeWidth="1.5" />
      <path d="M105 95 V210 H265 V95" fill="none" stroke="#E9A17D" strokeWidth="1.5" />
      <path d="M265 95 L345 52 V167 L265 210" fill="none" stroke="#D88B65" strokeWidth="1.5" />

      <g stroke="#F25D29" strokeWidth="2" fill="none">
        <path d="M105 250 H265" markerStart="url(#dimensionArrow)" markerEnd="url(#dimensionArrow)" />
        <path d="M285 229 L360 186" markerStart="url(#dimensionArrow)" markerEnd="url(#dimensionArrow)" />
        <path d="M72 95 V210" markerStart="url(#dimensionArrow)" markerEnd="url(#dimensionArrow)" />
      </g>

      <g fill="#F5F5F5" fontSize="14" fontWeight="700" textAnchor="middle">
        <text x="185" y="278">LENGTH (L)</text>
        <text x="375" y="225">WIDTH (W)</text>
        <text x="35" y="157" transform="rotate(-90 35 157)">HEIGHT (H)</text>
      </g>
    </svg>
  </div>

  <div className="box-stage-caption">
    <span></span>
    UNDERSTAND YOUR BOX MEASUREMENTS
    <span></span>
  </div>
</div>

              {/* LIVE DIMENSIONS */}

              <div className="preview-dimensions-card">
                <div className="preview-card-title">
                  <FaRulerCombined />
                  <span>YOUR BOX DIMENSIONS</span>
                </div>

                <div className="preview-dimensions">
                  <div>
                    <span>LENGTH</span>
                    <strong>{length || '—'}</strong>
                    <small>{unit}</small>
                  </div>

                  <div>
                    <span>WIDTH</span>
                    <strong>{width || '—'}</strong>
                    <small>{unit}</small>
                  </div>

                  <div>
                    <span>HEIGHT</span>
                    <strong>{height || '—'}</strong>
                    <small>{unit}</small>
                  </div>
                </div>

                <div className="preview-dimension-status">
                  <i></i>
                  {dimensionsEntered
                    ? 'Dimensions entered'
                    : 'Enter dimensions to complete your specifications'}
                </div>
              </div>

              {/* PLY COMPARISON */}

              <div className="preview-ply-card">
                <div className="preview-card-title">
                  <FaShieldAlt />
                  <span>YOUR BOX STRENGTH</span>
                </div>

                <div className={`ply-visual-row ${ply === '3-Ply' ? 'selected' : ''}`}>
                  <div className="ply-mini-illustration three-ply">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div>
                    <strong>3-Ply</strong>
                    <small>Standard protection</small>
                  </div>

                  {ply === '3-Ply' && <FaCheckCircle />}
                </div>

                <div className={`ply-visual-row ${ply === '5-Ply' ? 'selected' : ''}`}>
                  <div className="ply-mini-illustration five-ply">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div>
                    <strong>5-Ply</strong>
                    <small>Enhanced strength</small>
                  </div>

                  {ply === '5-Ply' && <FaCheckCircle />}
                </div>
              </div>

              {/* SUMMARY */}

              <div className="preview-bottom-info">
                <div className="preview-summary-item">
                  <span className="preview-summary-icon">
                    <FaCube />
                  </span>

                  <div>
                    <small>BOX TYPE</small>
                    <strong>{boxType}</strong>
                  </div>
                </div>

                <div className="preview-summary-item">
                  <span className="preview-summary-icon">
                    <FaBoxes />
                  </span>

                  <div>
                    <small>REQUIRED QUANTITY</small>
                    <strong>{quantity ? `${quantity} Boxes` : 'Not entered'}</strong>
                  </div>
                </div>
              </div>

            

            </aside>
          </div>
         
              <div className="gq-industries-section">
               <div className="pd-industries-header">
                <h2>
                  Industries We <span>Serve</span>
                </h2>
               </div>

  <div className="pd-industries-slider-container">
    <div className="pd-industries-slider pd-row-right">
      {[...row1, ...row1].map((item, index) => (
        <span key={`r1-${index}`}>{item}</span>
      ))}
    </div>
  </div>

  <div className="pd-industries-slider-container">
    <div className="pd-industries-slider pd-row-left">
      {[...row2, ...row2].map((item, index) => (
        <span key={`r2-${index}`}>{item}</span>
      ))}
    </div>
  </div>
</div>
        </section>
      </main>

      <Footer />
      <WhatsApp />
    </>
  )
}

export default GetQuote
