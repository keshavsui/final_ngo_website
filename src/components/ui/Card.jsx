import React from "react";

const Card = ({ children }) => {
  return <div className="p-6 shadow-xl bg-white rounded-lg w-full max-w-md">{children}</div>;
};

export const CardContent = ({ children }) => {
  return <div className="mt-4 space-y-4">{children}</div>;
};

export default Card;
