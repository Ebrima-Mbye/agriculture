import React from "react";

const Partners = () => {
  const partners = ["Partner A", "Partner B", "Partner C"];

  return (
    <section className="py-16 bg-green-50" id="partners">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
        <ul className="space-y-4">
          {partners.map((partner, index) => (
            <li key={index} className="text-lg font-medium">{partner}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
