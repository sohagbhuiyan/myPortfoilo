import React from 'react';
import ProjectParent from './ProjectParent';
import { purchaseRequisition1, food, foodft, todo } from '../../Utils/Images';

const Project = () => {
    const allProject = [
        {
            images: todo,
            title: "TO-DO",
            desc: "It has two tabs to add list items. One is for personal lists and the other is for professional lists. It can mark, checked & deletetable",
            width:"400px ",
        },
        {
            images: purchaseRequisition1,
            title: "PURCHASE REQUISITION",
            desc: "This is the first page of Purchase Requisition. Users can easily move from one folder to another.",
            width: "400px",
        },
        {
            images: food,
            title: "FOOD DELIVERY",
            desc: "This is a food delivery website. Users can view restaurant names, details, and their services.",
            width: "400px",
        },
        {
            images: foodft,
            title: "FOOD DELIVERY - Footer",
            desc: "This is the footer section of the food delivery website. Users can view additional restaurant details and services.",
            width:"400px",
        },
    ];

    return (
        <>
            <div>
                <p className='text-6xl py-5 text-cpink-200 text-center items-center font-bold'>Here is My Projects</p>
                
        <div className='px-10 py-10 '>
            {allProject.map((proj, index) => (
                <ProjectParent key={index} images={proj.images} title={proj.title} desc={proj.desc} width={proj.width} />
            ))}
            </div>
            </div>
            </>
    );
};

export default Project;
