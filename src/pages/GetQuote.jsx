import './GetQuote.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import WhatsApp from '../components/WhatsApp';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import CorrugatedBox3D from '../components/CorrugatedBox3D';

function GetQuote() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
       
      <main className="getquote" id="quote">
        <div className="quote-background-glow quote-glow-one"></div>
        <div className="quote-background-glow quote-glow-two"></div>

        <div className="quote-container">
          <div className="quote-content">
            <div className="quote-eyebrow">
              <span className="quote-eyebrow-line"></span>
              VR PACKAGE
              <span className="quote-eyebrow-line"></span>
            </div>

            <h1>
              Get  Custom  Packaging
              <span> Quotes</span>
            </h1>

            <p className="quote-intro">
              Looking for premium corrugated box manufacturing
              solutions for your business?
            </p>

            <p className="quote-subtext">
              We provide durable and high-quality packaging
              solutions for ecommerce, retail, industrial,
              export and custom business requirements.
            </p>

            <div className="quote-features">
              <div className="quote-card">
                {/* <div className="quote-card-number">01</div> */}

                <div className="quote-card-icon">
                  <FaCheckCircle />
                </div>

                <h3>Custom Sizes</h3>

                <span>
                  Tailor-made boxes for all industries
                </span>

                <div className="quote-card-line"></div>
              </div>

              <div className="quote-card">
                {/* <div className="quote-card-number">02</div> */}

                <div className="quote-card-icon">
                  <FaCheckCircle />
                </div>

                <h3>Bulk Orders</h3>

                <span>
                  Affordable pricing for large quantity orders
                </span>

                <div className="quote-card-line"></div>
              </div>

              <div className="quote-card">
                {/* <div className="quote-card-number">03</div> */}

                <div className="quote-card-icon">
                  <FaCheckCircle />
                </div>

                <h3>Fast Delivery</h3>

                <span>
                  Quick manufacturing &amp; safe delivery support
                </span>

                <div className="quote-card-line"></div>
              </div>
            </div>

            <div className="quote-action">
              <a
                href="https://wa.me/916381506536"
                target="_blank"
                rel="noopener noreferrer"
                className="quote-btn"
              >
                <span>Request Free Quote</span>
                <FaArrowRight className="quote-btn-icon" />
              </a>

              <p className="quote-action-note">
                Let's discuss your packaging requirements
              </p>
            </div>
          </div>

          <div className="quote-bottom-label">
            <span></span>
            CUSTOM PACKAGING SOLUTIONS
            <span></span>
          </div>
        </div>
      </main>
{/* <div className="gq-visual">
  <CorrugatedBox3D />
</div> */}
      <Footer />
      <WhatsApp />
    </>
  );
}

export default GetQuote;
