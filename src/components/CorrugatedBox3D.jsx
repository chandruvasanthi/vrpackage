// import React from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import './CorrugatedBox3D.css';

// const CorrugatedBox3D = ({
//   width = '100%',
//   height = '400px',
//   className = '',
//   loop = true,
//   autoplay = true,
// }) => {
//   return (
//     <div
//       className={`vr-lottie-container ${className}`}
//       style={{ width, height }}
//     >
      
//       <DotLottieReact
//   src="https://lottie.host/746f59ea-c176-4af9-8365-67063094691c/5rScqnepQo.lottie"
//   loop={loop}
//   autoplay={autoplay}
// />
//     </div>
//   );
// };

// export default CorrugatedBox3D;


import React from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {
  FaLightbulb,
  FaBoxOpen,
  FaShieldHalved,
  FaArrowRight,
} from 'react-icons/fa6';

import './CorrugatedBox3D.css';

const CorrugatedBox3D = () => {
  return (
    <section className="vr-showcase" >
           <div className="why-heading" id='CorrugatedBox3D'>
          <h2 className="heading-center">Why <span className='why-span'>Choose Us</span></h2>
          <p className="choose-subtitle">
            Strong Packaging Solutions
          </p>
        </div>
      <div className="vr-showcase-bg">
        <span className="vr-glow vr-glow-one"></span>
        <span className="vr-glow vr-glow-two"></span>
        <span className="vr-grid"></span>
      </div>

      <div className="vr-showcase-inner">

        {/* LEFT CONTENT */}
        <motion.div
          className="vr-side-content vr-left-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="vr-eyebrow">
            <FaLightbulb />
            BEYOND ORDINARY PACKAGING
          </span>

          <h2>
            Innovation
            <br />
            Meets <span>Packaging.</span>
          </h2>

          <p>
            We transform simple packaging into smart,
            creative and reliable solutions designed
            to make every product stand out.
          </p>

          <div className="vr-feature">
            <span className="vr-feature-icon">
              <FaBoxOpen />
            </span>

            <div>
              <h4>Creative by Design</h4>
              <span>Packaging that makes an impression.</span>
            </div>
          </div>

          <a href="/products" className="vr-showcase-link">
            EXPLORE OUR SOLUTIONS
            <FaArrowRight />
          </a>
        </motion.div>


        {/* CENTER ANIMATION */}
        <motion.div
          className="vr-animation-area"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="vr-animation-ring"></div>
          <div className="vr-animation-ring vr-ring-two"></div>

          <div className="vr-animation">
            <DotLottieReact
              src="https://lottie.host/746f59ea-c176-4af9-8365-67063094691c/5rScqnepQo.lottie"
              loop
              autoplay
            />
          </div>

          <span className="vr-animation-label">
            <span></span>
            DESIGNED TO PROTECT
          </span>
        </motion.div>


        {/* RIGHT CONTENT */}
        <motion.div
          className="vr-side-content vr-right-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="vr-eyebrow">
            <FaShieldHalved />
            QUALITY IN EVERY LAYER
          </span>

          <h2>
            Stronger.
            <br />
            Smarter. <span>Better.</span>
          </h2>

          <p>
            From carefully selected materials to
            precision manufacturing, we deliver
            packaging built for performance.
          </p>

          <div className="vr-feature">
            <span className="vr-feature-icon">
              <FaShieldHalved />
            </span>

            <div>
              <h4>Strength You Can Trust</h4>
              <span>Reliable protection for every shipment.</span>
            </div>
          </div>

          <a href="/get-quote" className="vr-showcase-link">
            BUILD YOUR BOX
            <FaArrowRight />
          </a>
        </motion.div>

      </div>

      <div className="vr-showcase-bottom">
        <span>VR PACKAGE</span>
        <span>INNOVATION IN EVERY BOX</span>
        <span>BUILT TO PROTECT. DESIGNED TO IMPRESS.</span>
      </div>
            <div className="bottom-banner">
          <span>WE PACK WITH PROTECTION</span>
        </div>
    </section>
  );
};

export default CorrugatedBox3D;
