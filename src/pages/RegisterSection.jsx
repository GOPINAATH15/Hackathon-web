import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/components.css";

export default function RegisterSection() {
  const navigate = useNavigate();   // 👈 add this

  return (
    <motion.section
      className="register"
      id="register"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="register-box"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Ready to Participate?</h2>
        <p>Register now and showcase your skills in the hackathon.</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/registerform")}   
        >
          Register Now
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
