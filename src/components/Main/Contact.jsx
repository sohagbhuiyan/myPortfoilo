import React from 'react'; 
import { msg , mail, location,call} from '../../Utils/Images';
import Chat from './Chat';    

const Contact = () => {
    
    return (
      <div>
            <div className='flex items-center space-x-4 justify-center text-center'>
                <p className='md:text-6xl text-4xl font-bold text-cpink-200'>Get in touch</p>
                <img src={msg} alt=""className='md:h-24 h-16 md:w-40 w-32 px-2 rounded-3xl' />
            </div>
            <div className="px-8  mdpx-16 sm:w-1/2">
          <p className='md:text-5xl text-3xl text-blue-400 font-bold gradient-text mb-2 pl-6'>Let's talk</p>
          <Chat className="w-1/2 md:absolute items-end"/>
          <p className='text-gray-100 p-4 pl-6 text-xs md:text-lg'>  
            I'm Sohag bhuiyan! I'm available to take new projects, <br/> so
            feel free to contact with me, Thank You!
          </p>

        </div>
        <div className="p-6 sm:p-16 pl-14"> 
          <div className='flex space-x-2'>
            <img src={mail} alt="" className="w-8 rounded-lg" /> <p className='md:text-lg text-xs text-gray-100 '>smsohag171@gmail.com</p>
          </div>
          <div className='flex py-2 space-x-2'>
            <img src={location} alt="" className="h-8 rounded-lg" /> <p className='md:text-lg text-xs text-gray-100 '>Nikunjo, Dhaka</p>
          </div>
          <div className='flex space-x-2'>
            <img src={call} alt="" className="h-8 rounded-lg" /> <p className='md:text-lg text-xs text-gray-100 '>+88 01787345180</p>
          </div>
        </div>
      </div>
    );
};

export default Contact;
