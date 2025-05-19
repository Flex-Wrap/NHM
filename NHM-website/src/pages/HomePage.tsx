import React from "react";
import Hero from "../components/Hero";
import Exhibitions from "../components/Exhibitions";

const HomePage: React.FC = () => {
  return (
    <>
    <Hero />
    <div className="page__content">
      <Exhibitions />
    </div>
    </>
  );
};

export default HomePage;
