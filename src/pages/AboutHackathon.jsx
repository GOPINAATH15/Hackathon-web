import "../styles/AboutHackathon.css";
import { motion } from "framer-motion";
import aboutBg from "../assets/about-bg.jpeg";
import badgeImg from "../assets/badge.png";

export default function AboutHackathon() {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Left Image */}
        <motion.div
          className="about-image"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={aboutBg} alt="KreativeGenesis Hackathon" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="about-content"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >

          {/* ABOUT BOX */}
          <div className="about-box">
            <h2 className="section-heading">About KreativeGenesis 2026</h2>
            <p>
              <strong>KreativeGenesis 2026</strong> is a premier national-level
              hackathon organized by <strong>KGiSL Educational Institutions</strong>,
              bringing together innovative minds to design impactful,
              technology-driven solutions aligned with real-world challenges
              and global sustainability goals.
            </p>
            <p>
              The event promotes innovation across
              <strong> AI, Healthcare Technology, Sustainable Environment,
                Women’s Safety</strong>, and
              <strong> Next-Generation Digital Systems</strong>.
            </p>
          </div>

          {/* WHY PARTICIPATE BOX */}
          <div className="about-box">
            <h3 className="section-heading">Why Participate?</h3>
            <ul>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                Develop industry-relevant technical skills
              </li>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                Solve real-world problems aligned with UN SDGs
              </li>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                Build AI-driven and future-ready solutions
              </li>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                Collaborate in a high-energy innovation ecosystem
              </li>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                Showcase your talent at a national level
              </li>
            </ul>

          </div>

          {/* VISION BOX */}
          <div className="about-box">
            <h3 className="section-heading">Vision</h3>
            <p>
              To inspire the next generation of innovators by providing a
              collaborative platform that encourages creative problem-solving,
              technological excellence, and sustainable digital transformation.
            </p>
          </div>

          {/* OBJECTIVES BOX */}
          <div className="about-box">
            <h3 className="section-heading">Objectives</h3>
            <ul>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                <strong>Foster Innovation</strong> — Encourage hands-on
                experimentation and solution building.
              </li>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                <strong>Promote AI Transformation</strong> — Explore AI,
                automation, and emerging technologies.
              </li>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                <strong>Support UN SDGs</strong> — Address social,
                environmental, and economic challenges.
              </li>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                <strong>Enhance Industry Skills</strong> — Improve coding,
                teamwork, and system design.
              </li>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                <strong>Bridge Academia & Industry</strong> — Enable
                mentorship and scalable innovation.
              </li>
            </ul>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}
