import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MeetOurTeam = () => {
  const [progress, setProgress] = useState([0, 0, 0]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const stats = [
    { label: 'Communication', value: 40 },
    { label: 'Marketing', value: 60 },
    { label: 'Management', value: 75 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev.map((value, index) => (value < stats[index].value ? value + 1 : value))
      );
    }, 20);
    return () => clearInterval(interval);
  }, [stats]);

  const chefsData = [
    {
      chefName: 'Chef Gordon Ramsay',
      oneLinerTextForChef: 'A fiery kitchen genius who redefines the art of cooking with precision and passion.',
    },
    {
      chefName: 'Chef Jamie Oliver',
      oneLinerTextForChef: 'An advocate of healthy eating, creating simple, delicious dishes with fresh ingredients.',
    },
    {
      chefName: 'Chef Nigella Lawson',
      oneLinerTextForChef: 'A warm and indulgent culinary expert, known for her rich, comforting flavors and passion for food.',
    },
  ];

  return (
    <div className="w-full">
      {/* First Section */}
      <section className="w-full bg-[#f7f7f7]  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/3 space-y-6" data-aos="fade-up">
              <div className="max-w-xl">
                <h1 className="text-3xl font-semibold text-richblack-600 mb-4">
                  Our goal is to provide a superior customer experience
                </h1>
                <p className="text-gray-600 mb-6">
                  Ex per aeque denique constituto, purto populo molestiae ei has. Sea te quaeque nostrum maluisset, id persius appetere pro, mea harum ridens regione an.
                </p>
                <button className="px-6 py-3 border border-peach bg-[#f1a986] text-white rounded-md hover:bg-white hover:text-[#f1a986] transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>

            {/* Right Grid */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {chefsData.map((chef, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-24 h-24 mb-4">
                      <img
                        src={`/api/placeholder/96/96`}
                        alt={chef.chefName}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{chef.chefName}</h2>
                    <p className="text-sm text-gray-600 text-center mb-4">{chef.oneLinerTextForChef}</p>
                    <div className="flex space-x-4 mt-auto">
                      <a href="#" className="text-gray-600 hover:text-[#f1a986] transition-colors">
                        <FaFacebookF className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-[#f1a986] transition-colors">
                        <FaTwitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-[#f1a986] transition-colors">
                        <FaGooglePlusG className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-[#f1a986] transition-colors">
                        <FaLinkedinIn className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-up">
              <h2 className="text-3xl font-semibold text-gray-800">
                Other stats about us
              </h2>
              <p className="text-gray-600">
                Ex per aeque denique constituto, purto populo molestiae ei has. Sea te quaeque nostrum maluisset, id persius appetere pro, mea harum ridens regione an.
              </p>
              <button className="px-6 py-3 bg-[#f1a986] text-white rounded-md hover:bg-white hover:text-[#f1a986] transition-colors duration-300 border border-[#f1a986]">
                GET STARTED
              </button>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="w-full"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 font-medium">{stat.label}</span>
                  </div>
                  <Slider
                    value={progress[index]}
                    max={100}
                    trackStyle={{ backgroundColor: '#fb923c', height: 6 }}
                    handleStyle={{
                      borderColor: '#fb923c',
                      backgroundColor: '#fb923c',
                      height: 14,
                      width: 14,
                      marginTop: -4,
                      boxShadow: 'none',
                    }}
                    railStyle={{ backgroundColor: '#e5e7eb', height: 6 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetOurTeam;