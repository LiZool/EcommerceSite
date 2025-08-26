// src/components/RotatingTitles.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const RotatingTitles = ({ titles }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const radius = 120;

  return (
    <div className="relative w-full max-w-md h-60 flex justify-center items-center">
      {titles.map((title, index) => {
        const total = titles.length;
        const angleStep = (360 / total) * Math.PI / 180;
        const relativeIndex = (index - titleIndex + total) % total;
        const angle = relativeIndex * angleStep;

        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const isActive = index === titleIndex;

        return (
          <motion.div
            key={index}
            onClick={() => setTitleIndex(index)}
            className="absolute cursor-pointer max-w-[220px] bg-gray-100 hover:bg-gray-200 px-6 py-4 rounded-[1.5rem] shadow-lg transition-all duration-500 before:absolute before:-bottom-2 before:left-6 before:w-0 before:h-0 before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-t-[10px] before:border-t-gray-100"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%) scale(${isActive ? 1.2 : 0.9})`,
              zIndex: isActive ? 10 : 1,
              opacity: isActive ? 1 : 0.5,
            }}
            animate={{ opacity: isActive ? 1 : 0.5 }}
          >
            <span
              className={`block text-lg ${
                isActive ? "text-blue-600 font-bold" : "text-gray-500"
              }`}
            >
              {title}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default RotatingTitles;