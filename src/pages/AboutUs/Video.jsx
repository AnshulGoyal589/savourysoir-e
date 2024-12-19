import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { CiPlay1, CiPause1 } from "react-icons/ci";
import Banner from '../../assets/banner.mp4'
const Video = () => {
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    setPlaying(true);
  };

  const handlePauseClick = () => {
    setPlaying(false);
  };

  const handleVideoEnd = () => {
    setPlaying(false);
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-up">
            <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
              Our goal is to provide a superior customer experience
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Ex per aeque denique constituto, purto populo molestiae ei has. Sea te quaeque nostrum 
              maluisset, id persius appetere pro, mea harum ridens regione an. Ei quas nullam vivendo sit.
            </p>
            <button className="px-6 py-3 bg-[#f1a986] text-white rounded-md hover:bg-white 
              hover:text-[#f1a986] transition-colors duration-300 border border-[#f1a986]">
              Read More
            </button>
          </div>

          <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
            <div 
              className="relative aspect-video rounded-lg overflow-hidden"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className={`transition-transform duration-300 ${hovered ? 'scale-105' : 'scale-100'}`}>
                <ReactPlayer
                  url={Banner}
                  playing={playing}
                  muted
                  playsinline
                  width="100%"
                  height="100%"
                  className="object-cover"
                  onEnded={handleVideoEnd}
                />
              </div>

              {hovered && (
                <div className="absolute inset-0 flex items-center justify-center  bg-opacity-30">
                  <button
                    className={`p-4 rounded-full transition-all duration-300 ${
                      playing 
                        ? 'bg-[#f1a986]  ' 
                        : 'bg-[#f1a986]  '
                    }`}
                    onClick={playing ? handlePauseClick : handlePlayClick}
                  >
                    {playing ? (
                      <CiPause1 className="w-6 h-6  text-white " />
                    ) : (
                      <CiPlay1 className="w-6 h-6 text-white " />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;