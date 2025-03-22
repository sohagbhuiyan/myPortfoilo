import React from 'react';
import { profilePic } from '../../Utils/Images';

const Home = () => {
    return (
        <div className='min-h-screen px-10 flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 p-6'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
                {/* Text Content */}
                <div className='text-center md:text-left md:w-1/2 md:pr-10'>
                    <p className='text-4xl md:text-5xl font-bold text-white mb-4'>
                        Hello, <br /> I am <span className='text-cpink-200'>Sohag Bhuiyan</span>
                    </p>
                    <p className='text-xl md:text-2xl font-medium text-gray-300 mb-6'>
                        Frontend Developer
                    </p>
                    <p className='text-lg text-gray-400 leading-relaxed'>
                        I'm a passionate Frontend Developer skilled in React.js, Tailwind CSS, and UI/UX design. 
                        I specialize in building responsive, user-friendly web applications with seamless functionality. 
                        Constantly exploring new technologies, I strive to create engaging digital experiences.
                    </p>
                    {/* Call-to-Action Button (Optional) */}
                    <button className='mt-8 bg-cpink-200 text-white font-semibold py-3 px-8 rounded-full hover:bg-cpink-300 transition duration-300'>
                        View My Work
                    </button>
                </div>

                {/* Profile Picture */}
                <div className='mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end'>
                    <img 
                        src={profilePic} 
                        alt="Sohag Bhuiyan" 
                        className='rounded-full w-64 h-64 md:w-96 md:h-96 border-4 border-cpink-200 shadow-lg transform hover:scale-110 transition duration-300' 
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
