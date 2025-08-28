import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const RotatingTitles = ({ titles }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(120);

  // Adjust radius based on container size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const size = containerRef.current.offsetWidth;
        setRadius(Math.min(size / 2 - 50, 120)); // max 120, scaled down for small screens
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = titles.length;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md h-64 flex justify-center items-center mx-auto"
    >
      {titles.map((title, index) => {
        const relativeIndex = (index - titleIndex + total) % total;
        const angleStep = (360 / total) * (Math.PI / 180);
        const angle = relativeIndex * angleStep;

        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const isActive = index === titleIndex;

        return (
          <motion.div
            key={index}
            onClick={() => setTitleIndex(index)}
            //className="absolute cursor-pointer max-w-[220px] bg-gray-100 hover:bg-gray-200 px-6 py-4 rounded-[1.5rem] shadow-lg transition-all duration-500 before:absolute before:-bottom-2 before:left-6 before:w-0 before:h-0 before:border-l-[10px] before:border-l-transparent before:border-r-[10px] before:border-r-transparent before:border-t-[10px] before:border-t-gray-100"
            className="absolute cursor-pointer px-6 py-4 rounded-[1.5rem] shadow-lg select-none"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              //transform: `translate(-50%, -50%) scale(${isActive ? 1.2 : 0.9})`,
              transform: `translate(-50%, -50%)`,
              zIndex: isActive ? 10 : 1,
              background: isActive
                ? "linear-gradient(90deg, #ffffff, #ffffff )"
                : "#f3f4f6", // gray-100
            }}
            animate={{ 
              width: isActive ? "290px" : "210px", // Active bubble longer
              opacity: isActive ? 1 : 0.5 
            }}

            transition={{ duration: 0.3 }}
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