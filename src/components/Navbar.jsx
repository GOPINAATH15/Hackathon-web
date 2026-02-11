import "../styles/components.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

export default function Navbar() {
  const [domainOpen, setDomainOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
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
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* ✅ COLLEGE LOGO (LEFT SIDE) */}
      <Link to="/" className="logo-wrapper">
        <img
          src="..\src\assets\kg-logo.png"   // 👉 place logo.png inside public folder
          alt="College Logo"
          className="college-logo"
        />
      </Link>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/schedule">Schedule</Link>
      <Link to="/rules">Rules</Link>

      {/* DOMAIN MULTI-LEVEL DROPDOWN */}
      <div
        className="nav-dropdown"
        onMouseEnter={() => {
          clearTimeout(closeTimer.current);
          setDomainOpen(true);
        }}

        onMouseLeave={() => {
          closeTimer.current = setTimeout(() => {
            setDomainOpen(false);
            setActiveIndex(null);
          }, 100); // 👈 delay (ms)
        }}

      >
        <span className="nav-link">
          Domain <span className="caret" onMouseOver={() => domainOpen(true)}>▾</span>
        </span>

        {domainOpen && (
          <div className="dropdown-menu">
            {domains.map((item, index) => (
              <div
                key={index}
                className="dropdown-item"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span className="dropdown-title">
                  {item.title}
                  <span className="arrow">›</span>
                </span>

                {activeIndex === index && (
                  <div className="sub-dropdown">
                    {item.sub.map((subItem, i) => (
                      <Link
                        key={i}
                        to={subItem.path}
                        className="sub-item"
                        onClick={() => {
                          setDomainOpen(false);
                          setActiveIndex(null);
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

      <Link to="/faq">FAQ</Link>

      <Link to="/register" className="rregister">
        Register
      </Link>
    </motion.nav>
  );
}
