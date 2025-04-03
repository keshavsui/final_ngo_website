import React from "react";

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
    />
  );
};

export default Input;
