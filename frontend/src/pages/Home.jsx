import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import "../assets/css/home.css"; // We'll write some custom CSS

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Products", "Features", "Contact"];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        <h1 className={`brand ${isScrolled ? "hide" : ""}`}>BrandName</h1>

        <div className="nav-right">
          {isScrolled ? (
            <div className="circle-menu-container">
              <button
                className="circle-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FiMenu className="menu-icon" />
              </button>

              <div className={`dropdown ${isMenuOpen ? "open" : ""}`}>
                <ul>
                  {navItems.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;