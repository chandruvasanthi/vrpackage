// import './WhyChooseUs.css'
// import {
//   FaShieldAlt,
//   FaBoxOpen,
//   FaLeaf,
//   FaHandshake
// } from 'react-icons/fa'

// const chooseData = [
//   {
//     id: 1,
//     icon: <FaShieldAlt />,
//     title: 'Strong Quality',
//     description: 'Premium quality corrugated boxes with maximum durability.'
//   },
//   {
//     id: 2,
//     icon: <FaBoxOpen />,
//     title: 'Safe Packaging',
//     description: 'Secure packaging solutions for safe product delivery.'
//   },
//   {
//     id: 3,
//     icon: <FaLeaf />,
//     title: 'Eco Friendly',
//     description: 'Recyclable and sustainable packaging materials.'
//   },
//   {
//     id: 4,
//     icon: <FaHandshake />,
//     title: 'Trusted Service',
//     description: 'Reliable support and on-time delivery services.'
//   }
// ]

// function WhyChoose() {
//   return (
//     <section className="why-choose" id="why-choose">
//       <div className="choose-container">

//         <div className="choose-heading">
//           <h2 className="heading center">Why Choose Us</h2>
//           <p className="choose-subtitle">
//             Strong Packaging Solutions
//           </p>
//         </div>

//         <div className="choose-grid">
//           {chooseData.map((item) => (
//             <div className="choose-card" key={item.id}>
              

//               <div className="choose-icon">
//                 {item.icon}
//               </div>

//               <h3>{item.title}</h3>

//               <p>{item.description}</p>

//               <div className="choose-card-glow"></div>
//               <div className="choose-card-accent"></div>
//             </div>
//           ))}
//         </div>

//         <div className="bottom-banner">
//           <span>WE PACK WITH PROTECTION</span>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default WhyChoose



import { useEffect, useRef, useState } from 'react';
import './WhyChooseUs.css';

import {
  FaShieldAlt,
  FaBoxOpen,
  FaLeaf,
  FaHandshake
} from 'react-icons/fa';

const chooseData = [
  {
    id: 1,
    icon: <FaShieldAlt />,
    title: 'Strong Quality',
    description: 'Premium quality corrugated boxes with maximum durability.'
  },
  {
    id: 2,
    icon: <FaBoxOpen />,
    title: 'Safe Packaging',
    description: 'Secure packaging solutions for safe product delivery.'
  },
  {
    id: 3,
    icon: <FaLeaf />,
    title: 'Eco Friendly',
    description: 'Recyclable and sustainable packaging materials.'
  },
  {
    id: 4,
    icon: <FaHandshake />,
    title: 'Trusted Service',
    description: 'Reliable support and on-time delivery services.'
  }
];

function WhyChoose() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % chooseData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      (prev - 1 + chooseData.length) % chooseData.length
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (window.innerWidth <= 480) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const difference =
      touchStartX.current - touchEndX.current;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;

    setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  return (
    <section className="why-choose" id="why-choose">
      <div className="choose-container">

        <div className="choose-heading">
          <h2 className="heading center">Why Choose Us</h2>
          <p className="choose-subtitle">
            Strong Packaging Solutions
          </p>
        </div>

        <div
          className="choose-grid"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {chooseData.map((item, index) => (
            <div
              className={`choose-card ${
                activeIndex === index ? 'active-card' : ''
              }`}
              key={item.id}
              style={{
                '--slide-index': index,
              }}
            >

              <div className="choose-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="choose-card-glow"></div>
              <div className="choose-card-accent"></div>

            </div>
          ))}
        </div>

        {/* MOBILE SLIDER DOTS */}
        <div className="choose-pagination">
          {chooseData.map((item, index) => (
            <button
              key={item.id}
              className={`choose-dot ${
                activeIndex === index ? 'active' : ''
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>

        <div className="bottom-banner">
          <span>WE PACK WITH PROTECTION</span>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;

