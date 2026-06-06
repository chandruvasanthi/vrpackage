import React, { useState } from "react";
import "./Faq.css";

const faqData = [

    {
    question: 'What types of corrugated boxes do you manufacture?',
    answer:
      'We manufacture corrugated boxes, die-cut boxes, export cartons, food packaging boxes, oil boxes, partitions, and custom printed cartons.'
  },
  {
    question: 'Do you provide custom box printing?',
    answer:
      'Yes, we offer customized printing solutions with your brand name, logo, and product information.'
  },
  {
    question: 'Can you handle bulk orders?',
    answer:
      'Yes, we have large-scale production capabilities to fulfill bulk packaging requirements.'
  },
  {
    question: 'Do you manufacture export packaging boxes?',
    answer:
      'Yes, we provide durable export packaging boxes designed for safe transportation and international shipping.'
  },
  {
    question: 'How can I request a quotation?',
    answer:
      'Simply visit our Contact Us section and submit your requirements to receive a customized quote.'
  }

];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            <div
              className={`faq-answer ${
                activeIndex === index ? "show" : ""
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
