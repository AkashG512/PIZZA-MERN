import React from "react";

import HeroSection from "../components/sections/HeroSection";
import SpecialCombo from "../components/sections/SpecialCombo";
import PizzaMenu from "../components/sections/PizzaMenu";

import Navbar from "../components/layout/NavBar";
import Connect from "../components/sections/Connect";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SpecialCombo />
      <Connect />
      <PizzaMenu />
      <Footer />
    </div>
  );
};

export default Home;
