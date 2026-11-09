import { useEffect, useRef, useState } from "react";
import "./MissionVision.css";

import { FaBullseye, FaEye } from "react-icons/fa";
import { FaCircleNodes } from "react-icons/fa6";

function MissionVision() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const pauseRef = useRef(false);
  const resumeRef = useRef(null);

  // Calculate and scroll to card
  const goToSlide = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll(".mv-card");
    const card = cards[index];

    if (!card) return;

    slider.scrollTo({
      left: card.offsetLeft - cards[0].offsetLeft,
      behavior: "smooth",
    });

    setCurrentSlide(index);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth > 600 || pauseRef.current) return;

      setCurrentSlide((prev) => {
        const next = (prev + 1) % 2;

        const slider = sliderRef.current;

        if (slider) {
          const cards = slider.querySelectorAll(".mv-card");

          if (cards[next]) {
            slider.scrollTo({
              left: cards[next].offsetLeft - cards[0].offsetLeft,
              behavior: "smooth",
            });
          }
        }

        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Update indicator after manual swipe
  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider || window.innerWidth > 600) return;

    const cards = slider.querySelectorAll(".mv-card");

    if (!cards.length) return;

    const center = slider.scrollLeft + slider.clientWidth / 2;

    let nearest = 0;
    let distance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter =
        card.offsetLeft - cards[0].offsetLeft +
        card.offsetWidth / 2;

      const difference = Math.abs(center - cardCenter);

      if (difference < distance) {
        distance = difference;
        nearest = index;
      }
    });

    setCurrentSlide(nearest);
  };

  // Pause on touch
  const pauseSlider = () => {
    pauseRef.current = true;
    clearTimeout(resumeRef.current);
  };

  // Resume after interaction
  const resumeSlider = () => {
    clearTimeout(resumeRef.current);

    resumeRef.current = setTimeout(() => {
      pauseRef.current = false;
    }, 2500);
  };

  useEffect(() => {
    return () => clearTimeout(resumeRef.current);
  }, []);

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

        <div
          className="mv-slider"
          ref={sliderRef}
          onScroll={handleScroll}
          onTouchStart={pauseSlider}
          onTouchEnd={resumeSlider}
          onTouchCancel={resumeSlider}
        >

          <div className="mv-grid">

            {/* Mission */}
            <article className="mv-card mv-mission">

              <div className="mv-card-top">
                <span className="mv-number">01</span>

                <div className="mv-icon">
                  <FaBullseye />
                </div>

                <span className="mv-card-label">
                  OUR PURPOSE
                </span>
              </div>

              <div className="mv-card-content">
                <h3>Our Mission</h3>

                <p>
                  To provide high-quality corrugated packaging
                  solutions that ensure product safety, timely
                  delivery, and reliable, cost-effective packaging
                  while maintaining customer satisfaction.
                </p>
              </div>

              <div className="mv-card-footer">
                <span className="mv-footer-line"></span>
                <span>QUALITY · RELIABILITY · TRUST</span>
                <FaCircleNodes className="mv-footer-arrow" />
              </div>

              <div className="mv-card-decoration"></div>

            </article>

            {/* Vision */}
            <article className="mv-card mv-vision">

              <div className="mv-card-top">
                <span className="mv-number">02</span>

                <div className="mv-icon">
                  <FaEye />
                </div>

                <span className="mv-card-label">
                  OUR FUTURE
                </span>
              </div>

              <div className="mv-card-content">
                <h3>Our Vision</h3>

                <p>
                  To be a trusted packaging partner known for
                  delivering sustainable, innovative, and
                  customer-focused packaging solutions that help
                  businesses grow with confidence.
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

        {/* Mobile indicators */}
        <div className="mv-mobile-controls">

          <div className="mv-dots">

            {[0, 1].map((index) => (
              <button
                key={index}
                type="button"
                className={`mv-dot ${
                  currentSlide === index ? "active" : ""
                }`}
                aria-label={`Go to ${index === 0 ? "Mission" : "Vision"}`}
                onClick={() => {
                  pauseSlider();
                  goToSlide(index);
                  resumeSlider();
                }}
              />
            ))}

          </div>

          <span className="mv-mobile-hint">
            SWIPE TO EXPLORE <span>↔</span>
          </span>

        </div>

      </div>
    </section>
  );
}

export default MissionVision;
