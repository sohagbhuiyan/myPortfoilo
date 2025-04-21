const Education = () => {
    const educationData = [
      {
        title: "BSc in Computer Science & Engineering (CSE)",
        institution: "Primeasia University",
        duration: "2017 - 2021",
        degree: "Bachelor of Science (Engg)"
      },
      {
        title: "Higher Secondary Certificate (HSC)",
        institution: "Major General Mahmudul Hasan Adarsha College, Tangail",
        duration: "2014 - 2016",
      },
      {
        title: "Secondary School Certificate (SSC)",
        institution: "Dhalapara S.U.P High School",
        duration: "2010 - 2014",
      }
    ];
  
    return (
      <section className="bg-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="md:text-4xl text-2xl font-bold text-center mt-6 text-cpink-200">
            Education 📚
          </h2>
          <div className="w-16 mt-2 h-1 bg-cpink-200 mx-auto rounded-full"></div>
          <div className="space-y-6 mt-8 mb-4">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {edu.institution}
                  </h3>
                  <span className="text-sm text-gray-500">{edu.duration}</span>
                </div>
                <p className="text-gray-600">{edu.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
  