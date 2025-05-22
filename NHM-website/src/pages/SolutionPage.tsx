import React from 'react';
import Hero from '../components/General/Hero';
import Intro from '../components/Sections/Intro';
import Features from '../components/Sections/Features';
import StoryDescription from '../components/Sections/StoryDescription';
import AppInfo from '../components/Sections/AppInfo';
import Download from '../components/Sections/Download';
import hero from "../assets/hero2.png";

const SolutionPage: React.FC = () => {
    return (
    <>
    <Hero 
        imgSrc={hero}
        imgAlt="App Mockup"
        title={<><span>Expedition to </span><strong>Africa</strong></>}
        description="Look around and dive deeper into nature!"
        buttonText="Download App Now"       
    />
    <div className="page__content">
        <Intro />
        <Features />
        <StoryDescription />
        <AppInfo />
        <Download />
    </div>
    </>
    );
};

export default SolutionPage;