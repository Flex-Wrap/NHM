import React from "react";
import Hero from "../components/Hero";
import Exhibitions from "../components/Exhibitions";
import Events from "../components/Events";
import SoMe from "../components/SoMe";

const HomePage: React.FC = () => {
  return (
    <>
    <Hero />
    <div className="page__content">
      <Exhibitions />
      <Events />
      <SoMe />
    </div>
    </>
  );
};

export default HomePage;
