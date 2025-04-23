import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-[#1F2937] text-white py-4 px-6 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        
        <Link to="/" className="text-2xl font-semibold">Bal Snehalay</Link>
      </div>
      <nav className="flex items-center space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About Us</Link>
        <Link to="/donate" className="hover:text-gray-300">Donate</Link>
        
        <Link to="/register" className="bg-[#F97316] text-white px-4 py-2 rounded-md hover:bg-[#EA580C] transition-colors">Register</Link>
        <Link to="/login" className="bg-[#06B6D4] text-white px-4 py-2 rounded-md hover:bg-[#0891B2] transition-colors">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
