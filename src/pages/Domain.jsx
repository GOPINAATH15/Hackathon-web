import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../styles/Domain.css";  

import aiImg from "../assets/domain-images/ai.jpeg";
import healthcareImg from "../assets/domain-images/healthcare.jpeg";
import sustainableImg from "../assets/domain-images/sustainable.jpeg";
import womensafetyImg from "../assets/domain-images/womensafety.jpeg";


const domainData = {

  /* ============================= */
  /* DOMAIN 1 — WOMEN'S SAFETY     */
  /* ============================= */

  "women-cyber-safety": {
    domainTitle: "Women's Safety & Social Security",
    image: womensafetyImg,
    objective:
      "Build technology-driven solutions to enhance physical, digital, and social safety for women and vulnerable communities.",
    problems: [
      {
        title: "Problem Statement : 1 - Cyber Safety Awareness & Phishing Detection Platform",
        description:
          "Develop a cybersecurity platform that detects phishing messages, emails, or URLs and provides real-time safety guidance.",
        additionalContent: [
          "System should:",
          "Detect phishing patterns using AI or rule-based analysis.",
          "Alert users about potential cyber threats.",
          "Provide educational guidance to improve cyber safety awareness.",
        ],
        techStack: {
          frontend: "React / Next.js / Browser Extension",
          backend: "Python FastAPI / Node.js",
          ai: "Hugging Face / scikit-learn",
          database: "PostgreSQL / Firebase",
        },
        features: [
          "Input Analysis:Text / email / URL analysis",
          "Phishing risk classification",
          "Explanation of suspicious content",
          "Cyber safety tips panel",
        ],
        deliverables: [
          "Sample phishing dataset",
          "Detection demo",
          "Explanation of detection logic",
          "GitHub repo + demo video",
        ],
        notes: [
          "Real email integration not required",
          "Transparency in classification required",
        ],
      },
    ],
  },

  "women-night-safety": {
    domainTitle: "Women's Safety & Social Security",
    image: womensafetyImg,
    objective:
      "Predict unsafe zones during nighttime and help users choose safer routes.",
    additionalContent: [
      "System should:",
      "Analyze datasets (crime reports, lighting, crowd density, etc.) ",
      "Calculate risk scores.",
      "Visualize safety zones on maps.",
    ],
    problems: [
      {
        title: "Problem Statement : 2 - Night Safety Risk Prediction System",
        description:
          "Urban safety varies based on location, time, and environmental conditions. Develop an AI-driven system that predicts safety risk levels for different areas during nighttime and provides safer route suggestions or alerts.",
        techStack: {
          frontend: "React + Google Maps / Mapbox",
          backend: "Node.js / Python FastAPI",
          ai: "pandas / scikit-learn",
          database: "PostgreSQL",
        },
        features: [
          "Location search",
          "Risk score visualization",
          "Safe vs risky zone mapping",
          "Risk explanation panel",
        ],
        deliverables: [
          "Demo dataset",
          "Map screenshots",
          "Risk scoring explanation",
        ],
        notes: [
          "Real-time crime data not mandatory",
          "Risk factors must be defined",
        ],
      },
    ],
  },

  "women-personal-safety": {
    domainTitle: "Women's Safety & Social Security",
    image: womensafetyImg,
    objective:
      "Create intelligent systems to assist users during emergencies.",
    additionalContent: [
      "System should:",
      "Allow quick SOS triggering. ",
      "Alert users about potential cyber threats.",
      "Share live location with trusted contacts. ",
    ],
    problems: [
      {
        title: "Problem Statement : 3 - AI-Based Personal Safety Companion",
        description:
          "An AI-powered safety companion enabling SOS alerts, live location sharing, and contextual assistance.",
        techStack: {
          frontend: "Flutter / React Native / React",
          backend: "Node.js / FastAPI",
          services: "Google Maps API / Twilio",
          database: "Firebase / PostgreSQL",
        },
        features: [
          "One-click SOS",
          "Trusted contacts",
          "Live location sharing",
          "Alert history",
        ],
        deliverables: [
          "SOS workflow demo",
          "Alert simulation proof",
          "Architecture overview",
        ],
        notes: [
          "False-alarm cancel feature mandatory",
          "Live GPS simulation allowed",
        ],
      },
    ],
  },

  "women-cyber-harassment": {
    domainTitle: "Women's Safety & Social Security",
    image: womensafetyImg,
    additionalContent: [

      "System should:",
      "Analyze text conversations.",
      "Detect harassment or abusive patterns. ",
      "Provide moderation or reporting features. ",
    ],
    objective:
      "Problem Statement : 4 - Detect and prevent cyber harassment using AI and NLP.",
    problems: [
      {
        title: "Cyber Harassment Detection & Prevention Platform",
        description:
          "AI system that detects abusive communication and supports reporting workflows.",
        techStack: {
          frontend: "React / Next.js",
          backend: "Python FastAPI",
          ai: "Hugging Face NLP models",
          database: "PostgreSQL",
        },
        features: [
          "Text analysis interface",
          "Toxicity classification",
          "Reporting workflow",
          "Admin moderation panel",
        ],
        deliverables: [
          "Sample conversation dataset",
          "Detection demo",
          "Model explanation",
        ],
        notes: [
          "Confidence score required",
          "Privacy-focused design encouraged",
        ],
      },
    ],
  },

  /* ============================= */
  /* DOMAIN 2 — HEALTHCARE         */
  /* ============================= */

  "disease-prediction": {
    domainTitle: "Healthcare Technology",
    image: healthcareImg,
    additionalContent: [
      "System should:",
      "Analyze structured health data. ",
      "Generate risk classification (Low/Medium/High).",
      "Provide preventive health recommendations and awareness guidance.",
    ],
    objective:
      "Improve preventive healthcare through AI-based early disease risk prediction.",
    problems: [
      {
        title: "Problem Statement : 1 - AI-Based Early Disease Risk Prediction System",
        description:
          "Predict disease risks based on lifestyle, symptoms, and medical indicators.",
        techStack: {
          frontend: "React / Next.js / Flutter",
          backend: "Python FastAPI / Node.js",
          ai: "scikit-learn",
          database: "PostgreSQL / Firebase",
        },
        features: [
          "Health data input form",
          "Risk classification (Low/Medium/High)",
          "Risk explanation",
          "Preventive recommendations",
        ],
        deliverables: [
          "Sample dataset",
          "Prediction demo",
          "Model explanation",
        ],
        notes: [
          "Not a medical diagnosis disclaimer required",
          "Avoid black-box predictions",
        ],
      },
    ],
  },

  "emergency-response": {
    domainTitle: "Healthcare Technology",
    image: healthcareImg,
    additionalContent: [
      "System should:",
      "Simulate emergency request handling. ",
      "Identify nearest resources.",
      "Provide optimized routing suggestions.",
    ],
    objective:
      "Optimize emergency response coordination using digital platforms.",
    problems: [
      {
        title: "Problem Statement : 2 - Smart Emergency Response Coordination Platform",
        description:
          "Match emergency requests with nearby hospitals and ambulances.",
        techStack: {
          frontend: "React + Map Visualization",
          backend: "Node.js / FastAPI",
          optimization: "Routing algorithms",
          database: "PostgreSQL",
        },
        features: [
          "Emergency request simulation",
          "Nearby resource detection",
          "Route visualization",
          "Incident tracking",
        ],
        deliverables: [
          "Demo dataset",
          "Map-based UI demo",
          "Optimization explanation",
        ],
        notes: [
          "Real GPS integration optional",
          "Simulation allowed",
        ],
      },
    ],
  },
  "sleep-health-monitoring": {
    domainTitle: "Healthcare Technology",
    image: healthcareImg,
    objective:
      "Improve physical and mental well-being through AI-driven sleep pattern analysis and personalized recommendations.",
    additionalContent: [
      "System should:",
      "Track sleep duration and patterns.",
      "Analyze trends.",
      "Provide actionable suggestions.",
    ],
    problems: [
      {
        title: "Problem Statement : 3 - AI-Based Sleep Health Monitoring & Recommendation System",
        description:
          "Analyze user sleep duration and patterns using time-series analytics and provide personalized, actionable recommendations to improve sleep quality.",
        techStack: {
          frontend: "React / Flutter",
          backend: "Python FastAPI",
          ai: "Time-series analysis, Rule-based recommendation system",
          database: "Firebase / PostgreSQL",
          visualization: "Sleep pattern charts",
        },
        features: [
          "Sleep data input interface",
          "Sleep duration & pattern tracking",
          "Trend analysis dashboard",
          "Personalized recommendation engine",
          "Health tips section",
          "Sleep visualization charts",
        ],
        deliverables: [
          "Sample sleep dataset",
          "Recommendation logic description",
          "Dashboard screenshots",
        ],
        notes: [
          "Wearable device integration optional",
          "Health disclaimer required (Not a medical diagnosis)",
        ],
      },
    ],
  },

  "remote-patient-monitoring": {
    domainTitle: "Healthcare Technology",
    image: healthcareImg,
    objective:
      "Enable continuous remote health monitoring and early abnormality detection using simulated IoT-based patient vitals tracking.",
    additionalContent: [
      "Display patient health metrics.",
      "Detect abnormal readings. ",
      "Generate alerts.",
    ],
    problems: [
      {
        title: "Problem Statement : 4 - Remote Patient Monitoring Dashboard (IoT Simulation Allowed)",
        description:
          "Develop a real-time dashboard that monitors patient vitals, detects abnormal patterns, and generates alerts for healthcare providers.",
        techStack: {
          frontend: "React Dashboard",
          backend: "Node.js / Python FastAPI",
          iot: "MQTT / Dummy data generator",
          database: "InfluxDB / TimescaleDB / PostgreSQL",
          visualization: "Real-time charts",
        },
        features: [
          "Real-time or simulated vital signs dashboard",
          "Abnormal value detection system",
          "Automated alert generation",
          "Patient history visualization",
          "Role-based access (Doctor/Patient optional)",
        ],
        deliverables: [
          "Simulated data generator",
          "Alert trigger demonstration",
          "Dashboard demo",
        ],
        notes: [
          "Real hardware integration not required",
          "Must demonstrate abnormal scenario detection",
        ],
      },
    ],
  },


  /* ============================= */
  /* DOMAIN 3 — SUSTAINABLE ENV    */
  /* ============================= */

  "food-waste-management": {
    domainTitle: "Sustainable Environment & Green Technology",
    image: sustainableImg,
    objective:
      "Reduce food waste and improve redistribution using AI.",
    additionalContent: [
      "System should:",
      "Predict potential surplus food generation.",
      "Optimize redistribution logistics. ",
      "Minimize food waste and delivery delays. ",
    ],
    problems: [
      {
        title: "Problem Statement : 1 - AI-Powered Food Waste Reduction & Redistribution",
        description:
          "Predict surplus food and optimize redistribution to NGOs.",
        techStack: {
          frontend: "React / Next.js / Flutter",
          backend: "Node.js / FastAPI",
          ai: "Machine Learning / Rule-based forecasting",
          database: "PostgreSQL / Firebase",
          maps: "Google Maps API / Mapbox",
        },
        features: [
          "Food donor registration",
          "NGO matching system",
          "Surplus prediction",
          "Pickup route suggestion",
          "Admin dashboard",
        ],
        deliverables: [
          "GitHub repository",
          "Demo workflow",
          "Sample dataset",
          "Short demo video",
        ],
        notes: [
          "Simulation allowed",
          "Show environmental impact metrics",
        ],
      },
    ],
  },
  "smart-energy-optimization": {
    domainTitle: "Sustainable Environment & Green Technology",
    image: sustainableImg,
    objective:
      "Reduce energy inefficiency and environmental impact using AI-driven consumption monitoring and optimization strategies.",
    additionalContent: [
      "System should:",
      "Visualize energy consumption.",
      "Identify inefficient patterns. ",
      "Identify inefficient patterns. ",
    ],
    problems: [
      {
        title: "Problem Statement : 2 - Smart Energy Efficiency & Consumption Optimization Platform",
        description:
          "Monitor energy usage patterns, detect inefficiencies, and provide AI or rule-based recommendations to optimize consumption and reduce operational costs.",
        techStack: {
          frontend: "React Dashboard (Chart.js / Recharts)",
          backend: "Node.js / FastAPI",
          analytics: "Python (pandas, ML optional)",
          database: "PostgreSQL / TimescaleDB",
        },
        features: [
          "Energy usage dashboard",
          "Consumption visualization charts",
          "Peak consumption detection",
          "Inefficient usage pattern identification",
          "AI or rule-based recommendation engine",
          "Savings estimation feature",
          "Before/After comparison scenario",
        ],
        deliverables: [
          "Sample energy dataset",
          "Visualization screenshots",
          "Recommendation logic explanation",
        ],
        notes: [
          "IoT integration optional (simulation acceptable)",
          "Must demonstrate before/after optimization comparison",
        ],
      },
    ],
  },

  "smart-building-sustainability": {
    domainTitle: "Sustainable Environment & Green Technology",
    image: sustainableImg,
    objective:
      "Promote sustainable infrastructure by monitoring resource consumption and generating sustainability performance scores.",
    additionalContent: [
      "System should:",
      "Monitor resource metrics.",
      "Calculate the sustainability score.",
      "Provide improvement suggestions.",
    ],
    problems: [
      {
        title: "Problem Statement : 3 - Smart Building Sustainability Monitoring System",
        description:
          "Monitor energy, water, and waste metrics to calculate a sustainability score and provide actionable improvement suggestions.",
        techStack: {
          frontend: "React / Angular Dashboard",
          database: "PostgreSQL",
          backend: "Node.js / Python FastAPI",
          ai: "Pattern analysis / Scoring algorithms (optional)",
        },
        features: [
          "Multi-resource monitoring (energy & water minimum)",
          "Sustainability scoring system",
          "Dashboard with sustainability insights",
          "Historical trend visualization",
          "Improvement recommendation suggestions",
        ],
        deliverables: [
          "Mock building dataset",
          "Sustainability scoring explanation",
          "Dashboard demo",
        ],
        notes: [
          "Real sensor integration optional",
          "Transparency in scoring logic is required",
        ],
      },
    ],
  },

  "soil-health-advisor": {
    domainTitle: "Sustainable Environment & Green Technology",
    image: sustainableImg,
    objective:
      "Enhance sustainable agriculture through AI-based soil analysis and eco-friendly farming recommendations.",
    additionalContent: [
      "System should:",
      "Analyze soil data inputs (pH, moisture, nutrients).",
      "Suggest sustainable crop and fertilizer practices. ",
      "Improve yield while minimizing environmental damage.",
    ],
    problems: [
      {
        title: "Problem Statement : 4 - AI-Based Soil Health & Sustainable Farming Advisor",
        description:
          "Analyze soil parameters such as pH, moisture, and nutrients to recommend sustainable crops and fertilizer practices while minimizing environmental damage.",
        techStack: {
          frontend: "React / Flutter",
          backend: "Python FastAPI",
          ai: "scikit-learn (ML recommendation engine) / Rule-based system",
          database: "PostgreSQL",
        },
        features: [
          "Soil parameter input form",
          "Crop recommendation system",
          "Fertilizer recommendation engine",
          "Sustainability score / Eco-impact indicator",
          "Farmer-friendly user interface",
          "Explainable AI recommendations",
        ],
        deliverables: [
          "Sample soil dataset",
          "Recommendation explanation",
          "Demo workflow",
        ],
        notes: [
          "Use open agricultural datasets or mock data",
          "Avoid black-box outputs (explain recommendations clearly)",
        ],
      },
    ],
  },

  /* ============================= */
  /* DOMAIN 4 — AI & AUTOMATION    */
  /* ============================= */

  "resume-screening": {
    domainTitle: "AI & Automation",
    image: aiImg,
    objective:
      "Automate resume screening and skill matching using AI.",
    additionalContent: [
      "Detect phishing patterns using AI or rule-based analysis.",
      "Alert users about potential cyber threats.",
      "Provide educational guidance to improve cyber safety awareness.",
    ],
    problems: [
      {
        title: "Problem Statement : 1 - Intelligent Resume Screening & Skill Matching Platform",
        description:
          "Analyze resumes and match candidates with job roles using NLP.",
        techStack: {
          frontend: "React / Next.js",
          backend: "Python FastAPI / Node.js",
          ai: "spaCy / Hugging Face NLP",
          database: "PostgreSQL / MongoDB",
        },
        features: [
          "Resume upload",
          "Skill extraction",
          "Matching score",
          "Candidate ranking",
        ],
        deliverables: [
          "Sample resumes",
          "Matching demo",
          "Logic explanation",
        ],
        notes: [
          "Bias mitigation required",
          "Transparent matching logic",
        ],
      },
    ],
  },
  "academic-integrity": {
    domainTitle: "AI & Automation",
    image: aiImg,
    objective:
      "Ensure academic integrity by detecting plagiarism, paraphrased content, and AI-generated submissions using advanced NLP techniques.",
    additionalContent: [
      "Detect phishing patterns using AI or rule-based analysis.",
      "Alert users about potential cyber threats.",
      "Provide educational guidance to improve cyber safety awareness.",
    ],
    problems: [
      {
        title: "Problem Statement : 2 - AI Academic Integrity & Plagiarism Detection System",
        description:
          "Develop an AI-powered platform that compares academic documents, detects paraphrased plagiarism, and provides similarity scoring with explainable results.",
        techStack: {
          frontend: "React / Next.js",
          backend: "Python FastAPI",
          ai: "Sentence Transformers, Embedding Similarity, Cosine Similarity",
          database: "PostgreSQL",
          optional: "Code similarity tools (for programming assignments)",
        },
        features: [
          "Document upload interface",
          "Similarity detection output",
          "Paraphrased plagiarism detection",
          "Highlighted matching sections",
          "Confidence score display",
          "Explainable similarity results",
        ],
        deliverables: [
          "Sample academic documents",
          "Similarity comparison demonstration",
          "Model explanation",
        ],
        notes: [
          "Must provide explainable results",
          "Do not rely only on simple string matching",
        ],
      },
    ],
  },

  "personalized-learning": {
    domainTitle: "AI & Automation",
    image: aiImg,
    objective:
      "Enhance student learning outcomes through AI-driven personalized learning path recommendations.",
    additionalContent: [
      "Detect phishing patterns using AI or rule-based analysis.",
      "Alert users about potential cyber threats.",
      "Provide educational guidance to improve cyber safety awareness.",
    ],
    problems: [
      {
        title: "Problem Statement : 3 - AI-Based Personalized Learning Path Generator",
        description:
          "Analyze student performance data to identify skill gaps and generate adaptive, personalized learning paths.",
        techStack: {
          frontend: "React / Flutter",
          backend: "Python FastAPI",
          ai: "Recommendation systems (Rule-based / ML models)",
          database: "Firebase / PostgreSQL",
        },
        features: [
          "Student profile creation",
          "Skill assessment input",
          "Skill gap identification",
          "Personalized learning path generation",
          "Progress tracking dashboard",
          "Adaptive updates based on progress",
        ],
        deliverables: [
          "Demo student dataset",
          "Recommendation logic explanation",
          "Learning path visualization",
        ],
        notes: [
          "Must justify recommendation logic",
          "Include adaptive updates when progress changes",
        ],
      },
    ],
  },

  "skill-intelligence-platform": {
    domainTitle: "AI & Automation",
    image: aiImg,
    objective:
      "Bridge the gap between academic skills and industry demands using AI-powered skill intelligence and job role mapping.",
    additionalContent: [
      "Detect phishing patterns using AI or rule-based analysis.",
      "Alert users about potential cyber threats.",
      "Provide educational guidance to improve cyber safety awareness.",
    ],
    problems: [
      {
        title: "Problem Statement : 4 - AI Skill Intelligence Platform for Industry Readiness",
        description:
          "Analyze student skills or resumes, map them to industry job roles, identify skill gaps, and recommend targeted training pathways.",
        techStack: {
          frontend: "React / Next.js",
          backend: "Python FastAPI",
          ai: "NLP Skill Extraction, Recommendation Engine",
          database: "PostgreSQL",
          optional: "Knowledge Graph (Advanced teams)",
        },
        features: [
          "Skill input or resume upload",
          "Job role mapping engine",
          "Skill gap analysis",
          "Training and certification recommendations",
          "Industry skill taxonomy integration",
        ],
        deliverables: [
          "Sample job role dataset",
          "Skill matching demonstration",
          "AI recommendation explanation",
        ],
        notes: [
          "Must include industry skill taxonomy",
          "Explain matching criteria clearly",
        ],
      },
    ],
  },

};

