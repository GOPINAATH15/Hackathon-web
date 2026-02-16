import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import "../styles/components.css";
import "../styles/Faq.css";

export default function FAQ() {
  const faqs = [
    {
      question: "What is KreativeGenesis Hackathon 2026?",
      answer:
        "KreativeGenesis 2026 is a national-level innovation hackathon where participants develop technology-driven solutions to real-world challenges within a time-bound environment."
    },
    {
      question: "Who can participate in KreativeGenesis 2026?",
      answer:
        "Undergraduate and postgraduate students from Engineering Colleges and Arts & Science Colleges are eligible to participate. "
    },
    {
      question: "What is the team size?",
      answer:
        "Each team must consist of 3 to 4 members from the same institution, including at least one female participant."
    },
    {
      question: "How do I register?",
      answer:
        "Teams can register through the official website by completing the online registration form and selecting their domain and problem statement as part of the registration process."
    },
    {
      question: "How do we pay the registration fee?",
      answer:
        "Payment must be made using the official QR code provided. After payment, upload the transaction screenshot in the registration form."
    },
    {
      question: "When is my registration confirmed?",
      answer:
        "Your registration will be confirmed after successful payment verification. An official confirmation email will be sent to your registered email address upon approval."
    },
    {
      question: "Is there an idea submission round?",
      answer:
        "No. Teams will directly participate in the 24-hour development round based on their selected problem statement."
    },
    {
      question: "Can we change the problem statement later?",
      answer:
        "No. The selected problem statement during registration is final."
    },
    {
      question: "Are AI tools allowed?",
      answer:
        "Yes, AI tools can be used for assistance, but the core logic and implementation must be original."
    },
    {
      question: "How will projects be evaluated?",
      answer:
        "Projects will be judged based on innovation, technical implementation, SDG impact, presentation quality, and feasibility."
    },
    {
      question: "What happens after the 24-hour development round?",
      answer:
        "Upon completion of the 24-hour development round, the top 10% of teams will advance to the final live jury presentation. All other teams will conclude the hackathon and be awarded participation certificates."
    },
    {
      question: "What should participants bring?",
      answer:
        "Participants must bring their own laptops, chargers, and valid ID cards."
    },
    {
      question: "Will food and internet be provided?",
      answer:
        "Yes, meals and internet connectivity will be provided during the hackathon."
    },
    {
      question: "Is overnight stay allowed?",
      answer:
        "Yes, the hackathon includes continuous overnight development."
    },
    {
      question: "Will all participants receive certificates?",
      answer:
        "Yes, participation certificates will be provided to all eligible teams."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2>Frequently Asked Questions</h2>
      {/* {faqs.map((faq, index) => {
        // Render Section Heading
        if (faq.type === "heading") {
          return (
            <h3 key={index} className="faq-section-heading">
              {faq.title}
            </h3>
          );
        }
      })} */}

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
