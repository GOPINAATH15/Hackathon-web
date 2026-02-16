import { motion } from "framer-motion";
import "../styles/Phase.css";

export default function Phase() {
  return (
    <section className="phase-section" id="phases">
      <div className="phase-container">

        <motion.h2
          className="phase-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hackathon Phases
        </motion.h2>

        {/* PHASE I */}
        <motion.div
          className="phase-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Phase I — Registration & Onboarding</h3>
          <ul>
            <li>Form Your Team: 3 or 4 members from the same institution.</li>
            <li>Register : Complete registration & confirm via payment.</li>
            <li>Choose Domain & Problem Statement: Selection will be final.</li>
          </ul>
        </motion.div>

        {/* PHASE II */}
        <motion.div
          className="phase-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Phase II — On-Campus 30-Hour Hackathon</h3>
          <ul>
            <li>Check-in : ID verification & opening briefing.</li>
            <li>Kick-off : Revisit problem & finalize approach.</li>
            <li>Build (30 Hours) : Develop solution using approved tools & AI.</li>
            <li>After (24 Hours) : Elimination will occur</li>
            <li>Mentorship : Progress reviews & technical guidance.</li>
          </ul>
        </motion.div>

        {/* PHASE III */}
        <motion.div
          className="phase-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Phase III — Evaluation & Showcase</h3>
          <ul>
            <li>Final Submission : MVP, source code, documentation.</li>
            <li>Demo & Pitch : Live presentation before judges.</li>
            <li>Showcase & Win : Awards for innovation, SDG impact & excellence.</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
