import { motion } from "framer-motion";
import Hero from "./Hero";

// import Section from "../components/Section";
// import Card from "../components/Card";
// import FAQ from "./FAQ";
// import RegisterSection from "./RegisterSection";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {/* HOME / LANDING */}
      <section id="home">
        <Hero />
      </section>

      
      {/* REGISTER */}
      {/* <RegisterSection /> */}
    </motion.main>
  );
}
