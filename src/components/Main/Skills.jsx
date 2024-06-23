import React from 'react';
import { css, html, js, react } from '../../Utils/Images';
import SkillParent from './SkillParent'; // Adjust the import path as needed

const Skills = () => {
    // Define the data for skills
    const skillsData = [
        { 
            images: react, 
            title: 'React Js', 
            text: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.' 
        },
        { 
            images: js, 
            title: 'JavaScript', 
            text: 'JavaScript is a programming language that conforms to the ECMAScript specification. It is high-level, often just-in-time compiled, and multi-paradigm.' 
        },
        { 
            images: css, 
            title: 'Tailwind/CSS', 
            text: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework.' 
        },
        { 
            images: html, 
            title: 'HTML', 
            text: 'HTML is the standard markup language for creating web pages and web applications. It describes the structure of a Web page.' 
        }
    ];

    return (
        <div className=''>
            <p className='md:text-6xl text-4xl p-4 font-bold text-center text-cpink-200'>What I do</p>
            <p className='text-lg p-10 text-center sm:text-2xl text-gray-100'>
                I am a skilled and passionate web developer with experience in creating
                visually appealing and user-friendly websites. I have a strong
                understanding of design and a keen eye for detail. I am proficient in
                HTML, CSS, Tailwind, JavaScript, and React, as well as design software
                such as Adobe Photoshop, Illustrator, and Figma.
            </p>
            <div className='p-2 md:flex px-10 flex-col items-center mb-6 space-y-4'>
                {skillsData.map((skill, index) => (
                    <SkillParent 
                        key={index} 
                        images={skill.images} 
                        title={skill.title} 
                        text={skill.text} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;
