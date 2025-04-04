import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const GoogleMapsLink = () => {
  return (
    <a
      href="https://maps.app.goo.gl/CfYgtspcnX1JBC6P8"  // 👈 Replace this link
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
    >
      <FaMapMarkerAlt size={24} />
      <span>View on Google Maps</span>
    </a>
  );
};

export default GoogleMapsLink;
