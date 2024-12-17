import React from 'react'
import MenuData from './MenuData'
import b2 from '../../assets/b2.jpg'

const CateringService = () => {
  return (
    <div className='mt-4 relative '>
    <div className='  '>
  
    <div
      style={{
        backgroundImage: `url(${b2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className=" flex flex-col min-h-[400px] py-36 text-center relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="z-10">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Our Menu
        </h1>
        <div className="text-white mt-6 px-4 sm:px-8 md:px-12 lg:px-20">
        <p className="text-lg text-white sm:text-xl md:text-2xl font-medium leading-relaxed text-center">
        Our catering menu incorporates a variety of flavors, reflecting our passion for creative food.
      </p>
    </div>
      </div>
  </div>
    </div>
    <div className=' z-[100]  px-10  min-w-full bg-white '>
        <MenuData/>  
    </div>
    </div>
    
  )
}

export default CateringService
