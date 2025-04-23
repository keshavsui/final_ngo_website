import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const GoogleMapsLink = () => {
    return (
      <a
        href="https://www.google.com/maps?q=Rainbow+Foundation,+Mumbai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <FaMapMarkerAlt size={24} />
        <span>View on Google Maps</span>
      </a>
    );
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
      console.error("Error submitting contact form:", error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-teal-100 to-blue-200 py-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-teal-800">Get in Touch</h1>
        <p className="mt-4 text-gray-700">We'd love to hear from you! Reach out for inquiries, partnerships, or support.</p>

        {/* Contact Form */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 h-32"
            ></textarea>
            <button type="submit" className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700">
              Send Message
            </button>
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default ContactPage;

