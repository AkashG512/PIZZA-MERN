import React from "react";

const Connect = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-zinc-950 min-h-[200px] md:min-h-[250px] lg:min-h-[300px] flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-10 flex flex-col md:flex-row items-center">
          <img 
            src="./images/man.png" 
            alt="man" 
            className="w-[200px] md:w-[250px] lg:w-auto hidden md:block" 
          />
          <div className="w-full md:ml-10 lg:ml-30 mb-6 relative px-4 md:px-0">
            <div className="relative z-10">
              <h2 className="text-amber-300 font-bold text-4xl md:text-5xl lg:text-8xl text-center md:text-left relative mt-8 md:mt-20 lg:mt-50">
                Let's Connect
              </h2>
              <h4 className="text-white font-bold text-lg md:text-xl lg:text-3xl text-center md:text-left relative mt-4 px-2 md:px-0">
                Signup for our newsletter to get the latest updates on our pizza
              </h4>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-80 md:w-96 lg:w-100 py-2 px-4 border bg-amber-50 border-gray-300 rounded-3xl mt-6 md:mt-8 lg:mt-10 focus:outline-none focus:border-blue-500"
                />
                <button className="w-full sm:w-auto bg-red-500 text-white px-6 py-2 rounded-full mt-2 sm:mt-6 md:mt-8 lg:mt-10 hover:bg-red-600 transition-colors font-medium sm:ml-4">
                  Subscribe 
                </button>
              </div>
            </div>
            <div className="absolute inset-0 z-0">
              <img
                src="./images/Pizza.png"
                alt="pizza"
                className="hidden md:block ml-40 lg:ml-70 mt-20 lg:mt-40 w-300 lg:w-400 h-80 lg:h-100 opacity-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;