export default function Domain() {
  const imageRef = useRef(null);
  const rowRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !rowRef.current) return;

      const rowTop = rowRef.current.offsetTop;
      const rowHeight = rowRef.current.offsetHeight;
      const imageHeight = imageRef.current.offsetHeight;

      const scrollY = window.scrollY;
      const offsetTop = 120; // distance from navbar

      // start moving when row enters viewport
      if (scrollY > rowTop - offsetTop) {
        const maxMove = rowHeight - imageHeight - offsetTop;

        let moveY = scrollY - rowTop + offsetTop;

        if (moveY > maxMove) moveY = maxMove;
        if (moveY < 0) moveY = 0;

        setOffsetY(moveY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { domainId } = useParams();
  const domain = domainData[domainId];
  const [expandedSections, setExpandedSections] = useState({});

  if (!domain) {
    return (
      <h2 style={{ color: "#fff", textAlign: "center", marginTop: "120px" }}>
        Domain Not Found
      </h2>
    );
  }

  const toggleSection = (index, section) => {
    const key = `${index}-${section}`;
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="domain-section">
      <motion.div
        className="domain-header"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>{domain.domainTitle}</h2>
        <p>{domain.objective}</p>
      </motion.div>

      {domain.problems.map((problem, index) => (
        <motion.div
          ref={rowRef}
          key={index}
          className="domain-row"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          {/* LEFT — CONTENT CARD */}
          <div className="domain-problem">
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
            {/*             
        <p>{domain.additionalContent}</p> */}
            {(problem.additionalContent || domain.additionalContent) && (
              <ul className="problem-extra">
                {(problem.additionalContent || domain.additionalContent).map((point, i) => (
                  <li key={i}> {point}</li>
                ))}
              </ul>
            )}


            {/* TECH STACK DROPDOWN */}
            <div className="dropdown-section">
              <button
                className="dropdown-toggle"
                onClick={() => toggleSection(index, "techStack")}
              >
                <span className={`dropdown-icon ${expandedSections[`${index}-techStack`] ? "open" : ""}`}>
                  ▶
                </span>
                Recommended Tech Stack
              </button>
              {expandedSections[`${index}-techStack`] && (
                <ul className="dropdown-content">
                  {Object.values(problem.techStack).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* FEATURES DROPDOWN */}
            <div className="dropdown-section">
              <button
                className="dropdown-toggle"
                onClick={() => toggleSection(index, "features")}
              >
                <span className={`dropdown-icon ${expandedSections[`${index}-features`] ? "open" : ""}`}>
                  ▶
                </span>
                Mandatory Features
              </button>
              {expandedSections[`${index}-features`] && (
                <ul className="dropdown-content">
                  {problem.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* DELIVERABLES DROPDOWN */}
            <div className="dropdown-section">
              <button
                className="dropdown-toggle"
                onClick={() => toggleSection(index, "deliverables")}
              >
                <span className={`dropdown-icon ${expandedSections[`${index}-deliverables`] ? "open" : ""}`}>
                  ▶
                </span>
                Deliverables
              </button>
              {expandedSections[`${index}-deliverables`] && (
                <ul className="dropdown-content">
                  {problem.deliverables.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* INSTRUCTIONS DROPDOWN */}
            <div className="dropdown-section">
              <button
                className="dropdown-toggle"
                onClick={() => toggleSection(index, "notes")}
              >
                <span className={`dropdown-icon ${expandedSections[`${index}-notes`] ? "open" : ""}`}>
                  ▶
                </span>
                Special Instructions
              </button>
              {expandedSections[`${index}-notes`] && (
                <ul className="dropdown-content">
                  {problem.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* RIGHT — FLOATING IMAGE */}
          <div
            className="domain-side-image"
            ref={imageRef}
            style={{ transform: `translateY(${offsetY}px)` }}
          >
            <img src={domain.image} alt="Domain Visual" />
          </div>

        </motion.div>
      ))}

    </section>
  );
}
