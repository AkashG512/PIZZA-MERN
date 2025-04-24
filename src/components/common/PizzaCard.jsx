import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";

const PizzaCard = ({ image, price, title, description }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className="text-yellow-400"
          size={16}
        />
      );
    }
    return stars;
  };

  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover"
      />

      <div className="p-6">
        <div className="flex justify-between items-center text-sm font-semibold mb-3">
          <span className="text-orange-500">Rs. {price}</span>
          <div className="flex gap-1">
            {renderStars()}
          </div>
        </div>

        <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>

        <div className="flex justify-end">
          <div className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer transition duration-300">
            <FaArrowRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
