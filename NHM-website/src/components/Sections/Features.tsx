import headphones from "../assets/headphones.svg";
import camera from "../assets/camera.svg";
import film from "../assets/film.svg";
import feather from "../assets/feather.svg";
import type React from "react";
import FeatureCard from "../Cards/FeatureCard";

const Features: React.FC = () => {
  const features = [
    {
      imgSrc: headphones,
      header: "Audio Guides",
      text: "Listen at your own pace, skip, rewind, explore.",
      imgAlt: "Headphones icon",
    },
    {
      imgSrc: camera,
      header: "Step Into the Scene",
      text: "Activate AR to see animals in front of you — walk inside the 1941 expedition.",
      imgAlt: "Camera icon",
    },
    {
      imgSrc: film,
      header: "Extra content",
      text: "See rare photos, videos, or behind-the-scenes stories.",
      imgAlt: "Film icon",
    },
    {
      imgSrc: feather,
      header: "Influence the story",
      text: "Face moral dilemmas as the expedition unfolds — your decisions reveal more.",
      imgAlt: "Feather icon",
    },
  ];

  return (
    <>
      <div className="page__content__block">
        <h2 className="header__content__title" style={{marginBottom: "45px"}}>
          Not Just a Story — A Digital Expedition
        </h2>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "45px 27px"
        }}>
          {features.map((feature, idx) => {
            const variantClass = idx % 2 === 0 ? "feature-card--even" : "feature-card--odd";
            return (
              <FeatureCard
                imgSrc={feature.imgSrc}
                header={feature.header}
                text={feature.text}
                imgAlt={feature.imgAlt}
                key={idx}
                className={variantClass}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Features;
