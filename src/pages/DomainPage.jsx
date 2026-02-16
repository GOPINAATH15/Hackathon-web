import { motion } from "framer-motion";
import "../styles/DomainPage.css";

// Import your domain images
import aiImg from "../assets/domain-images/ai.jpeg";
import healthImg from "../assets/domain-images/healthcare.jpeg";
import sustainableImg from "../assets/domain-images/sustainable.jpeg";
import womensafetyImg from "../assets/domain-images/womensafety.jpeg";


export default function DomainPage() {

  const domains = [
    { name: "Artificial Intelligence & Machine Learning", image: aiImg },
    { name: "HealthCare & Wellness", image: healthImg },
    { name: "Sustainable Development & Environment", image: sustainableImg },
    { name: "Women Safety & Empowerment", image: womensafetyImg },
    // { name: "Data Science & Analytics", image: dataImg }
  ];

  return (
    <section className="domain-page">

      <motion.h1
        className="domain-heading"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Domains
      </motion.h1>

      <p className="domain-count">
        {/* Total Domains: <span>{domains.length}</span> */}
      </p>

      <div className="domain-grid">
        {domains.map((domain, index) => (
          <motion.div
            key={index}
            className="domain-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={domain.image} alt={domain.name} />
            <h3>{domain.name}</h3>
          </motion.div>
        ))}
      </div>

    </section>
  );
}