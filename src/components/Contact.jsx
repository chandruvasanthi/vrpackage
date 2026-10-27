import './Contact.css'
import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function Contact() {
  const [result, setResult] = React.useState('')
  
  const [form, setForm] = React.useState({
    product: '',
    quantity: ''
  })

  const updateForm = (event) => {
    const { name, value } = event.target

    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending Inquiry...')

    const formData = new FormData(event.target)

    formData.append(
      'access_key',
      '0a05ac0f-e2a3-4df0-942f-25274dba50c8'
    )

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData
        }
      )

      const data = await response.json()

      if (data.success) {
        setResult('Inquiry Sent Successfully')
        event.target.reset()
        setForm({
          product: '',
          quantity: ''
        })
      } else {
        console.log('Error', data)
        setResult(data.message)
      }
    } catch (error) {
      console.error('Submission error:', error)
      setResult('Unable to send inquiry. Please try again.')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-top">
          <span className="contact-eyebrow">LET'S CONNECT</span>
          <h2 className="heading" id="oph2">Contact <span>Us</span></h2>
          
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <p className="contact-subtitle">
            Get in touch with us for premium
            corrugated box manufacturing and
            custom packaging solutions.
          </p>
            <div className="info-card">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>
              <div className="info-content">
                <h3>Phone Number</h3>
                <a href="tel:6381506536">
                  <p>+91 6381506536</p>
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Email Address</h3>
                <a href="mailto:chandrutas007@gmail.com">
                  <p>vrpackageofficial@gmail.com</p>
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>Factory Location</h3>
                <p>Salem, Tamil Nadu</p>
              </div>
            </div>

            <p className="contact-text">
              Contact Leading Corrugated Box Manufacturers
              for premium custom packaging and industrial
              packaging solutions tailored to your business needs.
            </p>
             <h2 className='contact-h2'>
                Tell us what you need.
                <span className="vq-gradient-text">
                  We&apos;ll handle the rest.
                </span>
              </h2>
          </div>

          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-heading">
              <h3>Send an Inquiry</h3>
              {/* <p>Tell us what your packaging needs are.</p> */}
            </div>

            <div className="input-group">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              required
            />

            <input
              type="text"
              placeholder="Company Name"
              name="company"
            />

            {/* Box Type and Order Quantity */}
            <div className="vq-form-two">
              <div className="vq-input-group">
                
                <select
                  id="vq-product"
                  name="product"
                  value={form.product}
                  onChange={updateForm}
                  required
                >
                  <option value="">Select box type</option>
                  <option value="3-Ply Corrugated Box">
                    3-Ply Corrugated Box
                  </option>
                  <option value="5-Ply Corrugated Box">
                    5-Ply Corrugated Box
                  </option>
                  <option value="Printed Corrugated Box">
                    Printed Corrugated Box
                  </option>
                  <option value="Die-Cut Box">
                    Die-Cut Box
                  </option>
                  <option value="Heavy-Duty Box">
                    Heavy-Duty Box
                  </option>
                  <option value="Custom Packaging">
                    Other / Custom Packaging
                  </option>
                </select>
              </div>

              <div className="vq-input-group">
               
                <input
                  id="vq-quantity"
                  type="text"
                  name="quantity"
                  placeholder="Order quantity"
                  value={form.quantity}
                  onChange={updateForm}
                />
              </div>
            </div>

            <textarea
              placeholder={'Additional requirements :\nBox dimensions, GSM, printing, delivery location...'}
              name="message"
              rows="6"
              required
            />

            <button className="contact-btn" type="submit">
              <span>
                {result === 'Sending Inquiry...'
                  ? result
                  : 'Send Inquiry'}
              </span>

              {result !== 'Sending Inquiry...' && (
                <span className="contact-btn-arrow">↗</span>
              )}
            </button>

            {result && (
              <p
                className={`form-result ${
                  result === 'Inquiry Sent Successfully'
                    ? 'form-result-success'
                    : result === 'Sending Inquiry...'
                      ? 'form-result-loading'
                      : 'form-result-error'
                }`}
                role="status"
                aria-live="polite"
              >
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact