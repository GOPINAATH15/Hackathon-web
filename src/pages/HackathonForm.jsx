import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";

export default function HackathonForm() {
  const navigate = useNavigate();

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const institutionTypes = ["Engineering College", "Arts & Science College", "University"];

  const courses = [
    "B.E / B.Tech Computer Science & Engineering",
    "B.E / B.Tech IT",
    "B.E / B.Tech AI & Data Science",
    "B.E / B.Tech AI & ML",
    "B.E / B.Tech Cyber Security",
    "Other Engineering Computing Program",
    "B.Sc Computer Science",
    "BCA",
    "B.Sc IT",
    "B.Sc Computer Technology",
    "B.Sc AI & Data Science",
    "B.Sc Cyber Security",
    "Other Computing Program",
    "MCA",
    "M.Sc. Software Systems",
    "M.Sc Computer Science",
    "Other PG Computing Program"
  ];

  const domains = [
    "Domain 1: Women's Safety & Social Security",
    "Domain 2: Healthcare Technology",
    "Domain 3: Sustainable Environment & Green Technology",
    "Domain 4: AI & Automation"
  ];

  const problemStatements = {
    "Domain 1: Women's Safety & Social Security": [
      "Cyber Safety Awareness & Phishing Detection Platform",
      "Night Safety Risk Prediction System",
      "AI-Based Personal Safety Companion",
      "Cyber Harassment Detection & Prevention Platform"
    ],
    "Domain 2: Healthcare Technology": [
      "AI-Based Early Disease Risk Prediction",
      "Smart Emergency Response Coordination",
      "AI Sleep Health Monitoring",
      "Remote Patient Monitoring Dashboard"
    ],
    "Domain 3: Sustainable Environment & Green Technology": [
      "AI Food Waste Reduction",
      "Smart Energy Optimization",
      "Smart Building Sustainability",
      "AI Soil Health Advisor"
    ],
    "Domain 4: AI & Automation": [
      "Intelligent Resume Screening",
      "AI Academic Integrity Detection",
      "Personalized Learning Path Generator",
      "AI Skill Intelligence Platform"
    ]
  };

  const [formData, setFormData] = useState({
    teamName: "",
    institutionName: "",
    institutionType: "",
    institutionCity: "",
    institutionState: "",

    leaderName: "",
    leaderGender: "",
    leaderCourse: "",
    leaderYear: "",
    leaderMobile: "",
    leaderEmail: "",

    member2Name: "",
    member2Gender: "",
    member2Mobile: "",
    member2Email: "",

    member3Name: "",
    member3Gender: "",
    member3Mobile: "",
    member3Email: "",

    member4Name: "",
    member4Gender: "",
    member4Mobile: "",
    member4Email: "",

    domain: "",
    problemStatement: ""
  });

  const [memberCount, setMemberCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState("");

  const showToast = (message, type = "error") => {
    setToastMsg(message);
    setToastType(type);

    setTimeout(() => {
      setToastMsg("");
      setToastType("");
    }, 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ ALL NAME FIELDS CAPS
    const upperFields = [
      "teamName",
      "institutionName",
      "institutionCity",
      "leaderName",
      "member2Name",
      "member3Name",
      "member4Name"
    ];

    if (name === "domain") {
      setFormData((prev) => ({
        ...prev,
        domain: value,
        problemStatement: ""
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: upperFields.includes(name) ? value.toUpperCase() : value
    }));
  };

  const validateMobileRange = (mobile) => {
    if (mobile.length !== 10) return false;
    const num = Number(mobile);
    return num >= 5555555555 && num <= 9999999999;
  };

  const validateForm = () => {
    if (!formData.teamName.trim()) return "Please enter Team Name";
    if (!formData.institutionName.trim()) return "Please enter Institution Name";
    if (!formData.institutionType.trim()) return "Please select Institution Type";
    if (!formData.institutionCity.trim()) return "Please enter Institution City";
    if (!formData.institutionState.trim()) return "Please select Institution State";

    if (!formData.leaderName.trim()) return "Please enter Leader Name";
    if (!formData.leaderGender.trim()) return "Please select Leader Gender";
    if (!formData.leaderCourse.trim()) return "Please select Leader Course";
    if (!formData.leaderYear.trim()) return "Please select Leader Year";
    if (!formData.leaderMobile.trim()) return "Please enter Leader Mobile";
    if (!formData.leaderEmail.trim()) return "Please enter Leader Email";

    if (!formData.member2Name.trim()) return "Please enter Member 2 Name";
    if (!formData.member2Gender.trim()) return "Please select Member 2 Gender";
    if (!formData.member2Mobile.trim()) return "Please enter Member 2 Mobile";
    if (!formData.member2Email.trim()) return "Please enter Member 2 Email";

    if (!formData.member3Name.trim()) return "Please enter Member 3 Name";
    if (!formData.member3Gender.trim()) return "Please select Member 3 Gender";
    if (!formData.member3Mobile.trim()) return "Please enter Member 3 Mobile";
    if (!formData.member3Email.trim()) return "Please enter Member 3 Email";

    if (memberCount === 4) {
      if (!formData.member4Name.trim()) return "Please enter Member 4 Name";
      if (!formData.member4Gender.trim()) return "Please select Member 4 Gender";
      if (!formData.member4Mobile.trim()) return "Please enter Member 4 Mobile";
      if (!formData.member4Email.trim()) return "Please enter Member 4 Email";
    }

    if (!formData.domain.trim()) return "Please select Domain";
    if (!formData.problemStatement.trim()) return "Please select Problem Statement";

    // ✅ MOBILE NUMBER CHECKS
    if (!validateMobileRange(formData.leaderMobile))
      return "Leader mobile must be between 5555555555 and 9999999999";

    if (!validateMobileRange(formData.member2Mobile))
      return "Member 2 mobile must be between 5555555555 and 9999999999";

    if (!validateMobileRange(formData.member3Mobile))
      return "Member 3 mobile must be between 5555555555 and 9999999999";

    if (memberCount === 4 && !validateMobileRange(formData.member4Mobile))
      return "Member 4 mobile must be between 5555555555 and 9999999999";

    // Female Mandatory Rule
    const genders = [
      formData.leaderGender,
      formData.member2Gender,
      formData.member3Gender,
      memberCount === 4 ? formData.member4Gender : ""
    ];

    if (!genders.includes("Female")) {
      return "At least one Female member is mandatory in each team";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      showToast("❌ " + error, "error");
      return;
    }

    setLoading(true);

    localStorage.setItem(
      "hackathonFormData",
      JSON.stringify({ ...formData, memberCount })
    );

    showToast("✅ Registration Validated! Redirecting to Payment...", "success");

    setTimeout(() => {
      navigate("/payment");
    }, 1500);

    setLoading(false);
  };

  const addMember = () => {
    if (memberCount >= 4) {
      showToast("⚠ Maximum 4 members allowed.", "error");
      return;
    }

    setMemberCount(4);
    showToast("✅ Member 4 added successfully.", "success");
  };

  const removeMember = () => {
    if (memberCount <= 3) {
      showToast("⚠ Minimum 3 members required.", "error");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      member4Name: "",
      member4Gender: "",
      member4Mobile: "",
      member4Email: ""
    }));

    setMemberCount(3);
    showToast("❌ Member 4 removed successfully.", "success");
  };

  const GenderRadio = ({ name, value, checked, onChange }) => {
    const icon = value === "Male" ? "♂" : "♀";
    return (
      <motion.label
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={`ultra-radio-item ${checked ? "active" : ""}`}
      >
        <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
        <span className="gender-icon">{icon}</span> {value}
      </motion.label>
    );
  };

  return (
    <div className="ultra-page">
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {/* ✅ SMALL CENTER TOAST */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            className={`toast ${toastType}`}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.3 }}
          >
            {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="ultra-layout"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="ultra-card"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="ultra-title">Hackathon Registration</h1>
          <p className="ultra-subtitle">Team Registration (Minimum 3, Maximum 4 Members)</p>

          <form onSubmit={handleSubmit} className="ultra-form">
            <h2 className="ultra-section">Team Details</h2>

            <div className="ultra-grid">
              <div>
                <label>Team Name *</label>
                <input name="teamName" value={formData.teamName} onChange={handleChange} />
              </div>

              <div>
                <label>Institution Name *</label>
                <input name="institutionName" value={formData.institutionName} onChange={handleChange} />
              </div>
            </div>

            <label>Institution Type *</label>
            <div className="ultra-radio">
              {institutionTypes.map((type) => (
                <motion.label
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  key={type}
                  className={`ultra-radio-item ${formData.institutionType === type ? "active" : ""}`}
                >
                  <input
                    type="radio"
                    name="institutionType"
                    value={type}
                    checked={formData.institutionType === type}
                    onChange={handleChange}
                  />
                  {type}
                </motion.label>
              ))}
            </div>

            <div className="ultra-grid">
              <div>
                <label>Institution City *</label>
                <input name="institutionCity" value={formData.institutionCity} onChange={handleChange} />
              </div>

              <div>
                <label>Institution State *</label>
                <select name="institutionState" value={formData.institutionState} onChange={handleChange}>
                  <option value="">-- Select State --</option>
                  {states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <h2 className="ultra-section">Team Leader</h2>

            <div className="ultra-grid">
              <div>
                <label>Leader Name *</label>
                <input name="leaderName" value={formData.leaderName} onChange={handleChange} />
              </div>

              <div>
                <label>Gender *</label>
                <div className="ultra-radio">
                  {["Male", "Female"].map((g) => (
                    <GenderRadio
                      key={g}
                      name="leaderGender"
                      value={g}
                      checked={formData.leaderGender === g}
                      onChange={handleChange}
                    />
                  ))}
                </div>
              </div>
            </div>

            <label>Course *</label>
            <select name="leaderCourse" value={formData.leaderCourse} onChange={handleChange}>
              <option value="">-- Select Course --</option>
              {courses.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <label>Year of Study *</label>
            <div className="ultra-radio">
              {["I Year", "II Year", "III Year", "Final Year", "PG"].map((y) => (
                <motion.label
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  key={y}
                  className={`ultra-radio-item ${formData.leaderYear === y ? "active" : ""}`}
                >
                  <input
                    type="radio"
                    name="leaderYear"
                    value={y}
                    checked={formData.leaderYear === y}
                    onChange={handleChange}
                  />
                  {y}
                </motion.label>
              ))}
            </div>

            <div className="ultra-grid">
              <div>
                <label>Leader Mobile *</label>
                <input
                  name="leaderMobile"
                  value={formData.leaderMobile}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData((prev) => ({ ...prev, leaderMobile: val }));
                  }}
                />
              </div>


              <div>
                <label>Leader Email *</label>
                <input type="email" name="leaderEmail" value={formData.leaderEmail} onChange={handleChange} />
              </div>
            </div>
            <a
              href="https://chat.whatsapp.com/JxYLEvuPTpB1R5gyNuAn1f?mode=gi_c"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              💬 Only Leader Join WhatsApp Group
            </a>
            <h2 className="ultra-section">Member 2</h2>

            <div className="ultra-grid">
              <div>
                <label>Member 2 Name *</label>
                <input name="member2Name" value={formData.member2Name} onChange={handleChange} />
              </div>

              <div>
                <label>Gender *</label>
                <div className="ultra-radio">
                  {["Male", "Female"].map((g) => (
                    <GenderRadio
                      key={g}
                      name="member2Gender"
                      value={g}
                      checked={formData.member2Gender === g}
                      onChange={handleChange}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="ultra-grid">
              <div>
                <label>Member 2 Mobile *</label>
                <input
                  name="member2Mobile"
                  value={formData.member2Mobile}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData((prev) => ({ ...prev, member2Mobile: val }));
                  }}
                />
              </div>

              <div>
                <label>Member 2 Email *</label>
                <input type="email" name="member2Email" value={formData.member2Email} onChange={handleChange} />
              </div>
            </div>

            <h2 className="ultra-section">Member 3</h2>

            <div className="ultra-grid">
              <div>
                <label>Member 3 Name *</label>
                <input name="member3Name" value={formData.member3Name} onChange={handleChange} />
              </div>

              <div>
                <label>Gender *</label>
                <div className="ultra-radio">
                  {["Male", "Female"].map((g) => (
                    <GenderRadio
                      key={g}
                      name="member3Gender"
                      value={g}
                      checked={formData.member3Gender === g}
                      onChange={handleChange}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="ultra-grid">
              <div>
                <label>Member 3 Mobile *</label>
                <input
                  name="member3Mobile"
                  value={formData.member3Mobile}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData((prev) => ({ ...prev, member3Mobile: val }));
                  }}
                />
              </div>

              <div>
                <label>Member 3 Email *</label>
                <input type="email" name="member3Email" value={formData.member3Email} onChange={handleChange} />
              </div>
            </div>

            <AnimatePresence>
              {memberCount === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 25 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="ultra-section">Member 4</h2>

                  <div className="ultra-grid">
                    <div>
                      <label>Member 4 Name *</label>
                      <input name="member4Name" value={formData.member4Name} onChange={handleChange} />
                    </div>

                    <div>
                      <label>Gender *</label>
                      <div className="ultra-radio">
                        {["Male", "Female"].map((g) => (
                          <GenderRadio
                            key={g}
                            name="member4Gender"
                            value={g}
                            checked={formData.member4Gender === g}
                            onChange={handleChange}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="ultra-grid">
                    <div>
                      <label>Member 4 Mobile *</label>
                      <input
                        name="member4Mobile"
                        value={formData.member4Mobile}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                          setFormData((prev) => ({ ...prev, member4Mobile: val }));
                        }}
                      />
                    </div>

                    <div>
                      <label>Member 4 Email *</label>
                      <input type="email" name="member4Email" value={formData.member4Email} onChange={handleChange} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="member-btn-row">
              {memberCount < 4 && (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="member-btn add-btn"
                  onClick={addMember}
                >
                  ➕ Add Member 4 ({memberCount}/4)
                </motion.button>
              )}

              {memberCount === 4 && (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="member-btn remove-btn"
                  onClick={removeMember}
                >
                  ✖ Remove Member 4
                </motion.button>
              )}
            </div>

            <h2 className="ultra-section">Domain Selection</h2>

            <label>Select Domain *</label>
            <select name="domain" value={formData.domain} onChange={handleChange}>
              <option value="">-- Select Domain --</option>
              {domains.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            <label>Select Problem Statement *</label>
            <select
              name="problemStatement"
              value={formData.problemStatement}
              onChange={handleChange}
              disabled={!formData.domain}
            >
              <option value="">-- Select Problem Statement --</option>
              {formData.domain &&
                problemStatements[formData.domain].map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
            </select>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="ultra-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Proceed to Payment"}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="ultra-guide"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Hackathon Guide</h2>

          <div className="guide-card">
            <h3>👥 Team Rules</h3>
            <p>Minimum <b>3 Members</b> and Maximum <b>4 Members</b>.</p>
            <p>At least <b>1 Female</b> member is mandatory.</p>
          </div>

          <div className="guide-card">
            <h3>📌 Domain Selection</h3>
            <p>Select correct <b>Domain</b> and matching <b>Problem Statement</b>.</p>
          </div>

          <div className="guide-card">
            <h3>🪪 Verification</h3>
            <p>Please bring your <b>College ID</b> on event day.</p>
          </div>

          <div className="guide-card">
            <h3>📅 Event Info</h3>
            <p>Reporting Time: <b>9:00 AM</b></p>
            <p>Hackathon Duration: <b>24 Hours</b></p>
          </div>
          <div className="female-warning-box">
            ⚠ At least <b>1 Female Candidate</b> is Mandatory in Each Team
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}