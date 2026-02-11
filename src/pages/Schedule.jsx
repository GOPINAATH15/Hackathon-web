import { motion } from "framer-motion";
import "../styles/components.css";
import bgImage from "../assets/schedule-bg.jpg";

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
    { time: "09:00 – 09:30 AM", title: "Registration & ID Verification", icon: <FaUserCheck /> },
    { time: "09:30 – 10:00 AM", title: "Opening Ceremony & Briefing", icon: <FaMicrophone /> },
    { time: "10:00 AM", title: "Hackathon Development Begins (24 Hours)", icon: <FaCode /> },
    { time: "10:00 – 12:00 PM", title: "Ideation Refinement & Architecture Setup", icon: <FaLightbulb /> },
    { time: "12:00 – 01:00 PM", title: "Development Sprint – Phase 1", icon: <FaLaptopCode /> },
    { time: "01:00 – 02:00 PM", title: "Lunch Break", icon: <FaUtensils /> },
    { time: "02:00 – 05:30 PM", title: "Core Development Sprint", icon: <FaLaptopCode /> },
    { time: "03:30 – 05:30 PM", title: "Mentor Interaction Sessions", icon: <FaUserTie /> },
    { time: "05:30 – 06:30 PM", title: "Mandatory Mid Checkpoint Review", icon: <FaClipboardCheck /> },
    { time: "06:30 – 08:00 PM", title: "Development Sprint – Phase 2", icon: <FaLaptopCode /> },
    { time: "08:00 – 09:00 PM", title: "Dinner Break", icon: <FaUtensils /> },
    { time: "09:00 PM – 12:00 AM", title: "Night Coding Sprint", icon: <FaMoon /> },
  ];

  const day2 = [
    { time: "12:00 – 03:00 AM", title: "Advanced Development & Integration", icon: <FaCode /> },
    { time: "03:00 – 03:30 AM", title: "Refreshment Break", icon: <FaUtensils /> },
    { time: "03:30 – 07:00 AM", title: "Final Development Phase", icon: <FaLaptopCode /> },
    { time: "07:00 – 08:00 AM", title: "Breakfast Break", icon: <FaUtensils /> },
    { time: "08:00 – 09:00 AM", title: "Testing & Debugging", icon: <FaBug /> },
    { time: "09:00 – 10:00 AM", title: "Presentation Preparation", icon: <FaMicrophone /> },
    { time: "10:00 – 10:30 AM", title: "Final Submission Upload", icon: <FaUpload /> },
    { time: "10:30 AM", title: "Development Ends (Final Submission Deadline)", icon: <FaClipboardCheck /> },
    { time: "10:00 – 10:45 AM", title: "Parallel Judging & Rapid Demo Pitch", icon: <FaGavel /> },
    { time: "10:45 – 11:00 AM", title: "Result Announcement & Closing Ceremony", icon: <FaTrophy /> },
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
