import { motion } from "framer-motion";
import "../styles/Rules.css";

export default function Rules() {
  const rulesData = [
    {
      title: "Team Formation",
      points: [
        "Each team must consist of exactly 3 members",
        "All members must belong to the same college/institution",
        "Cross-college teams are strictly not permitted",
        "Each participant may join only one team",
        "One member must be nominated as Team Leader",
        "Valid college ID is mandatory for verification",
        "Organizers reserve the right to approve or reject registrations",
      ],
    },
    {
      title: "Registration Details",
      points: [
        "Registration Fee: ₹1000 per team",
        "Registration is confirmed only after successful payment",
        "Registration fee is non-refundable",
        "Teams must complete registration before the deadline",
        "Problem statement must be selected during registration",
      ],
    },
    {
      title: "Hackathon Structure",
      points: [
        "The hackathon is conducted in two phases",
        "Phase I: Idea Submission (Abstract, solution, tech stack, SDG alignment)",
        "Shortlisted teams advance to Phase II",
        "Phase II: 24-hour on-campus hackathon",
        "Teams must build a working prototype or MVP",
      ],
    },
    {
      title: "Project Development",
      points: [
        "All core coding must be done during the 24-hour hackathon",
        "Open-source libraries, frameworks, and APIs are allowed",
        "Projects must align with at least one UN SDG",
        "Solutions must be original and developed by the team",
        "AI tools are allowed, but core logic must be written by participants",
      ],
    },
    {
      title: "Submission Requirements",
      points: [
        "Working prototype or MVP demonstration",
        "Source code via GitHub or equivalent platform",
        "README documentation",
        "Presentation deck (PPT/PDF)",
        "All submissions must be completed before the deadline",
      ],
    },
    {
      title: "Judging Criteria",
      points: [
        "Innovation & Creativity – 25%",
        "Technical Implementation – 25%",
        "SDG Impact & Relevance – 25%",
        "Presentation & Demo Quality – 15%",
        "Feasibility & Scalability – 10%",
        "Judges’ decisions are final",
      ],
    },
    {
      title: "Event Conduct",
      points: [
        "Participants must be present for the entire duration",
        "Teams must check in at designated times",
        "Mentorship sessions will be available",
        "Meals and breaks will be provided as scheduled",
        "Professional behaviour is mandatory",
        "Organizers’ decisions are final",
      ],
    },
    {
      title: "General Rules",
      points: [
        "Valid college ID and government-issued ID are mandatory",
        "Internet connectivity will be provided",
        "Intellectual property rights must be respected",
        "Photography/videography may be conducted",
        "Participants are responsible for personal equipment",
        "Plagiarism or code theft leads to disqualification",
        "Harassment or misconduct will not be tolerated",
        "Safety and security protocols must be followed",
        "Organizers reserve the right to modify rules if required",
      ],
    },
  ];

  return (
    <motion.section
      id="rules"
      className="rules"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2>Rules & Regulations</h2>

      <div className="rules-grid">
        {rulesData.map((section, index) => (
          <motion.div
            key={index}
            className="rule-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <h3>{section.title}</h3>
            <ul>
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
