import React from "react";
import Combocard from "../common/Combocard";
  

const SpecialCombo = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <header className="bg-zinc-100 py-8 md:py-16 min-h-[600px] md:min-h-[800px] flex items-center justify-center">
          <div className="container mx-auto relative z-10 px-4">
            {/* Decorative Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="./images/Pizza.png"
                alt="Pizza Decor"
                className="absolute opacity-10 top-[5%] left-[5%] w-24 rotate-[10deg]"
              />
              <img
                src="./images/Pizza.png"
                alt="Pizza Decor"
                className="absolute opacity-20 top-[40%] w-40 -rotate-[20deg]"
              />
              <img
                src="./images/Pizza.png"
                alt="Pizza Decor"
                className="absolute opacity-20 bottom-[10%] left-[30%] w-40 rotate-[35deg]"
              />
              <img
                src="./images/Pizza.png"
                alt="Pizza Decor"
                className="absolute opacity-20 top-[60%] left-[60%] w-64 rotate-[-25deg]"
              />
              <img
                src="./images/Pizza.png"
                alt="Pizza Decor"
                className="absolute opacity-20 top-60 left-[100%] rotate-[50deg] w-40"
              />
              <img
                src="./images/Pizza.png"
                alt="Pizza Decor"
                className="absolute opacity-20 bottom-10 left-[300px] rotate-[50deg] w-40"
              />
              <img
                src="./images/Le1.png"
                alt="Leaf Decoration"
                className="absolute opacity-60 right-[100%] rotate-[10deg] w-60"
              />
              <img
                src="./images/Ellipse.png"
                alt="Ellipse Decor"
                className="absolute top-1/2 left-[400px] transform x-60 -translate-y-1/2 opacity-10"
              />
            </div>
            <div className="ml-30 mb-6">
              <h2 className="text-amber-300 font-bold text-3xl ">Special Combo</h2>
              <div>
                <h1 className="text-black font-bold text-3xl">Our Dlicious One Bite Pizza Shop</h1>
              </div>
            </div>

            {/* Combo Cards Section */}
            <div className="relative z-10 flex flex-wrap justify-center gap-40">
              <Combocard
                title={"S Pizza"}
                description={
                  "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
                }
                price={"150"}
                image={"./images/Pizza2.png"}
              />
              <Combocard
                title={"M Pizza"}
                description={
                  "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
                }
                price={"250"}
                image={"./images/Pizza2.png"}
              />
              <Combocard
                title={"L Pizza"}
                description={
                  "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
                }
                price={"350"}
                image={"./images/Pizza4.png"}
              />
            </div>
            
          </div>
        </header> 
      </div>
    </>
  );
};

export default SpecialCombo;
