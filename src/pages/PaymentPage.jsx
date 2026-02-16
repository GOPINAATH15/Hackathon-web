import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/payment.css";

export default function PaymentPage() {
  const navigate = useNavigate();

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzv2IGTVMyONWLAYTms2gWv9b04JQsAhkL-AuKHwJ8WfKVouxZgtMm5Bs6zPyghacZs/exec";

  const [formData, setFormData] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const [screenshot, setScreenshot] = useState(null);
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

  useEffect(() => {
    const savedData = localStorage.getItem("hackathonFormData");
    if (!savedData) {
      showToast("⚠ Please register first.", "error");
      setTimeout(() => navigate("/"), 2000);
      return;
    }
    setFormData(JSON.parse(savedData));
  }, [navigate]);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const base64Data = reader.result.split(",")[1];
        resolve(base64Data);
      };

      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!transactionId.trim()) {
      showToast("❌ Transaction ID is required", "error");
      return;
    }

    // if (transactionId.length !== 12) {
    //   showToast("❌ Transaction ID must be exactly 12 characters", "error");
    //   return;
    // }

    if (!screenshot) {
      showToast("❌ Please upload screenshot", "error");
      return;
    }

    setLoading(true);

    try {
      const base64Image = await convertToBase64(screenshot);
      const fileType = screenshot.name.split(".").pop().toLowerCase();

      const sendData = new FormData();
      sendData.append("action", "finalSubmit");

      sendData.append("teamName", formData.teamName);
      sendData.append("institutionName", formData.institutionName);
      sendData.append("institutionType", formData.institutionType);
      sendData.append("institutionCity", formData.institutionCity);
      sendData.append("institutionState", formData.institutionState);

      sendData.append("leaderName", formData.leaderName);
      sendData.append("leaderGender", formData.leaderGender);
      sendData.append("leaderCourse", formData.leaderCourse);
      sendData.append("leaderYear", formData.leaderYear);
      sendData.append("leaderMobile", formData.leaderMobile);
      sendData.append("leaderEmail", formData.leaderEmail);

      sendData.append("member2Name", formData.member2Name);
      sendData.append("member2Gender", formData.member2Gender);
      sendData.append("member2Mobile", formData.member2Mobile);
      sendData.append("member2Email", formData.member2Email);

      sendData.append("member3Name", formData.member3Name);
      sendData.append("member3Gender", formData.member3Gender);
      sendData.append("member3Mobile", formData.member3Mobile);
      sendData.append("member3Email", formData.member3Email);

      sendData.append("member4Name", formData.member4Name || "");
      sendData.append("member4Gender", formData.member4Gender || "");
      sendData.append("member4Mobile", formData.member4Mobile || "");
      sendData.append("member4Email", formData.member4Email || "");

      sendData.append("domain", formData.domain);
      sendData.append("problemStatement", formData.problemStatement);

      sendData.append("transactionId", transactionId);
      sendData.append("screenshot", base64Image);
      sendData.append("fileType", fileType);

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: sendData
      });

      const result = await response.json();

      if (result.status === "success") {
        showToast("✅ Payment Submitted Successfully!", "success");
        localStorage.removeItem("hackathonFormData");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        showToast("❌ " + result.message, "error");
      }
    } catch (err) {
      console.error(err);
      showToast("❌ Server error. Try again later.", "error");
    }

    setLoading(false);
  };

  if (!formData) return null;

  return (
    <div className="payment-wrapper">
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
        className="payment-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="payment-title">Payment Submission</h1>

        <div className="payment-details-box">
          <p><b>Account Name:</b> HACKATHON EVENT</p>
          <p><b>Account No:</b> 123456789012</p>
          <p><b>IFSC Code:</b> SBIN0001234</p>
          <p><b>Bank Name:</b> STATE BANK OF INDIA</p>
          <p><b>Branch:</b> CHENNAI</p>

          <div className="qr-box">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HACKATHON_PAYMENT"
              alt="QR Code"
              className="qr-img"
            />
          </div>

          <p className="scan-text">Scan to Pay</p>
        </div>

        <div className="team-box">
          <p><b>Team Name:</b> {formData.teamName}</p>
          <p><b>Leader Email:</b> {formData.leaderEmail}</p>
          <p><b>Members:</b> {formData.memberCount || 3}</p>
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label>Transaction ID *</label>
            <input
              type="text"
              value={transactionId}
              onChange={(e) => {
                const val = e.target.value
                  .replace(/[^A-Za-z0-9]/g, "")
                  .toUpperCase();
                // .slice(0, 12);

                setTransactionId(val);
              }}
              placeholder="Enter Transaction ID"
            />
            <small className="hint-text">
              Only A-Z and 0-9 allowed (12 characters)
            </small>
          </div>

          <div className="form-group">
            <label>Upload Screenshot *</label>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={(e) => setScreenshot(e.target.files[0])}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="submit-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Payment"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}