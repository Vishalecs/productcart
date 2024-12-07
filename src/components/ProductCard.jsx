import React from "react";

const ProductCard = ({ name, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Display image */}
      <img
        src={image}
        alt={name}
        className="w-full h-70 object-contain sm:h-82 bg-gray-100"
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
        {/* Button container */}
        <div className="mt-3 flex justify-between items-center">
          <button className="px-4 py-2 bg-yellow-500 text-white text-sm font-semibold rounded hover:bg-blue-600 focus:ring focus:ring-blue-300">
            Buy Now
          </button>
          <button className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded hover:bg-green-600 focus:ring focus:ring-green-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
