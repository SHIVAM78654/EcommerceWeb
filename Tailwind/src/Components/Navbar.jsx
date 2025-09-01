import React from "react";
import { FiMenu, FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import { FaMale, FaFemale } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-[9999] backdrop-blur-md bg-gradient-to-r from-[#0a0a23] via-[#1a0033] to-[#000] border-b border-[#ffffff1a] shadow-[0_0_30px_rgba(255,0,255,0.3)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd5] via-[#8e2de2] to-[#f093fb] animate-textGlow tracking-widest">
          LUXORA
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-semibold text-white animate-fadeIn">
          {/* Menu Links */}
          <a href="#" className="hover:text-[#00ffd5] transition duration-300 relative group">
            Home
            <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ffd5] group-hover:w-full transition-all duration-300"></span>
          </a>
          
          <a href="#" className="hover:text-[#00c2ff] transition duration-300 relative group flex items-center gap-1">
            <FaMale className="text-base" /> Men
            <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-[#00c2ff] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="hover:text-[#ff69b4] transition duration-300 relative group flex items-center gap-1">
            <FaFemale className="text-base" /> Women
            <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff69b4] group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Icons */}
          
           <Link
      to="/cart"
      className="block text-white font-medium hover:text-[#ffd700]  rounded-md px-3 py-2 transition duration-200"
    >
      Cart
    </Link>
          <a href="#" className="hover:text-[#ff1493] transition duration-300 relative group flex items-center gap-1">
            <FiHeart className="text-xl" /> Wishlist
            <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff1493] group-hover:w-full transition-all duration-300"></span>
          </a>
          {/* Profile Dropdown */}
<div className="relative group">
  <div className="flex items-center gap-1 text-white cursor-pointer hover:text-[#00bfff] transition duration-300">
    <FiUser className="text-xl" />
    Profile
    <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-[#00bfff] group-hover:w-full transition-all duration-300"></span>
  </div>

  {/* Dropdown Menu */}
  <div className="absolute top-12 right-0 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1f] shadow-xl border border-[#ffffff20] rounded-xl py-3 px-4 w-48 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 space-y-2">
    <Link
      to="/login"
      className="block text-white font-medium hover:bg-[#00ffd5] hover:text-black rounded-md px-3 py-2 transition duration-200"
    >
      Login / Signup
    </Link>
    <Link
      to="/orders"
      className="block text-white font-medium hover:bg-[#ffd700] hover:text-black rounded-md px-3 py-2 transition duration-200"
    >
      Orders
    </Link>
    <Link
      to="/wishlist"
      className="block text-white font-medium hover:bg-[#ff1493] hover:text-white rounded-md px-3 py-2 transition duration-200"
    >
      Wishlist
    </Link>
  </div>
</div>


        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden animate-fadeIn">
          <FiMenu className="text-white text-3xl cursor-pointer hover:text-[#ffd700] transition-all duration-300" />
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-[#ffd700] via-[#ff00ff] to-[#00ffff] animate-pulse" />
    </nav>
  );
}

export default Navbar;
