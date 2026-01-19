import React from "react";
import JNFLogo from "../assets/icons/logo.svg";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar w-full border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-3">
        {/* Logo (left) */}
        <div className="text-xl font-semibold">
          <img src={JNFLogo} alt="Logo" className="h-18 w-auto" />
        </div>

        {/* Right side items */}
        <div className="ml-auto hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-black">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            About
          </a>

          <a href="#" className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
