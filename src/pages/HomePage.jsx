import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-[#FDF6EC]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bg_img.png')",
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-8 drop-shadow-lg max-w-4xl">
            Making a Difference, One Step at a Time
          </h1>
          <Link
            to="/donate"
            className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-16 px-4 text-center">
        <h2 className="text-4xl font-bold text-[#9A3412] mb-6">Who We Are</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          We are a non-profit organization dedicated to uplifting underprivileged communities by providing education, healthcare, and essential resources.
        </p>
        
        <Link
          to="/about"
          className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
        >
          Learn More
        </Link>
      </div>

      {/* Our Programs Section */}
      <div className="bg-white py-16 px-4">
        <h2 className="text-4xl font-bold text-[#9A3412] text-center mb-12">Our Programs</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-[#FDF6EC] p-8 rounded-lg shadow-md">
            <img src="/images/teaching_stud.jpg" alt="Education" className="w-16 h-16 mb-4" />
            <h3 className="text-2xl font-bold text-[#9A3412] mb-4">Education</h3>
            <p className="text-gray-600 mb-4">Providing quality education to underprivileged children for a brighter future.</p>
            <Link to="/about" className="text-[#F97316] hover:text-[#EA580C]">
              Learn more →
            </Link>
          </div>
          <div className="bg-[#FDF6EC] p-8 rounded-lg shadow-md">
            <img src="/images/food.jpg" alt="Food Security" className="w-16 h-16 mb-4" />
            <h3 className="text-2xl font-bold text-[#9A3412] mb-4">Food Security</h3>
            <p className="text-gray-600 mb-4">Ensuring no one goes hungry by distributing food to the needy.</p>
            <Link to="/about" className="text-[#F97316] hover:text-[#EA580C]">
              Learn more →
            </Link>
          </div>
          <div className="bg-[#FDF6EC] p-8 rounded-lg shadow-md">
            <img src="/images/health.jpg" alt="Healthcare" className="w-16 h-16 mb-4" />
            <h3 className="text-2xl font-bold text-[#9A3412] mb-4">Healthcare</h3>
            <p className="text-gray-600 mb-4">Providing medical aid and support to underserved communities.</p>
            <Link to="/about" className="text-[#F97316] hover:text-[#EA580C]">
              Learn more →
            </Link>
          </div>
        </div>
      </div>

      {/* Your Support Matters Section */}
      <div className="bg-[#F97316] text-white py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Your Support Matters</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Join us in our mission to create positive change in communities across India.
        </p>
        <Link
          to="/donate"
          className="bg-white text-[#F97316] hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
        >
          Make a Donation
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
