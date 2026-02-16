import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/components.css";
import heroVideo from "../assets/bg-hero1.mp4";
import heroBgvideo from "../assets/bg.mp4";
import DomainPage from "./DomainPage";

import logoImg from "../assets/logo.png";
import g1 from "../assets/hackathon-image/hackathon-image1.jpeg";
import g2 from "../assets/hackathon-image/hackathon-image2.jpeg";
import g3 from "../assets/hackathon-image/hackathon-image3.jpeg";
import g4 from "../assets/hackathon-image/hackathon-image4.jpeg";
import g5 from "../assets/hackathon-image/hackathon-image5.jpeg";
import g6 from "../assets/hackathon-image/hackathon-image6.jpeg";
import g7 from "../assets/hackathon-image/hackathon-image7.jpeg";
import g8 from "../assets/hackathon-image/hackathon-image8.jpeg";
import g9 from "../assets/hackathon-image/hackathon-image9.jpeg";
import g10 from "../assets/hackathon-image/hackathon-image10.jpeg";
import g11 from "../assets/hackathon-image/hackathon-image11.jpeg";
import g12 from "../assets/hackathon-image/hackathon-image12.jpeg";
import g13 from "../assets/hackathon-image/hackathon-image13.jpeg";
import PrizePool from "./PrizePool";
// import Phase from "./Phase";

export default function Hero() {
  const navigate = useNavigate();

  const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="hero">

        {/* Background Video */}
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="hero-overlay" />

        {/* Content */}
        <motion.div className="hero-content">
          <div className="hero-logo-right">
            <img src={logoImg} alt="Hackathon Logo" />
          </div>


          <h1 className="hero-title">
            <span className="red-letter">K</span>reative
            <span className="red-letter">G</span>enesis Hackathon 2026
          </h1>

          <h2>Ignite Ideas. Build the Future.</h2>
          <h2>National Level 30-Hour Innovation Hackathon</h2>

          <p>
            KreativeGenesis 2026 is a premier national-level hackathon organized by
            KGiSL Educational Institutions, bringing together innovative minds
            from across institutions to design impactful technology-driven
            solutions.

          </p>

          <div className="hero-info">
            <div>
              <span>Date</span>
              <p>5th March 26 - 6th March 26</p>
            </div>
            <div>
              <span>Time</span>
              <p>5th 9:00 a.m. – 6th 11:00 a.m.</p>
            </div>
            <div>
              <span>Venue</span>
              <p>KGiSL CAMPUS</p>
            </div>
            {/* <div>
              <span>Campus</span>
              <p>KGiSL CAMPUS</p>
            </div> */}
          </div>

          <div className="hero-actions">
            <button onClick={() => navigate("/register")} className="primary-btn">
              Register Now
            </button>
            <button onClick={() => navigate("/schedule")} className="secondary-btn">
              View Schedule
            </button>
            <button onClick={() => navigate("/phases")} className="secondary-btn">
              View Phases
            </button>
          </div>
        </motion.div>
      </section>
      <section className="domainpage">
        <DomainPage />
      </section>
      <section className="prizepool">
        <PrizePool />
      </section>
      {/* <section className="phase">
        <Phase />
      </section> */}


      {/* ================= GALLERY SECTION ================= */}
      {/* <section className="gallery-section">
        <h2>Previous Hackathon Highlights</h2>

        <div className="carousel-container">
          <button className="nav-btn left" onClick={prevSlide}>
            ❮
          </button>

          <div className="carousel-wrapper">
            <motion.div
              key={currentIndex}
              className="gallery-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}   
            >
              <img
                src={galleryImages[currentIndex]}
                alt="Hackathon"
              />
              <div className="gallery-overlay">
                <span>Hackathon Moment</span>
              </div>
            </motion.div>
          </div>

          <button className="nav-btn right" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </section> */}

    </>
  );
}
