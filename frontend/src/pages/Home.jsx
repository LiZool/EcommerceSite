// src/pages/Home.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Toys from '../assets/images/toys.png';
import Books from '../assets/images/books.png';
import Clothes from '../assets/images/clothing.png';
import Gadgets from '../assets/images/gadget.png';
import Misc from '../assets/images/misc.png';
import ProductGrid from "../components/ProductGrid";
import AnimatedHeading from "../components/AnimatedHeading";
import RotatingTitles from "../components/RotatingTitle";

const phrases = ["Fast Delivery", "Affordable Prices", "Quality Guaranteed", "24/7 Support"];
const titles = ["Overview", "What do we have?", "Rare"];

const Home = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  const products = [
    { id: 1, name: "Intro" },
    { id: 2, name: "Electronics", image: Gadgets },
    { id: 3, name: "Books", image: Books },
    { id: 4, name: "Toys", image: Toys },
    { id: 5, name: "Clothes", image: Clothes },
    { id: 6, name: "Miscellaneous", image: Misc },
  ];

  const handleNext = () => setPhraseIndex((prev) => (prev + 1) % phrases.length);
  const handlePrev = () => setPhraseIndex((prev) => (prev - 1 + phrases.length) % phrases.length);

  return (
    <div className="scroll-smooth font-sans">
      {/* Navbar */}
      <header className="fixed w-full bg-white/80 backdrop-blur-lg shadow-sm z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">BrandName</h1>
          <ul className="flex gap-8 text-md font-medium">
            {["Home", "About", "Features", "Products", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="relative hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Welcome Section */}
      <section
        id="welcome"
        className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 px-6 py-20 md:py-30"
      >
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="mt-4 text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            <AnimatedHeading text="Welcome to Our Website" />
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Discover our services, explore why people trust us, and see what makes us stand out.
          </p>
        </div>
      </section>

      {/* Rotating Titles Section */}
      <section
        id="titles"
        className="flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 py-10"
        style={{ minHeight: "300px", position: "relative" }} // Ensure section is relative for absolute children
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <RotatingTitles titles={titles} />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-white px-6 py-12">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Our Products</h2>
          <ProductGrid products={products} />
        </div>
      </section>

      {/* Features Section */}
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