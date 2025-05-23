import React from "react";
import Hero from "../components/General/Hero";
import Exhibitions from "../components/Sections/Exhibitions";
import Events from "../components/Sections/Events";
import hero from "../assets/hero1.png";
import SocialMedia from "../components/Sections/SocialMedia";
import Prices from "../components/Sections/Prices";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero
        imgSrc={hero}
        imgAlt="Safari Picture"
        title={
          <>
            <span>Expedition to </span>
            <strong>Africa</strong>
          </>
        }
        description="Be part of the story!"
        buttonText="Visit Now"
        buttonLink="/solution"
      />
      <div className="container main-content">
        <div className="page__content">
          <Exhibitions />
          <Events/>
          <SocialMedia />
          <Prices />
        </div>
      </div>
    </>
  );
};

export default HomePage;
