import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import { Navigation, Pagination } from "swiper/modules";
import b1 from "../../assets/b1.jpg";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";
import PriceOptions from "./PriceOptions";
import CompSlide from "./CompSlide";
import CardComponent from "./CardComponent";
import '../../index.css'
import CateringService from './CateringService'
import Service from "./Service";

const Home = () => {
  const slidesData = [
    {
      image: b1,
      heading: "Welcome to Our Site",
      subheading: "Discover amazing content here.",
    },
    {
      image: b2,
      heading: "Explore New Features",
      subheading: "Innovative solutions for your needs.",
    },
    {
      image: b3,
      heading: "Join Us Today",
      subheading: "Sign up to get started on your journey.",
    },
  ];
  <style>
  {`
  .swiper-button-next,
  .swiper-button-prev {
    color: #f1a986; 
  }
`}
</style>
  return (
    <div className="min-h-screen w-full bg-pure-greys-25 ">
      {/* Swiper with Header Text */}
      <Swiper
        className="w-full h-screen relative text-cyan-300  "
        loop={true} // Enables looping
        navigation={true} // Adds next/prev buttons
        modules={[Navigation, Pagination]}
        
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            
            <div
              className="h-screen w-full flex flex-col items-center justify-center text-white text-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
                
              {/* Header Text */}
              <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-30 py-4 hover:bg-white transition-all duration-200">
                <CompSlide/>
              </div>

              {/* Optional Content in the Middle */}
              <div className="text-center fade-in bg-opacity-50 p-6 rounded-md text-richblue-300 transition-all duration-200 ">
                <h2 className="text-4xl font-semibold mb-2">{slide.heading}</h2>
                <p className="text-lg">{slide.subheading}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        {/* Swiper card component */}
      <div className="px-10 -mt-10 h-full bg-transparent ">
            <CardComponent/>
      </div>

        {/*Menu Card Component */}
        <div className="min-h-[700px]">
              <CateringService/>
        </div>

        {/* Catering Service Component */}
        <div>
              <Service/>
        </div>

        {/* Price Options */}
        <div>
              <PriceOptions/>
        </div>

        {/* About Us  */}
        <div>

        </div>

        {/* Testimonials */}
        <div>

        </div>

        {/* Catering */}
        <div>

        </div>

        {/* Latest News */}
        <div>

        </div>


    </div>
  );
};

export default Home;
