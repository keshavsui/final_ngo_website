import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DonationPage from "./pages/DonationPage";
import ContactPage from "./pages/ContactPage";
import GoogleMapsLink from "./components/GoogleMapsLink";
import Login from "./components/Login";
import VolunteerForm from "./components/VolunteerForm";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/volunteer-form" element={<VolunteerForm />} />
          </Routes>
          
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Our Location</h2>
            <GoogleMapsLink />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
