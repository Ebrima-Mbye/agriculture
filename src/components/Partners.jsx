import React from "react";

const Partners = () => {
  const partners = [
    {
      name: "FarmFresh",
      description: "We partnered with FarmFresh to deliver a training program that empowered young entrepreneurs with modern farming techniques. From soil analysis to effective irrigation methods, the training provided hands-on experience to build sustainable farming practices. The collaboration resulted in many participants starting their own eco-friendly farms and boosting their local economies.",
    },
    {
      name: "AgriGlobal Solutions",
      description: "AgriGlobal Solutions, a leader in agricultural innovation, teamed up with us to implement advanced AI-driven tools for crop monitoring and precision farming. Together, we developed scalable solutions that drastically reduced waste and optimized yields for farms across Africa and beyond. Our joint projects have set new standards in sustainable farming.",
    },
    {
      name: "GreenFuture International",
      description: "We collaborated with GreenFuture International to integrate IoT devices into their farming operations, making processes faster, more efficient, and data-driven. The partnership also focused on renewable energy applications for powering agricultural tools, leading to successful projects that are now models of excellence for sustainable farming worldwide.",
    },
  ];

  return (
    <section className="py-16 bg-green-50" id="partners">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
        <div className="space-y-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg text-left"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                {partner.name}
              </h3>
              <p className="text-gray-700">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
