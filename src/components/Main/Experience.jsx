
import { Briefcase, Calendar, MapPin, } from "lucide-react";

const Experience = () => {
  const experienceData = [
    {
      title: "Frontend Developer (Next.js Full-Stack)",
      company: "Trodad International Ltd",
      location: "Mirpur DOHS, Dhaka",
      duration: "May 2025 – Present",
      current: true,
      description: [
        "Building responsive, scalable, and SEO-friendly web applications using Next.js, TypeScript, and Tailwind CSS.",
        "Creating reusable UI components with shadcn/ui for consistent and accessible design systems.",
        "Developing secure server actions and API routes with Prisma ORM.",
        "Designing and managing PostgreSQL databases including schema design and optimized queries.",
        "Building custom React hooks for data fetching, caching, and state management.",
        "Collaborating with backend, design, and product teams in an agile environment.",
        "Optimizing performance for faster load times and accessibility.",
        "Participating in code reviews and architectural decision-making.",
        "Supporting Expo-based mobile feature integration."
      ]
    },
    {
      title: "Junior Frontend Developer",
      company: "SaverFavor Limited",
      location: "Sector-4, Uttara, Dhaka",
      duration: "August 2024 – April 2025",
      current: false,
      description: [
        "Developed responsive web apps using React.js, Next.js, Redux Toolkit, Tailwind CSS, and MUI.",
        "Built scalable state management and reusable UI components.",
        "Integrated REST APIs for products, authentication, cart, and orders.",
        "Created full-featured admin dashboard with CRUD operations."
      ]
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200/10 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-4 shadow-lg">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Professional <span className="text-gray-800">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-900 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            My journey through professional roles and technical contributions
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical timeline line - centered and full height */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300" />
          
          {/* Experience Items */}
          <div className="space-y-10">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 z-10">
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                    exp.current 
                      ? "bg-gradient-to-r from-gray-800 to-gray-900 animate-pulse" 
                      : "bg-gradient-to-r from-gray-600 to-gray-700"
                  }`} />
                </div>

                {/* Experience Card */}
                <div className="relative w-full max-w-3xl mx-auto">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden transform hover:-translate-y-1">
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-5 relative">
                      {/* {exp.current && (
                        <span className="absolute top-4 right-4 px-3 py-1 bg-white text-gray-800 text-xs font-bold rounded-full shadow">
                          CURRENT ROLE
                        </span>
                      )} */}
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-white pr-20 sm:pr-0">
                          {exp.title}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                          {exp.duration}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-200">
                          <Briefcase className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="px-6 py-5">
                      <ul className="space-y-3">
                        {exp.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-700 leading-relaxed group"
                          >
                            <div className="flex-shrink-0 mt-1 mr-3">
                              <div className="w-2 h-2 rounded-full bg-gray-800 group-hover:scale-125 transition-transform" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack indicator */}
                    <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center">
                          {exp.current ? (
                            <span className="inline-flex items-center text-sm text-gray-800 font-semibold">
                              <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                              Active Position
                            </span>
                          ) : (
                            <span className="text-sm text-gray-500">
                              9 months experience
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Progress Indicator */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-800 rounded-full mr-2" />
              <span className="text-gray-700 font-medium">2 Professional Roles</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2" />
              <span className="text-gray-700 font-medium">Currently Active</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-600 rounded-full mr-2" />
              <span className="text-gray-700 font-medium">2+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;