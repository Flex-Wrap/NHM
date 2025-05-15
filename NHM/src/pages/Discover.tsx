import React from 'react';
import { StoryPlayCard } from '../components/StoryPlayCard';
import './Discover.css'; // Add this import for styles

const Discover: React.FC = () => {
    return (
        <>
            <div className="story-scroll-container">
                <StoryPlayCard
                    imageUrl="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <StoryPlayCard
                    imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop"
                />
            </div>
        </>
    );
};

export default Discover;