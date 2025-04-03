import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header.jsx";  
import Footer from "./components/ui/Footer.jsx";  
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import DonationPage from "./pages/DonationPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

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
      </div>
      <Footer />
    </Router>
  );
};

export default App;
