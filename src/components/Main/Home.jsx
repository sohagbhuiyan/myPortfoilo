
import { keyboard, profile } from '../../Utils/Images';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ 
            behavior: "smooth", 
            block: "start",
        });
    };
    
    return (
        <div className='min-h-screen flex items-center justify-center p-6 relative overflow-hidden'>
            {/* Color Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] opacity-95" />
            
            {/* Background Pattern */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${keyboard})` }}
            />
            
            <div className='flex flex-col md:flex-row items-center justify-between relative z-20'>
                {/* Text Content */}
                <motion.div
                    className='text-center md:text-left md:w-1/2 md:pr-8'
                    initial={{ x: -120, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-3xl md:text-5xl font-bold text-[#217DBB] mb-4'>
                        Hello, I'm
                    </p>
                    
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
                        <Typewriter
                            words={['Sohag Bhuiyan']}
                            loop={false}
                            cursor
                            cursorStyle='..'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1400}
                        />
                    </h1>

                    <div className='text-xl md:text-2xl font-medium text-[#F40469] mb-8 h-12'>
                        <Typewriter
                            words={['Software Developer', 'Frontend Expert', 'React Specialist']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1200}
                        />
                    </div>

                    <p className='text-lg md:text-xl text-gray-300 leading-relaxed mb-8'>
                    Crafting exceptional digital experiences with expertise in React.js, Redux, and modern 
                    web technologies. Passionate about building responsive, high-performance applications 
                    that blend aesthetic design with seamless functionality
                    </p>

                    <motion.button
                        className='bg-[#F40469] text-white font-bold py-3 px-8 rounded-full
                                  relative overflow-hidden group hover:bg-[#7cc0ff] transition-all
                                  duration-300 shadow-lg hover:shadow-lg hover:shadow-[#F40469]/30'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToContact}
                    >
                        <span className='relative z-10'>Hire Me Now</span>
                        <div className='absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity'/>
                    </motion.button>
                </motion.div>

                {/* Profile Picture with Enhanced Animation */}
                <motion.div 
                    className='mt-12 md:mt-0 md:w-1/2 flex justify-center'
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                        scale: 1, 
                        opacity: 1,
                        rotate: [0, 10, -10, 0], // Bouncing rotation
                        y: [0, -20, 0] // Floating effect
                    }}
                    transition={{ 
                        duration: 1.5,
                        delay: 0.5,
                        rotate: {
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut"
                        },
                        y: {
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut"
                        }
                    }}
                    whileHover={{
                        scale: 1.05,
                        rotate: 360, // Full spin on hover
                        transition: {
                            rotate: {
                                duration: 1.2,
                                ease: "easeInOut"
                            }
                        }
                    }}
                >
                    <div className='relative rounded-full p-1 bg-gradient-to-br from-[#F40469] to-[#217DBB]
                                 shadow-2xl hover:shadow-[#F40469]/40 transition-shadow'>
                        <motion.img
                            src={profile}
                            alt="Sohag Bhuiyan"
                            className='rounded-full w-64 h-64 md:w-96 md:h-96 border-4 border-white/20
                                    object-cover saturate-150 hover:saturate-200'
                            whileTap={{ scale: 0.95 }}
                        />
                        {/* Animated Ring */}
                        <div className='absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow
                                     mix-blend-lighten' style={{ borderImage: 'linear-gradient(45deg, #F40469, #217DBB) 1' }} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
