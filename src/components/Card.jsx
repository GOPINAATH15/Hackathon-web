import { motion } from "framer-motion";
import "../styles/components.css";

export default function Card({ title, items = [] }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.4 }}
    >
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
