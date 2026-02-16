import "../styles/Footer.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div className="footer-container">

        {/* LEFT: BRAND + CONTACT DETAILS */}
        <div className="footer-brand">
          <h3>KreativeGenesis 2026</h3>
          <p>
            <strong>KGiSL Educational Institutions</strong>,
            bringing together innovative minds to design impactful,
            technology-driven solutions aligned with real-world challenges
            and global sustainability goals.
          </p>

          {/* CONTACT DETAILS */}
          <div className="footer-contact">
            <h4>Contact Details</h4>

            <p>Event Coordinator : Dr. S. Boopalan</p>
            <p>Mobile: +91 99526 84608</p>

            <p>Program Coordinator : Dr. M. Usha</p>
            <p>Mobile: +91 94877 90087</p>

            <p>Technical Co-ordinator : Mr.Dharaneesh Selvaraj</p>
            <p>Mobile: +91 97906 42068</p>

            <p>Student Coordinators : A. Gopinaath & A. Anirudhan</p>
            <p>Mobile: +91 93458 84778 & +91 93455 67535</p>

            <p className="email">
              Email:{" "}
              <a href="mailto:kghackathon@kgcas.com">
                kghackathon@kgcas.com
              </a>
            </p>
          </div>

          <div className="footer-socials">
            <a href="https://www.instagram.com/kgcasofficial/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="mailto:kghackathon@kgcas.com" target="_blank" rel="noreferrer">
              <FaEnvelope />
            </a>

            <a href="tel:+91 99526 84608">
              <FaPhone />
            </a>

            <a
              href="https://wa.me/+919952684608"
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
          <Link to="/">Home</Link>
          <Link to="/about">About Hackathon</Link>
          <Link to="/phases">Phases</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/register">Register</Link>
        </div>

        {/* RIGHT: MAP + ADDRESS */}
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

          {/* ADDRESS */}
          <div className="footer-address">
            <p><strong>KGiSL Educational Institutions</strong></p>
            <p>Saravanampatti, Coimbatore, Tamil Nadu</p>
          </div>
        </div>

      </motion.div>

      <div className="footer-bottom">
        <p>© 2026 KreativeGenesis Hackathon. All rights reserved.</p>
        <p>Technical Team ❤️</p>
      </div>
    </footer>
  );
}