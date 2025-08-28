import React, { useState } from "react";

const ProductGrid = ({ products }) => {
  // Array of hover colors
  const hoverColors = ["#D3D3D3","#B6D0E2", "#9FE2BF", "#FEF3C7", "#e5d0ff", "#FAA0A0"]; // blue, green, yellow, red
  const overlayColors = ["#818589","#4682B4", "#10B981", "#FFD700	", "#bf8bff", "#EC5800"]; // Solid versions

  // Track hover state per grid item
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => {
          const hoverColor = hoverColors[index % hoverColors.length];
          const overlayColor = overlayColors[index % overlayColors.length];

          return (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: hoveredIndex === index ? hoverColor : "#F3F4F6", // gray-100
              }}
              className="group relative rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            >
              {/* Conditional Rendering */}
              {index === 0 ? (
                <div className="flex items-center justify-center h-64 p-6 text-center">
                  <h2 className="text-3xl font-extrabold text-gray-700">
                    Feel free to browse our wares
                  </h2>
                </div>
              ) : (
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-48 object-contain mx-auto transition duration-300 group-hover:opacity-70 z-0"
                  />
                  {/* Solid Overlay */}
                  <div
                    style={{ backgroundColor: overlayColor }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-10 pointer-events-none"
                  >
                    <span className="text-white text-lg font-semibold">{product.name}</span>
                  </div>
                </div>
              )}

              {/* Product Info */}
              {index !== 0 && (
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-700 font-bold">{product.price}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;