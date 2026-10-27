import './About.css';
import {
  FaLightbulb,
  FaShieldHalved,
  FaHandshake,
  FaArrowRight,
  FaCheck,
} from 'react-icons/fa6';

function About() {
  const values = [
    {
      icon: <FaLightbulb />,
      number: '01',
      title: 'New Venture',
      text: 'Fresh & Innovative Packaging Solutions',
    },
    {
      icon: <FaShieldHalved />,
      number: '02',
      title: 'Quality Focus',
      text: 'Premium Corrugated Box Manufacturing',
    },
    {
      icon: <FaHandshake />,
      number: '03',
      title: 'Customer First',
      text: 'Reliable Support & Timely Delivery',
    },
  ];

  return (
    <section className="vr-about" id="about">
      <div className="vr-about-glow" />

      <div className="container vr-about-container">
        {/* LEFT: IMAGE */}
        <div className="vr-about-visual" data-aos="fade-right">
          <div className="vr-about-image-wrap">
            <img
              // src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
                src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1974&auto=format&fit=crop'
              alt="Packaging, storage and logistics operations"
              loading="lazy"
            />

            <div className="vr-about-image-overlay" />

            <div className="vr-about-image-label">
              <span className="vr-about-label-dot" />
              <span>OUR STORY, OUR COMMITMENT</span>
            </div>
          </div>

          <div className="vr-about-image-caption">
            <span className="vr-about-caption-line" />
            <div>
              <span className="vr-about-caption-small">
                PACKAGING WITH PURPOSE
              </span>
              <h3>
                Built around
                <span> your business.</span>
              </h3>
            </div>
          </div>

          <div className="vr-about-image-index">
            <span>VR</span>
            <span className="vr-about-index-divider" />
            <span>ABOUT US </span>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div
          className="vr-about-content"
          data-aos="fade-left"
        >
          <div className="vr-about-eyebrow">
            <span />
            GET TO KNOW VR PACKAGE
          </div>

          <h2 className="vr-about-heading">
            About
            <span className="vr-about-gradient"> VR Package.</span>
          </h2>

          <p className="vr-about-intro">
            A new venture with a clear vision for
            <strong> better packaging solutions.</strong>
          </p>

          <p className="vr-about-description">
            VR Package is a newly established corrugated
            box manufacturing company focused on delivering
            durable, innovative and premium-quality packaging
            solutions for industries and businesses.
          </p>

          <p className="vr-about-description vr-about-description-second">
            We are committed to building trust through
            strong product quality, reliable service and
            modern packaging standards for every customer.
          </p>

          <div className="vr-about-divider" />

          <div className="vr-about-values-heading">
            <span>WHAT DEFINES US</span>
            <span className="vr-about-values-line" />
          </div>

          <div className="vr-about-values">
            {values.map((item) => (
              <article className="vr-about-value" key={item.number}>
                <div className="vr-about-value-icon">
                  {item.icon}
                </div>

                <div className="vr-about-value-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <span className="vr-about-value-number">
                  {item.number}
                </span>
              </article>
            ))}
          </div>

          <div className="vr-about-bottom">
            <div className="vr-about-promise">
              <FaCheck />
              <span>Committed to quality and customer trust</span>
            </div>

            {/* <a href="/get-quote" className="vr-about-cta">
              Explore Our Solutions
              <FaArrowRight />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
