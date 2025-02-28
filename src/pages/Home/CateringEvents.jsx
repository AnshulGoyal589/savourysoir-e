import React from "react";
import "aos/dist/aos.css"; 
import e1 from "../../assets/e1.jpg"
import e2 from "../../assets/e2.jpg"
import e3 from "../../assets/e3.jpg"
import e4 from "../../assets/e4.jpg"
import e5 from "../../assets/e5.jpg"



const CateringEvents = () => {
  const data = [
    { image: e1, text: "Special Event Catering" },
    { image: e2, text: "Catering Holiday Buffet" },
    { image: e3, text: "Private Dinner Party" },
    { image: e4, text: "Summer Garden Catering" },
    { image: e5, text: "Picnic and Party Buffet" },
  ];

  return (
    <div className="py-10 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Catering Events
        </h1>
        <p className="text-2xl text-gray-600 font-light leading-relaxed">
          <span className="inline">From small to large corporate events or weddings and parties, get</span>
          <br />
          <span>inspired with our favorite catering projects.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 px-6 gap-4">
        {data.map((item, index) => (
          <div key={index} className="relative group">
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={`Catering Event ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="flex flex-col justify-center items-center w-full h-full">
                <button 
                  className="bg-[#f1a986] text-white px-6 py-2 rounded-lg 
                    invisible opacity-0 group-hover:visible group-hover:opacity-100
                    transform -translate-y-2 group-hover:translate-y-0
                    transition-all delay-150 duration-300
                    hover:bg-[#e08b66]"
                >
                  Read More
                </button>
              </div>
              <p className="text-white absolute bottom-0 text-xl font-semibold 
                px-3 py-2 text-center w-full bg-black/80
                invisible opacity-0 group-hover:visible group-hover:opacity-100
                transform translate-y-2 group-hover:translate-y-0
                transition-all delay-300 duration-300
                rounded-b-lg"
              >
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CateringEvents;