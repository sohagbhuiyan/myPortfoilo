
import {  css, ios, js, react, reactss, redux, swift } from '../../Utils/Images';
import SkillParent from './SkillParent'; // Adjust the import path as needed

const Skills = () => {
    const skills = [
        "Swift", "C", "C++", "iOS", "Storyboard", "XIB", "NIB", 
        "MVC", "MVP", "MVVM", "VIPER", "Git", "Xcode", 
        "JIRA", "Slack", "Trello", "CocoaPods", "Carthage", 
        "SPM", "OOP", "SOLID", "Auto Layout Constraints",
        "React",
        "Redux", "Javascript", "Tailwind", "HTML","CSS",
      ];
    // Define the data for skills
    const skillsData = [
      { 
          images: ios, 
          title: 'iOS Development', 
          text: 'Proficient in Swift and SwiftUI for building native iOS applications. Experienced in Core Data, ARKit, and integrating REST APIs for full-featured mobile solutions.' 
      },
      { 
          images: react, 
          title: 'Frontend Development', 
          text: 'Expertise in state management using Redux Toolkit for complex React applications. Skilled in middleware integration and optimized state updates.' 
      },
  
      { 
          images: swift, 
          title: 'Swift Programming', 
          text: 'Deep understanding of Swift syntax and language features. Proficient in protocol-oriented programming, memory management, and concurrency with async/await.' 
      },
      { 
          images: js, 
          title: 'JavaScript ES6+', 
          text: 'Strong foundation in modern JavaScript including async programming, DOM manipulation, and ES6+ features. Experienced in functional programming patterns and TypeScript integration.' 
      },
      {
        images: css,
        title: 'Tailwind CSS',
        text: 'Proficient in building responsive and modern UI using Tailwind CSS. Skilled in customizing utility classes, optimizing design systems, and integrating seamlessly with React components.'
      },
  ];

    return (
        <div className='p-4 mt-2'>
            <p className='md:text-4xl text-2xl font-bold text-center text-cpink-200'>Skills</p>
            <div className="w-16 mt-2 h-1 bg-cpink-200 mx-auto rounded-full"></div>
            <p className='text-lg p-10 text-center sm:text-2xl text-gray-600'>
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
            <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 px-4 py-3 rounded-md text-sm font-medium shadow-sm hover:bg-blue-100 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default Skills;
