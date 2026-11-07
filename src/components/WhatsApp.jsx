// import './WhatsApp.css'
// import { FaWhatsapp } from 'react-icons/fa'

// function WhatsApp() {
//   return (

//     <a href='https://wa.me/916381506536' target='_blank' rel='noopener noreferrer' className='whatsapp'  aria-label="WhatsApp">
//       <FaWhatsapp />
//     </a>

//   )
// }

// export default WhatsApp;

import './WhatsApp.css';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsApp({ message }) {
const defaultMessage = `Hello VR Package! I would like to know more about your corrugated boxes, pricing and order details.`;

  const whatsappMessage = message || defaultMessage;

  const whatsappUrl = `https://wa.me/916381506536?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp"
      aria-label="Send enquiry through WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsApp;