import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header.jsx";  
import Footer from "./components/ui/Footer.jsx";  
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import DonationPage from "./pages/DonationPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import GoogleMapsLink from "./components/GoogleMapsLink"; // ✅ Import here

const App = () => {
  return (
    <Router>
      <Header />
      <div className="min-h-screen p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* ✅ You can place the map link anywhere here — or inside Footer.jsx or ContactPage */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Our Location</h2>
          <GoogleMapsLink />
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
