import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Define the routes dynamically
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Contact", path: "/contactus" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-5 md:px-10 md:py-2">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <div className="w-[100px] h-[100px]">
            <img src="/images/logo.png" alt="Dawat-e-Zaika" />
          </div>
        </div>

        {/* Hamburger Icon (Only visible on mobile and tablet) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Links - Hidden on mobile and tablet */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-black">
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Drawer Menu for mobile and tablet */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="lg:hidden fixed top-0 right-0 w-64 bg-gray-800 h-full z-50 shadow-lg"
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-12">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-white text-lg">
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
