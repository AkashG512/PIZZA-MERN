import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Restaurant", path: "/restaurant" },
    { name: "Offers", path: "/offers" },
    { name: "Foods", path: "/foods" },
    { name: "Services", path: "/services" },
  ];

  return (
    <nav className="sticky top-0 bg-neutral-950/98 backdrop-blur-none shadow-lg w-full z-20 h-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Hamburger Menu Button - Only visible on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-yellow-400 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://www.onebite.co.in/img/logo_white.png"
              alt="Pizza Logo"
              className="h-8 md:h-10"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8 items-center">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium ${
                      isActive ? "text-yellow-400 font-bold" : "text-white hover:text-yellow-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center px-3">
              <NavLink to="/cart" className="text-white hover:text-yellow-400">
                <FaShoppingBag className="text-xl" />
              </NavLink>
            </div>
            <div className="flex-shrink-0">
              <NavLink
                to="/login"
                className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-700 transition-colors duration-200 text-sm font-medium"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slides down when hamburger is clicked */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {/* Mobile Menu - Now with animations */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col space-y-2 py-4">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          `px-3 py-2 text-sm font-medium ${
                            isActive ? "text-yellow-400 font-bold" : "text-white hover:text-yellow-400"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
