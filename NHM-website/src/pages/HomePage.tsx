import React from "react";
import Hero from "../components/General/Hero";
import Exhibitions from "../components/Sections/Exhibitions";
import Events from "../components/Sections/Events";
import hero from "../assets/hero1.png";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero
        imgSrc={hero}
        imgAlt="Safari Picture"
        title={<><span>Expedition to </span><strong>Africa</strong></>}
        description="Be part of the story!"
        buttonText="Visit Now"
        buttonLink="/solution"
      />
      <div className="page__content">
        <Exhibitions />
        <Events />
      </div>
    </>
  );
};

export default HomePage;
