const Experience = () => {
  const experienceData = [
    {
      title: "Frontend Developer",
      company: "SaverFavor Limited",
      duration: "September 2024 - Present",
      description: [
        "Crafted dynamic and responsive web applications using React.js, Next.js, and Redux Toolkit, delivering seamless user experiences with optimized performance.",
        "Designed visually appealing, accessible interfaces with Tailwind CSS, enhancing user engagement and ensuring cross-device compatibility.",
        "Integrated RESTful APIs to facilitate efficient data exchange, boosting application functionality and reliability.",
        "Maintained Git version control for streamlined collaboration, ensuring code quality and agile workflows in fast-paced environments.",
        "Collaborated with designers and backend developers to deliver scalable, high-impact solutions, contributing to a 20% uplift in user retention."
      ]
    }
  ];

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-cpink-200">
          Professional Experience 💼
        </h2>
        <div className="w-20 mt-3 h-1 bg-cpink-200 mx-auto rounded-full"></div>

        <div className="mt-10 space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative border-l-4 border-cpink-200 bg-gray-50 rounded-lg p-5 sm:p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="absolute -left-3 top-4 w-6 h-6 bg-cpink-200 rounded-full border-4 border-white"></div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center sm:text-left">
                  {exp.title} <span className="text-cpink-200">•</span> {exp.company}
                </h3>
                <span className="text-md font-medium text-gray-500 text-center sm:text-right">
                  {exp.duration}
                </span>
              </div>

              <ul className="list-disc list-inside text-gray-700 space-y-2 text-xs sm:text-base">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
