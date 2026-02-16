import "../styles/Navbar.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

export default function Navbar() {
  const [domainOpen, setDomainOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  const domains = [
    {
      title: "Women's Safety & Social Security",
      sub: [
        {
          label: "Cyber Safety Awareness & Phishing Detection Platform",
          path: "/domains/women-cyber-safety",
        },
        {
          label: "Night Safety Risk Prediction System",
          path: "/domains/women-night-safety",
        },
        {
          label: "AI-Based Personal Safety Companion",
          path: "/domains/women-personal-safety",
        },
        {
          label: "Cyber Harassment Detection & Prevention Platform",
          path: "/domains/women-cyber-harassment",
        },
      ],
    },
    {
      title: "Healthcare Technology",
      sub: [
        {
          label: "AI-Based Early Disease Risk Prediction System",
          path: "/domains/disease-prediction",
        },
        {
          label: "Smart Emergency Response Coordination Platform",
          path: "/domains/emergency-response",
        },
        {
          label: "AI-Based Sleep Health Monitoring & Recommendation System",
          path: "/domains/sleep-health-monitoring",
        },
        {
          label: "Remote Patient Monitoring Dashboard",
          path: "/domains/remote-patient-monitoring",
        },
      ],
    },
    {
      title: "Sustainable Environment & Green Technology",
      sub: [
        {
          label: "AI-Powered Food Waste Reduction & Redistribution",
          path: "/domains/food-waste-management",
        },
        {
          label: "Smart Energy Efficiency & Consumption Optimization Platform",
          path: "/domains/smart-energy-optimization",
        },
        {
          label: "Smart Building Sustainability Monitoring System",
          path: "/domains/smart-building-sustainability",
        },
        {
          label: "AI-Based Soil Health & Sustainable Farming Advisor",
          path: "/domains/soil-health-advisor",
        },
      ],
    },
    {
      title: "AI & Automation",
      sub: [
        {
          label: "Intelligent Resume Screening & Skill Matching Platform",
          path: "/domains/resume-screening",
        },
        {
          label: "AI Academic Integrity & Plagiarism Detection ",
          path: "/domains/academic-integrity",
        },
        {
          label: "AI-Based Personalized Learning Path Generator",
          path: "/domains/personalized-learning",
        },
        {
          label: "AI Skill Intelligence Platform for Industry Readiness",
          path: "/domains/skill-intelligence-platform",
        },
      ],
    },
  ];

  return (
    <motion.nav
      className="kg-navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Link to="/" className="kg-logo-wrapper">
      
         <img
          src="/Kg-logo.png"
          alt="College Logo"
          className="kg-college-logo"
        />

     
       
      </Link>

      <div
        className={`kg-hamburger ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`kg-nav-links ${mobileOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
        <Link to="/phases" onClick={() => setMobileOpen(false)}>Phases</Link>
        <Link to="/schedule" onClick={() => setMobileOpen(false)}>Schedule</Link>
        <Link to="/rules" onClick={() => setMobileOpen(false)}>Rules</Link>

        <div
          className="kg-nav-dropdown"
          onMouseEnter={() => {
            if (window.innerWidth > 768) {
              clearTimeout(closeTimer.current);
              setDomainOpen(true);
            }
          }}
          onMouseLeave={() => {
            if (window.innerWidth > 768) {
              closeTimer.current = setTimeout(() => {
                setDomainOpen(false);
                setActiveIndex(null);
              }, 100);
            }
          }}
        >
          <span
            className="kg-nav-link"
            onClick={() => {
              if (window.innerWidth <= 768) {
                setDomainOpen(!domainOpen);
              }
            }}
          >
            Domain <span className="kg-caret">▾</span>
          </span>

          {domainOpen && (
            <div className={`kg-dropdown-menu ${window.innerWidth <= 768 ? "kg-mobile-dropdown" : ""}`}>
              {domains.map((item, index) => (
                <div
                  key={index}
                  className="kg-dropdown-item"
                  onMouseEnter={() =>
                    window.innerWidth > 768 && setActiveIndex(index)
                  }
                >
                  <div
                    className="kg-dropdown-title"
                    onClick={() => {
                      if (window.innerWidth <= 768) {
                        setActiveIndex(activeIndex === index ? null : index);
                      }
                    }}
                  >
                    {item.title}
                    <span className="kg-arrow">›</span>
                  </div>

                  {(activeIndex === index ||
                    window.innerWidth <= 768) &&
                    activeIndex === index && (
                      <div className={`kg-sub-dropdown ${window.innerWidth <= 768 ? "kg-mobile-sub" : ""}`}>

                        {/* 🔥 NEW HEADING (NO LOGIC CHANGED) */}
                        <div className="kg-problem-heading">
                          Problem Statement
                        </div>

                        {item.sub.map((subItem, i) => (
                          <Link
                            key={i}
                            to={subItem.path}
                            className="kg-sub-item"
                            onClick={() => {
                              setDomainOpen(false);
                              setActiveIndex(null);
                              setMobileOpen(false);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>

        <Link to="/faq" onClick={() => setMobileOpen(false)}>FAQ</Link>

        <Link
          to="/register"
          className="kg-register"
          onClick={() => setMobileOpen(false)}
        >
          Register
        </Link>
      </div>
    </motion.nav>
  );
}