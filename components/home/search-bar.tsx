import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-lg px-4 py-6">
        {/* Search Bar Container */}
        <div className="relative flex items-center">
          {/* Search Icon */}
          <FiSearch className="absolute left-4 text-gray-400 text-xl" />

          {/* Input Field */}
          <input
            type="text"
            placeholder="Search for vehicles, reviews, or experiences..."
            className="w-full pl-12 pr-4 py-2 text-gray-900 bg-gray-100 rounded-full shadow-md focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm lg:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
