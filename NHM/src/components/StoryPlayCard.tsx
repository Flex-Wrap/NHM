import React from 'react';
import './StoryPlayCard.css';
import IconPlay from "../assets/icon-play.svg?react";

type StoryPlayCardProps = {
  imageUrl: string;
  title?: string;
  buttonLabel?: string;
};

export const StoryPlayCard: React.FC<StoryPlayCardProps> = ({
  imageUrl,
  title = 'Exhibition Name',
  buttonLabel = 'start journey',
}) => {
  return (
    <>
    <div className="card-cutout" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="fake-corners"/>
      <h1>{title}</h1>
      <div className="text-container">
        <div className="backdrop-filter-container">
          <h3>{buttonLabel}</h3>
        </div>
      </div>
      <button className="play-button">
        <IconPlay className="play-icon" />
      </button>
    </div>
    </>
  );
};
