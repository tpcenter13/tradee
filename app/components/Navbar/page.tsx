"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#16668d] px-6 py-3 flex justify-between items-center shadow-md">
      {/* Logo / Title */}
      <h1 className="text-white font-bold text-lg">TradeConnect</h1>

      {/* Navigation Links */}
      <div className="flex space-x-6 items-center">
        <button className="bg-[#4a6fa5] text-white font-semibold px-4 py-1 rounded">
          Login
        </button>
        <a href="#" className="text-white hover:underline">
          Sign Up
        </a>
        <a href="#" className="text-white hover:underline">
          Forgot Password
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
