
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Chat from './Chat';    

const Contact = () => {
    return (
        <div className="bg-gray-100 text-gray-600 py-5">
            <div className='text-center items-center '>
                <p className='md:text-4xl text-2xl font-bold text-cpink-200'>Get in touch
                <div className="w-16 mt-2 h-1 bg-cpink-200 mx-auto rounded-full"></div></p>
            </div>
            
<div className="px-4 md:px-12"> 
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-8">
    {/* Left Section - Text */}
    <div className="flex flex-col w-full md:w-1/2">
      <p className="md:text-3xl text-2xl text-blue-400 font-bold mb-4">Let's talk</p>
      <p className="text-gray-600 md:p-4 text-sm md:text-lg">
        I'm Sohag Bhuiyan! I'm available to take new projects, <br /> so feel free to contact me, Thank You!
      
      </p>
      <div className="space-y-4">
        
        <div className="flex items-center space-x-4 bg-gray-200 px-4 py-2 rounded-lg w-80">
          <FaEnvelope className="text-blue-400 text-xl" />
          <p className="md:text-lg text-sm">smsohag171@gmail.com</p>
        </div>
        <div className="flex items-center space-x-4 bg-gray-200 px-4 py-2 rounded-lg w-80">
          <FaMapMarkerAlt className="text-red-400 text-xl" />
          <p className="md:text-lg text-sm">Nikunjo, Dhaka</p>
        </div>
        <div className="flex items-center space-x-4 bg-gray-200 px-4 py-2 rounded-lg w-80">
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
