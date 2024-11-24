import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { isValidArray } from "../utils/validation";
import {
  clearAllFilter,
  setSearchByCategory,
} from "../redux/slice/filterSlice";

const Filters = (props) => {
  const { category, setCategory, productList, setSearchName } = props; //extract props

  const dispatch = useDispatch(); // hooks to dispatch an action

  const [availCategories, setAvailCategories] = useState([]); //state to store categories

  // To extract unique category from product list data
  useEffect(() => {
    const categories = productList?.data?.map((product) => product?.category);
    const uniqueCategories = [...new Set(categories)];
    setAvailCategories(uniqueCategories);
  }, [productList?.data]);

  // Function to handle category filter
  const handleCategoryChange = (value) => {
    setCategory(value);
    dispatch(setSearchByCategory(value));
  };

  //   Function to handle clear all filter
  const handleClearFilter = () => {
    setCategory("");
    setSearchName("");
    dispatch(clearAllFilter());
  };

  return (
    <div className="bg-gray-100 py-4 flex items-center sm:px-20 px-5 justify-between">
      <div>
        <select
          id="category"
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="mt-1 block w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-3 pr-12"
        >
          <option value="">All Categories</option>
          {isValidArray(availCategories) ? (
            availCategories?.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))
          ) : (
            <option value="">No Category Available</option>
          )}
        </select>
      </div>

      <div>
        <button
          onClick={() => handleClearFilter()}
          className="border p-2 bg-white rounded-lg hover:shadow-lg"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
