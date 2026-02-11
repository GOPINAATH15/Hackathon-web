import "../styles/components.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div className="footer-container">
        {/* LEFT: BRAND */}
        <div className="footer-brand">
          <h3>KreativeGenesis 2026</h3>
          <p>
            <strong>KGiSL Educational Institutions</strong>,
            bringing together innovative minds to design impactful,
            technology-driven solutions aligned with real-world challenges
            and global sustainability goals.
          </p>
          <div className="footer-socials">
            <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>

            {/* CALL */}
            <a href="tel:+919876543210">
              <FaPhone />
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>

        </div>

        {/* CENTER: QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/about">About Hackathon</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/submission">Submission</Link>
          <Link to="/register">Register</Link>
        </div>

        {/* RIGHT: MAP */}
        <div className="footer-location">
          <h4>Location</h4>

          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.43249972854!2d76.99576447506398!3d11.081108653499845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f792ec7c0dbb%3A0x6c150aa4582cc7a4!2sKG%20College%20of%20Arts%20and%20Science!5e0!3m2!1sen!2sin!4v1770788593590!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hackathon Location Map"
            ></iframe>

          </div>
        </div>
      </motion.div>

      <div className="footer-bottom">
        <p>© 2026 KreativeGenesis Hackathon. All rights reserved.</p>
        <p>Tech Team ❤️</p>
      </div>
    </footer>
  );
}
