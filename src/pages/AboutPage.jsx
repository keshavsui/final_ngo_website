import React, { useState } from "react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabContent = {
    mission: "We strive to uplift underprivileged communities by providing access to education, healthcare, and food security programs. Our mission is to create sustainable change through empowerment and support.",
    vision: "To create a world where every individual has access to quality education, healthcare, and nutrition, enabling them to live with dignity and reach their full potential.",
    values: "Compassion, Integrity, Excellence, Sustainability, and Empowerment are the core values that guide our work and relationships with communities.",
    history: "Founded in 2010, we began with a small education program and have since grown to impact thousands of lives through our comprehensive development initiatives."
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FDF6EC] via-[#FDF6EC] to-[#FFEDE6]">
      {/* Header Section */}
      <div className="py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-[#9A3412] mb-4">About Our NGO</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We are committed to bringing positive change through education, healthcare, and food distribution.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="flex">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-6 text-lg font-medium capitalize ${
                  activeTab === tab
                    ? "bg-[#F97316] text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                Our {tab}
              </button>
            ))}
          </div>
          <div className="p-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              {tabContent[activeTab]}
            </p>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-[#9A3412] text-center mb-12">Our Programs</h2>
        
        {/* Education Programs */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#9A3412] mb-4">Education Programs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Our education programs focus on providing quality education to underprivileged children. We
                run schools, provide scholarships, and offer vocational training to help individuals build better
                futures.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Primary and secondary education</li>
                <li>• Scholarship programs</li>
                <li>• Vocational training</li>
              </ul>
            </div>
            <div>
              <img
                src="/images/teaching_stud.jpg"
                alt="Education Program"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Food Security Programs */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-bold text-[#9A3412] mb-4">Food Security Programs</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/images/food.jpg"
                alt="Food Program"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-4">
                Our food security initiatives ensure that no one goes hungry. We distribute food to needy
                families, run community kitchens, and implement sustainable farming projects.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Food distribution centers</li>
                <li>• Community kitchens</li>
                <li>• School meal programs</li>
                <li>• Sustainable farming projects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Healthcare Initiatives */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-2xl font-bold text-[#9A3412] mb-4">Healthcare Initiatives</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Our healthcare programs provide medical aid to underserved communities. We organize health
                camps, provide medicines, and raise awareness about health and hygiene.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Medical camps</li>
                <li>• Medicine distribution</li>
                <li>• Health awareness programs</li>
                <li>• Maternal and child health initiatives</li>
              </ul>
            </div>
            <div>
              <img
                src="/images/health.jpg"
                alt="Healthcare Program"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
