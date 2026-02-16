import { motion } from "framer-motion";
// import "../styles/components.css";
import "../styles/Schedule.css";
// import bgImage from "../assets/schedule-bg.jpg";

import {
  FaUserCheck,
  FaMicrophone,
  FaCode,
  FaLightbulb,
  FaLaptopCode,
  FaUtensils,
  FaUserTie,
  FaClipboardCheck,
  FaMoon,
  FaBug,
  FaUpload,
  FaGavel,
  FaTrophy,
} from "react-icons/fa";

export default function Schedule() {
  const day1 = [
    {
      time: "09:00 – 09:30 AM", title: "Registration, ID Verification & Kit Distribution ID cards, goodies, food coupons, Wi- Fi access ", icon: <FaUserCheck /> },
    { time: "09:30 – 10:00 AM", title: "Inaugural Function & Chief Guest Address ", icon: <FaMicrophone /> },
    { time: "10:00 – 10:15 PM", title: "Hackathon Briefing — Rules, judging criteria, themes & schedule explanation", icon: <FaLightbulb /> },
    { time: "10:15 – 10:30 PM", title: "Team Setup & Problem Statement Finalization", icon: <FaLaptopCode /> },
    { time: "10:30 AM ", title: "Hackathon Development Begins (30 Hours)", icon: <FaCode /> },
    { time: "10:30 AM – 01:00 PM", title: "Coding Session Round 1 - Prototype Setup & Initial Development", icon: <FaLaptopCode /> },
    { time: "01:00 PM – 02:00 PM", title: "Lunch Break", icon: <FaUtensils /> },
    { time: "02:00 – 03:30 PM", title: "Coding Session Round 1 (Continued) - Core Development ", icon: <FaClipboardCheck /> },
    { time: "03:30 – 05:30 PM", title: "Mentor Interaction Sessions ", icon: <FaLaptopCode /> },
    { time: "05:30 – 06:30 PM", title: "Coding Session Round 2 & Midway Evaluation – 1", icon: <FaLaptopCode /> },
    { time: "06:30 PM – 08:00 PM", title: "Development Sprint - Feature Enhancement", icon: <FaLaptopCode /> },
    { time: "08:00 PM – 09:00 PM", title: "Dinner Break (Relaxation & Networking)", icon: <FaUtensils /> },
    { time: "09:00 PM – 12:00 AM", title: "Night Coding Sprint", icon: <FaLaptopCode /> },
  ];

  const day2 = [
    { time: "12:00 – 03:00 AM", title: "Coding Session Round 3 (Night Sprint) - Advanced Development ", icon: <FaLaptopCode /> },
    { time: "03:00 – 03:30 AM", title: "Tea & Refreshment Break", icon: <FaUtensils /> },
    { time: "03:30 – 07:00 AM", title: "Coding Session Round 3 Continued & Midway Evaluation – 2", icon: <FaLaptopCode /> },
    { time: "07:00 – 08:00 AM", title: "Breakfast Break", icon: <FaUtensils /> },
    { time: "08:00 – 09:30 AM", title: " Testing, Debugging & Final Development", icon: <FaBug /> },
    { time: "09:30 – 10:30 AM", title: "Presentation Preparation & Demo Rehearsal ", icon: <FaMicrophone /> },
    { time: "10:30 – 11:00 AM", title: "Final Coding & Code Freeze — Final Submission Upload", icon: <FaUpload /> },
    { time: "11:00 – 11:45 AM", title: "Project Presentation & Evaluation (Rapid Demo Pitch + Q&A)", icon: <FaGavel /> },
    { time: "11:45 – 12:30 PM", title: "Valedictory Function — Prize Distribution & Closing", icon: <FaTrophy /> },
  ];

  const renderTimeline = (events) =>
    events.map((event, index) => (
      <motion.div
        key={index}
        className={`schedule-item ${index % 2 === 0 ? "left" : "right"}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="schedule-icon">{event.icon}</div>
        <div className="schedule-time">{event.time}</div>
        <h3>{event.title}</h3>
      </motion.div>
    ));

  return (
    <section
      id="schedule">



      <h2>Event Schedule</h2>

      {/* DAY 1 */}
      <div className="day-header">Day 1 – Hackathon Kickoff</div>
      <div className="timeline">{renderTimeline(day1)}</div>

      {/* DAY 2 */}
      <div className="day-header">Day 2 – Final Submission & Results</div>
      <div className="timeline">{renderTimeline(day2)}</div>
    </section>
  );
}
