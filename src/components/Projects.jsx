import React from "react";

const Projects = () => {
  const projects = [
    { title: "Smart Irrigation Pilot", description: "A successful project in rural Senegal." },
    { title: "Organic Farming Initiative", description: "Promoting eco-friendly farming in The Gambia." },
    { title: "Crop Monitoring Research", description: "Developing AI tools to optimize yield." },
  ];

  return (
    <section className="py-16 bg-green-100" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
