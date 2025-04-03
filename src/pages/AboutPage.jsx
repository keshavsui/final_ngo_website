import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-orange-200 to-red-300 text-gray-900">
      {/* Hero Section */}
      <div className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold text-orange-800">About Our NGO</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-700">
          We are committed to bringing positive change through education, healthcare, and food distribution.
        </p>
      </div>

      {/* Images Section */}
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-semibold text-orange-800 text-center">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <img src="/images/ngo1.jpg" alt="NGO Volunteers Teaching Kids" className="w-full h-60 object-cover rounded-lg shadow-md"/>
          <img src="/images/ngo2.jpg" alt="Food Distribution to the Needy" className="w-full h-60 object-cover rounded-lg shadow-md"/>
          <img src="/images/ngo3.jpg" alt="Medical Aid Provided by NGOs" className="w-full h-60 object-cover rounded-lg shadow-md"/>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold text-orange-800">Our Mission</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We strive to uplift underprivileged communities by providing access to education, healthcare, and food security programs.
        </p>
      </div>

      {/* Our Vision */}
      <div className="bg-white py-16 text-center">
        <h2 className="text-3xl font-semibold text-red-700">Our Vision</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We envision a world where everyone has equal opportunities to live a life of dignity and self-sufficiency.
        </p>
      </div>

      {/* Team Section */}
      <div className="bg-red-200 py-16 text-center">
        <h2 className="text-3xl font-semibold text-red-800">Meet Our Team</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our dedicated team of volunteers and professionals work tirelessly to make a difference in society.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-6 px-6">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center border-t-4 border-red-500">
            <h3 className="text-2xl font-bold text-red-700">Jane Doe</h3>
            <p className="text-gray-600 mt-2">Founder & CEO</p>
            <img src="/images/team1.jpg" alt="Founder" className="w-24 h-24 mx-auto rounded-full mt-4"/>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center border-t-4 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-700">John Smith</h3>
            <p className="text-gray-600 mt-2">Director of Operations</p>
            <img src="/images/team2.jpg" alt="Director" className="w-24 h-24 mx-auto rounded-full mt-4"/>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center border-t-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-yellow-700">Sarah Johnson</h3>
            <p className="text-gray-600 mt-2">Head of Community Outreach</p>
            <img src="/images/team3.jpg" alt="Community Head" className="w-24 h-24 mx-auto rounded-full mt-4"/>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold">Join Our Mission</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Whether through donations, volunteering, or spreading awareness, you can help bring real change.
        </p>
        <a href="/contact" className="mt-6 inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-red-800 transition">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
