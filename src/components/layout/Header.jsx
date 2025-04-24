import React from "react";
import Circle from "../common/Circle";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <header className="bg-zinc-950 text-white py-6 md:py-16 min-h-[400px] md:min-h-[600px] flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
              <div className="w-full md:w-1/2 relative z-10 text-center md:text-left">
                <div className="absolute inset-0 z-0 pointer-events-none select-none w-full hidden md:block">
                  <img
                    src="./images/Pizza.png"
                    alt="Pizza Decor"
                    className="absolute opacity-10 top-[5%] left-[5%] w-24 rotate-[10deg]"
                  />
                  <img
                    src="./images/Pizza.png"
                    alt="Pizza Decor"
                    className="absolute opacity-15 top-[40%] w-40 -rotate-[20deg]"
                  />
                  <img
                    src="./images/Pizza.png"
                    alt="Pizza Decor"
                    className="absolute opacity-10 bottom-[10%] left-[30%] w-40 rotate-[35deg]"
                  />
                  <img
                    src="./images/Pizza.png"
                    alt="Pizza Decor"
                    className="absolute opacity-10 top-[60%] left-[60%] w-65 rotate-[-25deg]"
                  />
                  <img
                    src="./images/Pizza.png"
                    alt="Pizza Decor"
                    className="absolute opacity-10 top-[20%] left-[70%] rotate-[50deg] w-40"
                  />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
                  Hot Pizza King
                  <span className="block text-yellow-500 mt-2">
                    Delivery Service
                  </span>
                </h1>
                <p className="text-gray-300 mb-6 md:mb-8 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
                  We deliver hot and fresh pizzas to every door! Get your favorite
                  pizza delivered right to your home in 30 minutes or less!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-6 md:mb-8 items-center justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <FaMapMarkerAlt className="text-yellow-500 text-lg" />
                    <span>123 Pizza Street</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <FaPhoneAlt className="text-yellow-500 text-lg" />
                    <span>+1 234 567 8900</span>
                  </div>
                </div>
                <button className="bg-yellow-500 text-black px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-yellow-600 transition-colors font-medium text-sm sm:text-base">
                  Order Now
                </button>
              </div>

              {/* Image section - hidden on mobile, visible on md and up */}
              <div className="hidden md:flex relative w-full md:w-1/2 justify-center md:justify-end">
                <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                  <Circle />
                  <img
                    src="./images/image1.png"
                    alt="Pizza Delivery"
                    className="absolute w-full h-full object-cover rounded-full scale-x-[-1]"
                  />
                </div>

                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src="./images/Pizza.png"
                    alt="Pizza Background"
                    className="absolute opacity-10 top-[10%] left-[10%] rotate-[25deg] w-32"
                  />
                  <img
                    src="./images/Pizza.png"
                    alt="Pizza Background"
                    className="absolute opacity-10 top-[60%] right-[25%] -rotate-[15deg] w-40"
                  />
                  <img
                    src="./images/Le1.png"
                    alt="Leaf Decoration"
                    className="absolute opacity-10 bottom-[15%] left-[10%] rotate-[10deg] w-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
