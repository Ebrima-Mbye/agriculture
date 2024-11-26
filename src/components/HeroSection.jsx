import React from "react";
import backgroundImage from "../images/background.png";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Growing the Future Together</h1>
        <p className="text-lg md:text-2xl mb-6">Sustainable agriculture solutions for a greener tomorrow.</p>
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded">Explore More</button>
      </div>
    </section>
  );
};

export default HeroSection;
