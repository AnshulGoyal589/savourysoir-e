import React from 'react'
import i1 from '../../assets/i1.jpg'
import i2 from '../../assets/i2.jpg'
import i3 from '../../assets/i3.jpg'
import { FaCheck } from 'react-icons/fa';

const PriceOptions = () => {
  return (
    <div className="w-full font-semibold flex flex-col p-10 items-center">
      <div className="flex flex-col gap-3 mb-8 text-center">
        <h1 className="text-[2.5rem] text-richblack-800">Price Options</h1>
        <p className="text-2xl text-richblack-100 leading-4">
          Check out the price for getting a professional catering plan completed to suit you and your guests.
        </p>
      </div>

      <div className="flex justify-between gap-6 w-full font-semibold max-w-7xl">
        <div className="flex flex-col text-pure-greys-300 bg-f5f5f0 p-6 items-center w-full font-semibold">
          <h1 className='text-black text-2xl'>Expert Buffets</h1>
          <div className="rounded-full h-20 w-20 text-[#f1a986]">
            <img
              src={i1}
              alt="image-icon"
              className="h-full w-full mt-3 font-semibold object-cover rounded-full"
            />
          </div>
          <div className="text-[#f1a986] text-center mt-3">
            <span className="text-[3rem]"><sup className="text-[2rem]">$</sup> 50</span>
            <br />
            <p>/ person</p>
          </div>

          <div className="w-full font-semibold">
            {['Appetizer', 'Barbecue', 'Beverages', 'Desserts', 'Side Dishes'].map((item, index) => (
              <div key={index} className="w-full font-semibold">
                <div className="flex items-center space-x-2 justify-center">
                  <FaCheck style={{ color: '#f1a986' }} />
                  <span className="text-lg">{item}</span>
                </div>
                {index !== 4 && <div className="w-full font-semibold h-[1px] bg-richblack-100 my-2"></div>}
              </div>
            ))}
            <button className="mt-3 bg-transparent hover:bg-[#f1a986] border-[#f1a986] border px-3 py-3 transition-all duration-300 text-[#f1a986] hover:text-white w-full font-semibold rounded-full text-center">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex flex-col text-pure-greys-300 bg-white p-6  items-center w-full font-semibold">
          <h1 className='text-2xl text-black'>Ultimate Buffets</h1>
          <div className="rounded-full h-20 w-20 text-[#f1a986]">
            <img
              src={i2}
              alt="image-icon"
              className="h-full mt-3 w-full font-semibold object-cover rounded-full"
            />
          </div>
          <div className="text-[#f1a986] text-center mt-3">
            <span className="text-[3rem]"><sup className="text-[2rem]">$</sup> 75</span>
            <br />
            <p>/ person</p>
          </div>

          <div className="w-full font-semibold">
            {['Appetizer', 'Barbecue', 'Beverages', 'Desserts', 'Side Dishes'].map((item, index) => (
              <div key={index} className="w-full font-semibold">
                <div className="flex items-center space-x-2 justify-center">
                  <FaCheck style={{ color: '#f1a986' }} />
                  <span className="text-lg">{item}</span>
                </div>
                {index !== 4 && <div className="w-full font-semibold h-[1px] bg-richblack-100 my-2"></div>}
              </div>
            ))}
            <button className="mt-3 hover:bg-transparent bg-[#f1a986] border-[#f1a986] border px-3 py-3 transition-all duration-300 hover:text-[#f1a986] text-white w-full font-semibold mx-auto  rounded-full  text-center">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex flex-col text-pure-greys-300 bg-f5f5f0 p-6  items-center w-full font-semibold">
          <h1 className='text-2xl text-black'>Speciality Buffets</h1>
          <div className="rounded-full h-20 w-20 text-[#f1a986]">
            <img
              src={i3}
              alt="image-icon"
              className="h-full mt-3  w-full font-semibold object-cover rounded-full"
            />
          </div>
          <div className="text-[#f1a986] text-center mt-3">
            <span className="text-[3rem]  "><sup className="text-[2rem]">$</sup> 100</span>
            <br />
            <p>/ person</p>
          </div>

          <div className="w-full font-semibold">
            {['Appetizer', 'Barbecue', 'Beverages', 'Desserts', 'Side Dishes'].map((item, index) => (
              <div key={index} className="w-full font-semibold">
                <div className="flex items-center space-x-2 justify-center">
                  <FaCheck style={{ color: '#f1a986' }} />
                  <span className="text-lg">{item}</span>
                </div>
                {index !== 4 && <div className="w-full font-semibold h-[1px] bg-richblack-100 my-2"></div>}
              </div>
            ))}
            <button className="mt-3 bg-transparent hover:bg-[#f1a986] border-[#f1a986] border px-3  py-3 transition-all duration-300 text-[#f1a986] hover:text-white w-full font-semibold rounded-full text-center">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceOptions;
