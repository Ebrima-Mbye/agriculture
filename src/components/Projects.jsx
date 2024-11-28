import React, { useState } from "react";

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const projects = [
    {
      title: "Smart Irrigation Pilot",
      description:
        "A successful project in rural Senegal, where we introduced efficient irrigation systems tailored to water-scarce regions. This project not only increased crop yields but also improved resource sustainability for local farmers.",
    },
    {
      title: "Organic Farming Initiative",
      description:
        "Promoting eco-friendly farming in The Gambia through the introduction of organic fertilizers, sustainable crop rotation methods, and advanced pest management strategies. The initiative has helped reduce environmental impact while boosting productivity.",
    },
    {
      title: "Crop Monitoring Research",
      description:
        "Developing AI tools to optimize yield by analyzing real-time data from sensors. This project has proven instrumental in helping farmers make informed decisions about irrigation, pest control, and harvesting times.",
    },
    {
      title: "Renewable Energy Integration",
      description:
        "Implementing solar energy solutions for farms, enabling reliable power for irrigation, machinery, and storage facilities. This initiative has reduced dependency on fossil fuels, making farming more sustainable and cost-effective.",
    },
  ];

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-16 bg-green-100" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expanded[index];
            const words = project.description.split(" ");
            const shortDescription =
              words.slice(0, 20).join(" ") + (words.length > 20 ? "..." : "");
            return (
              <div key={index} className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">
                  {isExpanded ? project.description : shortDescription}
                </p>
                {words.length > 20 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-green-600 underline mt-2"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
