import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchByName } from "../redux/slice/filterSlice";

const Header = ({ searchName, setSearchName }) => {
  const dispatch = useDispatch(); // hooks to dispatch an action

  // Function to handle search by name filter
  const handleChange = (value) => {
    setSearchName(value);
    dispatch(setSearchByName(value)); //store search value in redux store
  };

  return (
    <header className="bg-blue-600 py-4 shadow-md sticky top-0 z-[999]">
      <div className="container mx-auto flex sm:flex-row flex-col sm:space-y-0 space-y-5 justify-between items-center px-10">
        {/* App title */}
        <div className="flex items-center space-x-2">
          <h1 className="text-white text-2xl font-semibold">Product Catalog</h1>
        </div>

        {/* Search Input */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchName}
            onChange={(e) => handleChange(e.target.value)}
            className="sm:p-2 p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-3 sm:pr-12"
          />
          {searchName && (
            <button
              onClick={() => handleChange("")}
              className="absolute right-3 text-gray-500 hover:text-gray-700 text-xl w-8 h-8 flex items-center justify-center rounded-full"
            >
              &times;
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
