// src/components/RotatingTitles.jsx

import React from "react";
import { motion } from "framer-motion";

const RotatingTitles = ({ titles = [], value = 0, onChange }) => {
  return (
    <div className="flex justify-center md:justify-end gap-4 overflow-x-auto scrollbar-hide py-2">
      {titles.map((title, index) => {
        const isActive = index === value;
        return (
          <motion.div
            key={index}
            onClick={() => onChange(index)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.1, boxShadow: "0 5px 15px rgba(0,0,0,0.15)" }}
            className={`flex-shrink-0 cursor-pointer px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 text-center whitespace-nowrap ${
              isActive
                ? "bg-white text-blue-600 font-bold shadow-lg"
                : "bg-gray-200 text-white hover:bg-white hover:text-blue-600"
            }`}
          >
            {title}
          </motion.div>
        );
      })}
    </div>
  );
};

export default RotatingTitles;