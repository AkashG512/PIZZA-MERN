import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Combocard = ({ title, description, price, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="max-w-[280px] md:max-w-xs p-6 md:p-10 border-2 border-dashed border-stone-500 rounded-xl text-center shadow-md bg-white hover:bg-yellow-300 transition duration-300 ease-in-out"
    >
      {/* ---------- Title Section ---------- */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>

      {/* ---------- Description ---------- */}
      <p className="text-sm md:text-base text-gray-900 mb-4">{description}</p>

      {/* ---------- Price ---------- */}
      <p className="text-xl md:text-2xl font-semibold mb-4">Rs. {price}</p>

      {/* ---------- Order Button ---------- */}
      <button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 md:px-6 rounded-full mb-4 flex items-center justify-center mx-auto">
        <IoBagHandleOutline className="w-6 h-6 mr-2" />
        ORDER NOW
      </button>

      {/* ---------- Product Image ---------- */}
      <img src={image} alt={title} className="w-full h-auto rounded-lg mt-2" />
    </motion.div>
  );
};

export default Combocard;
