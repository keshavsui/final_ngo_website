import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-blue-700 text-white py-5 text-center text-2xl font-bold shadow-md">
      <h1>NGO Charity Platform</h1>
      <nav className="flex justify-center space-x-6 mt-3 text-lg">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to="/donate" className="hover:underline">Donate</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
