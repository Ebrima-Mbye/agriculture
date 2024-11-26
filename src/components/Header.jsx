import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-green-600 text-white">
      <div className="text-2xl font-bold">SunuFarm</div>
      <nav className="space-x-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About Us</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#blog" className="hover:underline">Blog</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <button className="px-4 py-2 transition-colors duration-300 bg-yellow-500 hover:bg-yellow-600 rounded">Get Started</button>
    </header>
  );
};

export default Header;
