import './Contact.css'
import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'

function Contact() {

  const [result, setResult] = React.useState('')

  const onSubmit = async (event) => {

    event.preventDefault()

    setResult('Sending Inquiry...')

    const formData = new FormData(event.target)

    formData.append(
      'access_key',
      '0a05ac0f-e2a3-4df0-942f-25274dba50c8'
    )

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

    } else {

      console.log('Error', data)

      setResult(data.message)

    }

  }

  return (

    <section className='contact' id='contact' >

      <div className='container'>

        <div className='contact-top'>
          <h2 className='heading' id='oph2'> Contact Us</h2>
          <p className='contact-subtitle'>
            Get in touch with us for premium
            corrugated box manufacturing and
            custom packaging solutions.
           </p>

        </div>

      
        <div className='contact-wrapper'>
          <div className='contact-info'>
            <div className='info-card'>

              <div className='info-icon'> <FaPhoneAlt /> </div>

              <div>
                <h3> Phone Number  </h3>
                <a href='tel:6381506536'> <p>  +91 6381506536 </p>  </a>
              </div>

            </div>

            <div className='info-card'>

              <div className='info-icon'> <FaEnvelope /> </div>

              <div>
                <h3> Email Address </h3>

                {/* <a href='mailto:vrpackageboxes@gmail.com'> */}
                <a href='mailto:chandrutas007@gmail.com'>
                  <p> vrpackageofficial@gmail.com </p>
                </a>
              </div>
            </div>

            <div className='info-card'>

              <div className='info-icon'> <FaMapMarkerAlt /> </div>

              <div>
                <h3> Factory Location </h3>
                <p> Salem, Tamil Nadu </p>

              </div>
                
            </div>

                <p className='contact-text'>
                       Contact Leading Corrugated Box Manufacturers
                       for premium custom packaging and industrial
                       packaging solutions tailored to your business needs.
                </p>
          </div>

          <form onSubmit={onSubmit} className='contact-form' >

            <div className='input-group'>
              <input type='text' placeholder='Your Name' name='name' required />
              <input type='email' placeholder='Your Email' name='email' required />

            </div>

            <input type='text' placeholder='Phone Number' name='phone' required />
            <input type='text' placeholder='Company Name' name='company' />
            <textarea
               placeholder='Tell us about your packaging requirement' name='message' rows='6' required >
            </textarea>

            <button className='contact-btn' type='submit' >
              Send Inquiry
            </button>

           { result && ( <p className='form-result'> {result} </p> )}

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact;