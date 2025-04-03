import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-8 mt-10">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        {/* Left Section - Logo & About */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">BalSnehalay Rainbow Foundation</h2>
          <p className="text-sm mt-2">
            Making a difference in people's lives through support & charity.
          </p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/donate" className="hover:underline">Donate</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-gray-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-gray-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center mt-6 text-sm border-t border-gray-400 pt-4">
        © {new Date().getFullYear()} Rainbow Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
