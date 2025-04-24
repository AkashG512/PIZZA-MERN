import React from "react";
import Circle from "../common/Circle";

const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] flex items-center justify-center">
          <div className="w-full h-full rounded-full border-[30px] sm:border-[40px] md:border-[60px] border-yellow-400"></div>
          <img
            src="./images/girl.png"
            alt="Pizza Delivery"
            className="absolute w-[100%] h-[100%] object-cover rounded-full"
          />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left px-4 md:px-0">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-8xl font-bold text-yellow-400 mb-2">
            PIZZA MENUE
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-5xl font-bold text-black mb-4 md:mb-6">
            CUSTOMER REVIWES
          </h3>
        </div>

        <div className="relative max-w-lg">
          <div className="text-5xl md:text-6xl text-gray-800 absolute -top-6 md:-top-5 left-4 md:left-0">"</div>
          <p className="text-lg sm:text-lg text-gray-600 leading-relaxed pl-8 md:pl-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised
          </p>
        </div>

        <div className="mt-6 md:mt-8">
          <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">Jay Lorg</h4>
          <p className="text-sm sm:text-base text-gray-500">Founder of Ceo</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
