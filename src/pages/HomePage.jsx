import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 via-orange-100 to-red-200 text-gray-900">
      {/* Hero Section */}
      <div className="relative">
        <img src="/images/hero.jpg" alt="Helping hands" className="w-full h-96 object-cover brightness-75" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-5xl font-bold drop-shadow-lg">Making a Difference, One Step at a Time</h1>
          <p className="mt-4 text-lg max-w-xl">
            Join us in empowering communities through education, healthcare, and food security programs.
          </p>
          <Link to="/donate" className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 text-white font-semibold rounded-lg text-lg">
            Donate Now
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-orange-800">Who We Are</h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
        Rainbow Foundation is an  humanitarian organization founded in 2010 with a mission to alleviate human suffering and foster community development. We work in diverse areas such as:

Rural Development

Environmental Conservation

Emergency Relief Work

Water & Waste Management

Public Health & Hygiene

Our goal is to build a better future by providing education, healthcare, and empowerment to those in need.


        </p>
        <img src="/images/about.jpg" alt="NGO Volunteers" className="mt-6 w-full max-w-3xl mx-auto rounded-lg shadow-md" />
        <Link to="/about" className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-700 transition">
          Learn More
        </Link>
      </div>

      {/* Our Programs */}
      <div className="bg-white py-16 text-center">
        <h2 className="text-4xl font-bold text-red-700">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8 px-6">
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
            <img src="/images/education.jpg" alt="Education for children" className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-2xl font-semibold text-orange-800 mt-4">Education</h3>
            <p className="mt-2 text-gray-700">Providing quality education to underprivileged children for a brighter future.</p>
          </div>
          <div className="bg-red-100 p-6 rounded-lg shadow-lg">
            <img src="/images/food.jpg" alt="Food distribution" className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-2xl font-semibold text-red-800 mt-4">Food Security</h3>
            <p className="mt-2 text-gray-700">Ensuring no one goes hungry by distributing food to the needy.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <img src="/images/healthcare.jpg" alt="Healthcare support" className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-2xl font-semibold text-yellow-800 mt-4">Healthcare</h3>
            <p className="mt-2 text-gray-700">Providing medical aid and support to underserved communities.</p>
          </div>
        </div>
      </div>

      {/* Donation Section */}
      <div className="bg-red-600 text-white text-center py-16">
        <h2 className="text-4xl font-bold">Your Support Matters</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Every contribution makes a difference. Help us bring hope to those in need.
        </p>
        <Link to="/donate" className="mt-6 inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
          Donate Now
        </Link>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-orange-800">What People Say</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700">
              "This NGO has changed my life. Thanks to their educational programs, I now have a future." - Rajesh K.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-700">
              "I am so grateful for the food distribution program. It has helped my family during tough times." - Meena D.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Join Us in Making a Difference</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Become a part of our mission. Whether through donations, volunteering, or spreading awareness, you can help bring real change.
        </p>
        <Link to="/contact" className="mt-6 inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
          Get Involved
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
