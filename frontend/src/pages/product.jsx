// src/pages/product.jsx

import React from "react";

const Product = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-600">{product.price}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;