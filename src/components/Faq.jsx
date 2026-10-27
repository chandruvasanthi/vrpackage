import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "What types of corrugated boxes do you manufacture?",
    answer:
      "We manufacture corrugated boxes, die-cut boxes, export cartons, food packaging boxes, oil boxes, partitions, and custom printed cartons."
  },
  {
    question: "Do you provide custom box printing?",
    answer:
      "Yes, we offer customized printing solutions with your brand name, logo, and product information."
  },
  {
    question: "Can you handle bulk orders?",
    answer:
      "Yes, we have large-scale production capabilities to fulfill bulk packaging requirements."
  },
  {
    question: "Do you manufacture export packaging boxes?",
    answer:
      "Yes, we provide durable export packaging boxes designed for safe transportation and international shipping."
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Simply visit our Contact Us section and submit your requirements to receive a customized quote."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <div className="faq-header">
          <span className="faq-eyebrow">
            <span className="faq-eyebrow-line"></span>
            QUICK ANSWERS
          </span>

          <h2 className="faq-title">
            Frequently Asked <span>Questions</span>
          </h2>
        </div>

        <div className="faq-container">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={item.question}
                className={`faq-item ${isActive ? "active" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isActive}
                  aria-controls={answerId}
                >
                  <span className="faq-question-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="faq-question-text">
                    {item.question}
                  </span>

                  <span className="faq-icon" aria-hidden="true">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={answerId}
                  className={`faq-answer-wrapper ${
                    isActive ? "show" : ""
                  }`}
                  aria-hidden={!isActive}
                >
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;