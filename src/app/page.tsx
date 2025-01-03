"use client";

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-extrabold text-white">Stylo</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button className="text-white text-lg hover:text-gray-200 transition">Home</button>
          <button className="text-white text-lg hover:text-gray-200 transition">Projects</button>
          <button className="text-white text-lg hover:text-gray-200 transition">Blog</button>
          <button className="text-white text-lg hover:text-gray-200 transition">Contact</button>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <button className="text-white text-lg hover:text-gray-200 transition">Home</button>
            <button className="text-white text-lg hover:text-gray-200 transition">Projects</button>
            <button className="text-white text-lg hover:text-gray-200 transition">Blog</button>
            <button className="text-white text-lg hover:text-gray-200 transition">Contact</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
