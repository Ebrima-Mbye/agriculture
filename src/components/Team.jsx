import React from "react";

const Team = () => {
  const teamMembers = [
    { name: "Ebrima M.", role: "CEO & Founder", image: "https://via.placeholder.com/150" },
    { name: "Awa T.", role: "Head of Research", image: "https://via.placeholder.com/150" },
    { name: "Musa J.", role: "Field Manager", image: "https://via.placeholder.com/150" },
    { name: "Sulayman S.", role: "Product Designer", image: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="py-16 bg-gray-200" id="team">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
