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
        
        
      </div>
    </nav>
  );
};

export default Navbar;
