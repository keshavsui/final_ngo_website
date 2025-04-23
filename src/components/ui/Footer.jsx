import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <Link to="/" className="flex items-center">
            
            <span className="text-xl font-semibold">Bal Snehalay</span>
          </Link>
          <p className="mt-4 text-gray-400">
            Making a difference in people's lives through support & charity.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <Link to="/about" className="block text-gray-400 hover:text-white">About</Link>
            <Link to="/programs" className="block text-gray-400 hover:text-white">Programs</Link>
            <Link to="/donate" className="block text-gray-400 hover:text-white">Support</Link>
            <Link to="/contact" className="block text-gray-400 hover:text-white">Contact Us</Link>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          <div className="space-y-2">
            <Link to="/programs/education" className="block text-gray-400 hover:text-white">Education</Link>
            <Link to="/programs/healthcare" className="block text-gray-400 hover:text-white">Healthcare</Link>
            <Link to="/programs/food" className="block text-gray-400 hover:text-white">Food Security</Link>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-center text-gray-400">
              <FaMapMarkerAlt className="mr-2" />
              <span>123 Charity Street, Mumbai, Maharashtra 400001</span>
            </div>
            <div className="flex items-center text-gray-400">
              <FaPhone className="mr-2" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center text-gray-400">
              <FaEnvelope className="mr-2" />
              <span>contact@balsnehalay.org</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Bal Snehalay Rainbow Foundation. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4 text-gray-400">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
