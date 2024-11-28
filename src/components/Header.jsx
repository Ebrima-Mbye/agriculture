import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navlinks = [
    {
      href: "#home",
      text: "Home",
    },
    {
      href: "#about",
      text: "About Us",
    },
    {
      href: "#services",
      text: "Services",
    },
    {
      href: "#blog",
      text: "Blog",
    },
    {
      href: "#contact",
      text: "Contact",
    },
  ];

  document.querySelectorAll("div").forEach(section =>  {section.style.border = "1px solid red"});

  const openMenu = () => {
    const menu = document.getElementById("menu");
    if (isMenuOpen) {
      menu.style.transform = "translateY(0px)";
    } else {
      menu.style.transform = "translateY(100px)";
      menu.style.height = "100%";
    }
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-green-600 text-white">
      <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="flex-2 text-2xl font-bold">Agritech</div>

        {/* Navigation + Button Container */}
        <div className="transition-transform duration-300 z-50 flex-1 flex justify-end items-center">
          {/* Hamburger Menu (visible on small screens) */}
          {/* <button className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" onClick={() => setIsMenuOpen((prev) => !prev)}> */}
          <button
            className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onClick={openMenu}
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>

          {/* Navigation Menu */}
          {/* <div id="menu" className="flex "> */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full lg:static lg:w-auto lg:flex lg:items-center lg:space-x-4 bg-green-600 lg:bg-transparent lg:p-0`}
          >
            <ul className="space-y-4 lg:space-y-0 lg:flex lg:space-x-4">
              {navlinks.map((navlink) => (
                <li>
                  <a
                    href={navlink.href}
                    className="block text-center lg:inline hover:underline"
                  >
                    {navlink.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get Started Button */}
          <button className="hidden lg:block ml-4 px-4 py-2 transition-colors duration-300 bg-yellow-500 hover:bg-yellow-600 rounded text-center">
            Get Started
          </button>
        </div>
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
