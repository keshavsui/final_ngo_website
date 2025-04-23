import React, { useState } from "react";

const DonationPage = () => {
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = [100, 500, 1000, 2000, 5000];

  const handleDonate = (amount) => {
    // Implement Razorpay integration here
    console.log("Donating amount:", amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FDF6EC] via-[#FDF6EC] to-[#FFEDE6] py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Donation Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-[#9A3412] mb-8">Make a Donation</h2>
          
          {/* Preset Amounts */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => handleDonate(amount)}
                className="bg-[#FDF6EC] text-[#9A3412] py-2 px-4 rounded-lg font-medium text-lg"
              >
                ₹{amount}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Custom Amount (₹)</label>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F97316]"
              placeholder="2323"
            />
          </div>

          <button
            onClick={() => handleDonate(customAmount)}
            className="w-full bg-[#F97316] text-white py-3 rounded-lg font-medium text-lg"
          >
            Donate Now
          </button>
        </div>

        {/* Impact Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-[#9A3412] mb-8">Your Impact</h2>
          
          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-[#9A3412]">Meals Provided</h3>
                <p className="text-gray-500 text-sm">₹50 provides one meal</p>
              </div>
              <span className="text-4xl font-bold text-[#F97316]">46</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-[#9A3412]">Education Support</h3>
                <p className="text-gray-500 text-sm">₹1000 supports education for a month</p>
              </div>
              <span className="text-4xl font-bold text-[#F97316]">2</span>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-[#9A3412]">Healthcare Checkups</h3>
                <p className="text-gray-500 text-sm">₹500 provides one medical checkup</p>
              </div>
              <span className="text-4xl font-bold text-[#F97316]">4</span>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-medium text-[#9A3412] mb-4">Why Donate?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Support education for underprivileged children</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Provide meals to those in need</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Enable access to healthcare services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Create sustainable change in communities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
