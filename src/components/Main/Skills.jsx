import { css, js, htmL, react, redux } from "../../Utils/Images";
import SkillParent from "./SkillParent";

const Skills = () => {
  const skillsData = [
    {
      images: react,
      title: "Frontend Development",
      text: "Expert in building scalable React and Next.js applications with Redux Toolkit for efficient state management. Skilled in creating responsive, modern UIs using Tailwind CSS and Material UI.",
    },
    {
      images: redux,
      title: "Next.js & Redux Toolkit",
      text: "Proficient in managing state within Next.js applications using Redux Toolkit, leveraging slice-based architecture, middleware integration, and SSR/CSR state handling.",
    },
    {
      images: js,
      title: "JavaScript / TypeScript",
      text: "Strong foundation in modern JavaScript (ES6+) including async programming, DOM manipulation, and TypeScript integration for type safety and scalability.",
    },
    {
      images: css,
      title: "Tailwind CSS",
      text: "Proficient in building responsive and modern UI using Tailwind CSS. Experienced in customizing utility classes, optimizing design systems, and integrating seamlessly with React components.",
    },
    {
      images: htmL,
      title: "HTML5",
      text: "Skilled in writing clean, semantic HTML for building accessible web interfaces. Experienced in creating responsive layouts and integrating with CSS frameworks and JavaScript libraries.",
    },
  ];

  const skillTags = {
     Programming: ["C", "C++", "Java", "OOP", "SOLID"],
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI",
      "ShadCN",
    ],
    Tools: ["VS Code", "Git", "GitHub", "JIRA", "Asana", "Trello"],
    iOS: [
      "Swift",
      "Xcode",
      "iOS",
      "Storyboard",
      "XIB",
      "NIB",
      "MVC",
      "MVP",
      "MVVM",
      "CocoaPods",
      "Auto Layout Constraints",
    ],
   
  };

  return (
    <div className="p-4 mt-2">
      {/* Section Header */}
      <p className="md:text-4xl text-2xl font-bold text-center text-cpink-200 ">
        Skills
      </p>
      <div className="w-16 mt-2 h-1 bg-cpink-200 mx-auto rounded-full"></div>

      {/* Intro */}
      <p className="text-lg p-10 text-center sm:text-2xl text-gray-600">
        I am a skilled and passionate web developer with experience in creating
        visually appealing and user-friendly applications. I have a strong
        foundation in frontend and iOS development, with expertise in building
        scalable solutions using React, Next.js, Redux Toolkit, and Tailwind
        CSS.
      </p>

      {/* Skill Cards */}
      <div className="p-2 px-10 flex-col mb-6 space-y-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center text-center rounded-2xl transition"
          >
            <SkillParent
              images={skill.images}
              title={
                <span className="text-2xl items-center font-bold bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                  {skill.title}
                </span>
              }
              text={skill.text}
            />
          </div>
        ))}
      </div>

      {/* Skill Tags */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {Object.entries(skillTags).map(([category, items]) => (
            <div key={category} className="mb-8">
              {/* Category Title with Gradient */}
              <h3 className="text-2xl font-semibold text-center mb-4 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {category}
              </h3>

              {/* Tags */}
              <div className="flex justify-center gap-3">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:from-blue-100 hover:to-purple-100 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
