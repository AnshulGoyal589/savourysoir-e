import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const WhatWeDo = () => {
  const data = [
    {
      no: 1,
      heading: "Our Mission",
      text: "Our mission is to empower individuals through education and innovation, creating a sustainable future for all."
    },
    {
      no: 2,
      heading: "Our Objectives",
      text: "Our objectives include fostering growth, promoting collaboration, and ensuring inclusive opportunities for all stakeholders."
    },
    {
      no: 3,
      heading: "Our People",
      text: "Our people are driven by passion and commitment, working together to achieve excellence and make a meaningful impact."
    }
  ];

  const [activeItems, setActiveItems] = useState([]);

  const toggleItem = (index) => {
    setActiveItems(prevState =>
      prevState.includes(index)
        ? prevState.filter(item => item !== index)
        : [...prevState, index] 
    );
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#f7f7f7] lg:min-h-80 gap-8 p-8">
      <div className="flex-1">
        <h1 className="text-richblack-700 text-3xl font-semibold mb-6  transition-colors duration-300">
          What we do
        </h1>
        <div className="text-richblack-300">
          <p className="mb-4 text-xl font-semibold">
          We specialize in creating tailored catering solutions for events of all sizes. Whether it’s a wedding, corporate event, or private party, our focus is on quality, creativity, and flawless execution.
          </p>
          <ul className="list-disc text-lg font-semibold pl-16 space-y-2">
          <li>Customized menus to suit every event theme and preference</li>
            <li>Attention to detail in presentation and service</li>
            <li>Professional staff ensuring seamless event execution</li>
          </ul>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <div
                className="font-semibold text-gray-800 text-xl hover:text-[#F1A986] transition-colors duration-300"
              >
                {item.heading}
              </div>
              <div
                className="text-[#F1A986] text-lg transition-transform duration-300 transform hover:scale-125"
              >
                {activeItems.includes(index) ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ease-out ${
                activeItems.includes(index) ? 'max-h-screen py-2' : 'max-h-0 py-0'
              }`}
            >
              {activeItems.includes(index) && (
                <p className="text-gray-600 mt-3">{item.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
