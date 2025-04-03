import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold">About Our NGO</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Empowering communities through sustainable solutions, education, and support.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-700">Our Mission</h2>
          <p className="mt-4 text-gray-700 text-center">
            To provide essential resources and opportunities to underprivileged communities, 
            ensuring a better future for all.
          </p>
        </div>

        <div className="bg-white p-8 shadow-lg rounded-lg mt-8">
          <h2 className="text-3xl font-semibold text-center text-blue-700">Our Vision</h2>
          <p className="mt-4 text-gray-700 text-center">
            A world where every individual has equal access to education, healthcare, 
            and a dignified life.
          </p>
        </div>
      </div>

      {/* Team Section (Optional) */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center text-blue-700">Meet Our Team</h2>
        <p className="text-center text-gray-600 mt-4">
          Dedicated individuals working together for a better future.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="bg-white p-6 shadow-lg rounded-lg w-60 text-center">
            <img src="https://via.placeholder.com/100" alt="Team Member" className="mx-auto rounded-full" />
            <h3 className="mt-3 font-semibold">John Doe</h3>
            <p className="text-sm text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg w-60 text-center">
            <img src="https://via.placeholder.com/100" alt="Team Member" className="mx-auto rounded-full" />
            <h3 className="mt-3 font-semibold">Jane Smith</h3>
            <p className="text-sm text-gray-600">Operations Manager</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700 text-white text-center py-10">
        <h2 className="text-3xl font-bold">Join Us & Make a Difference</h2>
        <p className="mt-3 text-lg">Get involved today and help us change lives.</p>
        <a href="/donate" className="mt-5 inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
