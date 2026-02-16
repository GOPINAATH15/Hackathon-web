import "../styles/AboutHackathon.css";
import { motion } from "framer-motion";
import aboutBg from "../assets/about-bg.jpeg";
import badgeImg from "../assets/badge.png";
import { useEffect, useRef, useState } from "react";

export default function AboutHackathon() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    function handleScroll() {
      if (!imageRef.current || !containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const imageHeight = imageRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const viewportOffset = 120; // distance from top

      // start moving when container enters view
      if (scrollY > containerTop - viewportOffset) {
        const maxMove = containerHeight - imageHeight - viewportOffset;

        let newY = scrollY - containerTop + viewportOffset;

        if (newY > maxMove) newY = maxMove;
        if (newY < 0) newY = 0;

        requestAnimationFrame(() => {
          setOffsetY(newY);
        });
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        ref={containerRef}
      >
        {/* Left Image */}
        <motion.div
          className="about-image"
          ref={imageRef}
          style={{ transform: `translateY(${offsetY}px)` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}

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
              KreativeGenesis 2026 is a premier national-level
              hackathon organized by KGiSL Educational Institutions,
              bringing together innovative minds to design impactful,
              technology-driven solutions aligned with real-world challenges
              and global sustainability goals.
            </p>
            <p>
              The event aims to foster creativity, collaboration, and cutting-edge innovation in domains
              such as Artificial Intelligence, Healthcare Technology, Sustainable Environment, Women’s
                Safety, and Next-Generation Digital Systems. Participants will engage in an intensive
              development experience, transforming ideas into working prototypes through collaborative
              problem-solving and hands-on innovation.
              KreativeGenesis 2026 provides a dynamic platform for students to:
              <ul>
                <li><img src={badgeImg} alt="" className="list-icon" />Develop industry-relevant technical skills.</li>
                <li><img src={badgeImg} alt="" className="list-icon" />Work on real-world problem statements aligned with the UN Sustainable Development Goals (SDGs).</li>
                <li><img src={badgeImg} alt="" className="list-icon" />Showcase innovation and creativity through AI-driven solutions.</li>
                <li><img src={badgeImg} alt="" className="list-icon" />Collaborate, learn, and compete in a high-energy innovation environment.</li>
              </ul>
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
                Foster Innovation — Encourage hands-on
                experimentation and solution building.
              </li>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                Promote AI Transformation — Explore AI,
                automation, and emerging technologies.
              </li>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                Support UN SDGs — Address social,
                environmental, and economic challenges.
              </li>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                Enhance Industry Skills — Improve coding,
                teamwork, and system design.
              </li>
              <li>
                <img src={badgeImg} alt="" className="list-icon" />
                Bridge Academia & Industry — Enable
                mentorship and scalable innovation.
              </li>
            </ul>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}
