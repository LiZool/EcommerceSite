// src/pages/Home.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GundamHead from '../assets/images/gundamhead.png';
import Books from '../assets/images/books.png';
import ProductGrid from "../components/ProductGrid";
import AnimatedHeading from "../components/AnimatedHeading";
import RotatingTitles from "../components/RotatingTitle";

const phrases = ["Fast Delivery", "Affordable Prices", "Quality Guaranteed", "24/7 Support"];
const titles = ["Overview", "Who is it for", "Why join us?"];

const Home = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  const products = [
    { id: 1, name: "Booklight", price: "$19.99", image: GundamHead },
    { id: 2, name: "Bookmark", price: "$5.99", image: Books },
    { id: 3, name: "Tech Gadget", price: "$29.99", image: GundamHead },
    { id: 4, name: "Stationery Set", price: "$12.99", image: GundamHead },
    { id: 5, name: "Gundam Set", price: "$12.99", image: GundamHead },
    { id: 6, name: "Set", price: "$12.99", image: GundamHead },
    { id: 7, name: "Set", price: "$12.99", image: GundamHead },
  ];

  const handleNext = () => setPhraseIndex((prev) => (prev + 1) % phrases.length);
  const handlePrev = () => setPhraseIndex((prev) => (prev - 1 + phrases.length) % phrases.length);

  return (
    <div className="scroll-smooth font-sans">
      {/* Navbar */}
      <header className="fixed w-full bg-white shadow-md z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">BrandName</h1>
          <ul className="flex gap-8 text-md font-medium">
            {["Home", "About", "Features", "Products", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors duration-200">
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
        <div className="text-center max-w-xl">
          <div className="mt-4">
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
        className="flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900"
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