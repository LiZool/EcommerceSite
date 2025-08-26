import React from "react";
import { motion } from "framer-motion";

const AnimatedHeading = ({ text, className }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20, scale: 1.2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };

  return (
<motion.h2
  className={`${className || "text-5xl font-extrabold text-blue-700 drop-shadow-md"}`}
  variants={container}
  initial="hidden"
  animate="visible"
>
  {letters.map((char, index) => (
    <motion.span key={index} variants={letter} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</motion.h2>
  );
};

export default AnimatedHeading;