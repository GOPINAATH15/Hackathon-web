import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/components.css";

export default function FAQ() {
  const faqs = [
    {
      question: "Who can participate in KreativeGenesis 2026?",
      answer:
        "Students currently enrolled in a recognized college or institution are eligible to participate."
    },
    {
      question: "What is the team size?",
      answer:
        "Each team must consist of exactly 3 members from the same institution."
    },
    {
      question: "Is internet access allowed during the hackathon?",
      answer:
        "Yes, internet access will be provided and participants may use it for development and research."
    },
    {
      question: "Can we use AI tools?",
      answer:
        "AI tools are allowed for assistance, but the core logic and implementation must be done by the participants."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2>Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          {/* QUESTION */}
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className={`faq-icon ${activeIndex === index ? "open" : ""}`}>
              +
            </span>
          </button>

          {/* ANSWER */}
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                className="faq-answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}
