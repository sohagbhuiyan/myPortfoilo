import { css, html, js, react } from '../../Utils/Images';

const Skills = () => {
    return (
        <div className=''>
                <p className='text-7xl p-4 font-bold text-center text-pink-800'>What I do</p>
                <p className='text-lg p-10 text-center sm:text-2xl text-gray-100'> I am a skilled and passionate web developer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, Tailwind, JavaScript and React, as well as design software
        such as Adobe Photoshop and Illustrator and Figma.</p>
           
            <div className='p-2 flex-col'>
                <div className='items-center flex  md:w-2/4 w-1/4 text-justify bg-slate-800 p-1 px-2 border rounded-xl'>
                    <img src={react} alt="" className='md:h-24 h-18 py-1 rounded-xl' /> 
                    <div className='p-6  text-gray-100'>
                    <p className='md:text-3xl text-xl font-medium'>React Js</p>
                    <p>This is Demo text , you can write here</p>
                    </div>
                    </div>

            <div className='items-center bg-slate-800 md:w-2/4 w-1/4 p-1 px-2 flex border rounded-xl'>
                    <img src={js} alt="" className='md:h-24 h-18 py-1 rounded-xl' />
                    <div className='p-6  text-gray-100'>
                    <p className='md:text-3xl text-xl font-medium '>JavaScript</p>
                    <p>This is Demo text , you can write here</p>
                    </div>
                    </div>  

                    <div className='items-center bg-slate-800 md:w-2/4 w-1/4 p-1 px-2 flex border rounded-xl'>
                    <img src={css} alt="" className='md:h-24 h-18 py-1 rounded-xl' />
                    <div className='p-6  text-gray-100'>
                    <p className='md:text-3xl text-xl font-medium '>Tailwind/CSS</p>
                    <p>This is Demo text , you can write here</p>
                    </div>
                    </div> 

                    <div className='items-center bg-slate-800 md:w-2/4 w-1/4 p-1 px-2 flex border rounded-xl'>
                    <img src={html} alt="" className='md:h-24 h-18 py-1 rounded-xl' />
                    <div className='p-6  text-gray-100'>
                    <p className='md:text-3xl text-xl font-medium '>HTML</p>
                    <p>This is Demo text , you can write here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
