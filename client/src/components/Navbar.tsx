// Navbar.jsx
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Exclusive</div>

        {/* Nav Links */}
        <div className="xxs:hidden xs:hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
          <Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link>
          <Link to="/about" className="text-gray-600 hover:text-black">About</Link>
        {
          <Link to="/signup" className="text-gray-600 hover:text-black">Sign Up</Link>
          
        } 
        </div>

        {/* Search Bar */}
        <div className="xxs:hidden xs:hidden md:flex items-center border rounded-full px-5 py-1 text-gray-400">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent focus:outline-none text-sm"
          />
          <button className="text-gray-600 hover:text-black ml-2">
          <IoSearchSharp />
              
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-2xl">
        <Link to="/wishlist" >
          <button className="text-gray-600 hover:text-black">
          <FaRegHeart />
          </button>
        </Link>
          <Link to="/cart" >
          <button className="text-gray-600 hover:text-black">
          <IoCartOutline />
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
