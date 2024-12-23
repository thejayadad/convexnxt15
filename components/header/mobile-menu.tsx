'use client';

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import MobileLinks from './mobile-links';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Menu Button */}
      <button
        className="z-50 "
        onClick={toggleMenu}
      >
        {isOpen ? <div></div> : <FiMenu size={24} className='p-1 bg-gray-800 text-white rounded-full focus:outline-none' />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-100 text-gray-900 transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Logo Section */}
        <div className="p-4 border-b-[1px] flex items-center justify-between w-full">
          <h1 className="text-lg font-bold">Logo</h1>
          <button
        className="z-50"
        onClick={toggleMenu}
      >
        {isOpen ? <FiX size={24} className='p-1 bg-gray-800 text-white rounded-full focus:outline-none' /> : ''}
      </button>
        </div>

        {/* Links Section */}
        <nav className="flex flex-col items-center justify-center gap-6 mt-8">
            <MobileLinks />
        </nav>

        {/* Footer Section */}
        <footer className="absolute bottom-4 left-0 w-full text-center text-sm text-gray-400">
          © 2024 Your Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default MobileMenu;
