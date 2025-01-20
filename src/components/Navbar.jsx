import React, { useState } from "react";
import { ArrowDropDown, Close } from "@mui/icons-material";
import Logo from '../../public/assets/Group 160.png'; // Import the logo image
import Avatar from '../../public/assets/Avatar (2).png'; // Import the avatar image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-gray-50">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <img
          src={Logo} // Use the imported Logo component here
          alt="Company Logo"
          className="h-8"
        />

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "flex flex-col space-y-4 absolute top-16 left-0 w-full bg-white border" : "hidden"
          } md:flex md:space-x-6 md:flex-row md:static md:bg-transparent md:border-none`}
        >
          <li className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
            Home
          </li>
          {/* Dropdowns */}
          <li className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer">
              Products
              <ArrowDropDown />
            </div>
            <ul className="hidden absolute mt-2 group-hover:flex flex-col bg-white border">
              <li className="px-4 py-2 hover:bg-gray-100">Product 1</li>
              <li className="px-4 py-2 hover:bg-gray-100">Product 2</li>
            </ul>
          </li>
          <li className="relative">
            <div className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-blue-600 font-medium">
              Resources
              <ArrowDropDown className="h-5 w-5 text-gray-500" />
            </div>
            <ul className="absolute left-0 mt-2 hidden w-40 bg-white border border-gray-200 shadow-lg group-hover:flex flex-col group relative hover:flex">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Resource 1
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Resource 2
              </li>
            </ul>
          </li>
          <li className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
            Pricing
          </li>
        </ul>
      </div>

      {/* Hamburger or Close Icon */}
      <button
        className="md:hidden flex flex-col items-center space-y-1 ml-auto"  
        onClick={toggleMenu}
      >
        {menuOpen ? (
          // Close Icon (X)
          <Close className="block w-6 h-0.5 rotate-135 translate-y-1" />
        ) : (
          <>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </>
        )}
      </button>

      {/* Right Section - Avatar (Hidden on smaller screens) */}
      <div className="hidden md:flex items-center">
        <img
          src={Avatar} // Use the imported Avatar component here
          alt="User Avatar"
          className="h-10 w-10 rounded-full border border-gray-200"
        />
      </div>
    </nav>
  );
};

export default Navbar;
