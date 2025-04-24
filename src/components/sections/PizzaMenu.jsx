import React from "react";
import PizzaCard from "../common/PizzaCard";
import Testimonial from "./Testimonial";

const PizzaMenu = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-zinc-100 min-h-[800px] md:min-h-[1000px] lg:min-h-[1400px] flex items-start mt-18">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 flex relative flex-col">
          <div>
            {/* Half-circle wrapper */}
            <div className="absolute left-0 top-1/2 -translate-y-1/1 overflow-hidden pointer-events-none -translate-x-1/4 hidden md:block">
              <img
                src="/images/Ellipse.png"
                alt="ellipse"
                className="w-[1000px] md:w-[1500px] lg:w-[2000px] opacity-10"
              />
            </div>
            <div className="absolute bottom-0 right-0 pointer-events-none hidden md:block">
              <img
                src="/images/Ellipse.png"
                alt="ellipse-bottom-right"
                className="w-[300px] md:w-[450px] lg:w-[600px] opacity-10 translate-x-1/7 translate-y-1/1"
              />
            </div>
          </div>
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Pizza decorative images with responsive sizes */}
            <img
              src="./images/Pizza.png"
              alt="Pizza Decor"
              className="absolute opacity-10 top-[5%] left-[5%] w-16 md:w-20 lg:w-24 rotate-[10deg]"
            />
            <img
              src="./images/Pizza.png"
              alt="Pizza Decor"
              className="absolute opacity-20 top-[40%] w-24 md:w-32 lg:w-40 -rotate-[20deg]"
            />
            <img
              src="./images/Pizza.png"
              alt="Pizza Decor"
              className="absolute opacity-20 bottom-[10%] left-[30%] w-24 md:w-32 lg:w-40 rotate-[35deg]"
            />
            <img
              src="./images/Pizza.png"
              alt="Pizza Decor"
              className="absolute opacity-20 top-[60%] left-[60%] w-32 md:w-48 lg:w-64 rotate-[-25deg]"
            />
            <img
              src="./images/Pizza.png"
              alt="Pizza Decor"
              className="absolute opacity-20 top-60 left-[100%] rotate-[50deg] w-24 md:w-32 lg:w-40"
            />
            <img
              src="./images/Pizza.png"
              alt="Pizza Decor"
              className="absolute opacity-50 bottom-10 left-[300px] rotate-[50deg] w-24 md:w-32 lg:w-40 pt-300"
            />
            <img
              src="./images/Pizza.png"
              alt="Pizza Decor"
              className="absolute opacity-30 top-50 left-[300px] rotate-[90deg] w-24 md:w-32 lg:w-40"
            />
          </div>

          <div className="text-center mb-20 mt-4  relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-yellow-400">
              PIZZA MENU
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-6xl mb-6">
              THIS IS ALL ABOUT PIZZA
            </h1>
            <hr className="w-48 md:w-100 mx-auto border-t-2 border-gray-400" />
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-35 lg:mb-20 m-auto">
            <PizzaCard
              image="/images/P1.png"
              price="200"
              title="Small Pizza"
              date="April 20, 2025"
              description="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Ipsum has been the industry's standard"
            />
            <PizzaCard
              image="/images/p2.png"
              price="400"
              title="Medium Pizza"
              date="April 18, 2025"
              description="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Ipsum has been the industry's standard"
            />
            <PizzaCard
              image="/images/p3.png"
              price="600"
              title="Large Pizza"
              date="April 45, 2025"
              description="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Ipsum has been the industry's standard"
            />
          </div>
          
          {/* Added responsive padding and margin for Testimonial */}
          <div className="py-8 md:py-16 px-4 md:px-0">
            <Testimonial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaMenu;
