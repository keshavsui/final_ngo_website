import React, { useState } from "react";

const DonationPage = () => {
  const [amount, setAmount] = useState("");

  const handleDonate = () => {
    alert(`Thank you for donating $${amount}! Your support makes a difference.`);
    setAmount("");
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Support Our Cause</h2>
      <p className="text-gray-600 text-lg mb-6">
        Every donation helps us continue our work and reach more people in need.
      </p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter donation amount"
        className="border-2 border-gray-300 rounded-lg p-3 mb-4 w-1/3"
      />
      <button
        onClick={handleDonate}
        className="block w-1/3 mx-auto bg-blue-700 text-white py-2 rounded-lg shadow-md hover:bg-blue-800"
      >
        Donate Now
      </button>
    </div>
  );
};

export default DonationPage;
