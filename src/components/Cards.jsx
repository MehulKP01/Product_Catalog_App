import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = ({ product }) => {
  // Function to display only toast when click on add to cart button
  const handleAddToCart = () => {
    toast.success("Product added to cart!");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:cursor-pointer overflow-hidden max-w-[400px] border border-gray-200 hover:scale-105 transition duration-700 ease-in-out">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 object-contain"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        <p className="text-lg font-bold text-blue-600 mt-2">
          Rs. {product.price}
        </p>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <button
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
