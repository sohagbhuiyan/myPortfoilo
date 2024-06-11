import React from 'react';
import { profilePic } from '../../Utils/Images';
const Home = () => {
    return (
        <div className='p-2 px-10 md:flex '>
            <div className=' md:py-40 px-2 py-10'>

            <p className='text-4xl text-slate-50 font-medium'>Hello, <br /> I am <span className=' font-bold text-6xl text-cpink-200'>Sohag Bhuiyan</span>  </p>
            <p className='py-6 text-slate-500 text-lg'> <span className='text-3xl font-medium'>Frontend Developer</span> <br />Highly motivated stay passions and able to work accept challange to develop have some experienced  work in real life project. </p>
            </div>
            <div className='md:ml-10'>

            <img src={profilePic} alt="" className='rounded-full p-2 md:px-16 md:py-10' />
            </div>
        </div>
    );
};

export default Home;