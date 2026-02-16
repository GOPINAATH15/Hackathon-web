import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutHackathon from "./pages/AboutHackathon";
import Rules from "./pages/Rules";
import Schedule from "./pages/Schedule";
import FAQ from "./pages/FAQ";
import RegisterSection from "./pages/RegisterSection";
import Domain from "./pages/Domain";
import HackathonForm from "./pages/HackathonForm";
import PrizePool from "./pages/PrizePool";
import Phase from "./pages/Phase";
import PaymentPage from "./pages/PaymentPage";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutHackathon />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/phases" element={<Phase />} />
        <Route path="/domains/:domainId" element={<Domain />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/register" element={<RegisterSection />} />
        <Route path="/registerform" element={<HackathonForm />} />
        <Route path="/prizes" element={<PrizePool />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
