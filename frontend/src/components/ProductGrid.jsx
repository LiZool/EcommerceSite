// src/components/ProductGrid.jsx
import React from "react";

const ProductGrid = ({ products }) => {
  return (
    <div className="w-full px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-30 h-48 object-contain mx-auto"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;