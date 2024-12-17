import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import b1 from '../../assets/b1.jpg';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const CardComponent = () => {
  const swiperRef = useRef(null);

  const slidesData = [
    {
      image: img1,
      heading: 'Welcome to Our Site',
      subheading:
        'Welcome to a platform that brings you inspiring content, innovative solutions, and opportunities to grow. Start exploring today and unlock endless possibilities.',
    },
    {
      image: img2,
      heading: 'Explore New Features',
      subheading:
        'Discover cutting-edge features designed to simplify your experience, improve performance, and provide creative solutions for your evolving needs. Let innovation lead the way.',
    },
    {
      image: img3,
      heading: 'Join Us Today',
      subheading:
        'Be a part of our growing community. Sign up today to access exclusive resources, learn new things, and start a journey toward achieving your goals and live your dream life.',
    },
    {
      image: img4,
      heading: 'Stay Connected',
      subheading:
        'Engage with like-minded individuals, share your ideas, and stay updated with the latest content and features. Let’s grow together as a connected community.',
    },
    {
      image: b1,
      heading: 'Experience More',
      subheading:
        'Unlock exciting opportunities, access exclusive content, and make the most of our platform’s features. Experience growth, learning, and success like never before.',
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-white">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} 
        slidesPerView={3} 
        spaceBetween={30}
        loop={true} 
        modules={[Navigation, Pagination]}
        className="w-full h-[500px]"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-full flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
              <div className="w-full h-1/2">
                <img
                  className="w-full h-full object-cover"
                  alt={slide.heading}
                  src={slide.image}
                />
              </div>

              <div className="p-4 flex flex-col justify-center items-center text-center gap-4">
                <h1 className="font-bold text-2xl text-gray-800">{slide.heading}</h1>
                <p className="text-gray-600 leading-relaxed">{slide.subheading}</p>
                <button className="border px-4 py-2 transition-all duration-200 border-[#f1a986] text-[#f1a986] hover:bg-[#f1a986] hover:text-white rounded-md">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 mt-6 bg-transparent">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-[#f1a986] text-white px-6 py-3 rounded-full hover:bg-[#e08b66] transition-all duration-200"
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-[#f1a986] text-white px-6 py-3 rounded-full hover:bg-[#e08b66] transition-all duration-200"
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CardComponent;


