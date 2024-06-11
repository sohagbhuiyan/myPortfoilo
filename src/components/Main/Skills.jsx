import React from 'react';
import { react } from '../../Utils/Images';

const Skills = () => {
    return (
        <div className=''> 
            <div className=''>
                <p className='text-7xl p-4 font-bold text-center text-cpink-200'>What I do</p>
                <p className='text-lg p-10 text-center'> I am a skilled and passionate web developer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, Tailwind, JavaScript and React, as well as design software
        such as Adobe Photoshop and Illustrator and Figma.</p>
            </div>
            <div>
                <img src={react} alt="" className='h-20' />
            </div>
        </div>
    );
};

export default Skills;