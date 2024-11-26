import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Us */}
        <div>
          <h4 className="text-xl font-semibold mb-4">About Us</h4>
          <p className="text-sm">
            We are dedicated to providing sustainable agricultural solutions
            for farmers worldwide. Learn more about our mission and values.
          </p>
          <a href="#about" className="text-yellow-400 hover:underline mt-2 inline-block">
            Read More
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact Us</a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">Blog</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>
          <p className="text-sm">Email: support@sunufarm.com</p>
          <p className="text-sm">Phone: +123-456-7890</p>
          <p className="text-sm">Address: 123 Farm Lane, Green City</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} SunuFarm. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
