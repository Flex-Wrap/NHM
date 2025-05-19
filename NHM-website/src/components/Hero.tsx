import React from "react";
import heroImg from "../assets/hero1.png";

const Hero: React.FC = () => {
  return (
    <div className="hero">
    <picture>
      <img
        className="hero__image"
        src={heroImg}
        alt="Hero image"
      />
    </picture>
      <div className="hero__overlay"></div>
      <div className="hero__text">
        <h1 className="hero__title"> Expedition to <strong>Africa</strong></h1>
        <p className="hero__description">
          Be part of the story
          <button className="hero__button--inline inline-button icon-link-internal"></button>
        </p>
        <button className="hero__button--block button button--icon--right icon-link-internal button--icon">
          Visit Now
        </button>
      </div>
    </div>
  );
};

export default Hero;


