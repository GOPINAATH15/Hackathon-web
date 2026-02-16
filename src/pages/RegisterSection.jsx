import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import "../styles/components.css";
import "../styles/RegisterSection.css";
import Phase from "./Phase";

export default function RegisterSection() {
  const navigate = useNavigate();   

  return (
    <motion.section
      className="register"
      id="register"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="register-container">

        {/* LEFT SIDE - PHASE COMPONENT */}
        <motion.div
          className="register-guidelines"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Phase />
        </motion.div>

        {/* RIGHT SIDE - RULES & REGULATIONS */}
        <motion.div
          className="register-box"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Rules & Regulations</h2>

          <h4>Team Requirements</h4>
          <ul>
            <li>Each team must consist of 3 to 4 members.</li>
            <li>At least one female participant is mandatory.</li>
          </ul>

          <h4>Payment & Registration</h4>
          <ul>
            <li>Payment must be made using the official QR code only.</li>
            <li>Upload transaction screenshot in the registration form.</li>
            <li>Registration is valid only after payment verification.</li>
            <li>Registration fees are strictly non-refundable.</li>
          </ul>

          <h4>Hackathon Rules</h4>
          <ul>
            <li>Selected problem statement cannot be changed.</li>
            <li>AI tools are allowed for assistance only.</li>
            <li>Core logic and implementation must be original.</li>
            <li>Participants must bring laptop, charger & ID card.</li>
          </ul>
        </motion.div>

      </div>

      {/* REGISTER BUTTON AT BOTTOM */}
      <div className="register-bottom">
        <p>Register now and showcase your skills in the hackathon.</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/registerform")}
        >
          Register Now
        </motion.button>
      </div>

    </motion.section>
  );
}