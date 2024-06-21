import React from 'react';
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const ProjectParent = ({ images, title, desc,width,github }) => {
    return (
        <div className='md:flex py-4' >
            <img
                src={images}
                alt={title}
                style={{ width: width, borderRadius: '30px' }}
                className=' px-2 mb-4 transition-transform duration-500 transform hover:scale-105 hover:shadow-lg ' />
            <div className='px-4'>
                <div className='flex justify-between px-4'>
                    <p className='text-2xl cursor-pointer font-medium text-yellow-300'>{title}</p>
                    <p className='text-white flex px-4 cursor-pointer items-center mr-2'>Live
                    <BsArrowUpRightSquareFill className='text-blue-300 ml-1 text-xl font-bold'/>
                    </p>
                </div>
                <p className='text-sm px-4 font-medium text-yellow-50'>{desc}</p>
                <p className='text-blue-300 py-10 items-center p-2  flex px-4'>
                <FaGithub className='mr-1'/>
                GitHub Link:{github}</p>
                </div>             
        </div>
    );
};

export default ProjectParent;
