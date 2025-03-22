import React from 'react'; 
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { msg } from '../../Utils/Images';
import Chat from './Chat';    

const Contact = () => {
    return (
        <div className="bg-gray-900 text-white py-12">
            <div className='flex justify-center items-center '>
                <p className='md:text-6xl text-4xl font-bold text-cpink-200'>Get in touch</p>
                <img src={msg} alt="" className='md:h-24 h-16 md:w-40 w-32 px-2 rounded-3xl mt-4' />
            </div>
<div className="px-8">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-8">
    {/* Left Section - Text */}
    <div className="flex flex-col w-full md:w-1/2">
      <p className="md:text-5xl text-3xl text-blue-400 font-bold mb-4">Let's talk</p>
      <p className="text-gray-300 p-4 text-sm md:text-lg">
        I'm Sohag Bhuiyan! I'm available to take new projects, <br /> so feel free to contact me, Thank You!
      </p>
      <div className="space-y-4">
        <div className="flex items-center space-x-4 bg-gray-800 px-4 py-2 rounded-lg w-80">
          <FaEnvelope className="text-blue-400 text-xl" />
          <p className="md:text-lg text-sm">smsohag171@gmail.com</p>
        </div>
        <div className="flex items-center space-x-4 bg-gray-800 px-4 py-2 rounded-lg w-80">
          <FaMapMarkerAlt className="text-red-400 text-xl" />
          <p className="md:text-lg text-sm">Nikunjo, Dhaka</p>
        </div>
        <div className="flex items-center space-x-4 bg-gray-800 px-4 py-2 rounded-lg w-80">
          <FaPhoneAlt className="text-green-400 text-xl" />
          <p className="md:text-lg text-sm">+88 01787345180</p>
        </div>
      </div>
    </div>

    {/* Right Section - Form */}
    <div className="w-full md:w-1/2">
      <Chat className="" />
    </div>
  </div>
</div>

        </div>
    );
};

export default Contact;
