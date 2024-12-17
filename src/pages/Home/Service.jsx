import React from 'react'
import Scard from './Scard'
import { FaUtensils, FaClipboard, FaUsers, FaHandshake, FaTrophy, FaMicrophone } from 'react-icons/fa';
import './styles.css'
const Service = () => {
  
  const servicesInfo = [
    {
      icon: <FaUtensils style={{ color: '#f1a986' }} />,  // FaUtensils icon with color
      title: 'Culinary team',
      description: 'Our chefs offer exquisite culinary experiences for your events.',
    },
    {
      icon: <FaClipboard style={{ color: '#f1a986' }} />,  // FaClipboard icon with color
      title: 'Event planning',
      description: 'We manage every detail to ensure your event runs smoothly.',
    },
    {
      icon: <FaUsers style={{ color: '#f1a986' }} />,  // FaUsers icon with color
      title: 'Service staff',
      description: 'Professional staff ready to assist and serve your guests.',
    },
    {
      icon: <FaHandshake style={{ color: '#f1a986' }} />,  // FaHandshake icon with color
      title: 'Equipment rentals',
      description: 'Rent high-quality equipment for your event needs.',
    },
    {
      icon: <FaTrophy style={{ color: '#f1a986' }} />,  // FaTrophy icon with color
      title: 'Award winning',
      description: 'Our services are award-winning and recognized for excellence.',
    },
    {
      icon: <FaMicrophone style={{ color: '#f1a986' }} />,  // FaMicrophone icon with color
      title: 'Entertainment',
      description: 'Engage your guests with entertainment that keeps the energy high.',
    },
  ];
  return (
    <div className='flex flex-col mt-4 py-20 bg-white '>
      
      <div className="text-center mb-8 gap-y-6">
        <h1 className="text-black text-[40px]">Catering Services</h1>
        <p className='text-black text-xl'>Our expert culinary chefs offer exquisite catering services for any events or functions.</p>
      </div>

      <div>
      <Scard/>
      </div>

      <div className="grid grid-cols-3 gap-4 px-5">
        {servicesInfo.map((service, index) => (
           
            <div className=" flex gap-5 p-4 ">
              <div className="icon text-4xl mb-4">
              {service.icon} 
              </div>
              <div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-richblack-300">{service.description}</p>
              </div>

            </div>
        ))}
      </div>
    </div>
  )
}

export default Service
