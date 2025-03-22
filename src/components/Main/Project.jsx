import React from 'react'; 
import { FaGithub } from 'react-icons/fa';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';
import { purchaseRequisition1, food, todo, ecommerce } from '../../Utils/Images';

const ProjectCard = ({ images, title, desc, live, github }) => {
    return (
        <div className='bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105'>
            <img src={images} alt={title} className='w-full h-56 object-cover rounded-lg mb-4' />
            <h3 className='text-xl font-semibold text-yellow-300'>{title}</h3>
            <p className='text-sm text-gray-300 my-2'>{desc}</p>
            <div className='flex justify-between items-center mt-4'>
                <a href={live} target='_blank' rel='noopener noreferrer' className='flex items-center text-blue-400 hover:text-blue-300 transition-all'>
                    <span className='font-medium'>Live</span>
                    <BsArrowUpRightSquareFill className='ml-1 text-xl' />
                </a>
                <a href={github} target='_blank' rel='noopener noreferrer' className='flex items-center text-gray-400 hover:text-gray-300 transition-all'>
                    <FaGithub className='mr-1 text-xl' />
                    <span className='font-medium'>GitHub</span>
                </a>
            </div>
        </div>
    );
};

const Project = () => {
    const allProjects = [
        {
            images: ecommerce,
            title: 'E-commerce',
            desc: 'Manage product data dynamically while allowing users to browse, view specifications, and add items to their cart.',
            live: 'https://saverfavor-e-commerce.vercel.app/',
            github: 'https://github.com/sohagbhuiyan/saverfavor_e-commerce.git',
        },
        {
            images: todo,
            title: 'To-Do App',
            desc: 'Features personal & professional lists with options to mark, check, and delete tasks.',
            live: 'https://sohagbhuiyan.github.io/TODO/',
            github: 'https://github.com/sohagbhuiyan/TODO',
        },
        {
            images: food,
            title: 'Food Delivery',
            desc: 'Users can view restaurants, their details, and services on this food delivery website.',
            live: 'https://task-food-delivery.vercel.app/',
            github: 'https://github.com/sohagbhuiyan/task-FoodDelivery',
        },
        {
            images: purchaseRequisition1,
            title: 'Purchase Requisition',
            desc: 'Users can navigate easily between folders on this purchase requisition page.',
            live: 'https://window-design-rho.vercel.app/',
            github: 'https://github.com/sohagbhuiyan/window-Design',
        },
    ];

    return (
        <div className='py-10 px-6 md:px-16 bg-gray-950 min-h-screen'>
            <h2 className='text-4xl md:text-6xl font-bold text-center text-cpink-200 mb-10'>Here are My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {allProjects.map((proj, index) => (
                    <ProjectCard key={index} {...proj} />
                ))}
            </div>
        </div>
    );
};

export default Project;
