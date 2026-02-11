import { motion } from "framer-motion";
import "../styles/components.css";

export default function Section({ title, children }) {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>{title}</h2>
      {children}
    </motion.section>
  );
}
