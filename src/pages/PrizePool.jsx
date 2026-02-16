import { motion } from "framer-motion";
import "../styles/PrizePool.css";
import cupImg from "../assets/cup.png";
import scupImg from "../assets/silver-cup.png";
import bcupImg from "../assets/bronze-cup.png";
import bImg from "../assets/badge.png";

export default function PrizePool() {
  return (
    <section className="prize-section" id="prizes">

      <motion.div
        className="prize-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Grand Prize Pool</h2>
        {/* <p>Total Worth ₹1,00,000+</p> */}
      </motion.div>

      <div className="luxury-podium">

        {/* 1st */}
        <motion.div
          className="lux-card first"
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="spotlight"></div>
          <div className="medal gold-medal">
            <img src={cupImg} alt="Gold Medal" />
          </div>
          <h3>First Place</h3>
          <h1>₹50,000</h1>
        </motion.div>

        {/* 2nd */}
        <motion.div
          className="lux-card second"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="medal silver-medal">
            <img src={scupImg} alt="Silver Medal" />
          </div>
          <h3>Second Place</h3>
          <h1>₹25,000</h1>
        </motion.div>

        {/* 3rd */}
        <motion.div
          className="lux-card third"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="medal bronze-medal">
            <img src={bcupImg} alt="Bronze Medal" />
          </div>
          <h3>Third Place</h3>
          <h1>₹15,000</h1>
        </motion.div>

        {/* Special Category */}
        <motion.div
          className="lux-card special"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="medal bronze-medal">
            <img src={bcupImg} alt="Special Prize" />
          </div>
          <h3>Special Category</h3>
          <h1>₹10,000</h1>
        </motion.div>

      </div>
    </section>
  );
}