import "./MissionVision.css";
import { FaBullseye, FaEye } from "react-icons/fa";

function MissionVision() {
  return (
    <section className="mission-vision">

      <div className="container">

        <h2 className="mv-heading">
          Our Mission & Vision
        </h2>

        <p className="mv-subtitle">
          Building strong packaging solutions that protect products,
          strengthen brands, and support business growth.
        </p>

        <div className="mv-grid">

          <div className="mv-card">

            <div className="mv-icon">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              To provide high-quality corrugated packaging solutions 
              that ensure product safety, timely delivery, and reliable,
              cost-effective packaging while maintaining customer satisfaction.
            </p>

          </div>

          <div className="mv-card">

            <div className="mv-icon">
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
             To be a trusted packaging partner known for  delivering sustainable, innovative,
              and customer-focused packaging solutions that help
              businesses grow with confidence.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;