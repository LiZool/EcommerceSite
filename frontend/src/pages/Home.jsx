import React, { useState, useEffect  } from "react";
import Toys from '../assets/images/toys.png';
import Books from '../assets/images/books.png';
import Clothes from '../assets/images/clothing.png';
import Gadgets from '../assets/images/gadget.png';
import Misc from '../assets/images/misc.png';
import ProductGrid from "../components/ProductGrid";
import AnimatedHeading from "../components/AnimatedHeading";
import RotatingTitles from "../components/RotatingTitle";
import ParallaxPhrases from "../components/ParallaxPhrases";
import ParallaxTitle from "../components/ParallaxTitle";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";

const phrases = ["Find a product that delights you", "Affordable Prices", "Quality Guaranteed", "24/7 Support"];
const titles = ["Overview", "What do we have?", "Rare"];

const fadeUp = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const fadeDown = {
  initial: { y: -50, opacity: 0 },     // start above
  whileInView: { y: 0, opacity: 1 },   // move to natural position
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/90" : "bg-transparent"
        /* isScrolled ? "bg-white/90 shadow-md" : "bg-transparent" */
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* BrandName stays in DOM, fades when scrolled */}
        <h1
          className={`text-2xl font-extrabold text-blue-600 tracking-wide transition-opacity duration-300 ${
            isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          BrandName
        </h1>

        {/* Right side: either links or menu */}
        <div className="flex items-center">
          {isScrolled ? (
  <div className="relative">
    <div
      className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white cursor-pointer hover:bg-blue-700 transition-all duration-300"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <FiMenu className="text-2xl m-auto" />
    </div>

    {/* Dropdown */}
    {isMenuOpen && (
      <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg py-4 z-40">
        <ul className="flex flex-col items-start gap-4 text-md font-medium px-6">
          {["Home", "About", "Products", "Features", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
) : (
  <ul className="flex gap-8 text-md font-medium">
    {["Home", "About", "Products", "Features", "Contact"].map(
      (item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className="relative hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </a>
        </li>
      )
    )}
  </ul>
)}
        </div>
      </nav>
    </header>
  );
};

const Home = () => {
  const [selected, setSelected] = useState(0);

  const products = [
    { id: 1, name: "Intro" },
    { id: 2, name: "Electronics", image: Gadgets },
    { id: 3, name: "Books", image: Books },
    { id: 4, name: "Toys", image: Toys },
    { id: 5, name: "Clothes", image: Clothes },
    { id: 6, name: "Miscellaneous", image: Misc },
  ];

  return (
    <div className="scroll-smooth font-sans">
      <Navbar />

      {/* Welcome Section */}
      <motion.section {...fadeDown} id="home" className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 px-6 py-20 md:py-30">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="mt-4 text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            <AnimatedHeading text="Welcome to Our Website" />
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Discover our services, explore why people trust us, and see what makes us stand out.
          </p>
        </div>
      </motion.section>

      {/* Rotating Titles Section */}
      <motion.section {...fadeDown} id="about" className="bg-gradient-to-br from-blue-700 to-blue-900 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <RotatingTitles titles={titles} value={selected} onChange={setSelected} />
          </div>
          <motion.div key={selected} {...fadeUp} className="w-full md:w-2/3 text-white text-lg flex justify-center md:justify-start">
            <div className="max-w-md md:max-w-lg text-center md:text-left space-y-4 py-3">
              {selected === 0 && <p> Our Ecommerce Website. We have lots to offer.</p>}
              {selected === 1 && <p> We have electronics, books, toys, clothes, and more — curated for you.</p>}
              {selected === 2 && <p>Hunting for unique pieces? Explore our rare and exclusive items.</p>}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section {...fadeUp} id="products" className="bg-white px-6 py-12">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Our Products</h2>
          <ProductGrid products={products} />
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section {...fadeUp} id="features" className="h-screen flex items-center justify-center bg-yellow-50">
        <div className="w-full max-w-xl mx-auto text-center py-10">
          <ParallaxPhrases phrases={phrases} />
        </div>
      </motion.section>

      {/* Parallax Title */}
      <motion.section {...fadeUp} id="contact">
        <div className="w-full max-w-xl mx-auto text-center py-10">
          <ParallaxTitle />
        </div>
      </motion.section>
    </div>
  );
};

export default Home;