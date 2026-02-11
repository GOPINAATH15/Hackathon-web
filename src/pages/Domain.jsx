import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
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
        title: "Cyber Safety Awareness & Phishing Detection Platform",
        description:
          "Develop a cybersecurity platform that detects phishing messages, emails, or URLs and provides real-time safety guidance.",
        techStack: {
          frontend: "React / Next.js / Browser Extension",
          backend: "Python FastAPI / Node.js",
          ai: "Hugging Face / scikit-learn",
          database: "PostgreSQL / Firebase",
        },
        features: [
          "Text / email / URL analysis",
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
    problems: [
      {
        title: "Night Safety Risk Prediction System",
        description:
          "AI-driven system that predicts safety risk levels based on location, time, and environment.",
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
    problems: [
      {
        title: "AI-Based Personal Safety Companion",
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
    objective:
      "Detect and prevent cyber harassment using AI and NLP.",
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
    objective:
      "Improve preventive healthcare through AI-based early disease risk prediction.",
    problems: [
      {
        title: "AI-Based Early Disease Risk Prediction System",
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
    objective:
      "Optimize emergency response coordination using digital platforms.",
    problems: [
      {
        title: "Smart Emergency Response Coordination Platform",
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
    problems: [
      {
        title: "AI-Based Sleep Health Monitoring & Recommendation System",
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
    problems: [
      {
        title: "Remote Patient Monitoring Dashboard (IoT Simulation Allowed)",
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
    problems: [
      {
        title: "AI-Powered Food Waste Reduction & Redistribution",
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
    problems: [
      {
        title: "Smart Energy Efficiency & Consumption Optimization Platform",
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
    problems: [
      {
        title: "Smart Building Sustainability Monitoring System",
        description:
          "Monitor energy, water, and waste metrics to calculate a sustainability score and provide actionable improvement suggestions.",
        techStack: {
          frontend: "React / Angular Dashboard",
          backend: "Node.js / Python FastAPI",
          database: "PostgreSQL",
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
    problems: [
      {
        title: "AI-Based Soil Health & Sustainable Farming Advisor",
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
    problems: [
      {
        title: "Intelligent Resume Screening & Skill Matching Platform",
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
    problems: [
      {
        title: "AI Academic Integrity & Plagiarism Detection System",
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
    problems: [
      {
        title: "AI-Based Personalized Learning Path Generator",
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
    problems: [
      {
        title: "AI Skill Intelligence Platform for Industry Readiness",
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
  const { domainId } = useParams();
  const domain = domainData[domainId];

  if (!domain) {
    return (
      <h2 style={{ color: "#fff", textAlign: "center", marginTop: "120px" }}>
        Domain Not Found
      </h2>
    );
  }

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

            <h4>Recommended Tech Stack</h4>
            <ul>
              {Object.values(problem.techStack).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h4>Mandatory Features</h4>
            <ul>
              {problem.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <h4>Deliverables</h4>
            <ul>
              {problem.deliverables.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <h4>Special Instructions</h4>
            <ul>
              {problem.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT — FLOATING IMAGE */}
          <div className="domain-side-image">
            <img src={domain.image} alt="Domain Visual" />
          </div>
        </motion.div>
      ))}

    </section>
  );
}
