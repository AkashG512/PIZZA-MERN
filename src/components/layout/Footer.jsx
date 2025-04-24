import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12">
          {/* Logo and Description */}
          <div className="mb-6 sm:mb-0">
            <div className="flex items-center mb-3 sm:mb-4">
              <h1 className="text-xl sm:text-2xl font-bold text-yellow-400">Tasty Pizza</h1>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400 text-sm sm:text-base">About us</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-yellow-400 text-sm sm:text-base">Menu</a></li>
              <li><a href="#testimonial" className="text-gray-400 hover:text-yellow-400 text-sm sm:text-base">Testimonial</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-yellow-400 text-sm sm:text-base">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 text-sm sm:text-base">Contact us</a></li>
            </ul>
          </div>

          {/* Our Menu */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Our Menu</h3>
            <ul className="space-y-2">
              <li><a href="#burger" className="text-gray-400 hover:text-yellow-400 text-sm sm:text-base">Burger</a></li>
              <li><a href="#dessert" className="text-gray-400 hover:text-yellow-400 text-sm sm:text-base">Dessert</a></li>
              <li><a href="#pizza" className="text-gray-400 hover:text-yellow-400 text-sm sm:text-base">Pizza</a></li>
              <li><a href="#pasta" className="text-gray-400 hover:text-yellow-400 text-sm sm:text-base">Pasta</a></li>
              <li><a href="#drinks" className="text-gray-400 hover:text-yellow-400 text-sm sm:text-base">Cold Drinks</a></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Get in Touch</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-yellow-400 mr-2 text-sm sm:text-base" />
                <p className="text-gray-400 text-sm sm:text-base">JT Road, Gadag 562101</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-yellow-400 mr-2 text-sm sm:text-base" />
                <p className="text-gray-400 text-sm sm:text-base">+91 6362340668</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-yellow-400 mr-2 text-sm sm:text-base" />
                <p className="text-gray-400 text-sm sm:text-base">onebite@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Book a Table Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Book A Table</h3>
              <p className="text-yellow-400 text-sm sm:text-base">+91 6362340668</p>
            </div>
            <div className="sm:text-right">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Opening Hours</h3>
              <p className="text-gray-400 text-sm sm:text-base">08.00 Am - 09.00 Pm</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;