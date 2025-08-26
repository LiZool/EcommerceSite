import React from "react";

const ProductGrid = ({ products }) => {
  return (
    <div className="w-full px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-blue-100 cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-48 object-contain mx-auto transition duration-300 group-hover:opacity-70 z-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-blue-600 bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 z-10 pointer-events-none">
                <span className="text-white text-lg font-semibold">{product.name}</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    
  );
};

export default ProductGrid;