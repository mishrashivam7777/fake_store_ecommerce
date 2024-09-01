// import { useState } from 'react';
// import { Link } from "react-router-dom";

const Navbar = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <nav className="p-4 text-white shadow-md relative bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-black">Ecommerce Website</h1>
        </div>
        
        <div className="hidden md:flex space-x-4">
          <a className="text-black hover:text-gray-400 cursor-pointer">Home</a>
          <a className="text-black hover:text-gray-400 cursor-pointer">Shop</a>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 pl-10 rounded bg-white text-black border border-gray-400 focus:border-none"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 0v0zM21 21l-4.35-4.35" />
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
