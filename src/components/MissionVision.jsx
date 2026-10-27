import "./MissionVision.css";
import { FaBullseye, FaEye, FaArrowRight } from "react-icons/fa";
import { FaCircleNodes } from "react-icons/fa6";

function MissionVision() {
  return (
    <section className="vr-mv">
      <div className="vr-mv-glow vr-mv-glow-left"></div>
      <div className="vr-mv-glow vr-mv-glow-right"></div>

      <div className="container vr-mv-container">

        <div className="vr-mv-header">
          <span className="vr-mv-eyebrow">
            <span className="vr-mv-eyebrow-line"></span>
            WHAT DRIVES US
            <span className="vr-mv-eyebrow-line"></span>
          </span>

          <h2 className="mv-heading">
            Our Mission <span>&</span> Vision
          </h2>

          <p className="mv-subtitle">
            Building strong packaging solutions that protect products,
            strengthen brands, and support business growth.
          </p>
        </div>

        <div className="mv-grid">

          <article className="mv-card mv-mission">
            <div className="mv-card-top">
              <span className="mv-number">01</span>

              <div className="mv-icon">
                <FaBullseye />
              </div>

              <span className="mv-card-label">OUR PURPOSE</span>
            </div>

            <div className="mv-card-content">
              <h3>Our Mission</h3>

              <p>
                To provide high-quality corrugated packaging solutions
                that ensure product safety, timely delivery, and reliable,
                cost-effective packaging while maintaining customer satisfaction.
              </p>
            </div>

            <div className="mv-card-footer">
              <span className="mv-footer-line"></span>
              <span>QUALITY · RELIABILITY · TRUST</span>
             <FaCircleNodes className="mv-footer-arrow" />
            </div>

            <div className="mv-card-decoration"></div>
          </article>

          <article className="mv-card mv-vision">
            <div className="mv-card-top">
              <span className="mv-number">02</span>

              <div className="mv-icon">
                <FaEye />
              </div>

              <span className="mv-card-label">OUR FUTURE</span>
            </div>

            <div className="mv-card-content">
              <h3>Our Vision</h3>

              <p>
                To be a trusted packaging partner known for delivering
                sustainable, innovative, and customer-focused packaging
                solutions that help businesses grow with confidence.
              </p>
            </div>

            <div className="mv-card-footer">
              <span className="mv-footer-line"></span>
              <span>INNOVATION · GROWTH · SUSTAINABILITY</span>
              <FaCircleNodes className="mv-footer-arrow" />
            </div>

            <div className="mv-card-decoration"></div>
          </article>

        </div>

      </div>
    </section>
  );
}

export default MissionVision;
