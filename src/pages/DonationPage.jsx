import React, { useState } from "react";

const DonatePage = () => {
  const [amount, setAmount] = useState("");

  const handleDonate = (donationAmount) => {
    if (!donationAmount) {
      alert("Please enter a valid amount.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      amount: donationAmount * 100, // Razorpay works with paise (1 INR = 100 paise)
      currency: "INR",
      name: "Your NGO Name",
      description: "Donation for a Cause",
      image: "/images/logo.png", // Your NGO's logo
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Donor Name",
        email: "donor@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#ff5722",
      },
    };

    const payment = new window.Razorpay(options);
    payment.open();
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 via-yellow-100 to-red-200 min-h-screen py-12">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-orange-800">Make a Difference Today</h1>
        <p className="mt-4 text-gray-700">Your donation helps us provide food, education, and healthcare to those in need.</p>

        {/* Predefined Donation Amounts */}
        <div className="mt-6 grid grid-cols-3 md:grid-cols-5 gap-4">
          {[100, 500, 1000, 5000, 10000].map((value) => (
            <button
              key={value}
              className="bg-orange-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-orange-600"
              onClick={() => handleDonate(value)}
            >
              ₹{value}
            </button>
          ))}
        </div>

        {/* Custom Donation Input */}
        <div className="mt-8">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter custom amount (INR ₹)"
            className="border border-gray-400 px-4 py-2 rounded-lg text-lg w-60 text-center"
          />
          <button
            onClick={() => handleDonate(amount)}
            className="ml-4 bg-red-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-red-700"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
