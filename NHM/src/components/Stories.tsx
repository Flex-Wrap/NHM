// components/StoryCarousel.tsx
import React from 'react';
import { StoryPlayCard } from './StoryPlayCard';
import { getStories } from '../firebaseStub';

interface StoriesProps {
  className?: string;
}

export const Stories: React.FC<StoriesProps> = ({ className }) => {
  const stories = getStories();

  return (
    <div className={`${className ?? ''}`}>
      {stories.map((story, idx) => (
        <StoryPlayCard key={idx} title={story.title} imageUrl={story.imageUrl} />
      ))}
    </div>
  );
};

