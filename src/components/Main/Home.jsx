import React from 'react';
import { profilePic } from '../../Utils/Images';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    return (
        <div className='min-h-screen px-6 md:px-12 flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 p-6'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>

                {/* Text Content with animation */}
                <motion.div
                    className='text-center md:text-left md:w-1/2 md:pr-10'
                    initial={{ x: -120, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-2xl md:text-5xl font-bold text-white mb-4 leading-snug'>
                        Hello, <br /> I am 
                        <span className='font-bold text-3xl md:text-6xl text-cpink-200'>
                            <Typewriter
                                words={[' Sohag Bhuiyan']}
                                loop={false}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1400}
                            />
                        </span>
                    </p>

                    <p className='text-xl md:text-2xl font-medium text-cpink-200 mb-6'>
                        <Typewriter
                            words={['Software Developer', 'Frontend Developer', 'iOS Developer', 'React.js Enthusiast']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1200}
                        />
                    </p>

                    <p className='text-md md:text-xl text-gray-400 leading-relaxed'>
                        I'm a passionate Frontend Developer skilled in React.js, Tailwind CSS, and UI/UX design. 
                        I specialize in building responsive, user-friendly web applications with seamless functionality. 
                        Constantly exploring new technologies, I strive to create engaging digital experiences.
                    </p>

                    <motion.button
                        className='mt-8 bg-cpink-200 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-700 transition duration-300'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Hire Me!
                    </motion.button>
                </motion.div>

                {/* Profile Picture with animation */}
                <motion.div
                    className='mt-8 md:mt-0 md:w-1/2 px-10 flex justify-center md:justify-end'
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.02 }}
                    whileHover={{ scale: 1.15, rotate: 1 }}
                >
                    <img
                        src={profilePic}
                        alt="Sohag Bhuiyan"
                        className='rounded-full w-64 h-64 md:w-96 md:h-96 border-4 border-cpink-200 shadow-xl shadow-cpink-200 object-cover'
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
