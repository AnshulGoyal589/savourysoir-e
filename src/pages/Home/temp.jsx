import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';



const index = () => {
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    email: '',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* How to find us section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to find us</h2>
          <p className="text-gray-600 mb-8">
            Our goal is to provide the best customer service and to answer all of your questions in a timely manner.
          </p>
        </div>

        <div className="space-y-6">
          {/* Phone Numbers */}
          <div className="flex items-center space-x-4">
            <MdPhone className="w-6 h-6 text-orange-300" />
            <span className="text-gray-700">(222) 400-630</span>
          </div>
          <div className="flex items-center space-x-4">
            <MdPhone className="w-6 h-6 text-orange-300" />
            <span className="text-gray-700">(222) 411-631</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <MdMail className="w-6 h-6 text-orange-300" />
            <span className="text-gray-700">contact@example.com</span>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-4">
            <MdMapPin className="w-6 h-6 text-orange-300" />
            <span className="text-gray-700">49 Grand Street, Los Angeles, California, USA</span>
          </div>
        </div>
      </div>

      {/* Contact Form section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leave us a message</h2>
        <p className="text-gray-600 mb-8">
          Our goal is to provide the best customer service and to answer all of your questions in a timely manner.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-200 focus:border-orange-300 outline-none"
              rows={4}
            />
          </div>

          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-200 focus:border-orange-300 outline-none"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-200 focus:border-orange-300 outline-none"
            />
          </div>

          <div>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Reason of contact"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-200 focus:border-orange-300 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-300 hover:bg-orange-400 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default index;