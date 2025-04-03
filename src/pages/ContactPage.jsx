import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Have questions? Reach out to us, and we'll be happy to assist you!
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-700">Get In Touch</h2>
          <p className="mt-4 text-gray-600">
            Feel free to contact us via phone or email. We are here to help!
          </p>
          <div className="mt-6 space-y-3">
            <p className="text-lg">
              📍 <strong>Address:</strong> 123 NGO Street, City, Country
            </p>
            <p className="text-lg">
              📞 <strong>Phone:</strong> +1 234 567 890
            </p>
            <p className="text-lg">
              📧 <strong>Email:</strong> contact@ngo.org
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-700">Send a Message</h2>
          <form className="mt-6 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-md font-semibold hover:bg-blue-800">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center text-blue-700">Find Us Here</h2>
        <div className="mt-6 flex justify-center">
          <iframe
            title="NGO Location"
            className="w-full md:w-3/4 h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Your+NGO+Location"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
