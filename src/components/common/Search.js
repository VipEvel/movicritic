"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchComponent = ({ onSearch }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (onSearch) {
        onSearch();
      }
    }
  };

  return (
    <div
      className={`flex items-center bg-white w-[28rem] px-4 py-2 ring-2 rounded-md ${
        isFocused ? "ring-indigo-600" : "ring-indigo-300"
      }`}
    >
      <FaSearch className="text-gray-500 font-thin" />
      <input
        type="text"
        placeholder="Search for your favourite movie"
        className="ml-5 w-full h-10 focus:border-none focus:outline-none"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchComponent;
