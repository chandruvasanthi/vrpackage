
import './Location.css';
import {
  FaMapMarkerAlt,
  FaDirections,
  FaArrowLeft
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsApp from '../components/WhatsApp';

const factoryLocation = ' 11.5722785, 78.0969307';

function Location() {
  const navigate = useNavigate();

  const mapUrl = `https://www.google.com/maps?q=${factoryLocation}&z=17&output=embed`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${factoryLocation}&travelmode=driving`;

  return (
    
    <section className="location-page" id='location'>
        <Navbar />
      <div className="location-header">
        {/* <button onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button> */}

        <span>OUR LOCATION</span>
        <h1>Find <b>VR Package</b></h1>
        <p>Visit us for reliable and quality packaging solutions.</p>
      </div>

      <div className="location-container">

        <div className="location-details">
          <FaMapMarkerAlt className="location-icon" />

          <h2>VR Package</h2>

          <p>
          Errachinnampatti,
            <br />
            Salem, Tamil Nadu, India
          </p>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="directions-btn"
          >
            <FaDirections /> Get Directions
          </a>
        </div>

        <div className="location-map">
          <iframe
            title="VR Package Factory Location"
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
      <Footer />
       <WhatsApp />
    </section>
    
  );
}

export default Location;
