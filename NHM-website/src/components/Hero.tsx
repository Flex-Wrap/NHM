import React, { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  imgSrc: string;
  imgAlt?: string;
  title: ReactNode;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  buttonLink = "/",
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(buttonLink);
  };

  return (
    <div className="hero">
      <picture>
        <img className="hero__image" src={imgSrc} alt={imgAlt} />
      </picture>
      <div className="hero__text" style={{width: "40%", transform: "translateY(-50%)", left: "4%"}}>
        <h1 className="hero__title">{title}</h1>
        <p className="hero__description">{description}
          <button className="hero__button--inline inline-button icon-link-internal"></button>
        </p>
        <button className="hero__button--block button button--icon--right icon-link-internal button--icon" onClick={handleButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Hero;
