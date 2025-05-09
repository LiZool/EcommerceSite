// src/pages/Home.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "Fast Delivery",
  "Affordable Prices",
  "Quality Guaranteed",
  "24/7 Support"
];

const titles = ["Overview", "Who is it for", "Why join?"];

const Home = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  const handleNext = () => setPhraseIndex((prev) => (prev + 1) % phrases.length);
  const handlePrev = () => setPhraseIndex((prev) => (prev - 1 + phrases.length) % phrases.length);

  return (
    <div className="scroll-smooth font-sans">
      {/* Navbar */}
      <header className="fixed w-full bg-white shadow-md z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">BrandName</h1>
          <ul className="flex gap-8 text-md font-medium">
            {['Home', 'About', 'Features', 'Products', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
        <h2 className="text-5xl font-extrabold text-center text-blue-700 drop-shadow-md">Welcome to Our Website</h2>
      </section>

      {/* About Section with Rotating Titles */}
      <section id="about" className="h-screen flex items-center justify-center bg-white">
        <div className="relative w-full max-w-3xl h-60 flex justify-center items-center">
          {titles.map((title, index) => {
            const total = titles.length;
            const angleStep = (360 / total) * Math.PI / 180; // Convert to radians
            const radius = 120;

            // Calculate relative index based on titleIndex
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
                  <span className={`block text-lg ${isActive ? 'text-blue-600 font-bold' : 'text-gray-500'}`}>
                    {title}
                  </span>
                </motion.div>
            );
          })}
        </div>
      </section>

      {/* Features Section with Animated Phrases */}
      <section id="features" className="h-screen flex items-center justify-center bg-yellow-50">
        <div className="w-full max-w-xl mx-auto text-center py-10">
          <div className="h-24 flex items-center justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={phrases[phraseIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold text-yellow-700"
              >
                {phrases[phraseIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <button onClick={handlePrev} className="px-5 py-2 bg-yellow-200 rounded hover:bg-yellow-300 transition-colors">Prev</button>
            <button onClick={handleNext} className="px-5 py-2 bg-yellow-200 rounded hover:bg-yellow-300 transition-colors">Next</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
        <h2 className="text-4xl font-bold text-purple-700">Let's Get in Touch</h2>
      </section>
    </div>
  );
};

export default Home;